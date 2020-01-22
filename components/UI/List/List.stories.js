import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';

const listOfNames = [{id:1, name: 'lucas'}, {id:2, name: 'messi'}];

storiesOf('List')
  .add('List default with empty list', () => (
    <List list={[]}/>
  ))
  .add('List default with complete list', () => (
    <List list={listOfNames}/>
  ))
