// Your js goes here
var lists = [ { thought: "ctrl a",
				author: "it  is ctrl a" },

			 { thought: "ctrl b",
			 	author: "it is ctrl b" },

			 { thought: "ctrl c",
			 	author: "it is ctrl c" }
]

function send() {
var randomNumber = Math.floor(Math.random() * lists.length);

var thought = document.getElementsByClassName("heading");
thought.innerText = lists[randomNumber].thought;

var author = document.getElementsByClassName("paragraph");
author.innerText = lists[randomNumber].author;

}
document.getElementById("button1").addEventListener("click", send);

