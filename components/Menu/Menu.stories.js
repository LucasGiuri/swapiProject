import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './Menu';

const urls = [{
  url: "/",
  href: "/",
  text: "People"
},
{
  url: "/films",
  href: "/films",
  text: "Films"
},
{
  url: "/vehicles",
  href: "/vehicles",
  text: 'Vehicles'
},
{
  url: '/planets',
  href: '/planets',
  text: 'Planets'
}];

const currentPath = "/";

storiesOf('Menu')
  .add('Menu default', () => (
    <Menu urls={urls} currentPath={currentPath} />
  ))