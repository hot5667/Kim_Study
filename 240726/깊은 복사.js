// deepcopy 사용 방법

function deepCopy(o) {
    var result = {};
    if (typeof o === "object" && o !== null) {
        result = Array.isArray(o) ? [] : {};
        for (var i in o) {
            result[i] = deepCopy(o[i]);
        }
    } else {
        result = o;
    }
    return result;
}

var arr1 = [{
    a: 1
}, {
    b: 2
}];
var arr2 = deepCopy(arr1);

arr2[0].c = 3;

console.log(arr1);

console.log(arr2);

function deepCopy(obj) {
    function copyRecursive(current, result) {
        if (typeof current !== "object" || current === null) {
            return current;
        }

        for (var key in current) {
            if (current.hasOwnProperty(key)) {
                if (typeof current[key] === "object" && current[key] !== null) {
                    result[key] = Array.isArray(current[key]) ? [] : {};
                    result[key] = copyRecursive(current[key], result[key]);
                } else {
                    result[key] = current[key];
                }
            }
        }

        return result;
    }

    return copyRecursive(obj, Array.isArray(obj) ? [] : {});
}

var arr1 = [ { a : 1 }, { b : 2 } ]
var arr2 = deepCopy(arr1);

arr2[0].c = 3;

console.log(arr1);
console.log(arr2);