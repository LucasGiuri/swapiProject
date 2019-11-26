import PropTypes from 'prop-types';
import NavLink from '../NavLink/NavLink';
import { Grid } from './List.styles';
import Title from '../Title/Title';
import Item from '../Item/Item';

const List = ({list, filterBy, section}) => {
  const sectionName = section.toLowerCase();
  const filterName = filterBy.toLowerCase();

  return (
    <Grid>
      {list ? 
        list.map(item => {
          const index = item.url.indexOf(filterName) + filterName.length;
          const id = item.url.substring(index, item.url.length);

          return (
            <NavLink key={item.url} href={sectionName + id} as={sectionName + id}>
              <Item>{item.name ? item.name : item.title}</Item>
            </NavLink>
          )
        }) : 
        <Title text={"No results Found :("} />
      }
    </Grid>
  )
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })),
  filterBy: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired
};

export default List;