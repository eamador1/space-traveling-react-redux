import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import { fetchDragons, setSelectedDragon, cancelReserveDragon } from '../redux/dragons/dragonsSlice';
import '../styles/dragons.css';

export const ListDragon = ({ dragon }) => {
  const dispatch = useDispatch();

  const handleReserveDragon = () => {
    dispatch(setSelectedDragon(dragon));
  };
  const handleCancelReserveDragon = () => {
    dispatch(cancelReserveDragon(dragon.id));
  };

  return (
    <section className="dragonContainer">
      <img className="dragonImages" src={dragon.flickr_images[0]} alt={`${dragon.name}`} data-testid="dragonImage" />
      <div className="descriptionContainer">
        <h5>{dragon.name}</h5>
        <p>
          {dragon.reserved && <Badge className="badge" bg="primary">Reserved</Badge>}
          {dragon.description}
        </p>
        {dragon.reserved ? (
          <button className="cancelReserveDragon" type="button" onClick={handleCancelReserveDragon}>
            Cancel Reservation
          </button>
        ) : (
          <button
            className="reserveDragon"
            type="button"
            onClick={handleReserveDragon}
            data-testid="reserve-button"
          >
            Reserve Dragon
          </button>
        )}
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
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Dragons;
