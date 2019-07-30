var blab = $('.Happy');
var edittedText = $('.quotes')

blab.on("click", generateQuote);

var happyquotes = ["These is hope, even when your brain tells you there isn't. -John Green",
"There's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons. -Stephen Chbosky",
"For every minute you are angry you lose sixty seconds of happiness. ―Ralph Waldo Emerson"
]

function generateQuote() {
  event.preventDefault();
  console.log("youclickedonthebutton");
  var random = Math.random() * happyquotes.length;
  var rounded = Math.floor(random);
  var newCompliment = happyquotes[rounded];
  edittedText.text(newCompliment);
}



var blab1 = $('.Sad');
var edittedText = $('.quotes1')

blab1.on("click", generateQuote);

var sadquotes = ["are you doing okay? I know life can be tough. but I'm here for you! no matter what. -Unknown",
"Never give up on something that you can’t go a day without thinking about. —Sir Winston Churchill",
"Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all. – Dale Carnegie"
]

function generateQuote() {
  event.preventDefault();
  console.log("youclickedonthebutton");
  var random = Math.random() * sadquotes.length;
  var rounded = Math.floor(random);
  var newCompliment = sadquotes[rounded];
  edittedText.text(newCompliment);
}
