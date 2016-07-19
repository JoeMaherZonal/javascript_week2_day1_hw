window.onload = function(){
  main()
}

function main(){
  //sample array
  quoteArray = [
  {quote: "Visual Basic is the future!", author: "Jay Chetty"},
  {quote: "The only CSS you need to know is background-color: tomato", author: "Rick"},
  {quote: "I used the jQuery diet plugin and lost 10kg in a week.", author: "Keith"},
  {quote: "Scaffolding is nothing but a fiery hell.", author: "Val"}
  ]
  populateQuotes();
  //adds quote to page
  var inputBtn = document.getElementById("add-button");
  inputBtn.onclick = addQuote;

  //prevents refresh on submit
  var form = document.getElementById('quote-form');
  form.onsubmit = function(event){
    event.preventDefault();
    addQuote;
  }

  //targets elements within li aswell as li for deletion
  var ul = document.getElementById('quote-list'); 
  ul.addEventListener('click', function (e) {
      var target = e.target;
      while (target && target.parentNode !== ul) {
          target = target.parentNode;
          if(!target) { return; }
      }
      if (target.tagName === 'LI'){
          deleteQuote(target.firstChild.innerText)
      }
  });
  //displays input in real time
  var quoteInput = document.getElementById('quote-text-input');
  var authorInput = document.getElementById('author-text-input');
  quoteInput.onkeyup = AddQuoteRealTime;
  authorInput.onkeyup = AddCiteRealTime;

}//end of main

function AddQuoteRealTime(){
  var text = document.getElementById('quote-text-input').value;
  document.getElementById('typingQuote').innerText = text;
}

function AddCiteRealTime(){
  var text = document.getElementById('author-text-input').value;
  document.getElementById('typingCite').innerText = text;
}

function deleteQuote(innerText){
  for(innerQuote of quoteArray){
    if(innerQuote.quote === innerText){
      quoteArray.splice(quoteArray.indexOf(innerQuote), 1)
      break;
    }
  }
  populateQuotes();
}

function addQuote(){
  author = document.getElementById('author-text-input').value;
  quote = document.getElementById('quote-text-input').value;
  quoteArray.push( {'quote': quote, 'author': author} );
  console.log(quoteArray)
  populateQuotes()
}

function populateQuotes(){

  clearQuotes();
  for(quote of quoteArray){
    var ul = document.getElementById('quote-list')
    var li = document.createElement('li');
    var blockquote = document.createElement('blockquote')
    var cite = document.createElement('cite')

    cite.innerText = quote.author;
    blockquote.innerText = quote.quote;
    li.appendChild(blockquote)
    li.appendChild(cite)
    ul.appendChild(li)
  }
  //for realtime input
  addEmptyli()
}

function addEmptyli(){
  console.log("Im here!")
  var ul = document.getElementById('quote-list')
  var li = document.createElement('li');
  var blockquote = document.createElement('blockquote')
  var cite = document.createElement('cite')
  cite.id = "typingCite";
  blockquote.id = "typingQuote";
  li.appendChild(blockquote)
  li.appendChild(cite)
  ul.appendChild(li)
}

function clearQuotes(){
  var ul = document.getElementById('quote-list')
  ul.innerHTML = '';
}
