//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
   
    .then((arr) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evens = arr.filter((num) => num % 2 === 0);
          output.innerText = evens.join(","); // Update the output div
          resolve(evens);
        }, 1000);
      });
    })
   
    .then((evens) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = evens.map((num) => num * 2);
          output.innerText = multiplied.join(",");
          resolve(multiplied);
        }, 2000);
      });
    });
});
