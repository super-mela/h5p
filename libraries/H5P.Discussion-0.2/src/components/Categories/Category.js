import React from 'react';
import PropTypes from 'prop-types';
import HeaderIcon from './components/HeaderIcon';
import AddArgument from './components/AddArgument';

function Category(props) {

  const {
    additionalClassName,
    categoryId,
    addArgument,
    title,
    includeHeader,
    onAddArgument,
    children,
  } = props;

  additionalClassName.unshift('h5p-discussion-category');

  return (
    <div className={additionalClassName.join(' ')}>
      {includeHeader && (
        <div className={'h5p-discussion-category-header'}>
          <HeaderIcon />
          {title}
        </div>
      )}
      <div
        className={'h5p-discussion-category-content'}
        id={categoryId}
      >
        {children}
        {addArgument && (
          <AddArgument
            onClick={onAddArgument}
          />
        )}
      </div>
    </div>
  );
}

Category.propTypes = {
  additionalClassName: PropTypes.array,
  categoryId: PropTypes.string.isRequired,
  title: PropTypes.string,
  addArgument: PropTypes.bool,
  includeHeader: PropTypes.bool,
  useNoArgumentsPlaceholder: PropTypes.bool,
  onAddArgument: PropTypes.func,
};

Category.defaultProps = {
  columnClassName: [],
  additionalClassName: [],
  title: '',
  addArgument: true,
  includeHeader: true,
  useNoArgumentsPlaceholder: true,
};

export default Category;