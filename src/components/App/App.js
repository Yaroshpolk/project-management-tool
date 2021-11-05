import './App.scss';
import {Switch, Route, useHistory} from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AuthRoute from "../AuthRoute/AuthRoute";
import { AppContext } from "../../contexts/AppContext";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

function App() {

    const [isLogged, setIsLogged] = useState(true);

    const history = useHistory();

    const handleRegister = (evt) => {
        evt.preventDefault();
        history.push('/signin');
    }

    const handleLogin = (evt) => {
        evt.preventDefault();
        setIsLogged(true);
        history.push('/');
    }

  return (
      <AppContext.Provider value= {{
          logged: isLogged,
      }}>
          <div className="App">
              {isLogged && <Sidebar />}
              <Switch>
                  <ProtectedRoute
                      component = {Main}
                      path = '/'
                      exact
                      >
                  </ProtectedRoute>
                  <AuthRoute
                      path = '/signin'
                      component = {Login}
                      handleLogin = {handleLogin}>
                  </AuthRoute>
                  <AuthRoute
                      path = '/signup'
                      component = {Register}
                      handleRegister = {handleRegister}>
                  </AuthRoute>
                  <Route path = '*'>
                      <PageNotFound />
                  </Route>
              </Switch>
          </div>
      </AppContext.Provider>
  );
}

export default App;
