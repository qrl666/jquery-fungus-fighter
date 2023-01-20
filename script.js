$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let attackAP = 100;

function onReady() {
  console.log(`My AP: ${attackAP}`);
  console.log(`Fungus HP: ${fungusHP}`);
  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!
  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
  $(`.attack-btn.arcane-sceptre`).on(`click`, asAttack);
  $(`.attack-btn.entangle`).on(`click`, eAttack);
  $(`.attack-btn.dragon-blade`).on(`click`, dbAttack);
  $(`.attack-btn.star-fire`).on(`click`, sfAttack);
}

function asAttack() {
  console.log(`Arcane Scepter Attack!!`);
  fungusHP -= 14;
  if (fungusHP < 0) {
    fungusHP = 0;
  }
  $(`.hp-text`).text(`${fungusHP} HP`);
  attackAP -= 12;
  if (attackAP < 0) {
    attackAP = 0;
  }
  $(`.ap-text`).text(`${attackAP} AP`);
  console.log(`My AP: ${attackAP}`);
  console.log(`Fungus HP: ${fungusHP}`);
  render();
}

function eAttack() {
  console.log(`Entangle Attack!!`);
  fungusHP -= 9;
  if (fungusHP < 0) {
    fungusHP = 0;
  }
  $(`.hp-text`).text(`${fungusHP} HP`);
  attackAP -= 23;
  if (attackAP < 0) {
    attackAP = 0;
  }
  $(`.ap-text`).text(`${attackAP} AP`);
  console.log(`My AP: ${attackAP}`);
  console.log(`Fungus HP: ${fungusHP}`);
  render();
}

function dbAttack() {
  console.log(`Dragon Blade Attack!!`);
  fungusHP -= 47;
  if (fungusHP < 0) {
    fungusHP = 0;
  }
  $(`.hp-text`).text(`${fungusHP} HP`);
  attackAP -= 38;
  if (attackAP < 0) {
    attackAP = 0;
  }
  $(`.ap-text`).text(`${attackAP} AP`);
  console.log(`My AP: ${attackAP}`);
  console.log(`Fungus HP: ${fungusHP}`);
  render();
}

function sfAttack() {
  console.log(`Star Fire Attack!!`);
  fungusHP -= 25;
  if (fungusHP < 0) {
    fungusHP = 0;
  }
  $(`.hp-text`).text(`${fungusHP} HP`);
  attackAP -= 33;
  if (attackAP < 0) {
    attackAP = 0;
  }
  $(`.ap-text`).text(`${attackAP} AP`);
  console.log(`My AP: ${attackAP}`);
  console.log(`Fungus HP: ${fungusHP}`);
  render();
}

function render() {
  if (fungusHP === 0) {
    $(`.freaky-fungus.walk`)
      .removeClass(`freaky-fungus walk`)
      .addClass(`freaky-fungus dead`);
  }
  if (attackAP === 0) {
    $(`.freaky-fungus.walk`)
      .removeClass(`freaky-fungus walk`)
      .addClass(`freaky-fungus jump`);
    $(`button`).attr(`disabled`, true);
  }
}
