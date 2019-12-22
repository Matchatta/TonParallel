import React from "react"
import {NavLink} from "react-router-dom"
const navBar = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Concert ticket</a>
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <NavLink to="/"><a class="nav-link">Home</a></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/buy"><a class="nav-link">Buy</a></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default navBar
