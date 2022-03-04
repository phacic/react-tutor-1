import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { Settings, AppThemeOptions, SysThemeOptions } from './component/settings/Settings'
import { LoginForm } from './component/loginForm/LoginForm'
import { Togglable, ToggleableFuncs } from './component/togglable/Togglable'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const settingsRef = useRef<ToggleableFuncs>(null)

  const displayLogin = () => {
    setShowLogin(true)
  }

  const hideLogin = () => {
    setShowLogin(false)
  }

  const handleLogin = (data: {}) => {
    console.log('login handled', data)
  }

  // call toggleVisibility in settings togglable using the ref
  const callImparative = () => {
    console.log(settingsRef)
    settingsRef.current?.toggleVisibility()
  }


  return (
    <div className="prose App">
      {/* settings */}
      <div>
        <h2>Settings</h2>
      </div>
      <Togglable showLable='Show Settings' hideLable='Hide Settings' ref={settingsRef}>
        <Settings />
      </Togglable>

      {/* login */}
      {!showLogin &&
        <div className='mt-8'>
          <button onClick={displayLogin}>Login</button>
        </div>
      }
      {showLogin &&
        <LoginForm cancel={hideLogin} handleSubmit={handleLogin}/>
      }

      <button onClick={callImparative}>imparative</button>
      

    </div>
  )
}

export default App
