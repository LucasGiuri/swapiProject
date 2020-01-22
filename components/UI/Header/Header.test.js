import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import 'jest-styled-components';

jest.mock('../../containers/Menu', () => 'Menu');

describe('Header', () => {
  it('Header basic render snapshoot', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
