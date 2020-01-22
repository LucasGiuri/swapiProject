import React from 'react';
import { storiesOf } from '@storybook/react';
import Item from './Item';

storiesOf('Item')
  .add('Item default', () => (
    <Item><h2>Item</h2></Item>
  ))
