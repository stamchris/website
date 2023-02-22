import React from 'react'
import styles from './style';
import {useState,useRef} from 'react'
import {Routes,Route} from "react-router-dom"
import { Home,Terms,Policy,AboutUs} from './pages';

const App = () => 
		 (
				<Routes>
					<Route exact path="/website/" element={<Home/>} />
					<Route path="/aboutUs" element={<AboutUs/>} />
					<Route path="/website/terms" element={<Terms/>} />
					<Route path="/policy" element={<Policy/>} />
				</Routes> 	
		)

export default App;