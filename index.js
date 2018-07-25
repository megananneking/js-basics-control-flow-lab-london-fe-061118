function scuberGreetingForFeet(distance) {
  let greeting
  if (distance < 400) {
    greeting = "This one is on me!"
  }
  else if (distance > 2500) {
    greeting = "No can do."
  }
  else if (distance > 2000) {
    greeting = "I will gladly take your thirty bucks."
  }
  return greeting
}


function ternaryCheckCity(city) {
  let response
  if (city = 'NYC') {
    response = "Ok, sounds good."
  }
  else if (city !== 'NYC') {
    response = "No go."
  }
  return response
}


function switchOnCharmFromTip(tip) {
  let charm
  if (tip = 'generous') {
    charm = "Thank you so much."
  }
  else if (tip = 'not as generous') {
    charm = "Thank you."
  }
  else if (tip = '') {
    charm = "Bye."
  }
  return charm
}