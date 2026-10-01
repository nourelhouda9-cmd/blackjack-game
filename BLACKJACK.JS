 let firstcard=getrandomcard()
 let secondcard=getrandomcard()
 let card=[firstcard,secondcard]
 let sum=0
 let sumEl=document.getElementById("sum-el")
 let cardEl=document.getElementById("card-el")
 let message=""



 function startgame(){
 card[0]=getrandomcard()
 card[1]=getrandomcard()
 sum=card[0]+card[1]
 randomgame()
  
 }


 function randomgame(){
 sum=0
  for(let i=0;i<card.length;i++){
     sum=sum+card[i]
  }  
  sumEl.textContent="Sum:"+" "+sum
  cardEl.textContent="Card:"+" "
  for(let j=0;j<card.length;j++){
 cardEl.textContent+=card[j]+","
  }
 if(sum<=20){
    message="do you want to draw a new card?"
 }
 else if(sum===21){
message="you've got Blackjack"
 }
 else{
    message="you're out of the game !"
 }
document.querySelector(".question").textContent=message
 }

 function newcard(){
 let dot=getrandomcard()
 card.push(dot)
 randomgame()

 }

 function getrandomcard(){
 let randomnumber=Math.floor(Math.random()*13)+1
   if(randomnumber===1){
   return 11
   }
   else if(randomnumber > 10){
     return 10
   }
   else{
     return randomnumber
   }
 }


