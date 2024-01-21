import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Statistics from './pages/Statistics';
import Order from './pages/Order';
import AddOrder from './pages/AddOrder';
import Services from './pages/Services';
import Transactions from './pages/Transactions';

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Switch>
          <Route path="/login" component={Login} />
          <RouteWrapper>
            <Sidebar />
            <ContentWrapper>
              <Header />
              <Content>
                <Switch>
                  <Route path="/statistics" component={Statistics} />
                  <Route path="/order" component={Order} />
                  <Route path="/add-order" component={AddOrder} />
                  <Route path="/services" component={Services} />
                  <Route path="/transactions" component={Transactions} />
                  <Route path="/" component={Statistics} />
                </Switch>
              </Content>
            </ContentWrapper>
          </RouteWrapper>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const RouteWrapper = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Content = styled.div`
  padding: 16px;
`;

export default App;