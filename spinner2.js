setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\  ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 1500); 

// I want to repeat setTimeout 8 times 
let lineAnimation = ['\r|   ','\r/   ', '\r-   ', '\r\\   ', '\r|   '];
for (let i = 0, i < lineAnimation.length, i++) {
  let char = lineAnimation[i];
  setTimeout(() => process.stdout.write(char), timer += 50);
}

for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), timer += 50);
}
setTimeout(() => console.log(), timer + 50); // since 50 was incremented each time, we need to increment this final console.log by 50 in the setTimeout function
