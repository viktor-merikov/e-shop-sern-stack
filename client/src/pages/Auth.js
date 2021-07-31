import React, {useContext, useState} from 'react';
import {Card, Container, Form, Button, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            const userData = isLogin ? await login(email, password) : await registration(email, password);
            user.setUser(userData);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center"
                       style={{height: window.innerHeight - 54}}>
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control className="mt-2"
                                      value={email}
                                      onChange={e => setEmail(e.target.value)}
                                      placeholder="Enter your e-mail..."/>
                        <Form.Control className="mt-2"
                                      value={password}
                                      onChange={e => setPassword(e.target.value)}
                                      type="password"
                                      placeholder="Enter your password..."/>
                        <Row className="d-flex justify-content-between align-items-center mt-3 ps-3">
                            {isLogin ?
                                <div className="text-center">
                                    Create account: <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                                </div>
                                :
                                <div>
                                    Have account?: <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
                                </div>
                            }
                            <Button className="mt-3"
                                    onClick={click}
                                    variant={"outline-success"}>
                                {isLogin ? 'Sign In' : 'Sign Up'}
                            </Button>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </div>
    );
});

export default Auth;
