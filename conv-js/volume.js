//* Drop Down
const dropdowns = document.querySelectorAll(".dropdown");
const selected = document.querySelector(".selected");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

//* Convert
const calcBtn = document.querySelector(".calc-btn");
// calcBtn.addEventListener("click", function () {
//   const input = document.querySelector(".user-inp");
//   const result = document.querySelector(".result");
//   const selected = document.querySelector(".selected");
//   const errorMsg = document.querySelector(".error");
//   if (Number(input.value) == 0) {
//     if (selected.innerText == "-انتخاب کنید-") {
//       errorMsg.innerText = "لطفا یک واحد را انتخاب کنید.";
//       errorMsg.style.display = "block";
//       return notvalid;
//     }
//     errorMsg.innerText = "لطفا یک عدد مناسب وارد کنید.";
//     errorMsg.style.display = "block";
//     return notvalid;
//   }
//   if (selected.innerText == "متر مکعب به لیتر") {
//     result.innerText = Number(input.value) * 1000;
//     errorMsg.style.display = "none";
//   }
//   if (selected.innerText == "لیتر به متر مکعب") {
//     result.innerText = Number(input.value) / 1000;
//     errorMsg.style.display = "none";
//   }
//   if (selected.innerText == "سانتی متر مکعب به سی سی") {
//     result.innerText = Number(input.value);
//     errorMsg.style.display = "none";
//   }
//   if (selected.innerText == "لیتر به میلی لیتر") {
//     result.innerText = Number(input.value) * 1000;
//     errorMsg.style.display = "none";
//   }
//   if (selected.innerText == "میلی لیتر به لیتر") {
//     result.innerText = Number(input.value) / 1000;
//     errorMsg.style.display = "none";
//   }
//   if (selected.innerText == "گالن به لیتر") {
//     result.innerText = Number(input.value) * 4.546;
//     errorMsg.style.display = "none";
//   }
//   if (selected.innerText == "لیتر به گالن") {
//     result.innerText = Number(input.value) / 4.546;
//     errorMsg.style.display = "none";
//   } else {
//     errorMsg.innerText = "خطایی در محاسبه به وجود آمد";
//     errorMsg.style.display = "block";
//   }
// });
const volumeFunc = function () {
  const input = document.querySelector(".user-inp");
  const result = document.querySelector(".result");
  const selected = document.querySelector(".selected");
  const errorMsg = document.querySelector(".error");
  if (Number(input.value) == 0) {
    if (selected.innerText == "-انتخاب کنید-") {
      errorMsg.innerText = "لطفا یک واحد را انتخاب کنید.";
      errorMsg.style.display = "block";
      return notvalid;
    }
    errorMsg.innerText = "لطفا یک عدد مناسب وارد کنید.";
    errorMsg.style.display = "block";
    return notvalid;
  }
  if (selected.innerText == "متر مکعب به لیتر") {
    result.innerText = Number(input.value) * 1000;
    errorMsg.style.display = "none";
    return valid;
  }
  if (selected.innerText == "لیتر به متر مکعب") {
    result.innerText = Number(input.value) / 1000;
    errorMsg.style.display = "none";
    return valid;
  }
  if (selected.innerText == "سانتی متر مکعب به سی سی") {
    result.innerText = Number(input.value);
    errorMsg.style.display = "none";
    return valid;
  }
  if (selected.innerText == "لیتر به میلی لیتر") {
    result.innerText = Number(input.value) * 1000;
    errorMsg.style.display = "none";
    return valid;
  }
  if (selected.innerText == "میلی لیتر به لیتر") {
    result.innerText = Number(input.value) / 1000;
    errorMsg.style.display = "none";
    return valid;
  }
  if (selected.innerText == "گالن به لیتر") {
    result.innerText = Number(input.value) * 4.546;
    errorMsg.style.display = "none";
    return valid;
  }
  if (selected.innerText == "لیتر به گالن") {
    result.innerText = Number(input.value) / 4.546;
    errorMsg.style.display = "none";
    return valid;
  } else {
    errorMsg.innerText = "خطایی در محاسبه به وجود آمد";
    errorMsg.style.display = "block";
  }
};
function handleKeyPress(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.keyCode === 13) {
    // Trigger the function when Enter is pressed
  }
}
//* copy btn
let copyText = document.querySelector(".copy-text");
let copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", function () {
  let result = copyText.querySelector(".result");
  navigator.clipboard.writeText(result.value);
});
