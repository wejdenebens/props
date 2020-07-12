import React from 'react';
import PropTypes from 'prop-types';

const Profile = props => {
            return (
            <div>
              {props.handleName()}
                <p>Full Name:
                {props.personne.fullName}
                </p>
                <p>Bio:
                {props.personne.bio}
                </p>
                <p>Profession:
                {props.personne.profession}
                </p>
                <div>
        {props.children}
      </div>
            </div>
                    );
            };




 Profile.defaultProps = {
   personne : {
        fullName: "Wejdene",
        bio: "Salut",
        profession: "IT"
   },
   
  };


  Profile.propTypes = {
    fullName: PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
  }
  
  
export default Profile;