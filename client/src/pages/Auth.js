import React from 'react';
import {Card, Container, Form, Button, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {

    const isLogin = useLocation().pathname === LOGIN_ROUTE;

    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center"
                       style={{height: window.innerHeight - 54}}>
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control className="mt-2" placeholder="Enter your e-mail..."/>
                        <Form.Control className="mt-2" placeholder="Enter your password..."/>
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
                            <Button className="mt-3" variant={"outline-success"}>{isLogin ? 'Sign In' : 'Sign Up'}</Button>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Auth;
