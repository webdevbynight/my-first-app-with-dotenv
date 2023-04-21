'use strict';

require('dotenv').config();

// Display the message using environment variables
console.log(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`);
