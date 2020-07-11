import React from 'react';
import PropTypes from 'prop-types';

const Profile = props => {
            return (
            <div>
                <p>Full Name:
                {props.name}
                </p>
                <p>Bio:
                {props.bio}
                </p>
                <p>Profession:
                {props.profession}
                </p>
            </div>
                    );
            };

const image = (props) => {
    return (
      <div>
        {props.children}
      </div>
    )
   }

  function handleName (props) {
    return <p>Name of profile user{props.name}</p> 
  };


  ReactHeader.defaultProps = {
   
  };


  Profile.propTypes = {
    name: PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
  }
  
  
export default Profile;