import React, { useState } from 'react'

import ToDo from '../components/ToDo'
import '../assets/styles/styles.scss'

import headerDark from '@images/bg-desktop-dark.jpg' 
import headerDarkMB from '@images/bg-mobile-dark.jpg'
import headerLightMB from '@images/bg-mobile-light.jpg'
import headerLight from '@images/bg-desktop-light.jpg'

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`container ${darkMode ? '' : 'light'}`}>
      <div className='container-img'>
        {
          darkMode 
            ? <picture>
                <source media="(min-width:700px)" srcSet={headerDark}/>
                <img src={headerDarkMB} alt='header-image'/>
              </picture>
            : <picture>
                <source media="(min-width:700px)" srcSet={headerLight}/>
                <img src={headerLightMB} alt='header-image'/>
              </picture>
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