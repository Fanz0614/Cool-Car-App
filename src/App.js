import React from 'react';
  import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header/index';
import { DashBoard } from './components/Dashboard/index';
import { VehicleDetails } from './components/DetailPage/index';
import { Footer } from './components/Footer/index';

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
