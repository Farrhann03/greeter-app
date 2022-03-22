import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import {useState} from "react";
import Input from "./components/input";
import Intro from "./components/intro";
import Apple from "./components/apple";
import Orange from "./components/orange";

const HomeScreen = () => {

    const [firstName, setFirstName] = useState(null);

    const handleNameSubmit = (firstName) => {
        setFirstName(firstName);
    }

    return(
        <>
            <h1>Home Screen</h1>
            {firstName ? <Intro firstName={firstName}/> : <Input submitNameFn={handleNameSubmit} />}     
            <br/>
            
            <Router>
                
                <div>
                    <Link to="/apple">Apples</Link> | <Link to="/orange">Oranges</Link> | <Link to="/">None</Link>
                </div>
                
                <div>
                    <Switch>
                        <Route path="/apple">
                            <Apple />
                        </Route>    
                        <Route path="/orange">
                            <Orange />
                        </Route>
                    </Switch>       
                </div>
            </Router>
            
        </>
    )
}

export default HomeScreen;