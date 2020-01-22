import Image from '../Image/Image';
import Menu from '../../containers/Menu';
import { HeaderContainer } from './Header.styles';
import NavLink from '../NavLink/NavLink';

const Header = () => (
  <HeaderContainer>
    <NavLink href="/" as="/">
      <Image isLogo={true} url="/static/icons/beezy-logo.png" alt="logo" />
    </NavLink>
    <Menu />
  </HeaderContainer>
);

export default Header;