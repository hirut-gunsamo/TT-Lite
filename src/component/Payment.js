
/*! **********************************************
   *import all features displayed on payPal Payment section*
   *Used a testing sandbox client id on production it should
    be a production version -->*
   ************************************************ */
  import React, { useState, useRef, useEffect } from 'react';

  function Product({ product }) {
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();
  
    useEffect(() => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: product.description,
                  amount: {
                    currency_code: 'USD',
                    value: product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            setPaidFor(true);
            console.log(order);
          },
          onError: err => {
            setError(err);
            console.error(err);
          },
        })
        .render(paypalRef.current);
    }, [product.description, product.price]);
  
    if (paidFor) {
      return (
        <div>
          <h1>Congrats, you are now a member!</h1>
        </div>
      );
    }
  
    return (
      <div>
        {error && <div>Uh oh, an error occurred! {error.message}</div>}
        <h1>
          {product.description} for ${product.price}
        </h1>
        <div ref={paypalRef} />
      </div>
    );
  }
  
  function App() {
    const membership = {
      price: 100,
      name: 'Membership Payment',
      description: 'Become a member of TresPass-Tracker',
    };
  
    return (
      <div className="App">
        <Product product={membership} />
      </div>
    );
    /*! **********************************************
     *End of PayPal Payment section*
     ************************************************ */
  }
  
  export default App;
