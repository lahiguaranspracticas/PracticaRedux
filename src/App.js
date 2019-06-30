import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar inverse staticTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Ecommerce</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>

          <Grid>
            <Row>
              <Col sm={8}>
                <ProductList />
              </Col>
              <Col sm={4}>
                <ShoppingCart />
              </Col>
            </Row>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;