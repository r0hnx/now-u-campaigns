import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Campaigns, Campaign, Homepage, AboutUs, NowUApp, GetInTouch } from './domain';
import { AnnounceBar, TopNav, Footer } from './components';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AnnounceBar />
        <TopNav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/campaigns" exact component={Campaigns} />
          <Route path="/campaigns/:id" exact component={Campaign} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/now-u-app" exact component={NowUApp} />
          <Route path="/get-in-touch" exact component={GetInTouch} />
          <Redirect to={'/'} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
