//ShoppingCart.js

//goals: we want when a button is clicked inside individualGame.js, for that click to register and add a number to the cart
//do we need to receive the api call here as well to have the information to know what is being added?

//Shopping cart will be a direct child of App.js

//add event handler to buttons in IndividualGame.js

//in Shopping cart, create state to track and push into the array 
//from ShoppingCart, pass an anonymous function down to IndividualGame.js to fill 
     //inside IndividualGames, call that empty function, and plug in an object that you want to send back up to shopping cart 
     //inside shoppingCart, use the push() method to add to the array 
// import { useState } from 'react';

// function ShoppingCart(){

//      const [cartItem, setCartItem] = useState([]);

//      return(
//           <div>
//                <h3>Added to the Cart</h3>
//           </div>
//      )
// }

// export default ShoppingCart;