import Link from 'next/link';
import PropTypes from 'prop-types';
import { A } from './NavLink.styles';

const NavLink = ({children, href, as}) => (
	<Link href={href} as={as}>
		<A>
			{children}
		</A>
	</Link>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired
};

export default NavLink;