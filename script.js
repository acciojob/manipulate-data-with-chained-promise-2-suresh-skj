//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  // Step 1: Initial Promise resolves after 3 seconds with the array [1, 2, 3, 4]
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
    // Step 2: Filter out odd numbers after 1 second
    .then((arr) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evens = arr.filter((num) => num % 2 === 0);
          output.innerText = evens.join(","); // Update the output div
          resolve(evens);
        }, 1000);
      });
    })
    // Step 3: Multiply even numbers by 2 after 2 more seconds
    .then((evens) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = evens.map((num) => num * 2);
          output.innerText = multiplied.join(","); // Update the output div
          resolve(multiplied);
        }, 2000);
      });
    });
});
