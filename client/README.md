# VotingTutorialClient

Code based on the react/redux tutorial from http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html

In parallel I'll create a personal step by script to set up the develoment environment from scratch.

----
#### Set up the npm project

This will create the basic ```package.json``` file.
```sh
$ npm init -y
```


Creates the ```webpack``` entries in ```package.json```.
```sh
npm install --save-dev webpack webpack-dev-server
```

Add webpack basic loading configurations into ```webpack.config.js```
```javascript
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```

To test if webpack is running correctly run:
```sh
webpack
webpack-dev-server
```
and open http://localhost:8080 in the your browser.

Creates the ```babel``` entries in ```package.json```.
```sh
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

Creates the ```mocha/chai``` entries in ```package.json```.
```sh
npm install --save-dev mocha chai
```

Creates the ```jsdom``` entries in ```package.json```. This will handle the DOM iteractions without the need to use a browser.
```sh
npm install --save-dev jsdom
```

Creates the ```immutable``` entries in ```package.json```.
```sh
npm install --save immutable 
npm install --save-dev chai-immutable
```

npm install --save react react-dom

npm install --save-dev react-hot-loader