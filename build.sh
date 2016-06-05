#npm run babel-cli client.js > babelified_client.js
./node_modules/.bin/babel client.js > babelified_client.js
#sed -e '1,4d' babelified_client.js > tmp && mv tmp babelified_client.js
browserify babelified_client.js > browserified_client.js
