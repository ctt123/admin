import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Menu from './components/SlideBar/SliderBar'

class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Route path="/" component={Menu}/>
                    </div>
                    <div>
                        <Route path="/Home" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                    </div>

                </div>
            </Router>
        )
    }
}

function Home(props) {
    return (<div>home</div>);
}
function Login(props) {
    return (<div>Login</div>);
}

export default Routes;