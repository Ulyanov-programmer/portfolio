import { elementIsExistWithLog, returnScrollbarWidth } from "./general.js";
export default class ModalWindowMenu {
  constructor(arg) {
    this.modalWindowSelector = ".modal-window";
    this.modalWindowContentClass = "modal-window__body";
    this.modalWindowActiveSelector = ".modal-window.active";
    if (!elementIsExistWithLog("ModalWindowMenu", arg.modalLinksSelector, arg.modalClosersSelector)) {
      return;
    }
    if (arg.burgerMenuSelector)
      ModalWindowMenu.burgerMenuClasslist = document.querySelector(arg.burgerMenuSelector).classList;
    ModalWindowMenu.modalLinks = document.querySelectorAll(arg.modalLinksSelector);
    for (let modalLink of ModalWindowMenu.modalLinks) {
      modalLink.addEventListener("click", () => {
        let modalId = modalLink.dataset.openModalId;
        if (modalId) {
          let modal = document.getElementById(modalId);
          this.showOrHideModal(modal);
        }
      });
    }
    ModalWindowMenu.modalElements = document.querySelectorAll(this.modalWindowSelector);
    for (let modal of ModalWindowMenu.modalElements) {
      modal.addEventListener("click", (e) => {
        let target = e.target;
        if (target.classList.contains(this.modalWindowContentClass)) {
          this.closeActiveModal(true);
        }
      });
    }
    ModalWindowMenu.modalClosers = document.querySelectorAll(arg.modalClosersSelector);
    for (let modalCloser of ModalWindowMenu.modalClosers) {
      modalCloser.addEventListener("click", () => this.closeActiveModal());
    }
    if (arg.disableOnEsc) {
      document.addEventListener("keydown", (key) => {
        if (key.code != "Escape")
          return;
        let activeModal = this.getCurrentActiveModal();
        activeModal ? this.closeActiveModal() : false;
      });
    }
  }
  showOrHideModal(modalElement) {
    let activeModal = this.getCurrentActiveModal();
    activeModal ? this.closeActiveModal(false, activeModal) : this.toggleBodyScroll(false);
    modalElement.classList.add("active");
  }
  closeActiveModal(bodyIsScrollable = true, activeModal) {
    if (activeModal == void 0)
      activeModal = this.getCurrentActiveModal();
    activeModal.classList.remove("active");
    bodyIsScrollable ? this.toggleBodyScroll(true) : false;
  }
  toggleBodyScroll(toggleScrollOn) {
    if (this.chekPossibileSwitchScroll(toggleScrollOn)) {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    } else {
      document.body.style.paddingRight = returnScrollbarWidth() + "px";
      document.body.style.overflow = "hidden";
    }
  }
  getCurrentActiveModal() {
    let activeModal = document.querySelector(this.modalWindowActiveSelector);
    return activeModal;
  }
  chekPossibileSwitchScroll(toggleOnValue) {
    if (ModalWindowMenu.burgerMenuClasslist) {
      if (!ModalWindowMenu.burgerMenuClasslist.contains("active") && toggleOnValue) {
        return true;
      } else {
        return false;
      }
    } else {
      return toggleOnValue;
    }
  }
}
