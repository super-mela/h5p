import React, {useEffect, useReducer, useCallback} from 'react';
import {getBox} from 'css-box-model';
import {useDiscussionContext} from 'context/DiscussionContext';
import Summary from '../Summary/Summary';
import {DragDropContext} from 'react-beautiful-dnd';
import Category from '../Categories/Category';
import {isMobile} from 'react-device-detect';
import Element from '../DragAndDrop/Element';
import Argument from '../Argument/Argument';
import Column from '../DragAndDrop/Column';
import {CategoryDataObject, ArgumentDataObject, getDnDId} from '../utils.js';
import {ActionMenuDataObject, isEven} from '../utils';
import Dropzone from '../DragAndDrop/Dropzone';
import classnames from 'classnames';

function Surface() {
  const context = useDiscussionContext();

  const {
    collectExportValues,
    registerReset,
    translate,
    behaviour: {
      allowAddingOfArguments = true,
      provideSummary = true,
    }
  } = context;

  function init() {
    const {
      translate,
      params: {
        argumentsList: argumentDataList = [],
      },
      behaviour: {
        randomizeArguments = true,
      }
    } = context;

    if (randomizeArguments === true) {
      argumentDataList.sort(() => 0.5 - Math.random());
    }

    const argumentsList = argumentDataList.map((argument, index) => (new ArgumentDataObject({
      id: index,
      argumentText: argument,
    })));

    const categories = [];
    if (argumentsList.length > 0) {
      categories.push(new CategoryDataObject({
        id: 'unprocessed',
        isArgumentDefaultList: true,
        connectedArguments: argumentsList.filter((argument) => argument.id % 2 === 0).map((argument) => argument.id)
      }));
      categories.push(new CategoryDataObject({
        id: 'unprocessed-2',
        isArgumentDefaultList: true,
        connectedArguments: argumentsList.filter((argument) => argument.id % 2 === 1).map((argument) => argument.id)
      }));
    }
    categories.push(new CategoryDataObject({
      id: 'pro',
      theme: 'h5p-discussion-pro',
      useNoArgumentsPlaceholder: true,
      title: translate('argumentsFor'),
    }));
    categories.push(new CategoryDataObject({
      id: 'contra',
      theme: 'h5p-discussion-against',
      useNoArgumentsPlaceholder: true,
      title: translate('argumentsAgainst'),
    }));

    return {
      categories,
      argumentsList,
      idCounter: argumentsList.length - 1,
      hasRemainingUnprocessedArguments: argumentsList.length > 0,
      actionDropActive: false,
    };
  }

  function stateHeadQuarter(state, action) {
    switch (action.type) {
      case 'move': {
        const {
          from,
          to
        } = action.payload;
        const newCategories = JSON.parse(JSON.stringify(state.categories));
        const movedArgument = newCategories[newCategories.findIndex((category) => getDnDId(category) === from.droppableId)].connectedArguments.splice(from.index, 1);
        newCategories.map((category) => {
          category.actionTargetContainer = false;
          if (getDnDId(category) === to.droppableId) {
            category.connectedArguments.splice(to.index, 0, movedArgument[0]);
          }
        });
        return {
          ...state,
          categories: newCategories,
          hasRemainingUnprocessedArguments: newCategories.filter((category) => category.isArgumentDefaultList && category.connectedArguments.length > 0).length > 0,
          actionDropActive: false,
        };
      }
      case 'setEditMode': {
        const {
          id,
          editMode,
        } = action.payload;
        const newArguments = state.argumentsList.map((argument) => {
          if (argument.id === id) {
            return {
              ...argument,
              editMode: editMode,
            };
          }
          return argument;
        });

        return {
          ...state,
          argumentsList: newArguments
        };
      }
      case 'editArgument': {
        const {
          id,
          argumentText,
        } = action.payload;
        const newArguments = JSON.parse(JSON.stringify(state.argumentsList));
        const argumentIndex = newArguments.findIndex((argument) => argument.id === id);
        if (argumentIndex !== -1) {
          const argument = newArguments[argumentIndex];
          argument.argumentText = argumentText;
        }
        return {
          ...state,
          argumentsList: newArguments
        };
      }
      case 'deleteArgument': {
        const {
          id
        } = action.payload;
        const categories = JSON.parse(JSON.stringify(state.categories))
          .map((category) => {
            category.connectedArguments = category.connectedArguments.filter((connectedArgument) => connectedArgument !== id);
            return category;
          });
        const argumentsList = state.argumentsList.filter((argument) => argument.id !== id);

        return {
          ...state,
          categories,
          argumentsList,
        };
      }
      case 'addArgument': {
        const {
          id
        } = action.payload;

        const argumentsList = Array.from(state.argumentsList);
        const argumentId = state.idCounter + 1;
        argumentsList.push(new ArgumentDataObject({
          id: argumentId,
          added: true,
          editMode: true,
        }));

        const categories = JSON.parse(JSON.stringify(state.categories));
        const targetIndex = categories.findIndex((category) => category.id === id);
        if (targetIndex === -1) {
          return {
            ...state
          };
        }
        categories[targetIndex].connectedArguments.push(argumentId);
        return {
          ...state,
          argumentsList,
          categories,
          idCounter: argumentId,
        };
      }
      case 'reset': {
        return init();
      }
      case 'setTargetContainer': {
        const newCategories = JSON.parse(JSON.stringify(state.categories));
        return {
          ...state,
          categories: newCategories.map((category) => {
            category.actionTargetContainer = category.id === action.payload.container;
            return category;
          }),
          actionDropActive: true,
        };
      }
      default:
        return state;
    }
  }

  const memoizedReducer = useCallback(stateHeadQuarter, []);
  const [state, dispatch] = useReducer(memoizedReducer, init());

  let api;
  const autoDragSensor = (value) => {
    api = value;
  };

  useEffect(() => {
    context.trigger('resize');
  }, [state.argumentsList, state.categories]);

  registerReset(() => dispatch({type: 'reset'}));
  collectExportValues('userInput', () => ({categories: state.categories, argumentsList: state.argumentsList}));

  function onDropEnd(dragResult) {
    let {
      destination,
      source,
    } = dragResult;

    if (!destination) {
      return;
    }

    if (Array.isArray(destination.droppableId.match(/(.)+-dzone$/))) {
      destination.droppableId = destination.droppableId.replace('-dzone', '');
      destination.index = state.categories[state.categories.findIndex((category) => getDnDId(category) === destination.droppableId)].connectedArguments.length;
    }

    dispatch({
      type: 'move', payload: {
        from: source,
        to: destination
      }
    });
  }

  function scroll(position) {
    const frame = window.frameElement ? parent : window;
    frame.scrollTo({
      top: position.y,
      behavior: 'smooth',
    });
  }

  function moveStepByStep(drag, values) {
    requestAnimationFrame(() => {
      const newPosition = values.shift();
      drag.move(newPosition);

      if (values.length) {
        moveStepByStep(drag, values);
      }
      else {
        if ( isMobile ) {
          scroll(newPosition);
        }
        drag.drop();
      }
    });
  }

  const startMoving = function start(draggableElement, target) {
    const preDrag = api.tryGetLock(draggableElement);
    if (!preDrag) {
      return;
    }
    dispatch({type: 'setTargetContainer', payload: {container: target}});
    const targetContainer = getBox(document.getElementById(target));
    const dragElement = getBox(document.getElementById(draggableElement));
    const start = dragElement.borderBox.center;
    const end = {
      x: targetContainer.borderBox.center.x,
      y: targetContainer.borderBox.bottom - (Math.min(15, targetContainer.borderBox.height / 4))
    };
    const drag = preDrag.fluidLift(start);

    const points = [];
    const numberOfPoints = 60;

    // Used from tween-functions that's not maintained anymore
    const easeOutQuad = (t, b, _c, d) => -(_c - b) * (t /= d) * (t - 2) + b;

    for (let i = 0; i < numberOfPoints; i++) {
      points.push({
        x: easeOutQuad(i, start.x, end.x, numberOfPoints),
        y: easeOutQuad(i, start.y, end.y, numberOfPoints)
      });
    }

    moveStepByStep(drag, points);
  };

  function getDynamicActions(argument) {
    const dynamicActions = state.categories
      .filter((category) => category.isArgumentDefaultList !== true)
      .map((category) => new ActionMenuDataObject({
        id: category.id,
        title: category.title,
        type: 'category',
        activeCategory: category.connectedArguments.findIndex((argumentId) => argumentId === argument.id) !== -1,
        onSelect: () => startMoving(getDnDId(argument), category.id)
      }));
    if ( allowAddingOfArguments === true ) {
      dynamicActions.push(new ActionMenuDataObject({
        type: 'edit',
        title: translate('editArgument'),
        onSelect: () => dispatch({
          type: 'setEditMode',
          payload: {id: argument.id, editMode: true}
        })
      }));
      dynamicActions.push(new ActionMenuDataObject({
        type: 'delete',
        title: translate('deleteArgument'),
        onSelect: () => dispatch({
          type: 'deleteArgument',
          payload: {id: argument.id},
        })
      }));
    }
    return dynamicActions;
  }

  return (
    <div
      className="h5p-discussion-surface"
    >
      <DragDropContext
        onDragEnd={onDropEnd}
        sensors={[autoDragSensor]}
      >
        <Category
          categoryId={'unprocessed'}
          includeHeader={false}
          additionalClassName={['h5p-discussion-unprocessed', !state.hasRemainingUnprocessedArguments ? 'hidden' : '']}
          useNoArgumentsPlaceholder={false}
          addArgument={false}
        >
          {state.categories
            .filter((category) => category.isArgumentDefaultList)
            .map((category, index) => (
              <div
                key={category.id}
              >
                <Column
                  additionalClassName={classnames('h5p-discussion-unprocessed-argument-list', {
                    'h5p-discussion-right-aligned': isEven(index + 1)
                  })}
                  droppableId={getDnDId(category)}
                  argumentsList={state.argumentsList}
                >
                  {category.connectedArguments
                    .map((argument) => state.argumentsList[state.argumentsList.findIndex((element) => element.id === argument)])
                    .map((argument, index) => (
                      <Element
                        key={getDnDId(argument)}
                        draggableId={getDnDId(argument)}
                        dragIndex={index}
                        ariaLabel={translate('draggableItem', {
                          argument: argument.argumentText
                        })}
                      >
                        <Argument
                          actions={getDynamicActions(argument)}
                          isDragEnabled={!isMobile}
                          argument={argument}
                          enableEditing={allowAddingOfArguments}
                          onArgumentChange={(argumentText) => dispatch({
                            type: 'editArgument',
                            payload: {id: argument.id, argumentText}
                          })}
                          startEditing={() => dispatch({
                            type: 'setEditMode',
                            payload: {id: argument.id, editMode: true}
                          })}
                          stopEditing={() => dispatch({
                            type: 'setEditMode',
                            payload: {id: argument.id, editMode: false}
                          })
                          }
                        />
                      </Element>
                    ))}
                </Column>
              </div>
            ))}
        </Category>
        {state.categories
          .filter((category) => !category.isArgumentDefaultList)
          .map((category, index) => (
            <Category
              key={category.id}
              categoryId={category.id}
              includeHeader={category.title !== null}
              title={category.title}
              additionalClassName={[category.theme]}
              useNoArgumentsPlaceholder={category.useNoArgumentsPlaceholder}
              addArgument={allowAddingOfArguments}
              onAddArgument={() => dispatch(
                {
                  type: 'addArgument', payload: {
                    id: category.id,
                  }
                })}
            >
              <Column
                additionalClassName={classnames('h5p-discussion-argument-list', {
                  'h5p-discussion-right-aligned': isEven(index + 1)
                })}
                droppableId={getDnDId(category)}
                argumentsList={state.argumentsList}
              >
                {isMobile && category.useNoArgumentsPlaceholder && category.connectedArguments.length === 0 && (
                  <span>{translate('noArguments')}</span>
                )}
                {!isMobile && category.connectedArguments.length === 0 && (
                  <Dropzone
                    droppablePrefix={getDnDId(category)}
                    label={translate('dropArgumentsHere')}
                    disableDrop={state.actionDropActive || (state.actionDropActive && !category.actionTargetContainer)}
                  />
                )}
                {category.connectedArguments
                  .map((argument) => state.argumentsList[state.argumentsList.findIndex((element) => element.id === argument)])
                  .map((argument, index) => (
                    <Element
                      key={getDnDId(argument)}
                      draggableId={getDnDId(argument)}
                      dragIndex={index}
                      ariaLabel={translate('draggableItem', {
                        statement: argument.argumentText
                      })}
                    >
                      <Argument
                        actions={getDynamicActions(argument)}
                        isDragEnabled={!isMobile}
                        argument={argument}
                        enableEditing={allowAddingOfArguments}
                        onArgumentChange={(argumentText) => dispatch({
                          type: 'editArgument',
                          payload: {id: argument.id, argumentText}
                        })}
                        startEditing={() => dispatch({
                          type: 'setEditMode',
                          payload: {id: argument.id, editMode: true}
                        })}
                        stopEditing={() => dispatch({
                          type: 'setEditMode',
                          payload: {id: argument.id, editMode: false}
                        })}
                      />
                    </Element>
                  ))}
              </Column>
            </Category>
          ))}
      </DragDropContext>
      {provideSummary === true && (
        <Summary/>
      )}
    </div>
  );
}

export default Surface;
