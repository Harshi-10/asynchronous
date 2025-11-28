// Step 1: Define the timer function
function timer(duration, onComplete) {
  console.log(`Timer started for ${duration} ms...`);

  setTimeout(() => {
    const message = `Timer of ${duration} ms finished`;
    onComplete(message);   // Execute the callback with the message
  }, duration);
}

// Step 2: Call the function with a callback
timer(2000, function (msg) {
  console.log(msg);
});
