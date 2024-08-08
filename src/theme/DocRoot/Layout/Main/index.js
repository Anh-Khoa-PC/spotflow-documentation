import React from 'react';
import Main from '@theme-original/DocRoot/Layout/Main';
import Navbar from '@theme/Navbar'
import {Props} from '@theme/DocRoot/Layout/Main'

export default function MainWrapper(props) {
  return (
    <div>
      <Navbar/>
      <Main {...props} />
    </div>
  );
}
