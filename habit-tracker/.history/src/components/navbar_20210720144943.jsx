import React, { memo } from 'react';

const Navbar = memo((props) => {
    return (
    <div className="navbar">
      <i className="fab fa-leanpub">
      </i><h1>Habit Tracker</h1>
      <p className="total__Count">{props.totalCount}</p>
    </div>
    );
});

export default Navbar;

