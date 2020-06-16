//setup
const {Client, RichEmbed}=require('discord.js');
const Discord = require('discord.js');
const client = new Client() ;
const settings = require('./settings.json');
const prefix = settings.prefix ;
const schoolEmoji = require('./schoolEmoji.json') ;

function DT(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime ;
}

//startup
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("SCIST online !!"); //set status 
});

//msg 
client.on('message',msg=>{

	//backstage
	//const backstage = msg.guild.channels.find(ch => ch.name === 'backstage');
	if (msg.channel.id !== '721003450904739880') {
		console.log(`\n[${DT()}] ${msg.author.username} -sent: [${msg}]  userID:${msg.author.id}`) ;
		client.channels.get('721003450904739880').send(`\n[${DT()}] ${msg.author.username} -sent: [${msg}]  userID:${msg.author.id}`) ;
	}

	//new adduser : cmd : /addUserMsg
	if(msg.content.startsWith(prefix+"addUserMsg")){
		const chooseEB = new RichEmbed()
			.setTitle("選擇你的學校")
			.setColor('#99bfcf')
			.setDescription(`哈囉！我是身分組(學校)選擇機，請選擇你的學校！
			╭────────────────────╮
			│台南：
			│<:TNFSH:${schoolEmoji.tnfshID}> => 台南一中    <:TNGS:${schoolEmoji.tngsID}> => 台南女中
			│<:SKSHS:${schoolEmoji.skshsID}> => 興國高中    <:CCSHS:${schoolEmoji.ccshsID}> => 家齊高中
			│<:TIVS:${schoolEmoji.tivsID}> => 台南高工    <:SHHS:${schoolEmoji.shhsID}> => 新化高中
			│
			│嘉義：
			│<:CYSH:${schoolEmoji.cyshID}> => 嘉義高中    <:CYGHS:${schoolEmoji.cygshID}> => 嘉義女中
			│<:CYIVS:${schoolEmoji.cyivsID}> => 嘉義高工
			│
			│高雄：
			│<:KSHS:${schoolEmoji.kshsID}> => 高雄中學    <:FSSH:${schoolEmoji.fsshID}> => 鳳山高中
			│<:KGHS:${schoolEmoji.kghsID}> => 高雄女中
			╰────────────────────╯
			p.s.再按一次可以取消喔
			注意：一旦選擇學校請勿更換`)
			.setFooter('by SCIST admin');  
		msg.channel.send(chooseEB) ;
		msg.delete(0); 
	}

	//<:TNGS:720946066618581033> <:TNFSH:720946074398752870> <:TIVS:720946068870660158> <:SKSHS:720946067868221501> <:SHHS:720946072553259049> <:KSHS:720946073857949757> <:KGHS:720946074424180757> <:FSSH:720946069126774856> <:CYSH:720946072305795124> <:CYIVS:720946073086066698> <:CYGHS:720946068518600754> <:CCSHS:720946066782027787>

	if(msg.author.bot){
		if(msg.embeds){
			const embedMsg = msg.embeds.find(msg => msg.title === "選擇你的學校")
			if(embedMsg){
				embedMsg.message.react(schoolEmoji.tnfshID)//tnfsh
					.then(reaction=>reaction.message.react(schoolEmoji.tngsID))//tngs
					.then(reaction=>reaction.message.react(schoolEmoji.skshsID))//skshs
					.then(reaction=>reaction.message.react(schoolEmoji.ccshsID))//ccshs
					.then(reaction=>reaction.message.react(schoolEmoji.tivsID))//tivs
					.then(reaction=>reaction.message.react(schoolEmoji.shhsID))//shhs
					.then(reaction=>reaction.message.react(schoolEmoji.cyshID))//cysh
					.then(reaction=>reaction.message.react(schoolEmoji.cygshID))//cygsh
					.then(reaction=>reaction.message.react(schoolEmoji.cyivsID))//cyivs
					.then(reaction=>reaction.message.react(schoolEmoji.kshsID))//kshs
					.then(reaction=>reaction.message.react(schoolEmoji.fsshID))//fssh
					.then(reaction=>reaction.message.react(schoolEmoji.kghsID))//kghs
					.catch(err=>console.error);
				return ;
			}
		}
	}
		
	if(msg.content.startsWith(prefix+'DM')){
		const DT = new Date();
		const newMemDM = new RichEmbed()
			.setTitle('歡迎來到SCIST，'+msg.author.username)
			.setColor('#99bfcf')
			.setDescription(`嗨囉！
							歡迎你加入SCIST的Discord伺服器
							我是伺服器機器人伊醬，請多多指教~
								啊~有件事得跟你講
							那就是記得先去伺服器新手村的學校選擇機簽到喔
							連結：https://discord.gg/PMQP7eX`)
			.setFooter('by SCIST admin'+'    '+DT.getFullYear()+'/'+(DT.getMonth()+1)+'/'+DT.getDate());
		msg.author.send(newMemDM) ;
	}
});

