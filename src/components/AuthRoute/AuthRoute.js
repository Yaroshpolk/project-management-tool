import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from "../../contexts/AppContext";

const AuthRoute = ({ component: Component, ...props }) => {

    const context = React.useContext(AppContext);

    return (
        <Route path={props.path}>
            {() =>
                context.logged ? <Redirect to='/' /> : <Component {...props} />
            }
        </Route>
    );
};

export default AuthRoute;