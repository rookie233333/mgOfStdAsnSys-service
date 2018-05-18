/**
 * 对象参数转换成参数数组
 * 
 * @param {any} obj 
 * @param {any} keyStr 
 */
function tfmParam(obj, keyStr) {
    var keyArr = keyStr.split(','),
        tempArr = [],
        tempVar;
    keyArr.forEach(function (key) {
        tempVar = obj[key]==undefined?'':obj[key];
        tempArr.push(tempVar);
    });
    return tempArr;
}
module.exports = tfmParam;