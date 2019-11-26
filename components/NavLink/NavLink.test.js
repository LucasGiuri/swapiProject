import React from 'react';
import renderer from 'react-test-renderer';
import NavLink from './NavLink';

describe('NavLink', () => {
  it('NavLink basic render snapshoot', () => {
    const link = 'https://google.com';
    const children = <p>Link to google</p>;
    const component = renderer.create(<NavLink href={link} as={link}>{children}</NavLink>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
