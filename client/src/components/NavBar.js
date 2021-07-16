import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>EShop</NavLink>
                {
                    user.isAuth ?
                        <Nav className="m-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"}>Admin panel</Button>
                            <Button variant={"outline-light"} className="me-lg-0" onClick={() => user.setIsAuth(false)}>Sign
                                out</Button>
                        </Nav>
                        :
                        <Nav className="m-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Sign in</Button>
                        </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
