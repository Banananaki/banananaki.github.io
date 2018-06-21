/*var eightBall = new Array[20];
eightBall[0] = "It is certain";
eightBall[1] = "It is decidedly so";
eightBall[2] = "Without a doubt";
eightBall[3] = "Yes, definitely";
eightBall[4] = "You may rely on it";
eightBall[5] = "As I see it, yes";
eightBall[6] = "Most likely";
eightBall[7] = "Outlook good";
eightBall[8] = "Yes";
eightBall[9] = "Signs point to yes";
eightBall[10] = "Reply hazy, try again";
eightBall[11] = "Ask again later";
eightBall[12] = "Better not tell you now";
eightBall[13] = "Cannot predict now";
eightBall[14] = "Concentrate and ask again.";
eightBall[15] = "Don't count on it";
eightBall[16] = "My reply is no";
eightBall[17] = "My sources say no";
eightBall[18] = "Outlook not so good";
eightBall[19] = "Very doubtful";
*/

var eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again.", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

function shake8Ball(){
    var result = Math.float(Math.random() * 20);
    return eightBall["result"];
}
