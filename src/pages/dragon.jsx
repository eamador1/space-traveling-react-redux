import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDragons, setSelectedDragon } from '../redux/dragons/dragonsSlice';
import '../styles/dragons.css';

const ListDragon = ({ dragon }) => {
  const dispatch = useDispatch();
  const handleReserveDragon = () => {
    dispatch(setSelectedDragon(dragon));
  };

  return (
    <section className="dragonContainer">
      <img className="dragonImages" src={dragon.flickr_images[0]} alt={`${dragon.name}`} />
      <div className="descriptionContainer">
        <h5>{dragon.name}</h5>
        <p>{dragon.description}</p>
        <button className="reserveDragon" type="button" onClick={handleReserveDragon}>Reserve Dragon</button>
      </div>
    </section>
  );
};

function Dragons() {
  const dragons = useSelector((store) => store.dragons);

  const dispatch = useDispatch();
  useEffect(() => {
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

ListDragon.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export { ListDragon };
export default Dragons;
