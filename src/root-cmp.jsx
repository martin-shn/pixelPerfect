import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './routes';
import {HomeHeader} from './cmps/home-header'
import {HomeFooter} from './cmps/home-footer'

export class RootCmp extends React.Component {
  render() {
    return (
      <main>
        <HomeHeader />
        <Switch>
          {routes.map(route => (
            <Route key={route.path} component={route.component} path={route.path} />
          ))}
        </Switch>
        <HomeFooter />
      </main>
    );
  }
}
