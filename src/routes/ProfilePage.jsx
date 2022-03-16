import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LogoutButton from '../components/LogoutButton';
import './ProfilePage.css';

function ProfilePage() {
  const {user} = useAuth0();
  return (
    <div className='profilePageContainer'>
        <img src={user.picture} alt="profile_picture" />
        <div>given name: {user.given_name}</div>
        <div>nickname: {user.nickname}</div>
        <div>name: {user.name}</div>
        <div>locale: {user.locale}</div>
        <div>updated at:{user.updated_at}</div>
        <div>email: {user.email}</div>
        <div>email verified: {user.email_verified}</div>
        <div>sub: {user.sub}</div>
        <LogoutButton/>
    </div>
  )
}

export default ProfilePage