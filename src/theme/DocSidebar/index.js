import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import Logo from '@theme-original/Logo'

export default function DocSidebarWrapper(props) {
  return (
    <>
      <Logo/>
      {/* <img className="sidebarlogo" src='https://res.cloudinary.com/dbrh0uxwx/image/upload/v1719325096/new%20assets/gb0ghehgthoijo2zv4xk.png'/> */}
      <DocSidebar {...props} />
    </>
  );
}
