import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './Image';

const url = 'http://pokestadium.com/sprites/xy/charizard.gif';
const alt = 'alt';

storiesOf('Image')
  .add('Image default', () => (
    <Image url={url} alt={alt} />
  ))
  
  .add('Image with isLogo attr', () => (
    <Image isLogo={true} url={url} alt={alt} />
  ))