./node_modules/.bin/babel client.js > babelified_client.js
browserify babelified_client.js > client.js.browserified
browserify unit_tests.js > unit_tests.js.browserified
browserify fixed_header.js > fixed_header.js.browserified
