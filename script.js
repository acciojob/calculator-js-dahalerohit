//your JS code here. If required

const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#display");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.id;
    const value = btn.innerText;

    if (id === "C") {
      display.innerText = "";
    }
    else if (id === "back") {
      display.innerText = display.innerText.slice(0, -1);
    }
  
    else if (id === "equal") {
  try {
    const result = eval(display.innerText);

    // If result is Infinity or NaN, show Error
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      display.innerText = "Error";
    } else {
      display.innerText = result;
    }

  } catch {
    display.innerText = "Error";
  }
}


    else {
      display.innerText += value;
    }
  });
});

