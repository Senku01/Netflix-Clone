import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout,selectUser } from './features/userSlice'
 

function App() {
  const user = useSelector(selectUser)
  // console.log(user)
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        // L0gged 1n
        // console.log(userAuth)
        dispatch(
          login({
            uid: userAuth.uid,
            email:userAuth.email,
        }))
      }
      else{

        // l0gg3d 0u1
        dispatch(logout())

      }

    })

    return unsubscribe
  },[dispatch])


  return (
    <div className="app">
      
      <Router>
        {!user ?(
          <LoginScreen/>
        ):(
          <Switch>
            <Route exact path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path='/'>
              <HomeScreen/> 
            </Route>
          </Switch>
        )}
       </Router>
    </div>
  );
}

export default App;
