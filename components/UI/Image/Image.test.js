import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';
import 'jest-styled-components';

describe('Image', () => {
  it('Image basic render snapshoot', () => {
    const url = 'http://pokestadium.com/sprites/xy/charizard.gif';
    const alt = 'alt';
    const component = renderer.create(<Image url={url} alt={alt} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Image isLogo render snapshoot', () => {
    const url = 'http://pokestadium.com/sprites/xy/charizard.gif';
    const alt = 'alt';
    const component = renderer.create(<Image url={url} alt={alt} isLogo={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Image onClick function is called', () => {
    const url = 'http://pokestadium.com/sprites/xy/charizard.gif';
    const alt = 'alt';
    const onClick = jest.fn();
    const component = renderer.create(<Image url={url} alt={alt} onClick={onClick} />);
    const link = component.root.findByType('img');
    link.props.onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith();
  });
})
