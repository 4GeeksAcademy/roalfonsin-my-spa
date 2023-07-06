import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Imported Components
import Home from "./home";
import Login from "./login";
import Registro from "./registro";

//create your first component
const Layout = () => {
	return (
		<div className="text-center m-2">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registro" element={<Registro />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
