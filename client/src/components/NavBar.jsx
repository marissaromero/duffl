import React from 'react';

function NavBar() {
  return (
    <div className="NavBar">
      <button className="MenuButton" type="button" aria-label="access mnenu drop down" />
      <div className="Logo" />
      <div className="ProfileContainer">
        <div className="Credits">3</div>
        <img className="Avatar" alt="user avatar" src="./media/Avatar.png" />
      </div>
    </div>
  );
}

export default NavBar;
