import { Mpesa } from "mpesa-api";

const mpesa = new Mpesa(credentials, environment);

const credentials = {
    clientKey: process.env.mpesaClientKey,
    clientSecret: process.env.mpesaClientSecret,
    initiatorPassword: process.env.mpesaInitiatorPassword,
};

const environment = "production";

console.log(req.body.cartItems);

mpesa
.c2bsimulate({
    ShortCode: 9245163,
    Amount: 5,
    Msisdn: 254111225811,
  })
  .then((response) => {
    //Do something with the response
    //eg
    console.log(response);
  })
  .catch((error) => {
    //Do something with the error;
    //eg
    console.error(error);
  });