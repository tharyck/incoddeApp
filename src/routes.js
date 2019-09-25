import {createAppContainer, createSwitchNavigator} from "react-navigation";

import Login from './pages/Login';
import Main from './pages/Main';
import RegisterUser from './pages/RegisterUser';
import RegisterActivity from './pages/RegisterActivity';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main,
        RegisterUser,
        RegisterActivity,
    })
);
    

