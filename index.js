function scuberGreetingForFeet(distance) {
  let fare
  if (distance < 400) {
    fare = "This one is on me!"
  }
  else if (distance > 2000) {
    fare = "I will gladly take your thirty bucks."
  }
  else if (distance > 2500) {
    fare = "No can do."
  }
  return fare
}
