import React from 'react';
import BNPRentals from './BNPRentals';
import rentals from './../airbnbs.json';
import Cart from './../Cart/Cart'
import ReactDOM from 'react-dom';



it('Your rental component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart BNBDATA={rentals} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
