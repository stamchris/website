import React from 'react'
import styles from './style';

import { Navbar,Main } from './components';

const App = () => (
    <div className="w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar/> 
        </div>
      </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Main/>
      </div>
    </div>





    </div>
    
)

export default App;