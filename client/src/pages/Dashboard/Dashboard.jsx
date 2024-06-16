import React from "react";

import ProductsList from "../../components/ProductsList/ProductsList.jsx";
import ShoppingList from "../../components/ShoppingList/ShoppingList.jsx";
import Navbar from "../../components/Navabr/Navbar.jsx";

import "./Dashboard.css"

import "./Dashboard.css"

function Dashboard() {

    return (
        <div className="dashboard">
            <Navbar />
            <div className="container">
                <ShoppingList />
                <ProductsList />
            </div>
        </div>
    )
}

export default Dashboard;
