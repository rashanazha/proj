import ContactUs from "./Components/ContactUs/ContactUs";
import Page404 from "./Components/Page404/Page404";
import Homepage from "./Components/Homepage/Homepage";
import "./App.css";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Products from "./Components/Products/Products"
import CartPage from "./Components/CartPage/CartPage";
import Header from "./Components/Header/Header";
//import Card from "./Components/Card/Card"


function App() {
	
	const [data, setData] = useState([]);



	useEffect(() => {
		axios
			.get("http://localhost:5000/api/data")
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	}, []);


	return (
		<div className="App">
		
						<BrowserRouter>
							<Header />
							<Routes>
								<Route path="/" element={<Homepage data={data}/>}/>
								<Route path="/ContactUs" element={<ContactUs />} />
								<Route path="/Login" element={<Login />} />
								<Route path="/Registration" element={<Registration />} />
								<Route path="/Products" element={<Products />} />
								<Route path="/CartPage" element={<CartPage />} />
								<Route path="*" element={<Page404 />} />

								{data.map((d, index) => {
									return (
										<Route
											key={index}
											path={d.url}
											element={<ProductDetail data={d} />}
										/>
									);
								})}
							</Routes>
						</BrowserRouter>
						
						  		
		</div>
	);
}

export default App;