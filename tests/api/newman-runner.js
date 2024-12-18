const newman = require('newman');

// Define the collection and environment file paths
const collectionFile = './newman-data/create_user_only.postman_collection.json';
const environmentFile = './newman-data/t2.postman_environment.json';

// Define the options for the Newman run
const options = {
  collection: require(collectionFile),
  environment: require(environmentFile),
  reporters: ["cli", "htmlextra"], // types of reports which one want to generate.
};

// Run Newman
newman.run(options, function (err) {
  if (err) {
    console.error('Newman run encountered an error:', err);
    process.exit(1); // Exit with a non-zero code to indicate an error
  } else {
    console.log('Newman run completed successfully');
    process.exit(0); // Exit with code 0 to indicate success
  }
});