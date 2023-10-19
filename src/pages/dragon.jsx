import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDragons } from '../redux/dragons/dragonsSlice';

const ListDragon = ({ dragon }) => (
  <div>
    <span>{dragon.id}</span>
    <img src={dragon.flickr_images[0]} alt={`${dragon.name}`} />
    <span>{dragon.name}</span>
    <span>{dragon.type}</span>
  </div>
);
ListDragon.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

function Dragons() {
  const dragons = useSelector((store) => store.dragons);
  console.log('Dragons component - dragons:', dragons);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Dragons component - useEffect triggered');
    if (dragons.length === 0) {
      dispatch(fetchDragons());
    }
  }, [dispatch, dragons]);
  return (
    <div>
      {dragons.map((dragon) => (
        <ListDragon key={dragon.id} dragon={dragon} />

      ))}
    </div>
  );
}

export { ListDragon };
export default Dragons;
