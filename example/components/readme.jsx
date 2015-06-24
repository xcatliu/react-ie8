var React = require('react');
var path = require('path');
var fs = require('fs');
var marked = require('marked');
const readme = marked(fs.readFileSync(path.resolve(__dirname, '../../README.md'), 'utf8'));

export default class Readme extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html: readme}}/>;
  }
};