//addUserMsg
client.on('messageReactionAdd',(reaction,user)=>{
	if(user.bot)
	return ;

	var member = reaction.message.guild.members.find(member=>member.id===user.id) ;
	var rolename = reaction.emoji.id ;

	if(rolename==="720946074398752870"){
		if(member.roles.has("694515255103062096")){ //TNFSH
			member.removeRole("694515255103062096").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("694515255103062096").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	}
	else if(rolename==="720946066618581033"){
		if(member.roles.has("694515920143646720")){ //TNGS
			member.removeRole("694515920143646720").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("694515920143646720").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	
	}
	else if(rolename==="720946067868221501"){
		if(member.roles.has("694516158170267648")){ //SKSHS
			member.removeRole("694516158170267648").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("694516158170267648").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	}
	else if(rolename==="720946066782027787"){
		if(member.roles.has("694516328782102539")){ //CCSHS
			member.removeRole("694516328782102539").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("694516328782102539").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	}
	else if(rolename==="720946068870660158"){
		if(member.roles.has("694516488484159579")){ //TIVS
			member.removeRole("694516488484159579").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("694516488484159579").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	}
	else if(rolename==="720946072553259049"){
		if(member.roles.has("700374295469228073")){ //SHHS
			member.removeRole("700374295469228073").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("700374295469228073").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	}
	else if(rolename==="720946072305795124"){
		if(member.roles.has("694516610416902255")){ //CYHS
			member.removeRole("694516610416902255").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("694516610416902255").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	}
	else if(rolename==="720946068518600754"){
		if(member.roles.has("694516715270438954")){ //CYGSH
			member.removeRole("694516715270438954").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("694516715270438954").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	}
	else if(rolename==="720946073086066698"){
		if(member.roles.has("706128108054642749")){ //CYIVS
			member.removeRole("706128108054642749").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("706128108054642749").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	}
	else if(rolename==="720946073857949757"){
		if(member.roles.has("694516891305246822")){ //KSHS
			member.removeRole("694516891305246822").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("694516891305246822").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	}
	else if(rolename==="720946069126774856"){
		if(member.roles.has("694517009941135420")){ //FSSH
			member.removeRole("694517009941135420").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("694517009941135420").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	}
	else if(rolename==="720946074424180757"){
		if(member.roles.has("701249228386599003")){ //KGSH
			member.removeRole("701249228386599003").catch(err=>console.error);
			reaction.remove(member) ;
		}
		else{
			member.addRole("701249228386599003").catch(err=>console.error) ;
			reaction.remove(member) ;
		}
	}
});


/* Create an event listener for new guild members,the welcome bot main code */
client.on('guildMemberAdd', member => {
	console.log(`[${DT()}] ${member.displayName} added into server`) ;
	const newMemDM = new RichEmbed()
		.setTitle('歡迎來到SCIST，'+member.displayName)
		.setColor('#99bfcf')
		.setDescription(`嗨囉！
						歡迎你加入SCIST的Discord伺服器
						我是伺服器機器人伊醬，請多多指教~
						啊~有件事得跟你講
						那就是記得先去伺服器新手村的學校選擇機簽到喔
						連結：https://discord.gg/PMQP7eX`)
		.setFooter('by SCIST admin'+'    '+DT());
	member.send(newMemDM) ;
});

//login using the bot's token 
client.login(settings.token);