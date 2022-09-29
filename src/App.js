
import Grid from "./components/grid1";
import Highlife from "./components/highlife";
import Niara from "./components/niara";
import Store from "./components/store"
import {BrowserRouter as Router, Route, Swotch} from "react-router-dom";

function App() {
    let component;
    component = <App />
    switch (window.location.pathname) {
        case "/store":
            component = <Store />
            break;
        case "/highlife":
            component = <Highlife />
            break;

        case "/":
            component = <Grid />
            break;
        case "/niara":
            component = <Niara />
            break;


        default:
            break;
    }
    return (<div className="App">


       {component}




    </div>
    );
}

export default App;