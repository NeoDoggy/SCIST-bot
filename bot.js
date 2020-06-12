//setup
const {Client, RichEmbed}=require('discord.js');
const Discord = require('discord.js');
var client = new Client ;
const settings = require('./settings.json');

//startup
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("SCIST online !!"); //set status 
});

const prefix = settings.prefix ;
//msg 
client.on('message',msg=>{
		//new adduser : cmd : /addUserMsg
		if(msg.content.startsWith(prefix+"addUserMsg")){
			const embed = new RichEmbed() ;
			   embed.setTitle("選擇你的學校") ;
			embed.setColor(2071184) ;
			embed.setDescription("哈囉！我是身分組(學校)選擇機，請選擇你的學校！\n<:TNFSH:720946074398752870> => 台南一中\n<:TNGS:720946066618581033> => 台南女中\n<:SKSHS:720946067868221501> => 興國高中\n<:CCSHS:720946066782027787> => 家齊高中\n<:TIVS:720946068870660158> => 台南高工\n<:SHHS:720946072553259049> => 新化高中\n<:CYSH:720946072305795124> => 嘉義高中\n<:CYGHS:720946068518600754> => 嘉義女中\n<:CYIVS:720946073086066698> => 嘉義高工\n<:KSHS:720946073857949757> => 高雄中學\n<:FSHS:720946069126774856> => 鳳山高中\n<:KGHS:720946074424180757> => 高雄女中\np.s.再按一次可以取消喔\n一旦選擇學校請勿更換") ;    
			msg.channel.send(embed) ;
			msg.delete(0); 
	}

	//<:TNGS:720946066618581033> <:TNFSH:720946074398752870> <:TIVS:720946068870660158> <:SKSHS:720946067868221501> <:SHHS:720946072553259049> <:KSHS:720946073857949757> <:KGHS:720946074424180757> <:FSHS:720946069126774856> <:CYSH:720946072305795124> <:CYIVS:720946073086066698> <:CYGHS:720946068518600754> <:CCSHS:720946066782027787>

		if(msg.author.bot){
			if(msg.embeds){
					const embedMsg = msg.embeds.find(msg => msg.title === "選擇你的學校")
					if(embedMsg){
						embedMsg.message.react("720946074398752870")//tnfsh
						.then(reaction=>reaction.message.react("720946066618581033"))//tngs
						.then(reaction=>reaction.message.react("720946067868221501"))//skshs
				.then(reaction=>reaction.message.react("720946066782027787"))//ccshs
				.then(reaction=>reaction.message.react("720946068870660158"))//tivs
				.then(reaction=>reaction.message.react("720946072553259049"))//shhs
				.then(reaction=>reaction.message.react("720946072305795124"))//cysh
				.then(reaction=>reaction.message.react("720946068518600754"))//cygsh
				.then(reaction=>reaction.message.react("720946073086066698"))//cyivs
				.then(reaction=>reaction.message.react("720946073857949757"))//kshs
				.then(reaction=>reaction.message.react("720946069126774856"))//fshs
				.then(reaction=>reaction.message.react("720946074424180757"))//kghs
						.catch(err=>console.error);
						return ;
					}
			}
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
/*client.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find(ch => ch.name === '新進人員');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	console.log("${member} added into server").catch(err=>console.error) ;
	channel.send(`歡迎來到T22的Discord伺服, ${member}\n\`\`\`md\n#貼心提醒\n[進入伺服要做的][請先查看以下頻道]\n1. <#info>\n2. <#注意事項>\n就醬掰\`\`\``);
});*/

//login using the bot's token 
client.login(settings.token);