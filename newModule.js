function doSomething(){
    console.log("**** doSomething called from newModule.js ********")
}
function againdoSomething(){
    console.log("hii pityush")
}
// CRUD - Create,Push,Update,Delete

let arr=[]

function create(element){
    arr.push(element)
    return arr;
}

function read(){
    return arr;
}

function updateFun(index,element){
    arr[index]=element;
    return arr;
}

    function del(index){
        arr.splice(index,1);
        return arr;
    }





module.exports={ doSomething,againdoSomething,
    create,read,updateFun,
    del};
