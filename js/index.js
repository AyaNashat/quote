var newQuote =["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best"
,'So many books, so little time','You only live once, but if you do it right, once is enough.',"Be the change that you wish to see in the world"];

var currentNum

function quote() {
    var newNum;
    do {
        newNum = generate(newQuote.length); 
    } while (currentNum === newNum);

    document.getElementById("demo").innerHTML = newQuote[newNum];
    currentNum = newNum;
}

function generate(length) {
    return Math.floor(length * Math.random());
}