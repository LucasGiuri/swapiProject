import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';
import 'jest-styled-components';

const section = "FILMS";
const filterBy = "film";
const listWithName = [{
  url: "1",
  name: "item 1"
},
{
  url: "2",
  name: "item 2"
},
{
  url: "3",
  name: "item 3"
}];
const listWithTitle = [{
  url: "1",
  title: "item 1"
},
{
  url: "2",
  title: "item 2"
},
{
  url: "3",
  title: "item 3"
}];

describe('List', () => {
  it('List basic render snapshoot with empty list', () => {
    const component = renderer.create(<List list={[]} section={section} filterBy={filterBy} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('List complete with obj.name render snapshoot with empty list', () => {
    const component = renderer.create(<List list={listWithName} section={section} filterBy={filterBy} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('List complete with obj.title render snapshoot with empty list', () => {
    const component = renderer.create(<List list={listWithTitle} section={section} filterBy={filterBy} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
