import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Layout/Header';

export default function Home() {
  return (
    <div>
      <br /><br /><br />
      <h1>this is the home page</h1>
       <Header></Header>
       <Outlet/>
    </div>
  )
}
