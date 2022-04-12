// I want to repeat setTimeout 8 times 
let lineAnimation = ['\r|   ','\r/   ', '\r-   ', '\r\\   ','\r|   ','\r/   ', '\r-   ', '\r\\   ','\r|   '];
let timer = 100;
for (let i = 0; i < lineAnimation.length; i++) {
  let char = lineAnimation[i];
  setTimeout(() => process.stdout.write(char), timer);
  timer += 200;
};
setTimeout(() => console.log(), timer + 200);
