import React, { useState } from 'react'

import ToDo from '../components/ToDo'
import '../assets/styles/styles.scss'

import headerDark from '@images/bg-desktop-dark.jpg'
import headerLight from '@images/bg-desktop-light.jpg' 

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`container ${darkMode ? '' : 'light'}`}>
      <div className='container-img'>
        {
          darkMode 
            ? <img src={headerDark} alt='header-image'/>
            : <img src={headerLight} alt='header-image'/>
        }
      </div>
      <ToDo 
        setDarkMode={setDarkMode}
        darkMode={darkMode} 
      />
    </main>
  )
}

export default App