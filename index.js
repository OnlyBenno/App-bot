// Requires \\
const discord = require('discord.js');
const bot = new discord.Client();

const token = 'Nzc0ODA4MTczOTE0NzUwOTg2.X6dKVw.-XELUKHEbmZFAIxgL0tlB0ctG0s';


// Bot On Ready Console \\
bot.on('ready', () => {
    console.log("Bot Is Ready"); 
    bot.user.setActivity("AnytimeMC", {type: "WATCHING"})
})




// Staff \\
let userApplications = {}

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
  
    let authorId = message.author.id;
  
    if (message.content === "!apply staff") {
        console.log(`Apply begin for authorId ${authorId}`);   
        if (!(authorId in userApplications)) {
            userApplications[authorId] = { "step" : 1}
            
            message.author.send("‏‏‎ ‎")
            message.author.send(">>> Staff Application")
            message.author.send(">>> Question 1:");
        }
  
    } else {
  
        if (message.channel.type === "dm" && authorId in userApplications) {
            let authorApplication = userApplications[authorId];
  
            if (authorApplication.step == 1 ) {
                authorApplication.answer1 = message.content;
                message.author.send(">>> Question 2:");
                authorApplication.step ++;
            }
            else if (authorApplication.step == 2) {
                authorApplication.answer2 = message.content;
                message.author.send(">>> Question 3:");
                authorApplication.step ++;
            }
            else if (authorApplication.step == 3) {
                authorApplication.answer3 = message.content;
                message.author.send(">>> Question 4:");
                authorApplication.step ++;
            }
            else if (authorApplication.step == 4) {
                authorApplication.answer4 = message.content;
                message.author.send(">>> Question 5:");
                authorApplication.step ++;
            }
            else if (authorApplication.step == 5) {
                authorApplication.answer5 = message.content;
                message.author.send(">>> Question 6:");
                authorApplication.step ++;
            }
            else if (authorApplication.step == 6) {
                authorApplication.answer6 = message.content;
                message.author.send(">>> Question 7:");
                authorApplication.step ++;
            }
            else if (authorApplication.step == 7) {
                authorApplication.answer7 = message.content;
                message.author.send(">>> Question 8:");
                authorApplication.step ++;
            }
            else if (authorApplication.step == 8) {
                authorApplication.answer8 = message.content;
                message.author.send(">>> Thank You!");
                bot.channels.cache.get("774833147321647104")
                  .send(`${message.author}\n >>> Question 1: | ${authorApplication.answer1}\n Question 2: | ${authorApplication.answer2}\n Question 3: | ${authorApplication.answer3}\n Question 4: | ${authorApplication.answer4}\n Question 5: | ${authorApplication.answer5}\n Question 6: | ${authorApplication.answer6}\n Question 7: | ${authorApplication.answer7}\n Question 8: | ${authorApplication.answer8}`)
                  delete userApplications[authorId];
               
                }
          
        }
    }
});


// Police \\
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
  
    let authorId = message.author.id;
  
  
        }
    
);



bot.login(token);