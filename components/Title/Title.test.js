import React from 'react';
import renderer from 'react-test-renderer';
import Title from './Title';
import 'jest-styled-components';

describe('Title', () => {
  it('Title basic render snapshoot', () => {
    const component = renderer.create(<Title text="text" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Title centered render snapshoot', () => {
    const component = renderer.create(<Title text="text" centered={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('text-align', 'center');

  })

  it('Title isBold render snapshoot', () => {
    const component = renderer.create(<Title text="text" isBold={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-weight', 'bold');
  })

  it('Title isSmall render snapshoot', () => {
    const component = renderer.create(<Title text="text" isSmall={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-size', '16px');
  })

  it('Title isBold and centered render snapshoot', () => {
    const component = renderer.create(<Title text="text" centered={true} isBold={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('text-align', 'center');
    expect(tree).toHaveStyleRule('font-weight', 'bold');
  })

  it('Title isSmall and centered render snapshoot', () => {
    const component = renderer.create(<Title text="text" centered={true} isSmall={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('text-align', 'center');
    expect(tree).toHaveStyleRule('font-size', '16px');
  })

  it('Title isSmall and isBold render snapshoot', () => {
    const component = renderer.create(<Title text="text" isSmall={true} isBold={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-size', '16px');
    expect(tree).toHaveStyleRule('font-weight', 'bold');
  })

  it('Title isBold, isSmall and centered render snapshoot', () => {
    const component = renderer.create(<Title text="text" isSmall={true} centered={true} isBold={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('text-align', 'center');
    expect(tree).toHaveStyleRule('font-weight', 'bold');
    expect(tree).toHaveStyleRule('font-size', '16px');
  })
})
