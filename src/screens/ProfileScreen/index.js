import { selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux'
import NavBar from '../HomeScreen/components/NavBar'
import s from './style.module.css'
import { auth } from '../../firebase'
import PlansScreen from './components/PlansScreen'

function ProfileScreen() {
  const user = useSelector(selectUser)

  return (
    <div className={s.profileScreen}>
      <NavBar />
      <div className={s.profileScreen__body}>
        <h1>Edit Profile</h1>
        <div className={s.profileScreen__info}>
          <img
            src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
            alt='avatar'
          />
          <div className={s.profileScreen__details}>
            <h2>{user.email}</h2>
            <div className={s.profileScreen__plans}>
            <h3>Plans</h3>
            <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className={s.profileScreen__signOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
