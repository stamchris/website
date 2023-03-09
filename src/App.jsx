import React from 'react'
import {Routes,Route,HashRouter} from "react-router-dom"
import { Home,Terms,Policy,AboutUs} from './pages';

const App = () => 
		 (
			<HashRouter>
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route path="/aboutUs" element={<AboutUs/>} />
					<Route path="/terms" element={<Terms/>} />
					<Route path="/policy" element={<Policy/>} />
				</Routes> 
			</HashRouter>	
		)

export default App;