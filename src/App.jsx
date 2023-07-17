import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home,Terms,Policy,AboutUs,Payment_fail,Payment_success} from './pages';

const App = () => 
		 (
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route path="/aboutUs" element={<AboutUs/>} />
					<Route path="/terms" element={<Terms/>} />
					<Route path="/policy" element={<Policy/>} />
					<Route path="/payment_success" element={<Payment_success/>} />
					<Route path="/payment_fail" element={<Payment_fail/>} />
				</Routes> 	
		)

export default App;