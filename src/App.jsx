import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import { Home,Terms,Policy,AboutUs} from './pages';

const App = () => 
		 (
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route path="/aboutUs" element={<AboutUs/>} />
					<Route path="/terms" element={<Terms/>} />
					<Route path="/policy" element={<Policy/>} />
				</Routes> 	
		)

export default App;