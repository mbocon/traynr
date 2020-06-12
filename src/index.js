import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import Register from '../src/components/Register';
import Login from '../src/components/Login';
import Userhome from '../src/components/Userhome';
import CreateWorkout from '../src/components/CreateWorkout';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router';

const routes = [
    {
        path: '/register',
        component: Register,
        name: 'Register-Page'
    },
    {
        path: '/login',
        component: Login,
        name: 'Login-Page'
    },
    {
        path: '/userhome',
        component: Userhome,
        name: 'Userhome-Page'
    },
    {
        path: '/create',
        component: CreateWorkout,
        name: 'CreateWorkout-Page'
    },
    {
        path: '/',
        component: App,
        name: 'Main-Page'
    }
]

const root = document.getElementById("root");
const hist = createBrowserHistory();

ReactDOM.render(<Router history={hist}>
        <Switch>
            {
                routes.map((route)=>{
                    return(
                        <Route path={route.path} component={route.component} key={route.name}></Route>
                    )
                })
            }
        </Switch>
    </Router>, root);

