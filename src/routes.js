import React from 'react';

const person = React.lazy(() => import('./views/member/person'));
const Home = React.lazy(() => import('./views/anonymous/home'));
const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
   
    { path: '/me', exact: true, name: 'me', component: person },
  ];
  
  export default routes;
  