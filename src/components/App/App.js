import './App.scss';
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/signin'>
                <Login />
            </Route>
            <Route path='/signup'>
                <Register />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
