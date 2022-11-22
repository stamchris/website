import React from 'react'
import styles from './style';

import { Navbar,Main } from './components';

const App = () => (
    <div className="w-full bg-slate-50">
      <div className={`${styles.paddingX} ${styles.flexCenter} pb-5 bg-gradient-to-b from-slate-50`}>
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