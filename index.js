function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400){
    return "This one is on me!";
  } else if (ride > 400 && ride < 2000){
    return "That will be twenty bucks.";
  } else if (ride > 2000 && ride < 2500){
    return "I will gladly take your thirty bucks.";
  } else if (ride > 2500){
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const check = city === "NYC" ? "Ok, sounds good." : "No go.";

  return check;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let thanks;
  switch (tip) {
    case 'generous':
      thanks =  "Thank you so much.";
      break;

    case 'not as generous':
      thanks =  "Thank you.";
      break;

    default:
      thanks = "Bye."
      break;
  }

  return thanks;
}