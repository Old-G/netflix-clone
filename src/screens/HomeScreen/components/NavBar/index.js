import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import s from './style.module.css'
import cn from 'classnames'

function NavBar() {
  const [show, setShow] = useState(false)
  const history = useHistory()

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.removeEventListener('scroll', transitionNavbar)
  }, [])

  return (
    <div className={cn(s.navBar, show && [s.navBar__black])}>
      <div className={cn(s.navBar__contents)}>
        <img
          onClick={() => history.push('/')}
          className={cn(s.navBar__logo)}
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='netflix_logo'
        />
        <img
          onClick={() => history.push('/profile')}
          className={cn(s.navBar__avatar)}
          src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
          alt='avatar'
        />
      </div>
    </div>
  )
}

export default NavBar
