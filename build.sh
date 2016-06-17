./node_modules/.bin/babel client.js > babelified_client.js
browserify babelified_client.js > client.min.js
browserify unit_tests.js > unit_tests.min.js
browserify fixed_header.js > fixed_header.min.js
