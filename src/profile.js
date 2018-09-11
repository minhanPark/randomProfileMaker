import React from 'react';
import './profile.css';

const Profile = ({imgSrc, name, username, password}) => {
  return (
    <div className="profile">
      <div className="img">
        <ProfileImage
           imgSrc={imgSrc}
           alt={name}
            />
      </div>
      <div className="text">
        <div className="row">
          <div>
            Name:
          </div>
          <div>
            {name}
          </div>
        </div>
        <div className="row">
          <div>
            Username:
          </div>
          <div>
            {username}
          </div>
        </div>
        <div className="row">
          <div>
            Password:
          </div>
          <div>
            {password}
          </div>
        </div>
      </div>
    </div>
  );
}

const ProfileImage = ({imgSrc, alt}) => {
  return (
    <img src={imgSrc} alt={alt} title={alt} className="profile_image" />
  )
}

export default Profile;
