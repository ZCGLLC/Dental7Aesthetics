"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  bookingEmail,
  formatDateLabel,
  getMonthMatrix,
  isSameDay,
  isSelectableDate,
  isSunday,
  monthNames,
  startOfDay,
  timeSlots,
} from "@/lib/booking";

type Status = "idle" | "sending" | "success" | "error";

const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

function bookingSuccessUrl() {
  if (typeof window === "undefined") return "";
  const url = new URL(window.location.href);
  url.searchParams.set("sent", "1");
  url.hash = "";
  return url.toString();
}

export function BookingForm() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successUrl, setSuccessUrl] = useState("");

  useEffect(() => {
    setSuccessUrl(bookingSuccessUrl());
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setStatus("success");
    }
  }, []);

  const cells = useMemo(
    () => getMonthMatrix(viewYear, viewMonth),
    [viewYear, viewMonth],
  );

  function shiftMonth(delta: number) {
    const next = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(next.getFullYear());
    setViewMonth(next.getMonth());
  }

  async function submitWithWeb3Forms(form: HTMLFormElement) {
    const data = new FormData(form);
    const firstName = String(data.get("First Name") || "").trim();
    const lastName = String(data.get("Last Name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("Phone Number") || "").trim();
    const comments = String(data.get("Comments") || "").trim();
    const appointmentDate = selectedDate ? formatDateLabel(selectedDate) : "";

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3formsKey,
        subject: `New Appointment — ${firstName} ${lastName} — ${appointmentDate} ${selectedTime}`,
        from_name: "Dental 7 Aesthetics Booking",
        email,
        "First Name": firstName,
        "Last Name": lastName,
        "Phone Number": phone,
        "Appointment Date": appointmentDate,
        "Appointment Time": selectedTime,
        Comments: comments || "—",
      }),
    });

    const result = (await response.json()) as { success?: boolean; message?: string };
    if (!response.ok || !result.success) {
      throw new Error(result.message || "Unable to send appointment request.");
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setErrorMessage("");

    if (!selectedDate || !selectedTime) {
      event.preventDefault();
      setStatus("error");
      setErrorMessage("Please select a date and time for your appointment.");
      return;
    }

    // Prefer Web3Forms when configured; otherwise native FormSubmit POST.
    if (!web3formsKey) {
      setStatus("sending");
      return;
    }

    event.preventDefault();
    setStatus("sending");

    try {
      await submitWithWeb3Forms(event.currentTarget);
      setStatus("success");
      event.currentTarget.reset();
      setSelectedDate(null);
      setSelectedTime("");
      const url = new URL(window.location.href);
      url.searchParams.set("sent", "1");
      window.history.replaceState({}, "", url.toString());
    } catch {
      setStatus("error");
      setErrorMessage(
        "We could not send your booking just now. Please try again or email dental7aesthetics@gmail.com.",
      );
    }
  }

  const appointmentDate = selectedDate ? formatDateLabel(selectedDate) : "";
  const subject = selectedDate
    ? `New Appointment — ${appointmentDate} ${selectedTime}`
    : "New Appointment Request — Dental 7 Aesthetics";

  return (
    <form
      action={`https://formsubmit.co/${bookingEmail}`}
      method="POST"
      onSubmit={onSubmit}
      className="grid gap-10 lg:grid-cols-2 lg:gap-14"
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={successUrl} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="Appointment Date" value={appointmentDate} />
      <input type="hidden" name="Appointment Time" value={selectedTime} />

      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
          Select date
        </p>
        <div className="mt-4 border border-navy-900/10 bg-white/80 p-5 md:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => shiftMonth(-1)}
              className="rounded-sm border border-navy-900/15 px-3 py-2 text-sm text-navy-900 transition hover:bg-silver-100"
              aria-label="Previous month"
            >
              ←
            </button>
            <p className="font-display text-xl text-navy-900 md:text-2xl">
              {monthNames[viewMonth]} {viewYear}
            </p>
            <button
              type="button"
              onClick={() => shiftMonth(1)}
              className="rounded-sm border border-navy-900/15 px-3 py-2 text-sm text-navy-900 transition hover:bg-silver-100"
              aria-label="Next month"
            >
              →
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-[11px] uppercase tracking-[0.14em] text-silver-500">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-7 gap-2">
            {cells.map((date, index) => {
              if (!date) {
                return <span key={`empty-${index}`} className="aspect-square" />;
              }

              const selectable = isSelectableDate(date, today);
              const selected = selectedDate ? isSameDay(date, selectedDate) : false;
              const sunday = isSunday(date);

              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  disabled={!selectable}
                  onClick={() => {
                    setSelectedDate(date);
                    setSelectedTime("");
                    setStatus("idle");
                  }}
                  className={`aspect-square rounded-sm text-sm transition ${
                    selected
                      ? "bg-navy-900 text-white"
                      : selectable
                        ? "bg-silver-100 text-navy-900 hover:bg-silver-200"
                        : "cursor-not-allowed text-silver-400 opacity-45"
                  }`}
                  aria-label={formatDateLabel(date)}
                  title={sunday ? "Closed on Sundays" : undefined}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted">
            Available Monday–Saturday. Sundays are closed except by special arrangement.
          </p>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.24em] text-navy-700/70">
          Select time
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {timeSlots.map((slot) => {
            const active = selectedTime === slot;
            return (
              <button
                key={slot}
                type="button"
                disabled={!selectedDate}
                onClick={() => {
                  setSelectedTime(slot);
                  setStatus("idle");
                }}
                className={`rounded-sm px-3 py-3 text-sm transition ${
                  active
                    ? "bg-navy-900 text-white"
                    : selectedDate
                      ? "border border-navy-900/15 bg-white text-navy-900 hover:bg-silver-100"
                      : "cursor-not-allowed border border-navy-900/10 text-silver-400"
                }`}
              >
                {slot}
              </button>
            );
          })}
        </div>

        {selectedDate && selectedTime && (
          <p className="mt-5 text-sm text-navy-800">
            Selected: <span className="font-medium">{formatDateLabel(selectedDate)}</span> at{" "}
            <span className="font-medium">{selectedTime}</span>
          </p>
        )}
      </div>

      <div className="shine-border bg-navy-900 p-7 text-white shadow-glow md:p-10">
        <h2 className="font-display text-3xl">Your details</h2>
        <p className="mt-2 text-sm text-silver-300">
          After you submit, we receive your request at {bookingEmail} and confirm your slot.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-silver-400">
              First Name
            </span>
            <input
              required
              name="First Name"
              autoComplete="given-name"
              className="mt-2 w-full border-b border-white/20 bg-transparent py-3 outline-none transition focus:border-white"
              placeholder="First name"
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-silver-400">
              Last Name
            </span>
            <input
              required
              name="Last Name"
              autoComplete="family-name"
              className="mt-2 w-full border-b border-white/20 bg-transparent py-3 outline-none transition focus:border-white"
              placeholder="Last name"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-xs uppercase tracking-[0.18em] text-silver-400">
              Email
            </span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="mt-2 w-full border-b border-white/20 bg-transparent py-3 outline-none transition focus:border-white"
              placeholder="you@email.com"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-xs uppercase tracking-[0.18em] text-silver-400">
              Phone Number
            </span>
            <input
              required
              type="tel"
              name="Phone Number"
              autoComplete="tel"
              className="mt-2 w-full border-b border-white/20 bg-transparent py-3 outline-none transition focus:border-white"
              placeholder="+92 ..."
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-xs uppercase tracking-[0.18em] text-silver-400">
              Comments
            </span>
            <textarea
              name="Comments"
              rows={4}
              className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-3 outline-none transition focus:border-white"
              placeholder="Share symptoms, preferred dentist, or anything we should know"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-8 w-full rounded-sm bg-white px-6 py-3.5 text-sm font-medium text-navy-900 transition hover:bg-silver-200 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending request…" : "Book Appointment"}
        </button>

        {status === "success" && (
          <p className="mt-4 text-sm text-silver-200">
            Thank you. Your appointment request has been sent. Our team will confirm shortly.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-200">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}
