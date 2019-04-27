const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");
const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 70
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

client.on('message', async message => {
    let amount = 25000000;
    if(message.content.startsWith(prefix + "++Fozer++")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };


    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});

var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Texo`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Texo ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help`,"https://www.twitch.tv/ItzLGbot")
client.user.setStatus("dnd")
});


client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.memberCount} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.forEach(member => {
                                            let bc = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bc);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
            if(command == "bco") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.filter(r => r.presence.status !== "offline").size} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.filter(r => r.presence.status !== "offline").forEach(member => {
                                            let bco = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bco);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
});


client.on("message", async message => {
    if(message.content.startsWith(prefix + "banned")) {
        if(!message.guild) return;
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
            message.channel.send(`**\`${b}\` | ${bb}**`);
        });
    }
});
client.on("message", async message => {
    if(message.content.startsWith(prefix + "invite")) {
        let invite = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTitle("**Click Here To Invite The Bot To Your Server :sparkling_heart:**")
            .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
            message.channel.sendEmbed(invite);
    }
});


client.on("message", (message) => {
 
   if (message.content.startsWith("+new")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`أنت لديك تذكرة مفتوحة ب الطبع`);
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("+close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
      message.channel.send(` __+close__ هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب`)
          .then((m) => {
              message.channel.awaitMessages(response => response.content === '+close', {
                      max: 1,
                      time: 10000,
                      errors: ['time'],
                  })  
                  .then((collected) => {
                      message.channel.delete();
                  })  
                  .catch(() => {
                      m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                          m2.delete();
                      }, 3000);
                  });
          });
  }
 
});


client.on('message', msg => {

  if (msg.content.startsWith("+shop")) {
    msg.channel.send(`**...قريبا**`)

  }
})



client.on('message', msg => {

  if (msg.content.startsWith("+link")) {
    msg.channel.send(`**:space_invader: __Invite Link__ :space_invader:** | **https://discordapp.com/api/oauth2/authorize?client_id=556533832258420736&permissions=8&scope=bot**`)

  }
})


  client.on("message", message => {
    if (message.content === "+help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب
  
            **وصف عن البوت**
                   
         -🚀سرعه اتصال ممتازه
         -😎سهل الاستخدام
         -⚠ صيانه كل يوم
         -💵 مجاني بل كامل 
  
  ---------------------------------
                اوامر ادارية
  ---------------------------------
              +bc   | لارسال البرودكسات
 
             +clear | لحدف الرساءل من الشات
  
         +ct [name] | لانشاء روم كتابي

         +vl [name] | لاشاء روم صوتي

           +moveall |  لاحضار الكل الى رومك الصوتي

       +ban [name]  | لعمل بان لاحد افراض السيرفر
 
       +unban [name]|لفك البان من عضو الي طرته

       +mutechannel |      لقفل الشات

     +unmutechannel |لفتح الشات

    +embed RED test | كود امبد 
   ---------------------------------
                 اوامر عامية
   ---------------------------------
         + new  |  لفتح التكت

          +link | لاضافة البوت لسيرفرك

            +DS |لمعرفة مصصم البوت 

       +server  |لمعرفة معلومات حو السيرفر 

          +bot |لمعرفة معلومات حو البوت
       ** `)
   message.author.sendEmbed(embed)
   
message.channel.send('**:white_check_mark: تم الارسال في الخاص   **');

   }
   });


client.on('message', message => {

       if(message.content === prefix + "+mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//viper
    if(message.content === prefix + "+unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
                }
                
         
       
});


client.on('message', msg => {

  if (msg.content.startsWith("+inv")) {
    msg.channel.send(`**:space_invader: __Invite Link__ :space_invader:** | **https://discordapp.com/api/oauth2/authorize?client_id=556533832258420736&permissions=8&scope=bot**`)

  }
})


