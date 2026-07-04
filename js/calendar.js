import { buildDateText, nextDateForDay } from "./summary.js";
import { els } from "./utils.js";

export function downloadCalendarFile() {
  const start = nextDateForDay(els.daySelect.value, els.timeSelect.value);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  const description = escapeIcsText(buildDateText()).replace(/\n/g, "\\n");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Date Einladung//Premium Date//DE",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@date-einladung.local`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:${escapeIcsText("Date ❤️")}`,
    `DESCRIPTION:${description}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ];

  const ics = lines.map((line) => foldIcsLine(line)).join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "date-einladung.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function escapeIcsText(text) {
  return text.replace(/([\\,;])/g, "\\$1");
}

function foldIcsLine(line, maxLength = 75) {
  const segments = [];
  for (let index = 0; index < line.length; index += maxLength) {
    const chunk = line.slice(index, index + maxLength);
    segments.push(index === 0 ? chunk : ` ${chunk}`);
  }
  return segments.join("\r\n");
}

function formatIcsDate(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}
