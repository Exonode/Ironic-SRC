'use strict';
function currencyName (amount) {
    let name = " Shekel";
    return amount === 1 ? name : name + "s";
}
function getMoney(user) {
    if (database.get('money', user) === undefined) return 0;
    return database.get('money', user);
}
function giveMoney(user, amount) {
    user.money = getMoney + amount;
}
function takeMoney(user, amount) {
    user.money = getMoney - amount;
}
exports.casino = {
  wheels: {
    scrubs: [-5,-4,-3,-2,-2,-1,-1,-1,-1,+1,+1,+3,+3,+3,+5],
    wealth: [-400,-100,-100,-50,-50,-25,-25,+50,+200,+200,+300],
    diversity: [-40,-20,-10,-15,-4,-2,-1,+2,+20,+30,+50],
    balance: [-30,-20,-10,-5,-5,-5,-2,-1,+3,+15,+30,+30],
},
spinWheel: function (wheel) {
    return utils.rand(wheel);
},
roulColors: ['black','red','blue','yellow','green'],
};

exports.currencyName = currencyName;
exports.getMoney = getMoney;
exports.giveMoney = giveMoney;
exports.takeMoney = takeMoney;
exports.globalname = 'economy';
