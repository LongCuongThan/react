import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Login from './../Login';

// page có header
const addHeader = (WrapperComponent, props) => () => (
    <div className="wrapper">
        <header></header>
        <section>
            <WrapperComponent {...props}></WrapperComponent>
        </section>
    </div>
)

const addLoginBackground = (WrapperComponent, props) => {
    return class LoginContainer extends React.Component {
        render() {
            return (
                <div className="login-container">
                    <WrapperComponent {...props}></WrapperComponent>
                </div>
            )
        }
    }
}
 
class Routes extends React.Component {
    renderApp = (url) => {
        return (
            <Switch>
                <Route exact path="/login" component={addLoginBackground(Login)} />
                <Redirect exact path="/" to="/login"/>
                {/* <Route component={NotFound}/> */}
                <Redirect to="/login"/>
            </Switch>
        )
    }
    render() {
        return (
            <BrowserRouter>
                {this.renderApp()}
            </BrowserRouter>
        )
    }
}

export default Routes;