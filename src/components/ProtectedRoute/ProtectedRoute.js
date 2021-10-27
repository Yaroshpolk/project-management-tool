import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from "../../contexts/AppContext";

const ProtectedRoute = ({ component: Component, ...props }) => {

    const context = React.useContext(AppContext);

    return (
        <Route path={props.path}>
            {() =>
                context.logged ? <Component {...props} /> : <Redirect to='/signin' />
            }
        </Route>
    );
};

export default ProtectedRoute;