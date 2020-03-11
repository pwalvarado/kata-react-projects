var delay = function (firstArg) {
    return function (secArg) {
        return (firstArg + secArg)
    }
};
module.exports = delay;