/**
 * 对象参数转换成参数数组
 * 
 * @param {any} obj 
 * @param {any} keyStr 
 */
function tfmParam(obj, keyStr) {
    var keyArr = keyStr.split(','),
        tempArr;
    keyArr.forEach(function (key) {
        tempArr.push(obj[key] || '');
    });
}
module.exports = tfmParam;