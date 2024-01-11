/*Switch Mod*/
let switchElems = document.querySelectorAll('.flow-switch-input');

switchElems.forEach(switchInp => {
   const label = document.createElement('label');
   label.classList.add('flow-switch-inp')
   switchInp.classList.remove('flow-switch-inp')
	 switchInp.insertAdjacentElement('beforebegin', label)
   label.appendChild(switchInp)
   const span = document.createElement('span');
   label.insertAdjacentElement('beforeend', span)
});


/*Switch Mod*/

/*Dialog Mod*/
const insModal = `<div id=alr-modal-root><div id=alr-modal-mask><div id=alr-modal-cont><img id=alr-modal-unintprogress src="better-style/src/modalprog.gif"><h4 id=alr-modal-inf-title></h4><h2 id=alr-modal-inf-symbol></h2><h2 id=alr-modal-inf-text></h2><button id=alr-modal-btn-primary>Ok</button> <button id=alr-modal-btn-secondary class=alr-modal-btn-secondary-en>Cancel</button> <button id=alr-modal-btn-secondary-disabled class=alr-modal-btn-secondary-di>Cancel</button></div></div></div>`;document.body.innerHTML = insModal + document.body.innerHTML;let alr_title = document.getElementById("alr-modal-inf-title");let alr_text = document.getElementById("alr-modal-inf-text");let alr_symbol = document.getElementById("alr-modal-inf-symbol");let alr_btn_primary = document.getElementById("alr-modal-btn-primary");let alr_btn_secondary = document.getElementById("alr-modal-btn-secondary");function modal_close(){document.getElementById("alr-modal-root").style.display = "none";document.getElementById("alr-modal-unintprogress").style.display = "none"}function runString(valueF){setTimeout(() => {eval(valueF)}, 100)}function modal_prog() {document.getElementById("alr-modal-unintprogress").style.display = "block"}

class modalFrame {
  constructor(properties) {
    Object.entries(properties).forEach(([key, value]) => {
      this[key] = value
    })
    document.getElementById("alr-modal-root").style.display = "block"
  }
  set infoTitle(value) {
    alr_title.textContent = value
  }
  set infoText(value) {
    alr_text.textContent = value
  }
  set infoSymbol(value) {
    if (value == "none") {
      alr_symbol.textContent = null
    } else if (value == "info") {
      alr_symbol.textContent = '🛈'
    } else if (value == "warn") {
      alr_symbol.textContent = '⊛'
    } else if (value == "") {
      alr_symbol.textContent = null
    } else if (value == null) {
      alr_symbol.textContent = null
    }
  }
  set onSecondary(value) {
    alr_btn_secondary.addEventListener("mouseup", function onCli() {
      runString(value)
    })
  }
  set onPrimary(value) {
    alr_btn_primary.addEventListener("mouseup", function onCli() {
      runString(value)
    })
  }
  set secondaryDisabled(value) {
    if (value == true) {
      document.getElementById("alr-modal-btn-secondary").style.display = "none"
      document.getElementById("alr-modal-btn-secondary-disabled").style.display = "block"
    } else {
      document.getElementById("alr-modal-btn-secondary").style.display = "block"
      document.getElementById("alr-modal-btn-secondary-disabled").style.display = "none"
    }
  }
}
/*Dialog Mod*/



















/* new modalFrame({
  infoTitle: "Are you sure?",
  infoText: "You are about to delete the selected test session. By clicking 'Ok' you will be forcing all examinees out of the testing session and remove all test session attributes (This action cannot be undone).",
  infoSymbol: "info",
  onSecondary: "modal_close()",
  onPrimary: "modal_prog()",
  secondaryDisabled: false
})  */












