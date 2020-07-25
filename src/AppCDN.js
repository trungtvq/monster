import './App.css';
import 'typeface-roboto';


import React, { Component } from 'react';

import AppContext from "./AppContext"

import 'react-toastify/dist/ReactToastify.css';

export class AppCDN extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v7.0&appId=287813625551814&autoLogAppEvents=1" nonce="GlhOuG9M"></script>

        <AppContext />
      </div>
    )
  }
}
export default AppCDN;
