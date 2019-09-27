import {createAppContainer, createSwitchNavigator} from "react-navigation";

import Login from './pages/Login';
import Main from './pages/Main';
import RegisterUser from './pages/RegisterUser';
import RegisterActivity from './pages/RegisterActivity';
import ViewActivity from './pages/ViewActivity';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main,
        RegisterUser,
        RegisterActivity,
        ViewActivity,
    })
);
    

