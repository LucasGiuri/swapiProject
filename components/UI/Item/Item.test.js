import React from 'react';
import renderer from 'react-test-renderer';
import Item from './Item';

describe('Item', () => {
  it('Item basic render snapshoot', () => {
    const children = <p>Link to google</p>;
    const component = renderer.create(<Item>{children}</Item>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
