"use strict";

var correctAnswers = 0;

// The very first question to get the user engaged
function GreetingQuestion(){
var Greeting = prompt('Hello! Who are you?');
console.log('Hello! Who are you?' + Greeting);
alert(' ok then ' + Greeting + ', you seem like a good time. Welcome to my page, stick around and play along. Just a few guess questions about that one guy Ramses. Just guess Yes or No. ');
}
GreetingQuestion();

//question about competition
function competitionQuestion(){
var PrimeraQ = prompt('Has Ramses ever won a competition like golden gloves, Autocross, or Yugioh tournament?');
console.log('Has Ramses ever won a competition like golden gloves, Autocross, or Yugioh tournament?' + PrimeraQ);

while(!PrimeraQ){
    PrimeraQ = prompt('Please play along and answer yes or no.')
}

if(PrimeraQ === 'yes'){
alert('Nah wrong....no golden gloves...I did meet the legendary Julio Cesar Chavez Sr. though.. Autocross, somewhat close but no. Yugioh.. Yes.. dominated! but it doesnt count, because he let his friend use his deck and play for him.')
} else if(PrimeraQ === 'no'){
    alert('That is right, I am a big time LOSER.');
    correctAnswers++;
} else {
    alert('You must answer yes or no');
}
}
competitionQuestion();

// question about craft
function craftQuestion(){
var SegundaQ = prompt('Does Ramses know how to sow or a bit of capentry?');
console.log('Does Ramses know how to sow or capentry?' + SegundaQ);
while(!SegundaQ){
    SegundaQ = prompt('Please play along and answer yes or no.')
}

if(SegundaQ === 'yes'){
alert('nope.. I have no talent. I did rebuild a 1966 volkswagen beetle, and it was so beautiful.');
} else if(SegundaQ === 'no'){
    alert('Correct, aircooled VWs is all my hands are able to rebuild. I am no craftsman just a weekend mechanic.');
    correctAnswers++;
} else {
    alert('Answer yes or no, come on.');
}
}
craftQuestion();

// question about art
function museumQuestion(){
var TerseraQ = prompt('Does Ramses know how to even a enjoy a museum?');
console.log('Does Ramses know how to even a enjoy a museum?' + TerseraQ);
while(!TerseraQ){
    TerseraQ= prompt('Please play along and answer yes or no.').toLowerCase();
}

if(TerseraQ === 'yes'){
alert('I very much enjoy art museums, whether they have ancient artifacts, photography similar to Estevan Oriol, or anything else someone poured their heart and soul into.')
correctAnswers++;
} else if(TerseraQ === 'no'){
     alert('Wrong, Fool! I appreciate anything someone poured their heart and soul into.');
} else {
    alert('You have to answer yes or no.')
}
}

museumQuestion();

//question about bow hunting
function bowHuntingQuestion(){
var CuartaQ = prompt('Does Ramses love animals so much that he just does not enjoy eating them?');
console.log('Does Ramses love animals so much that he just does not enjoy eating them?' + CuartaQ);
while(!CuartaQ){
    CuartaQ = prompt('Please play along and answer yes or no.')
}
if(CuartaQ === 'no'){
alert('Animals are an amazing part of this world. Archery and bow hunting are very important in establishing an intimate relationship with the food we eat. I enjoy and appreciate both.')
correctAnswers++;
} else if(CuartaQ === 'yes'){
    alert('Wrong, I enjoy wild animal meat.')
} else {
    alert('Answer the right way, dont be silly.')
}
}

bowHuntingQuestion();

//question about bobby lee
function bobbyLeeQuestion(){
var QintaQ = prompt('Has Ramses ever had the amazing oppurtunity to ask a celebrity a few personal questions?');
console.log('Has Ramses ever had the amazing oppurtunity to ask a celebrity a few personal questions?' + QintaQ);
while(!QintaQ){
    QintaQ = prompt('Please play along and answer yes or no.')
}

if(QintaQ === 'no'){
alert('Correct.That chance has never crossed paths with me, but I did receive a lab dance by the one the greatest stand up comedians of today..Bobby Lee!!')
correctAnswers++;
} else if(QintaQ === 'yes'){
    alert('Nope, I have never cared about movie stars. Just stand up comedians.')
} else {
    alert('You must answer yes or no.')
}
}
bobbyLeeQuestion();

//guess number of states
function statesQuestions(){

var StatesCounter = 4;
var numStates = 21;
var NumguessQ;

do{
NumguessQ = parseInt(prompt('How many states has Ramses enjoyed his time in?'));
if(numStates === NumguessQ){
    alert('You got it.cool!')
    break;
    correctAnswers++;
} else if(NumguessQ < numStates){
    alert('Too low, try again.');
}else{
    alert('Too high try again.');
}
StatesCounter--;
}while(numStates !== NumguessQ && StatesCounter > 0);

if(StatesCounter === 0){
    alert('I have seen 21 states and driven cross country 4 times in my little Scion XB.')
}


console.log(numStates === NumguessQ);
}
statesQuestions();


// multiple choice question
function petsQuestion(){
var PetCounter = 6;
var pets = ['iguana', 'dog', 'cat', 'turtle', 'pigeon', 'chicken'];
var Petgame = false;


do{
    var PetAnswer = prompt('What kind of pets has Ramses had in his life so far?');
    
for(var i = 0; i < pets.length; i++){
    if(pets[i] === PetAnswer){
        Petgame = true;
    } 
}
if(Petgame){
    alert('You are right!');
    correctAnswers++;
}else{
    alert('Wrong, try again.');
} PetCounter--;
}
while(PetCounter > 0 && !Petgame);

if(Petgame || !Petgame){
alert('You got them all wrong, I have had Iguanas, Dogs, Cats, Turtles, Pigeons, Chickens.')
        }
}

petsQuestion(); 

var totalQuestions = 7;
alert('You got ' + correctAnswers + 'out of '+ totalQuestions + 'correct ' + Greeting + '.');