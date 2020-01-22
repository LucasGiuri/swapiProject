import Menu from './Menu';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

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

describe('Menu', () => {
	it('Menu basic render snapshoot with empty list', () => {
		const component = renderer.create(
      <Menu urls={urls} currentPath={currentPath} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})