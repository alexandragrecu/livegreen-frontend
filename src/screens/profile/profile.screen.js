// profile page of user (it's private, just the user can see it)
import React, { Fragment, useContext, useEffect, useState } from 'react';

// import utils
import { getRewards } from '../../helpers/profile.utils';

// import components
import Map from './../../components/map/map.component';

// context
import { AppContext } from './../../context/appContext';

// places autocomplete
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const Profile = () => {
  const { user, showSpinner, setShowSpinner, errorMessage, setErrorMessage } =
    useContext(AppContext);

  const [rewards, setRewards] = useState(false);
  console.log('rewards', rewards);
  const getUserRewards = () => {
    getRewards(setShowSpinner, setErrorMessage, setRewards);
  };

  useEffect(() => {
    getUserRewards();
  }, []);
  return (
    <Fragment>
      <div className="main-content">
        <div className="section-1-offers">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="title-general-home">Your profile</div>
                <div className="text-general-home">
                  Hello, {user.firstName}! how will you make the world better
                  today?
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="wrapper-section-1-offers">
                  <div className="disclaimer-points">
                    Your total points: {user.totalPoints}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container info wow fadeInUp"
          data-wow-duration="2s"
          style={{ visibility: 'visible', animationDuration: '2s' }}
        >
          Your rewards:
        </div>
        <div
          className="container table-wrapper wow fadeInUp "
          data-wow-duration="2s"
          style={{ visibility: 'visible', animationDuration: '2s' }}
        >
          <table className="table table-striped table-hover" id="reports-table">
            <thead>
              <tr>
                <th></th>
                <th className="hide-550">Name</th>
                <th className="hide-550">City</th>
                <th className="hide-550">Points</th>
                <th className="hide-550">Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              {rewards &&
                rewards.map((reward, index) => (
                  <tr key={reward._id}>
                    <td>{index + 1}</td>
                    <td>{reward.offer.name}</td>
                    <td>{reward.offer.city}</td>
                    <td>{reward.offer.points}</td>
                    <td>{reward.purchaseDate.slice(0, 10)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div
          className="container info wow fadeInUp"
          data-wow-duration="2s"
          style={{ visibility: 'visible', animationDuration: '2s' }}
        >
          Find recycling centers:
        </div>
        <div className="container">
          <div className="row" style={{ display: 'flex' }}>
            <div className="col-md-6 col-xs-12" style={{ marginTop: '50px' }}>
              <div className="container">
                <form className="search-product" action="" method="">
                  <input
                    type="text"
                    name="search-offer"
                    placeholder=" Search a city..."
                  />
                </form>
              </div>
            </div>
            <div
              className=" map-container"
              style={{ height: '400px', width: '70%' }}
            >
              <Map
                googleMapURL={
                  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQ56ZZfTL3fSimAYL3i9Ry6TptGHyV1iY&libraries=places'
                }
                center={[44.4372808, 26.1000002]}
                anchor={[28, 56]}
                scaledSize={[45, 40]}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
