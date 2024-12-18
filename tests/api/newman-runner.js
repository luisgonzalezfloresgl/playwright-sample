const path = require('path');
const newman = require('newman');

// Define the collection and environment file paths using the current directory
const collectionFile = path.resolve(__dirname, '..', '..', 'newman-data', 'create_user_only.postman_collection.json');
const environmentFile = path.resolve(__dirname, '..', '..', 'newman-data', 't2.postman_environment.json');

// Define the path for the report
const reportPath = path.resolve(__dirname, '..', '..', 'reports', 'newman-report.html');

// Define the options for the Newman run
const options = {
  collection: require(collectionFile),
  environment: require(environmentFile),
  reporters: ["cli", "htmlextra"], // Specify reporters
  reporter: {
    htmlextra: {
      export: reportPath, // Define the output path for the htmlextra report
    },
  },
};

// Run Newman
newman.run(options, function (err) {
  if (err) {
    console.error('Newman run encountered an error:', err);
    process.exit(1); // Exit with a non-zero code to indicate an error
  } else {
    console.log('Newman run completed successfully');
    console.log(`Report generated at: ${reportPath}`);
    process.exit(0); // Exit with code 0 to indicate success
  }
});
