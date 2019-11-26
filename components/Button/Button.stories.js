import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const text = "Button";

storiesOf('Button')
  .add('Button default', () => (
    <Button text={text} />
  ))
  .add('Button disabled', () => (
    <Button text={text} isDisabled={true} />
  ))
