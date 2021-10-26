import './App.scss';
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/main'>
                <Main />
            </Route>
            <Route path='/signin'>
                <Login />
            </Route>
            <Route path='/signup'>
                <Register />
            </Route>
            <Route path='*'>
                <PageNotFound />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
