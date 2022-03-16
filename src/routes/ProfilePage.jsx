import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import LogoutButton from '../components/LogoutButton'

function ProfilePage() {
  const {user} = useAuth0();
  return (
    <div>
        <LogoutButton/>
        <div>
          {JSON.stringify(user, null, 2)}
        </div>
        
    </div>
  )
}

export default ProfilePage