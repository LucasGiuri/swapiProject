import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';
import 'jest-styled-components';

describe('Pagination', () => {
  const totalPages = "Total Pages";
  const hasPrevPage = "http://google.com";
  const hasNextPage = "http://google.com";

  it('Pagination basic render snapshoot', () => {
    const component = renderer.create(<Pagination totalPages={totalPages} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Pagination hasNextPage render snapshoot', () => {
    const component = renderer.create(<Pagination totalPages={totalPages} hasNextPage={hasNextPage} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Pagination hasPrevPage render snapshoot', () => {
    const component = renderer.create(<Pagination totalPages={totalPages} hasPrevPage={hasPrevPage} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Pagination hasPrevPage and hasNextPage render snapshoot', () => {
    const component = renderer.create(<Pagination 
      totalPages={totalPages}
      hasPrevPage={hasPrevPage} 
      hasNextPage={hasNextPage} 
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Pagination onClickPrev is clicked', () => {
    const onClickPrev = jest.fn();
    const component = (<Pagination totalPages={totalPages} hasPrevPage={hasPrevPage} onClickPrev={onClickPrev} />);
    const tree = renderer.create(component);
    const childrenButtons = tree.root.findAllByType('button');
    childrenButtons.forEach(child => child.props.onClick())
    expect(onClickPrev).toHaveBeenCalledTimes(1);
  })

  it('Pagination onClickNext is clicked', () => {
    const onClickNext = jest.fn();
    const component = (<Pagination totalPages={totalPages} hasNextPage={hasPrevPage} onClickNext={onClickNext} />);
    const tree = renderer.create(component);
    const childrenButtons = tree.root.findAllByType('button');
    childrenButtons.forEach(child => child.props.onClick())
    expect(onClickNext).toHaveBeenCalledTimes(1);
  })
})
