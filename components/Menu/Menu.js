import PropTypes from 'prop-types';
import NavLink from '../NavLink/NavLink';
import { Ul, Li, Nav } from './Menu.styles';

const Menu = ({urls, currentPath}) => (
  <Nav>
    <Ul>
      {urls.map(link => {
        const { url, href, text } = link;
        return (
          <Li key={url} isActive={url === currentPath}>
            <NavLink href={href} as={url}>
              {text}
            </NavLink>
          </Li>
        )
      })}
    </Ul>
  </Nav>
);

Menu.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.object),
  currentPath: PropTypes.string.isRequired,
};

Menu.defaultProps = {
  urls: [{}],
};

export default Menu;