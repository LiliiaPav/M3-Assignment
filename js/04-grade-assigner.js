
let  choice = parseInt(prompt("Enter a number between 1 and 100"));
if (isNaN(choice) || choice < 1 || choice > 100) {
    console.log("Invalid input, only numbers between 1 and 100 are accepted");
  }
else {
    switch(true) {
        case (choice >= 90): 
            {console.log('You received an A');}
            break;
        case (choice >= 80):
            {console.log('You received a B');}
            break;
        case (choice >= 70):
            {console.log('You received a C');}
            break;
        case (choice >= 60):
            {console.log('You received a D');}
            break;
           case (choice < 60):
            {console.log('You received a F');}
            break; 
    }
} 


