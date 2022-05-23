const quotes = [
    {
        quote : "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design.",
        author : 'Elon Musk'
    },
    {
        quote : "I am who I am, and I'm focused on that, and being a great CEO of Apple",
        author : 'Tim Cook'
    },
    {
        quote : "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.",
        author : 'Warren Buffett'
    },
    {
        quote : "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
        author : 'Steve Jobs'
    },
    {
        quote : "The heart and soul of a company is creativity and innovation",
        author : 'Robert Iger'
    },
    {
        quote : "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design.",
        author : 'Elon Musk'
    },
    {
        quote : "I am who I am, and I'm focused on that, and being a great CEO of Apple",
        author : 'Tim Cook'
    },
    {
        quote : "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.",
        author : 'Warren Buffett'
    },
    {
        quote : "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
        author : 'Steve Jobs'
    },
    {
        quote : "The heart and soul of a company is creativity and innovation",
        author : 'Robert Iger'
    }
]
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

