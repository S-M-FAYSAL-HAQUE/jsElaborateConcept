function explain_callback(name, age, task){
    console.log('Hello: ', name);
    console.log('Your age is: ', age);
    task();
}
function wasHand(){
    console.log('Wash your hand with soap.');
}
function takeShower(){
    console.log('Take shower with soap.');
}
explain_callback('Faysa', 26, wasHand);
explain_callback('Fahad', 18, takeShower);