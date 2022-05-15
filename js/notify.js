let dares = [
  "I dare you to jump 2 times",
  "I dare you to take sip of water",
  "I dare you to sit down",
];
let dares2 = [
  "You dare you to jump 2 times",
  "You dare you to take sip of water",
  "You dare you to sit down",
];

let dares3 = [
  "We dare you to jump 2 times",
  "We dare you to take sip of water",
  "We dare you to sit down",
];
let allDares = []
let levels = []
let SFW = document.getElementById('SFW');
let NSFW = document.getElementById('NSFW');
let nightOut = document.getElementById('nightOut');
console.dir(document.getElementById('NSFW'))


function onChange() {
  if(SFW.checked !== false) {
levels.push("SFW", )
dares.forEach(arrayz);
console.log(allDares)
if(NSFW.checked !== false) {
  levels.push("NSFW")
  dares2.forEach(arrayz);
  console.log(allDares)
  }
}else if(NSFW.checked !== false) {
  levels.push("NSFW" )
  dares2.forEach(arrayz);
  console.log(allDares)
}else if((SFW.checked == false)) {
allDares.splice(dares)
}

else {
  console.log("else")
}
}
console.log(allDares)
console.log(SFW.checked);
console.log(NSFW.checked);
console.log(levels);
function arrayz(item, index) {
allDares.push(item)
}
function getDare() {
  let items = allDares[Math.floor(Math.random()*allDares.length)];
  if(Notification.permission == "granted") {
    notification = new Notification(items)
  }else {
    alert("We don't yet have your permission to send notifications. Please grant the permission.")
    Notification.requestPermission();
  }
  console.log(items);
}
function NotifyMe() {
if(Notification.permission == "granted") {
let notification = new Notification("Hi!")
}else if(Notification.permission == "denied") {
alert("We need to send you notifications. please grant the permmission.")
}else if(Notification.permission == "default") {
alert("I dare you to enable notifications!")
Notification.requestPermission();
}
  }
  