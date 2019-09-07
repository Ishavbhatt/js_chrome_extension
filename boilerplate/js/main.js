var lists = [ 
				{ thought: "The most complicated achievements of thought are possible without the assistance of consciousness.",
				author: "Sigmund Freud"},

			 	{ thought: "To love someone deeply gives you strength. Being loved by someone deeply gives you courage.",
			 	author: "Lao Tzu"},

			 	{ thought: "There is nothing impossible to him who will try.",
			 	author: "Alexander the Great"},

			 	{ thought: "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
			 	author: "Eckhart Tolle"},

			 	{ thought: "Just as much as we see in others we have in ourselves.",
			 	author: "William Hazlitt"},
			 	
			 	{ thought: "To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god.",
			 	author: "Napoleon Bonaparte"},

			 	{ thought: "Variety's the very spice of life, that gives it all its flavour.",
			 	author: "William Cowper"},

			 	{ thought: "The most formidable weapon against errors of every kind is reason.",
			 	author: "Thomas Paine"},

			 	{ thought: "One who is too insistent on his own views, finds few to agree with him.",
			 	author: "Lao Tzu"},

			 	{ thought: "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.",
			 	author: "Amiel"},

			 	{ thought: "Experience is not what happens to a man. It is what a man does with what happens to him.",
			 	author: "Aldous Huxley"},

			 	{ thought: "There is never enough time to do everything, but there is always enough time to do the most important thing.",
			 	author: "Brian Tracy"},

			 	{ thought: "If you kick a stone in anger, you'll hurt your own foot.",
			 	author: "Korean Proverb"}

			];

var displayq=document.getElementById("heading");
var displaya=document.getElementById("paragraph");


function changequote() {
	let num=Math.floor(Math.random()*lists.length);
	displayq.innerHTML=lists[num].thought;
	displaya.innerHTML=lists[num].author;
}

var btn=document.getElementById("clickme");
btn.addEventListener("click", changequote);