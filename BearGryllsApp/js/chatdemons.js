window.onload = function(){ setInterval(function() {proactive()},3000) };

function proactive() {
	
}

function Message() {
	var message = document.getElementById("text-input").value;
	document.getElementById("text-input").value="";
	if (message != "") {
	    var botResponse = botReaction(message);
	    if (botResponse != "") {
	        addToChatWindow(message, "Abhishek", true, false)
	        //setTimeout(addToChatWindow(botResponse, "Bot", false),getRandomSeconds(1,4))
	        setTimeout(function () { immitateBotSearch(botResponse,false); }, 1500);
	    } else {
	        addToChatWindow(message, "Abhishek", true,true)
	    }
		
		if(message.charAt(0)=='/') {
		    setTimeout(function () { addToChatWindow(getInfoFromBot(message.substring(1)), "Bot", false,false); }, getRandomSeconds(1, 4))
		}

	}
}

function getRandomSeconds(min, max) {
    return 1000*(Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomRating(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function botReaction(message) {
    var recommendation = JSON.parse('{  "restaurants": [    {      "name": "Parklane Hotel Restaurant",      "url": "http://restA.com",      "img": "\\\\recommendationdata\\\\images\\\\parklane.jpg"    },    {      "name": "Hotel RRR Restaurant",      "url": "http://restB.com",      "img": "\\\\recommendationdata\\\\images\\\\rrr.jpg"    },    {      "name": "The Green Hotel Restaurant",      "url": "http://restB.com",      "img": "\\\\recommendationdata\\\\images\\\\green.jpg"    }  ],  "pubs": [    {      "name": "Down The Road",      "img": "\\\\recommendationdata\\\\images\\\\down.jpg"    },    {      "name": "Cafe Mojo Pub And Bistro",      "img": "\\\\recommendationdata\\\\images\\\\cafemojo.jpg"    }  ],  "hotels": [    {      "name": "Hotel Fidalgo",      "img": "\\\\recommendationdata\\\\images\\\\fidalgo.jpg"    },    {      "name": "Godwin Hotel",      "img": "\\\\recommendationdata\\\\images\\\\godwin.jpg"    },    {      "name": "The Leela Palace",      "img": "\\\\recommendationdata\\\\images\\\\leela.jpg"    }  ]}')
	if(
	contains(message,"hungry") 
	||
	contains(message,"food") 
	||
	contains(message,"starv")
	||
	contains(message,"lunch")
	||
	contains(message,"dinner")
	||
	contains(message,"eat")
	) {
		return formatBotResult("These restaurants have got some good food...!!!",recommendation.restaurants)
	}
	
	else if(
	contains(message,"daaru")
	||
	contains(message,"drinks")
	||
	contains(message,"wine")
	||
	contains(message,"pub")
	) {
		return formatBotResult("These are some pubs, I recommend...!!!",recommendation.pubs)
	}
	
	else if(
	contains(message,"boring")
	) {
		
	}
	
	else if(
	contains(message,"place to stay")
	||
	contains(message,"places to stay")
	||
	contains(message,"sleep")
	||
	contains(message, "sleepy")
    ||
	contains(message, "hotel")
    ||
	contains(message, "hotels")
	) {
		return formatBotResult("Bot has found some good hotels for you to stay...!!!",recommendation.hotels)
	}
	
	return ""
}

function formatBotResult(preMsg, recommArr) {
    var returnData = preMsg;
	returnData+='<ol>';
	for(var i in recommArr) {
		returnData+="<li style=\"margin: 10px\">"
		//	alert("<img src=\"+recommArr[i].img+\"/>")
		returnData += "<img src=\"" + recommArr[i].img + "\"/> "
        returnData+="<span>"
		returnData += "<b>"+recommArr[i].name+"</b>"
		returnData += "<div><img width=100 height=20 src=\"/Content/dist/img/" + getRandomRating(1, 5) + ".png\"/></div>"
        returnData+="</span>"
		returnData+="</li>"
	}
	return returnData+"</ol>"
}

function contains(s,sub) {
	return s.indexOf(sub)>-1
}
function getInfoFromBot(query) {
	returnData='';
	if(query=="hotel" || query=="hotels") {
		returnData+="<ol>"
		
			returnData+="<li>"
			returnData+="<img src=\"assets\\images\\hotel1.jpg\"> Lemon Tree Premier" 
			returnData+="</li>"
			
			returnData+="<li>"
			returnData+="<img src=\"assets\\images\\hotel2.jpg\"> Park PLaza Hotel"
			returnData+="</li>"
			
			returnData+="<li>"
			returnData+="<img src=\"assets\\images\\hotel3.jpg\">The Leela, Ambience Mall"
			returnData+="</li>"
			
		returnData+="</ol>"
	} else {
		return "Bot is getting implemented. No info availabe yet.";	
	}
	return returnData;
}

function addToChatWindow(data, frm, my, replyexpected) {
    var dcm = document.createElement('div');
    dcm.className="direct-chat-msg";
	
    if (my) {
        dcm.className += " right";
    }


    var dci = document.createElement('div');
    dci.className="direct-chat-info clearfix";

    var namespan = document.createElement("span");
    namespan.className = "direct-chat-name";
    if (my) {
        namespan.className+=" pull-right"
    } else {
        namespan.className += " pull-left"
    }
    namespan.innerHTML = frm;
    dci.appendChild(namespan);

    var timespan = document.createElement("span");
    timespan.className = "direct-chat-timestamp";
    if (my) {
        timespan.className += " pull-left";
    } else {
        timespan.className += " pull-right";
    }
    timespan.innerHTML = new Date().toLocaleString();
    dci.appendChild(timespan);

    dcm.appendChild(dci);

    var pic = document.createElement("img");
    pic.className = "direct-chat-img";
    pic.src = "/Content/dist/img/";
    if (frm == "Bot") {
        pic.src += "Bot.jpg";
    } else {
        pic.src += frm+".png"
    }
    dcm.appendChild(pic);

    var text = document.createElement("div");
    text.className="direct-chat-text";
    text.innerHTML=data
    dcm.appendChild(text);

    var d = document.getElementById("chat-box-main-div");
	d.appendChild(dcm);
	
	if (replyexpected && frm == "Abhishek" && data.charAt(0) != '/') {
		setTimeout(immitateWaiting,getRandomSeconds(1,3))
    }
	d.scrollTop = d.scrollHeight;
}

function immitateBotSearch(botResponse,replyexpected) {
    var innerDiv1 = document.createElement('div');
    innerDiv1.setAttribute("id", "bot-typing-div");
    innerDiv1.innerHTML = "Perhaps, Bot has got some recommendation...."

    var d = document.getElementById("chat-box-main-div");
    d.appendChild(innerDiv1);
    d.scrollTop = d.scrollHeight;

    //setTimeout(getReply, getRandomSeconds(3, 5))
    setTimeout(function () { showBotResponse(botResponse, replyexpected); }, getRandomSeconds(1, 4))
}

function showBotResponse(botResponse, replyexpected) {
    td = document.getElementById("bot-typing-div")
    td.parentNode.removeChild(td);
    addToChatWindow(botResponse, "Bot", false, replyexpected);
}

function immitateWaiting() {
	var innerDiv1 = document.createElement('div');
	innerDiv1.setAttribute("id","typing-div");
	innerDiv1.innerHTML="Palash is typing..."
	
	var d = document.getElementById("chat-box-main-div");
	d.appendChild(innerDiv1);
	d.scrollTop = d.scrollHeight;

	setTimeout(getReply,getRandomSeconds(3,5))
}

function getReply() {
	td = document.getElementById("typing-div")
	td.parentNode.removeChild(td);
	
	addToChatWindow("Some random reply", "Palash", false,true);

}