import './App.scss';
import { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import Auth from "../Auth/Auth";
import { AppContext } from "../../contexts/AppContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Workspaces from "../Workspaces/Workspaces";
import Main from "../Main/Main";

function App() {

    const [isLogged, setIsLogged] = useState(true);

    const history = useHistory();

    const handleRegister = (evt) => {
        evt.preventDefault();
        history.push('/');
    }

    const handleLogin = (evt) => {
        evt.preventDefault();
        setIsLogged(true);
        history.push('/main');
    }

  return (
      <AppContext.Provider value= {{
          logged: isLogged,
      }}>
          <div className="App">
              <Switch>
                  <Route path='/' exact>
                      <Auth
                      handleLogin={handleLogin}
                      handleRegister={handleRegister}
                      />
                  </Route>
                  <ProtectedRoute
                  path='/main'
                  component={Main}
                  >
                  </ProtectedRoute>
                  <Route path = '*'>
                      <PageNotFound />
                  </Route>
              </Switch>
          </div>
      </AppContext.Provider>
  );
}

export default App;
