import React from 'react';

function Header() {
  return (
    <header className="Header">
      <h2>Weather Header</h2>
      <div className="CitiesNav">
        <a href="/?city=Tokyo">Tokyo</a>
        <a href="/?city=Seoul">Seoul</a>
        <a href="/?city=Chicago">Chicago</a>
        <a href="/?city=Toronto">Toronto</a>
        </div>
    </header>
  )
}

export default Header;
