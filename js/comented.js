// Step: 1;
// phone count
/*
document.getElementById("phone-increase").addEventListener("click", function () {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 749;
    document.getElementById("phone-total").innerText = "$" + phoneTotal;
  });

document.getElementById("phone-decrease").addEventListener("click", function () {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount - 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 749;
    document.getElementById("phone-total").innerText = "$" + phoneTotal;
  });
*/

// Step: 2;
// case count
/*
    document.getElementById("case-increase").addEventListener("click", function () {
        const caseInput = document.getElementById("case-count");
        const caseCount = parseInt(caseInput.value);
        const caseNewCount = caseCount + 1;
        caseInput.value = caseNewCount;
        const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = "$" + caseTotal;
  });

    document.getElementById("case-decrease").addEventListener("click", function () {
        const caseInput = document.getElementById("case-count");
        const caseCount = parseInt(caseInput.value);
        const caseNewCount = caseCount - 1;
        caseInput.value = caseNewCount;
        const caseTotal = caseNewCount * 59;
    document.getElement("case-total").innerText = "$" + caseTotal;
  });
*/

// Step: 3;
// phone count Function Added
/*
function productChange(isIncreasing) {
  const phoneInput = document.getElementById("phone-count");
  const phoneCount = parseInt(phoneInput.value);

  let phoneNewCount = phoneCount;
  if (isIncreasing == true) {
    phoneNewCount = phoneCount + 1;
  }
  if (isIncreasing == false && phoneCount > 0) {
    phoneNewCount = phoneCount - 1;
  }
  phoneInput.value = phoneNewCount;
  const phoneTotal = phoneNewCount * 749;
  document.getElementById("phone-total").innerText = "$" + phoneTotal;
}
*/

// Step: 4;
// case count Function Added
/*
function productCaseChange(isIncreasing) {
  const caseInput = document.getElementById("case-count");
  const caseCount = parseInt(caseInput.value);

  let caseNewCount = caseCount;
  if (isIncreasing == true) {
    caseNewCount = caseCount + 1;
  }
  if (isIncreasing == false && phoneCount > 0) {
    caseNewCount = caseCount - 1;
  }
  caseInput.value = caseNewCount;
  const caseTotal = caseNewCount * 59;
  document.getElementById("case-total").innerText = "$" + caseTotal;
}
*/

// Step : 5 >> script.js visited
