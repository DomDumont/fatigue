const fs = require('fs-extra');

var source = './src/public'
var dest = './dist/public'

try
{
	fs.copySync(source,dest);
	console.log('success');
}
catch(err)
{
	console.error(err);
}
