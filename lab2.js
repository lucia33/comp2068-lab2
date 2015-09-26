//require http library & url
var http = require('http');
var url = require('url');

//create server to run page
http.createServer(function (req, res) {

	//get the querystring params
	var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);    

    //check if method is correct
    if (method != 'add' && method != 'subtract' && method != 'multiply' && method != 'divide') {
    	res.write('Please input a correct method: add, subtract, multiply, or divide');
    }
    else {    	
    	//calculate result based on method
    	var result;
    	if (method == 'add') {
	    	method = '+';
	    	result = x + y;
	    }
	    	else if (method == 'subtract') {
	    		method = '-';
	    		result = x - y;
	    	}
	    		else if (method == 'multiply') {
	    			method = '*';
	    			result = x * y;
	    		}
	    			else if (method == 'divide') {
	    				method = '/';
	    				result = x / y;
	    			}
	    //output the result
	    res.write(x + ' ' + method + ' ' + y + ' = ' + result);
    }

    res.end();

}).listen(3000);

//page runs at http://localhost:3000/lab2.js?method=add&x=16&y=4