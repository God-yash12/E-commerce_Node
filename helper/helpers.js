
function inc(value){
    return parseInt(value) + 1
}

function ifElse(arg1, arg2, options){
    return arg1 == arg2 ? options.fn(this) : options.inverse(this);
}


module.exports = { 
    inc,
    ifElse,
 }  