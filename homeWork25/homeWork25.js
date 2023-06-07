obj = { 
    x: 10, 
    y: 20, 
    inner: { 
        x: 20, 
        z: 30 
    }, 
    foo2: { 
        k: 23, 
        p: 13 
    } 
}

function copyObject(object){
    let copyOfObj = {};

    for (let key in object) {
        if (typeof object[key] === 'object') {
            Object.assign(copyOfObj, copyObject(object[key]));
        } else {
            copyOfObj[key] = object[key];
        }
    }

    return copyOfObj;
}

console.log(copyObject(obj));

