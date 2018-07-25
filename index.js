function scuberGreetingForFeet(someNumber) {
  let result
  if (someNumber < 199) {
    result = 0;
  }
  return result
}



expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');