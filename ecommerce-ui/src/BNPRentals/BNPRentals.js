import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BNPRentals.css';

const propTypes = {
    rental: PropTypes.object
}



class BNPRentals extends Component {
    constructor(props){
        super(props);
        this.state = {
            added: false,
            removed: true
        }
    }
//const ratingpercentage =  (({this.props.rental.rating.stars}/ 5) * 100) ;
    addRental = () => {
        this.setState({
            added: true,
            removed:false
        });
        this.props.setCart(this.props.rental.payment.cost);
    }

    removeRental = () => {
        this.setState({
            added: false,
            removed: true
        });
        this.props.setCart(-this.props.rental.payment.cost);
    }

 setRatings() {
   return (this.props.rental.rating.stars/5)*100 + '%';
 }


    render() {
        return (
          <div className="Rental">
              <div>
                  <button style={this.state.removed ? {className:"Rental-button"} : {display: 'none'}}  onClick={this.addRental}>
                    <img className="cartImage" src='https://techbridge.org/tb/wp-content/uploads/2017/03/animat-shopping-cart-color.gif'></img>
                    Add to Cart</button>
                  <button style={this.state.added ? {className:"Rental-button"} : {display: 'none'}} onClick={this.removeRental}>Remove from Cart</button>
              </div>
              <img className="Rental-image" src={this.props.rental.image} alt={this.props.rental.title} />
              <div className="Rental-City">{this.props.rental.houseType} - {this.props.rental.location.city}, Country: {this.props.rental.location.country}</div>
              <div className="Rental-title">{this.props.rental.title}</div>
              <div className="Rental-City"> Host: {this.props.rental.host.name}</div>
              <div className="Rental-City">{this.props.rental.host.isSuperhost}</div>
              <div className="Rental-City">
              <div className="rating">
                <div className="rating__stars" > Ratings:
                  <div className="stars-outer">
                    <div id="star" className="star stars-inner" style={{width : this.setRatings()}}></div>

                  </div>
                </div>
              </div>

              </div>
              <div className="Rental-City">reviews: {this.props.rental.rating.reviews}</div>
              <div className="RentalPrice">${this.props.rental.payment.cost} per night - {this.props.rental.payment.description}</div>
          </div>
        );
    }
}

BNPRentals.propTypes = propTypes;

export default BNPRentals;
