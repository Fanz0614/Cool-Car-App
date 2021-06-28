import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { DashBoard } from './components/Dashboard';
import { VehicleDetails } from './components/DetailPage';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={DashBoard} exact />
          <Route path="/details/:id" component={VehicleDetails} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
