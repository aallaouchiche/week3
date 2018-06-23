import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import './cart.jpg';
import BNPRentals from './../BNPRentals/BNPRentals';




const propTypes = {
  BNBDATA: PropTypes.arrayOf(Object)
}

class Cart extends Component {

  constructor(props){
    super(props);
    this.state = {
      total:0
    }
    this.setCart = this.setCart.bind(this);
  }

  setCart(price) {
    this.setState({
      total: this.state.total + price
    });
  }

  render() {
    return (
      <div>
        <div className="Booking-Cart-container">
          {this.props.BNBDATA.map((rental, key) => {
            return <BNPRentals key={key} rental={rental} setCart={this.setCart}/>;
          })}
        </div>
        <h2 className='Total'>Total Price to Pay:&emsp;$  {this.state.total}</h2>
      </div>
    );
  }
}

Cart.propTypes = propTypes;

export default Cart;
