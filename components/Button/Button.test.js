import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';
import 'jest-styled-components';

describe('Button', () => {
  const text = "Button";
  const isDisabled = true;

  it('Button basic render snapshoot', () => {
    const component = renderer.create(<Button text={text} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Button isDisabled render snapshoot', () => {
    const component = renderer.create(<Button text={text} isDisabled={isDisabled} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Button onClick is clicked', () => {
    const onClick = jest.fn();
    const component = (<Button text={text} onClick={onClick} />);
    const tree = renderer.create(component);
    const button = tree.root.findByType(Button);
    button.props.onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith();
  })
})
