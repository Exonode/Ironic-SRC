'use strict';
function currencyName (amount) {
    let name = " Shekel";
    return amount === 1 ? name : name + "s";
}
function getMoney(user) {
    Db('money').get(user.id, 0)
}
function giveMoney(user, amount) {
    Db('money').set(user.userid, Db.get('money').get(user.userid, 0) + amount);
}
function takeMoney(user, amount) {
    Db('money').set(user.userid, Db.get('money').get(user.userid, 0) - amount);
}
exports.casino = {
  wheels: {
    scrubs: [-5,-4,-3,-2,-2,-1,-1,-1,-1,+1,+1,+3,+5,+5,+5],
    wealth: [-400,-100,-100,-50,-50,-25,-25,+25,+50,+50,+200,+200,+300],
    diversity: [-50,-20,-10,-15,-4,-2,-1,+2,+20,+30,40,+50],
    balance: [-30,-20,-10,-5,-5,-5,-2,-1,+1,+1,+3,+5,+10,+15,+30,+30],
},
spinWheel: function (wheel) {
    return utils.rand(wheel);
},
validRouletteTargets: {
            'help': 'help',
            'create': 'create',
            'betoptions': 'betoptions',
            'spin': 'spin',
            'bet': 'bet',
            'end': 'end',
        },
validRouletteBets: {
            "red": "red",
            "black": "black",
            "green": "green",
            "odd":  "odd",
            "even": "even",
            "low":  "low",
            "high": "high",
            "doz1": "doz1",
            "doz2": "doz2",
            "doz3": "doz3",
            "col1": "col1",
            "col2": "col2",
            "col3": "col3"
        },
RouletteHelp: '|raw|<div class="infobox">♥ /roulette create -- Opens the Table [Room Driver and Above]<br>♥ / roulette bet [bucks], [section] -- Bet on this section.<br>♥ /roulette betting -- Guide on Betting<br>♥ /roulette end -- Ends the wheel<br>♥ /roulette help -- Shows this command<br><br>Roulette Plugin by Bandi and K-Vyn</div>'
};

exports.currencyName = currencyName;
exports.getMoney = getMoney;
exports.giveMoney = giveMoney;
exports.takeMoney = takeMoney;
exports.globalname = 'economy';
