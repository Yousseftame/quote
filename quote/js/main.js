var quotes=[
    `“Be yourself; everyone else is already taken.”
    ― Oscar Wilde`,`“We accept the love we think we deserve.”
    ― Stephen Chbosky, The Perks of Being a Wallflower`,`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`,`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`,`“A room without books is like a body without a soul.”
    ― Marcus Tullius Cicero`,`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
    ― Bernard M. Baruch`,`“If you tell the truth, you don't have to remember anything.”
    ― Mark Twain`,`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
    ― Dr. Seuss`,`“You only live once, but if you do it right, once is enough.”
    ― Mae West`,`“Be the change that you wish to see in the world.”
    ― Mahatma Gandhi`
]


function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNumber];
}
var btnNew=document.getElementById('btnNew');
btnNew.onclick=function(){
    newQuote();
}