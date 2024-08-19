import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Popover as TinyPopover} from 'react-tiny-popover';
import classnames from 'classnames';
import {useDiscussionContext} from '../../../context/DiscussionContext';
import {getBox} from 'css-box-model';

function ActionMenu(props) {

  const context = useDiscussionContext();
  const {
    translate,
  } = context;

  const {
    menuId,
    children,
    show,
    handleClose,
    actions,
    classNames = [],
    parentElement,
  } = props;

  const handleClickOutside = (/** @type {PointerEvent} */ event) => {
    /** @type {HTMLElement} */
    const target = event.target;
    const clickedOutsideParentElement = !parentElement.contains(target);

    if (clickedOutsideParentElement && handleClose) {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener('pointerdown', handleClickOutside);
    return () => window.removeEventListener('pointerdown', handleClickOutside);
  }, [parentElement]);

  classNames.push('h5p-discussion-actionmenu');

  function handleSelect(callback) {
    handleClose();
    callback();
  }

  function handleKeyUp(event, callback) {
    if (event.key === 'Enter') {
      handleSelect(callback);
    }
  }

  const parentBox = getBox(parentElement);

  function getCategory(settings, index) {
    let label;
    if (settings.label) {
      label = (<span
        id={'action-' + index}
        className={'h5p-discussion-popover-actionmenu-labeltext'}
      >
        {settings.label}
      </span>);
    }
    else {
      label = (
        <span
          id={'action-' + index}
          className={'h5p-discussion-popover-actionmenu-labeltext'}
        >
          {translate('moveTo')} &quot;<span>{settings.title}</span>&quot;
        </span>

      );
    }

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <label
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onKeyUp={(event) => handleKeyUp(event, settings.onSelect)}
      >
        <input
          tabIndex={-1}
          id={'input-' + settings.id}
          value={settings.id}
          type={'checkbox'}
          checked={settings.activeCategory}
          onChange={() => {
            if (settings.activeCategory !== true) {
              handleSelect(settings.onSelect);
            }
          }}
          aria-labelledby={'action-' + index}
        />
        <span
          className={classnames('h5p-ri', {
            'hri-checked': settings.activeCategory,
            'hri-unchecked': !settings.activeCategory,
          })}/>
        {label}
      </label>
    );
  }

  function getDelete(settings) {
    return (
      <button
        className={'h5p-discussion-popover-actionmenu-delete'}
        type={'button'}
        onClick={(e) => {
          e.preventDefault();
          settings.onSelect();
        }}
      >
        <span className={'h5p-ri h5p-discussion-popover-actionmenu-delete-icon'} aria-hidden={true} />
        <span className={'h5p-discussion-popover-actionmenu-labeltext'}>
          {settings.title}
        </span>
      </button>
    );
  }

  function getEdit(settings) {
    return (
      <button
        className={'h5p-discussion-popover-actionmenu-edit'}
        type={'button'}
        onClick={(e) => {
          e.preventDefault();
          handleSelect(settings.onSelect);
        }}
      >
        <span className={'h5p-ri hri-pencil'} aria-hidden={true} />
        <span className={'h5p-discussion-popover-actionmenu-labeltext'}>
          {settings.title}
        </span>
      </button>
    );
  }

  return (
    <TinyPopover
      containerClassName={classNames.join(' ')}
      contentLocation={{
        top: parentBox.borderBox.height, left: -parentBox.border.left
      }}
      isOpen={show}
      positions={['bottom']}
      padding={0}
      reposition={false}
      parentElement={parentElement}
      containerStyle={{position: 'absolute', top: `${parentBox.borderBox.height}px`}}
      content={() => (
        <div
          id={menuId}
          className={'h5p-discussion-popover-actionmenu'}
          role={'dialog'}
          aria-labelledby={'actionMenuTitle'}
          aria-describedby={'actionMenuDescription'}
        >
          <div className={'visible-hidden'}>
            <p id={'actionMenuTitle'}>{translate('actionMenuTitle')}</p>
            <p id={'actionMenuDescription'}>{translate('actionMenuDescription')}</p>
          </div>
          <ul>
            {actions.map((action, index) => {
              let content;
              if (action.type === 'delete') {
                content = getDelete(action, index);
              }
              else if (action.type === 'edit') {
                content = getEdit(action, index);
              }
              else {
                content = getCategory(action, index);
              }
              return (
                <li
                  key={'action-' + index}
                >
                  {content}
                </li>
              );
            })}
          </ul>
          <button
            onClick={handleClose}
            className={'visible-hidden'}
            type={'button'}
          >{translate('close')}
          </button>
        </div>
      )}
    >
      {children}
    </TinyPopover>
  );
}

ActionMenu.propTypes = {
  canDelete: PropTypes.bool,
  onDelete: PropTypes.func,
  actions: PropTypes.array,
  translate: PropTypes.func,
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  classNames: PropTypes.array,
  parentElement: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default ActionMenu;
