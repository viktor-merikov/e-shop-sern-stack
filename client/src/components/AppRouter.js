import React, {useContext} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {SHOP_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(user);
    return (
        <Switch>
            {user.isAuth === true && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;
