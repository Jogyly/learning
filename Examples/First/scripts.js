
function min(){
    var x = arguments[0];
    for (var i = 1; i < arguments.length; i++)
    {
        //x = x + arguments[i];
        //document.writeln(arguments[i]);
        if (arguments[i] < x)
        {
            x = arguments[i];
        }

    }
    document.writeln("result: " + x);
}

min(3, 2, 34, 23, -5, 1);

//document.write(x);