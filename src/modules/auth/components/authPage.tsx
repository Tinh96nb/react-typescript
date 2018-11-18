import * as React from "react";
import { Button, ButtonToolbar } from 'react-bootstrap';
import * as jwt from 'common/helpers/jwt';

interface Props {
    auth: any;
    postLogin(params, cb) : void;
}
export class AuthPage extends React.Component<Props, {}> {
    public doLogin() {
        const params = {
            username: 'nienow.reva',
            password: 'nganthu'
        }
        const cb = (res) => {
            console.log(res);        
            jwt.setStorage(res.token);
            window.location.href = `/dashboard.html`;
        }
        this.props.postLogin(params, cb);
    }

    render() {
        
        return (
            <div>
                <h1>login</h1>
                <Button 
                variant="primary"
                onClick={() => {
                    this.doLogin();
                }}
                >
                    Login
                </Button>
            </div>
        );
    }
}
