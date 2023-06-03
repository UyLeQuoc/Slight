require('dotenv').config();
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);

exports.handler = async (event) => {
  const { amount } = JSON.parse(event.body);


  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'vnd',
      payment_method_types: ['card'],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}