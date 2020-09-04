import React from 'react';
import Header from "./Header";
import './App.css';
import Sidebar from "./Sidebar";
import Login from "./Login";
import Feed from "./Feed";
import Widgets from "./Widgets";
import {useStateValue} from "./StateProvider";

function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="app">
    {!user ? <Login /> : (
      <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div> 
      </>
    )}
    {/*<Header />
    <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div> */}
      
    </div>
  );
}

export default App;
