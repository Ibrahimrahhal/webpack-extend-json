
<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25" src="https://webpack.js.org/assets/icon-square-big.svg" alt="webpack">
  </a>
</div>

# Webpack Extend JSON
Webpack loader that enables you to extend JSON file.

#### Note: this loader is still under development & not ready to be used in production 

## Getting Started

To begin, you'll need to install `webpack-extend-json`:

```console
npm install --save-dev webpack-extend-json
```

Then add the loader to your `webpack` config for a specific file type. For example:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.json/i,
        loader: 'webpack-extend-json',
      },
    ],
  },
};
```
## Example 
You need to have two keys in your JSON "Extend" key which is the file to the file you want to extend & "data" key which is data in the JSON file

**Parent.json**
```js
{
  "config1": "value1",
  "config2": "value2",
  "config3": "value3",
  "config4": "value4"
}
```
**Child.json**
```js
{
  "extends": "./Parent.json", 
  "data": {
    "config3": "value3 - override",
    "config4": "value4 - override",
    "config5": "value5 - new value",
  }
}
```
the loaded JSON will look like this
```js
{
  "config1": "value1",
  "config2": "value2",
  "config3": "value3 - override",
  "config4": "value4 - override",
  "config5": "value5 - new value",
}
```
## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)
