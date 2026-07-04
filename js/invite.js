import { translations } from "./data.js";
import { getCurrentLanguage } from "./language.js";
import { els } from "./utils.js";

export function createInviteLink() {
  const isLocalFile = window.location.protocol === "file:";
  const url = new URL(window.location.href);
  url.searchParams.set("invite", "oui-ou-oui");
  url.hash = "";

  if (isLocalFile) {
    return "https://date-invitation-gilt.vercel.app/?invite=oui-ou-oui";
  }

  return url.toString();
}

export function updateInviteResult() {
  const url = createInviteLink();
  els.inviteLinkEl.href = url;
  els.inviteLinkEl.textContent = url;
  els.inviteQrEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(url)}`;
}

export function copyInviteLink() {
  const url = els.inviteLinkEl.href;
  const t = translations[getCurrentLanguage()] || translations.de;
  return navigator.clipboard.writeText(url).then(() => {
    els.shareStatus.textContent = t.shareCopied || "Link kopiert!";
  }).catch((err) => {
    els.shareStatus.textContent = t.shareCopyFailed || "Kopieren fehlgeschlagen. Bitte manuell kopieren.";
    throw err;
  });
}

export function shareInviteLink() {
  const url = els.inviteLinkEl.href;
  const t = translations[getCurrentLanguage()] || translations.de;

  if (navigator.share) {
    navigator.share({
      title: t.shareDialogTitle || "Oui ou Oui Einladung",
      text: t.shareDialogText || "Meine Einladung ist fertig!",
      url
    }).catch(() => {
      els.shareStatus.textContent = t.shareCancelled || "Teilen wurde abgebrochen.";
    });
    return;
  }

  copyInviteLink().then(() => {
    els.shareStatus.textContent = t.shareUnavailable || "Teilen ist auf diesem Gerät nicht verfügbar. Link wurde kopiert.";
  }).catch(() => {
    // copyInviteLink already set an error message.
  });
}

export function initInviteActions() {
  els.copyLinkBtn?.addEventListener("click", copyInviteLink);
  els.shareLinkBtn?.addEventListener("click", shareInviteLink);
}
