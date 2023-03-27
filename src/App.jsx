import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home,Terms,Policy,AboutUs} from './pages';

const App = () => 
		 (
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route path="website/aboutUs" element={<AboutUs/>} />
					<Route path="website/terms" element={<Terms/>} />
					<Route path="website/policy" element={<Policy/>} />
				</Routes> 	
		)

export default App;