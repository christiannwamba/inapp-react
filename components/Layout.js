import React from 'react';
import Nav from './Nav';

function Layout({children}) {
  return (
    <div className="pb-48">
      <Nav />
      <main className="mx-auto max-w-7xl">{children}</main>
    </div>
  );
}

export default Layout;
