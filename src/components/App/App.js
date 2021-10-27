import './App.scss';
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AuthRoute from "../AuthRoute/AuthRoute";
import { AppContext } from "../../contexts/AppContext";
import { useState } from "react";

function App() {

    const [isLogged, setIsLogged] = useState(true);

  return (
      <AppContext.Provider value= {{
          logged: isLogged,
      }}>
          <div className="App">
              <Switch>
                  <ProtectedRoute
                      component = {Main}
                      path = '/'
                      exact>
                  </ProtectedRoute>
                  <AuthRoute
                      path = '/signin'>
                      component = {<Login />}
                  </AuthRoute>
                  <AuthRoute
                      path = '/signup'>
                      component = {<Register />}
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
