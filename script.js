let number =Math.floor(Math.random() * 3)
function getComputer(){
switch(number) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'Scissors';
    break;
  case 2:
    return 'paper';
    break;
  }
  
}
console.log(getComputer())




