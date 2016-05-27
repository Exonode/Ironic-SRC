'use strict';

exports.commands = {

  shank: function (target, room, user) {
      let victim = target;
      let color = '#FF00FF';
    if (!victim && !this.can('broadcast') || !this.can('broadcast')) return this.errorReply('/shank - Access Denied.');
    if (!victim) return this.errorReply('Usage: /shank [user] - Shanks a user real hard.')
    if (room.id !== 'lobby') return false;

    room.addRaw("<strong><font color=\"" + color + "\">~~ " + victim + " Was Shanked! <em>ShankShankShank!</em>~~</font></strong>");
    room.Update
  },
    legitstraw: function (target, room, user) {
    	 let color = '#FF00FF';
      let img = 'http://i.imgur.com/wgHnKC2.jpg';
    if (this.user.name !== 'TheShankSkank') return this.errorReply('The command /\'legitstraw\' was unrecognized. To send a message starting with \'/legitstraw\', type \'//legitstraw\'.');
    else {
    room.addRaw("<strong><font color=\"" + color + "\"><img src=\"" + img + "\"><br><em>I'm a strawberry!</em></font></strong>");
    room.Update
    }
  },
     feelssokka: function (target, room, user) {
    	 let color = '#FF00FF';
      let img = 'http://i.imgur.com/wM4wp2l.gif';
      console.log(this.user.name)
    if (this.user.name !== 'Chief Sokka') return this.errorReply('The command /\'feelssokka\' was unrecognized. To send a message starting with \'/feelssokka\', type \'//feelssokka\'.');
    else {
    room.addRaw("<img src=\"" + img + "\" width=\"100\" height=\"100\">");
    room.Update
    }
  },
    truelove: function (target, room, user) {
      console.log(this.user.name)
    	 let color = '#FF00FF';
      let img = 'http://img.prntscr.com/img?url=http://i.imgur.com/ymfhyMf.png';
    if (this.user.name !== "Audinory") return this.errorReply('The command /\'truelove\' was unrecognized. To send a message starting with \'/truelove\', type \'//truelove\'.');
    console.log(this.user.name)
    room.addRaw("<img src=\"" + img + "\">");
    room.Update
    },

  audinoshop: function (target, room, user) {
  	if (!this.runBroadcast()) return;
  	let display = "<div class='infobox infobox-limited'>Audino regrets to inform you that his shop is unavaliable until further notice. He is thinking and planning what to do next regarding the drama and will be deep in though for a while. Ty~</div>";

					room.addRaw(display)

  },


};