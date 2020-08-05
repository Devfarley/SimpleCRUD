import React from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMusic } from '@fortawesome/free-solid-svg-icons'
import Home from '../pages/Home'
import Music from '../pages/Music'






const Routes = () => {
    return(
        <Router>
            <nav >
            <div className='header'>
            <h1 className='sitename'>MUSIC</h1>
                <ul className='navigation'>
                    <li className='navbutton'>
                        <Link to='/'><FontAwesomeIcon icon={faHome}/> Home</Link>
                    </li>
                    <li className='navbutton'>
                        <Link to='/Artists'><FontAwesomeIcon icon={faMusic}/> Artists</Link>
                    </li>
                </ul>
            </div>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path ='/Artists'>
                        <Music/>
                    </Route>
                </Switch>
            </nav>
        </Router>
    )
}


export default Routes;