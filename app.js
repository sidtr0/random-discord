const Discord = require('discord.js'); // discord.js library for discord API
const client = new Discord.Client(); // creates a new client
const config = require('./config.json'); // pairs up with config file for `token` and `prefix`

const Sentencer = require('sentencer'); // sentencer module: https://www.npmjs.com/package/sentencer

client.on('ready', () => {
    console.log(`Logged in!`); // initiaisation
    client.user.setActivity('with random stuff | ?help', {type: "PLAYING"}); //playing status 
});

client.on('message', message => {
    if (message.author.bot) return; // stops running the handler if the message is sent by a bot user
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // args declaration
    const command = args.shift().toLowerCase(); // makes every command input lower case
    // above are important stuff

    /* if (command === "") {

    } */

    // help command (RichEmbed)
    if (command === "help") { 
        const help = new Discord.RichEmbed()
  .setTitle("Random Helper")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("#E91E63")
  .setDescription("Here are the commands for Random Bot!")
  /*
   * Takes a Date object, defaults to current date.
   */
  .addField("Basic Commands", "`?help` - returns this message\n`?about` -  info about the bot")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Random Commands", "`?random` - returns a random adjective and noun\n`?8ball <question>` - the real 8 ball experience, now on discord! Put your question in place of `<question>` and see the magic.")
  

 
       message.channel.send(help);
    } else

    if (command === "about") {
        const about = new Discord.RichEmbed()
        .setTitle("About")
        .setColor("#E91E63")
        .setDescription("A random bot for doing random stuff.")
        .addField("About me", "A random bot for doing random stuff.\nThis bot has been developed by Drac#9901. Contact him for any suggestions or bugs about the bot.\nThis bot runs on various different NPM (Node Package Manager) modules.")
        .addField("Credits", "`?random` command works on the node module: [sentencer](https://www.npmjs.com/package/sentencer).")
        .addField("Developer's message", "\"Thanks for using (and thereby supporting) the bot. I appreciate any kind of suggestions or bug reports so feel free to DM me as it helps in improving the bot. I hope you enjoy the bot. Thanks, again! <3\" -Drac")

        message.channel.send(about);
    } else

    //using sentencer.js, we create random adjective and noun.
    if (command === "random" || command === "r") {
        var newSentencer = Sentencer.make("I am {{ an_adjective }} {{ noun }}");
        message.channel.send(newSentencer);
    } else

    // magic 8 ball
    if (message.content.startsWith(config.prefix + "8ball") || message.content.startsWith(config.prefix + "8BALL")) {
        
        function answerOf8ball() {
        var answer8ball = [" It is certain.", " It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
        return answer8ball[Math.floor(Math.random()*answer8ball.length)];
        } 

        message.channel.send(answerOf8ball());
    }
}); 

client.login();