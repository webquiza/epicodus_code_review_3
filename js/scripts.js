// Business logic

function roboTalk(input) {
  let userNumber = [];
  for (let i = 0; i <= input; i++) {
    
    // .toString() will return a string representing elements in userNumber.
    userNumber.push(i.toString());

    // .includes() finds if an element is included inside userNumber and returns a boolean, true or false.
    if (userNumber[i].includes("3")) {
      userNumber[i] = " Won't you be my neighbor?";
    } else if (userNumber[i].includes("2")) {
      userNumber[i] = " Boop!";
    }
  }
  return userNumber;
}

// User interface logic 

$(function() {
  $("form#intakeForm").submit(function(e) {
    e.preventDefault();

    let number = parseInt($("#input").val());

    const talk = roboTalk(number);
  
    $("#userResults").text(talk); 
    
    // reset form field to initial value
    $("form#intakeForm").trigger('reset');                                 
  });
});