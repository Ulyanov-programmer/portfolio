import ModalWindowMenu from "./modules/modalWindow.src.js";
new ModalWindowMenu({
  modalLinksSelector: "[data-open-modal-id]",
  modalClosersSelector: "[data-modal-closer]",
  disableOnEsc: false
});
