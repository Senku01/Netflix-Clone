import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { selectUser } from "../features/userSlice"
import { useSelector } from 'react-redux'
import { auth } from "../firebase"

function ProfileScreen() {

const user = useSelector(selectUser)
  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img 
                    src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
                    alt=''
                />
                <div className='profileScreen__details'>
                    <h2>
                        {user.email}
                    </h2>
                    <div className='profileScreen__plans'>
                        <h3>Plans</h3>
                        <h3>I dont Ask for Subscription to Watch Movie not on my Clone XD 😂<br></br>
                            Since i cannot Afford for a Card number to Upgrade my Firebase Plan to Blaze to Add the Stripe Extention inorder to Add Payment Screen in my Netflix Clone<br></br>
                            So i am Wrapping up my Netflix Clone By the way Happy Republic Day  <br></br>
                            Enjoy Accessing my Netflix for free-Of-Cost 🤫 😍 </h3>
                        {/* <PlansScreen /> */}
                        <button onClick={()=> auth.signOut()} 
                            className='profileScreen__signOut'> Sign Out</button>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default ProfileScreen