import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home,Terms,Policy,AboutUs} from './pages';

const App = () => 
		 (
				<Routes>
					<Route exact path="http://meetnkick.com/" element={<Home/>} />
					<Route path="http://meetnkick.com/aboutUs" element={<AboutUs/>} />
					<Route path="http://meetnkick.com/terms" element={<Terms/>} />
					<Route path="http://meetnkick.com/policy" element={<Policy/>} />
				</Routes> 	
		)

export default App;