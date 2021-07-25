import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>EShop</NavLink>
                {
                    user.isAuth ?
                        <Nav className="ms-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"}
                                    onClick={() => history.push(ADMIN_ROUTE)}>
                                Admin panel
                            </Button>
                            <Button variant={"outline-light"}
                                    className="ms-3"
                                    onClick={() => {
                                        user.setIsAuth(false);
                                        history.push(LOGIN_ROUTE)
                                    }}>
                                Sign out
                            </Button>
                        </Nav>
                        :
                        <Nav className="ms-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"}
                                    onClick={() => user.setIsAuth(true)}>
                                Sign in
                            </Button>
                        </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
