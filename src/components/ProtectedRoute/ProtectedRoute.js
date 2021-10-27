import { Route, Redirect } from 'react-router-dom';
import React from "react";
import {AppContext} from "../../contexts/AppContext";

const ProtectedRoute = ({ component: Component, ...props }) => {

    const context = React.useContext(AppContext);

    return (
        <Route>
            {() =>
                context.logged ? <Component {...props} /> : <Redirect to='/signin' />
            }
        </Route>
    );
};

export default ProtectedRoute;