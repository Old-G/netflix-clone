import { useState } from 'react'
import SignUpScreen from './components/signUp'
import s from './style.module.css'

function LoginScreen() {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className={s.loginScreen}>
      <div className={s.loginScreen__background}>
        <img
          className={s.loginScreen__logo}
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='netflix_logo'
        />
        <button
          onClick={() => setSignIn(true)}
          className={s.loginScreen__button}
        >
          Sign In
        </button>

        <div className={s.loginScreen__gradient} />
      </div>

      <div className={s.loginScreen__body}>
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>

            <div className={s.loginScreen__input}>
              <form>
                <input type='email' placeholder='Email Address' />
                <button
                  onClick={() => setSignIn(true)}
                  className={s.loginScreen__getStarted}
                >
                  GET STARTED
                </button>
              </form>
            </div>
            <h3>To go to the site Please Press Button GET STARTED</h3>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginScreen
