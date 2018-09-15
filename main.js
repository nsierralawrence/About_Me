"use strict";

// The very first question to get the user engaged
var Greeting = prompt('Hello! Who are you?');
console.log('Hello! Who are you?' + Greeting);
alert(' ok then ' + Greeting + ', you seem like a good time. Welcome to my page, stick around and play along. Just a few guess questions about that one guy Ramses. Just guess Yes or No. ');

//question about competition

var PrimeraQ = prompt('Has Ramses ever won a competition like golden gloves, Autocross, or Yugioh tournament?');
console.log('Has Ramses ever won a competition like golden gloves, Autocross, or Yugioh tournament?' + PrimeraQ);

while(!PrimeraQ){
    PrimeraQ = prompt('Please play along and answer yes or no.')
}

if(PrimeraQ === 'yes'){
alert('Nah wrong....no golden gloves...I did meet the legendary Julio Cesar Chavez Sr. though.. Autocross, somewhat close but no. Yugioh.. Yes.. dominated! but it doesnt count, because he let his friend use his deck and play for him.')
} else if(PrimeraQ === 'no'){
    alert('That is right, I am a big time LOSER.');
} else {
    alert('You must answer yes or no');
}

// question about craft
var SegundaQ = prompt('Does Ramses know how to sow or a bit of capentry?');
console.log('Does Ramses know how to sow or capentry?' + SegundaQ);
while(!SegundaQ){
    SegundaQ = prompt('Please play along and answer yes or no.')
}

if(SegundaQ === 'yes'){
alert('nope.. I have no talent. I did rebuild a 1966 volkswagen beetle, and it was so beautiful.');
} else if(SegundaQ === 'no'){
    alert('Correct, aircooled VWs is all my hands are able to rebuild. I am no craftsman just a weekend mechanic.');
} else {
    alert('Answer yes or no, come on.');
}
// question about art
var TerseraQ = prompt('Does Ramses know how to even a enjoy a museum?');
console.log('Does Ramses know how to even a enjoy a museum?' + TerseraQ);
while(TerseraQ){
    TerseraQ= prompt('Please play along and answer yes or no.')
}

if(TerseraQ === 'yes'){
alert('I very much enjoy art museums, whether they have ancient artifacts, photography similar to Estevan Oriol, or anything else someone poured their heart and soul into.')
} else if(TerseraQ === 'no'){
     alert('Wrong, Fool! I appreciate anything someone poured their heart and soul into.');
} else {
    alert('You have to answer yes or no.')
}

//question about bow hunting
var CuartaQ = prompt('Does Ramses love animals so much that he just does not enjoy eating them?');
console.log('Does Ramses love animals so much that he just does not enjoy eating them?' + CuartaQ);
while(!CuartaQ){
    CuartaQ = prompt('Please play along and answer yes or no.')
}
if(CuartaQ === 'no'){
alert('Animals are an amazing part of this world. Archery and bow hunting are very important in establishing an intimate relationship with the food we eat. I enjoy and appreciate both.')
} else if(CuartaQ === 'yes'){
    alert('Wrong, I enjoy wild animal meat.')
} else {
    alert('Answer the right way, dont be silly.')
}

//question about bobby lee
var QintaQ = prompt('Has Ramses ever had the amazing oppurtunity to ask a celebrity a few personal questions?');
console.log('Has Ramses ever had the amazing oppurtunity to ask a celebrity a few personal questions?' + QintaQ);
while(!QintaQ){
    QintaQ = prompt('Please play along and answer yes or no.')
}

if(QintaQ === 'no'){
alert('Correct.That chance has never crossed paths with me, but I did receive a lab dance by the one the greatest stand up comedians of today..Bobby Lee!!')
} else if(QintaQ === 'yes'){
    alert('Nope, I have never cared about movie stars. Just stand up comedians.')
} else {
    alert('You must answer yes or no.')
}

//guess number of states
var StatesCounter = 4;
var numStates = 21;
var NumguessQ;

do{
NumguessQ = parseInt(prompt('How many states has Ramses enjoyed his time in?'));
if(numStates === NumguessQ){
    alert('You got it.cool!')
    break;
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



// multiple choice question

var PetCounter = 6;
var pets = ['Iguanas', 'Dogs', 'Cats', 'Turtles', 'Pigeons', 'Chickens']
var Petgame = false;


do{
    var PetAnswer = prompt('What kind of pets has Ramses had in his life so far?')
    
for(var i = 0; i < pets,length; i++){
    if(pets[i] === PetAnswer){
        Petgame = true;
    } 
if(Petgame){
    alert('You are right!');
}else{
    alert('Wrong, try again.');
} PetCounter--;
}}
while(PetCounter > 0 && !Petgame);

if(Petgame || !Petgame){
alert('You got them all wrong, I have had Iguanas, Dogs, Cats, Turtles, Pigeons, Chickens.')
        }