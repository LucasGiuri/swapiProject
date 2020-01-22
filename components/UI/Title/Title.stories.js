import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Title';

const title = "Title";

storiesOf('Title')
  .add('Title default', () => (
    <Title text={title} />
  ))

  .add('Title centered', () => (
    <Title text={title} centered={true} />
  ))

  .add('Title isBod', () => (
    <Title text={title} isBold={true} />
  ))

  .add('Title isSmall', () => (
    <Title text={title} isSmall={true} />
  ))

  .add('Title centered and isBold', () => (
    <Title text={title} centered={true} isBold={true} />
  ))

  .add('Title centered and isSmall', () => (
    <Title text={title} centered={true} isSmall={true} />
  ))

  .add('Title isBold and isSmall', () => (
    <Title text={title} isBold={true} isSmall={true} />
  ))

  .add('Title centered, isBold and isSmall', () => (
    <Title text={title} centered={true} isBold={true} isSmall={true} />
  ))