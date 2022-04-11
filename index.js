function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function myfunction(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}