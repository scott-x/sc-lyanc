# sc-lyanc
utils for node.js

## How to use?
### 1.install
```
npm install sc-lyanc --save

```
### 2.require it into your js file
```
 var sc = require('sc-lyanc');

```
## API
### run(generatorFunction)
it will run step by step
```
// function example
function* (resume){
	var contents = yield fs.readFile('big.file', 'utf8', resume)
	var uppercase = contents.toUpperCase()
	yield fs.writeFile('uppercase.file',uppercase,resume)
	console.log("done");
}
```
### fetch(uri)
fetch the file data