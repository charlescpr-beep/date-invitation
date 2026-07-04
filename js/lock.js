import { els, safeStorageGet, safeStorageRemove, safeStorageSet } from "./utils.js";

export function showLock(message = "Webseite wurde vorübergehend gesperrt", owner = "CharlesCpr") {
  els.lockMessageEl.textContent = owner ? `${message} durch den Owner "${owner}"` : message;
  els.lockOverlay.hidden = false;
  els.appShell?.setAttribute("aria-hidden", "true");
  els.appShell.style.pointerEvents = "none";
  document.documentElement.style.overflow = "hidden";
}

export function hideLock() {
  els.lockOverlay.hidden = true;
  els.appShell?.removeAttribute("aria-hidden");
  els.appShell.style.pointerEvents = "";
  document.documentElement.style.overflow = "";
}

export function clearLockStorage() {
  safeStorageRemove("siteLocked");
  safeStorageRemove("siteLockMessage");
  safeStorageRemove("siteLockOwner");
  initLockFromStorage();
}

export function initLockFromStorage() {
  const locked = safeStorageGet("siteLocked");
  if (locked === "true") {
    const msg = safeStorageGet("siteLockMessage");
    const owner = safeStorageGet("siteLockOwner");
    if (!msg && !owner) {
      clearLockStorage();
      hideLock();
      return;
    }
    showLock(msg || "Webseite wurde vorübergehend gesperrt", owner || "CharlesCpr");
  } else {
    hideLock();
  }
}

export function initLockControls() {
  window.lockSite = function lockSite(message, owner) {
    safeStorageSet("siteLocked", "true");
    if (message) safeStorageSet("siteLockMessage", message);
    if (owner) safeStorageSet("siteLockOwner", owner);
    initLockFromStorage();
  };

  window.unlockSite = function unlockSite() {
    safeStorageSet("siteLocked", "false");
    initLockFromStorage();
  };

  window.clearLockStorage = clearLockStorage;
  safeStorageSet("siteLocked", "false");
  initLockFromStorage();
}
