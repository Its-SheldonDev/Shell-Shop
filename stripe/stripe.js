const stripe = require('stripe')(process.env.stripekey);

stripe.customers.create({
  email: 'contact@sheldon-dev.fr',
})
  .then(customer => console.log(customer.id))
  .catch(error => console.error(error));