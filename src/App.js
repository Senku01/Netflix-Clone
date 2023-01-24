import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
function App() {
  const user = null


  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        console.log(userAuth)
      }
      else{

      }

    })

    return unsubscribe
  },[])


  return (
    <div className="app">
      
      <Router>
        {!user ?(
          <LoginScreen/>
        ):(
          <Switch>
            <Route exact path='/home'>
              <h1>This is nothing bullshit</h1>
            </Route>
            <Route path='/'>
              <HomeScreen/> 
            </Route>
          </Switch>
        )}
       </Router>
    </div>
  );
}

export default App;
