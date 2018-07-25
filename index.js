function scuberGreetingForFeet(someNumber) {
  let fare
  if (someNumber < 400) {
    fare = "This one is on me!"
  }
  else if (someNumber < 2000) {
    fare = "I will gladly take your thirty bucks."
  }
  else if (someNumber < 2500) {
    fare = "No can do."
  }
  return fare
}
