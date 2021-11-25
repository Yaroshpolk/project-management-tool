import './App.scss';
import {Switch, Route, useHistory} from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import { AppContext } from "../../contexts/AppContext";
import { useState } from "react";


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
        history.push('/workspaces');
    }

  return (
      <AppContext.Provider value= {{
          logged: isLogged,
      }}>
          <div className="App">
              <Switch>
                  <Route path='/' exact>
                      <Main />
                  </Route>
                  <Route path = '*'>
                      <PageNotFound />
                  </Route>
              </Switch>
          </div>
      </AppContext.Provider>
  );
}

export default App;
