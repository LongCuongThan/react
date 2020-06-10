import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {
                userName: '',
                password: ''
            },
            loading: false,
        }
    }

    componentDidMount() {
        
    }

    onSubmit(event) {
        event.preventDefault();
        let username = this.state.auth.userName || '';
        let password = this.state.auth.password || '';
        console.log(this.state);
        
    }

    changeUserName(event) {
        event.preventDefault();
        this.setState({
            auth: Object.assign(this.state.auth, {
                userName: event.target.value
            })
        })
    }

    changePassword(event) {
        event.preventDefault();
        this.setState({
            auth: Object.assign(this.state.auth, {
                password: event.target.value
            })
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <input
                    disabled={this.state.loading}
                    type="text"
                    onChange={(e) => this.changeUserName(e)}
                />
                <input
                    disabled={this.state.loading}
                    type="password"
                    onChange={(e) => this.changePassword(e)}
                />
                <button type="submit">login</button>
            </form>
        )
    }
}

export default withRouter(Login);