const person= ["Alex", "Maria", "Jan"]; 
const friends= ["Christian", "Tilda", "Jonas"];
const favoriteFood= ["Sushi", "Pizza", "Spagetti"];
console.log("*******  Level1-1  *****");
console.log({person});
console.log({friends});
console.log({favoriteFood});
console.log("*******  Level1-2  *****");
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);

console.log("*******  Level1-3  *****");
console.log("Person länge ist: " + person.length);
console.log("friends länge ist: " + friends.length);
console.log("favoriteFood länge ist: " + favoriteFood.length);

console.log("*******  Level1-4  *****");
person.push("Aria");
person.push("Jakob");
friends.push("Barbara");
friends.push("Marcel");
favoriteFood.push("Supe");
favoriteFood.push("Bratling");
console.log("Neue Person:" + person);
console.log("Neue friends:" + friends);
console.log("Neue favoriteFood:" + favoriteFood);

console.log("*******  Level1-5  *****");
let geloeschtePerson=[] , geloeschteFriends=[], geloeschteFood=[];
geloeschtePerson[0] = person.pop();
geloeschtePerson[1] = person.pop();
geloeschteFriends[0] = friends.pop();
geloeschteFriends[1] = friends.pop();
geloeschteFood[0] = favoriteFood.pop();
geloeschteFood[1] = favoriteFood.pop();
console.log("erste entfernte Person ist:" + geloeschtePerson[0]);
console.log("zweite entfernte Person ist:" + geloeschtePerson[1]);
console.log("erste entfernte friends ist:" + geloeschteFriends[0]);
console.log("zweite entfernte friends ist:" + geloeschteFriends[1]);
console.log("erste entfernte favoriteFood ist:" + geloeschteFood[0]);
console.log("zweite entfernte favoriteFood ist:" + geloeschteFood[1]);


console.log("*******  Level1-6  *****");
console.log(person);
console.log(friends);
geloeschtePerson[2]= person.shift();
geloeschteFriends[2]= friends.shift();
console.log("von Person ist " + geloeschtePerson[2] + " gelöscht");
console.log("von Friends ist " + geloeschteFriends[2] + " gelöscht");
console.log(person);
console.log(friends);

console.log("*******  Level1-7 *****");
friends.unshift("Tom");
friends.unshift("Katrin");
favoriteFood.unshift("ASD");
favoriteFood.unshift("BFD");
console.log(friends);
console.log(favoriteFood);

console.log("*******  Level1-8 *****");

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."
const textArr= text.split(" ");
console.log(textArr);
const textArr2= text.split("");
console.log(textArr2);