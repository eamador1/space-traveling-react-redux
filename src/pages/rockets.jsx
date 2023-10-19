import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, cancelReserveRocket, setSelectedRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleCancelReserveRocket = () => {
    dispatch(cancelReserveRocket(rocket.rocket_id));
  };
  const handleReserveRocket = () => {
    dispatch(setSelectedRocket(rocket));
  };
  return (
    <div className="rocket-card">
      <div className="card-container">
        <div className="row">
          <div className="col-md-4">
            <img
              className="rocket-image"
              src={rocket.flickr_images[0]}
              alt={`Imagen de ${rocket.rocket_name}`}
            />
          </div>
          <div className="col-md-8">
            <div className="rocket-content">
              <h4 className="rocket-title">{rocket.rocket_name}</h4>
              <p>
                {rocket.description}
              </p>
              {rocket.reserved ? (
                <button
                  type="submit"
                  onClick={handleCancelReserveRocket}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleReserveRocket}
                >
                  Reserve Rocket
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets]);
  return (
    <div>
      {rockets && rockets.map((rocket) => (
        <Rocket key={rocket.rocket_id} rocket={rocket} />
      ))}
    </div>
  );
}

export { Rocket };
export default Rockets;