client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`**:rose:  ولكم نورت السيرفر :rose:** 
  
  **:crown: اسم العضو  ${member} :crown:**  
  
  **👤  انت العضو رقم ${member.guild.memberCount} **`) 
  }).catch(console.error)
  })
  
  
  client.on('message', function(msg) {
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('🌐 **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField('🌍 ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField('🎖** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField('👤** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField('✅** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField('📝** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField('🔊** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField('👑** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField('🆔** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField('📅** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      .addField('😴** روم AFK**',`**${msg.guild.afkChannel || 'None'}**`, true)
      .addField('🙃** الايموجيات :**', `**${msg.guild.emojis.size}** \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);
      msg.channel.send({embed:embed});
    }
  });
  

client.on('message', message => {
  var prefix = "+";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "kick") {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You Dont Have **KICK_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " Kicked From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
            message.channel.sendMessage(`تم حفظ السبب وستتم مراجعته من قبل الأونر`)
client.channels.get(`ID Chat admin`).sendMessage("** تم طرد هذا الشخص من قبل " + message.guild.owner + " سبب مذكور **" + args.join("  "))
        }).catch(() => {
            message.channel.send(`:x: I cant kick this member`);
        });
    }
});


  client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('`Moved All Voice Members To Your Channel`').then(m => m.delete(4000))
 }
   });


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});


client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail('http://www.dallasfirstumc.org/wp-content/uploads/2017/06/Welcome-White_on_Blue-welcome.jpg')//member.user.avatarURL
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***اهلا وسهلا بك في السيرفر يرجى قراءة القوانين لتجنب العقاب***')
    .setColor('RANDOM')
    .setImage(member.user.avatarURL)
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});


client.on("message", (message) => {
if (message.content.startsWith("+ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("+vl")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});


client.on('message', message => {
    if(message.content === "+bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
        .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
**Users**👥 **__${client.users.size}__**
**Channels**📚 **__${client.channels.size}__** `)
               message.channel.sendEmbed(embed);
           }
});


client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكرا لاضافتي البوت لسيرفرك   **`)
      guild.owner.send(embed)
});


client.on('message', message => {
	var prefix = "+"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.channel.send({
  files: [
    "./images/met.png"
  ]
})
  
  if (!message.guild.member(user)
  .bannable) return message.reply("**I D'ont Have Permission For Ban This User**");

  message.guild.member(user).ban(7, user);


  message.channel.send(`:white_check_mark:  ${user.tag} banned from the server ! :airplane:  `)
}
});


client.on('message',message =>{
  var prefix = "+"
  var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.toLowerCase().split(" ");
    var userM = message.mentions.users.first()
    if(command == prefix + 'unban') {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**⛔ | You dont have **BAN_MEMBERS** Permission!**');
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send('**⛔ | I dont have **BAN_MEMBERS** Permission!**');
        if(!args[1]) return  message.channel.send('**ℹ  `!unban <@id>` يجب تحديد شخص**');
        if(args[1].length < 16) return message.reply('**⛔ | This ID is not id user!**');
        message.guild.fetchBans().then(bans => {
            var Found = bans.find(m => m.id === args[1]);
            if(!Found) return message.channel.send(`**⛔ | <@${message.author.id}> This preson not have any ban from this server! 🔓**`);
            message.guild.unban(args[1]);
            message.channel.send(`**✅ Successfully unban <@${args[1]}> From the server!**`);
            }

        )}
      })


client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`The King Bot`, '')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
});


client.on("message", message => {
  var prefix = "+";
  if(message.content.startsWith(prefix + "embed")) {
    

var color = message.content.split(" ")[1];
  var text = message.content.split(" ").slice(2);
    var tt = text.join(" ")
  if(!color) return message.reply("يجب كتابة لون الامبد الذي تريده");
    if(!tt) return message.reply("يجب كتابة كلام لتكراره");
  let embed = new Discord.RichEmbed()
  .setColor(color)
  .setDescription(tt)
  message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
message.channel.send("`Error`:" + Julian)
    })
  }
  });


  client.on("message", message => {
    if (message.content === "+DS") {
   
message.channel.send('**  `Texo#3834`  **');

   }
   });


  client.on("message", message => {
    if (message.content === "هلا") {
   
message.channel.send('**هلا فيك**');

   }
   });


  client.on("message", message => {
    if (message.content === "السلام عليكم") {
   
message.channel.send('**وعليكم السلام**');

   }
   });


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
