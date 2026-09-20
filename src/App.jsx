import { useEffect, useState } from "react";

export default function MimiAndTheGirlsHolidaySite() {
  const calculateTimeLeft = () => {
    const tripDate = new Date("2026-10-16T16:00:00");
    const now = new Date();
    const difference = tripDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 text-slate-800">

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">

          <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm shadow-sm">
            🪩 Our special weekend is officially booked!
          </div>

          <div className="mt-8 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-rose-500">
              Mimi & The Girls
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Mimi&apos;s Babymoon Weekend 💕
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              One special Mamma-to-be and her girlies, near and far ✨
            </p>

            <p className="mt-5 text-xl font-semibold text-rose-500">
              16 — 18 October 2026
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20">

        {/* QUICK DETAILS */}
        <section className="grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="font-bold">🏡 Our Weekend Home</h2>
            <p className="mt-2 text-sm text-gray-600">
              A cosy four-bedroom house with a garden and hot tub — all ours
              for the weekend.
            </p>
            <p className="mt-3 text-sm font-semibold text-rose-500">
              📍 51 Watson Avenue, Wouldham, Kent, ME5 9SJ
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="font-bold">🗓️ The Dates</h2>
            <p className="mt-2 text-sm text-gray-600">
              Friday 16 October — Sunday 18 October 2026
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="font-bold">🪩 The Occasion</h2>
            <p className="mt-2 text-sm text-gray-600">
              Mimi&apos;s Babymoon Weekend — a weekend of friendship, fun,
              food, music and memories.
            </p>
          </div>

        </section>

        {/* LIVE COUNTDOWN */}
        <section className="mt-12 rounded-2xl bg-black p-8 text-center text-white">
          <h3 className="text-2xl font-bold">
            The Countdown Is On ⏳
          </h3>

          <p className="mt-2 text-gray-300">
            Friday 16 October 2026
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-4 gap-3 md:gap-6">

            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-3xl font-bold md:text-4xl">
                {timeLeft.days}
              </p>
              <p className="mt-1 text-xs text-gray-300 md:text-sm">Days</p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-3xl font-bold md:text-4xl">
                {timeLeft.hours}
              </p>
              <p className="mt-1 text-xs text-gray-300 md:text-sm">Hours</p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-3xl font-bold md:text-4xl">
                {timeLeft.minutes}
              </p>
              <p className="mt-1 text-xs text-gray-300 md:text-sm">Minutes</p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-3xl font-bold md:text-4xl">
                {timeLeft.seconds}
              </p>
              <p className="mt-1 text-xs text-gray-300 md:text-sm">Seconds</p>
            </div>

          </div>

          <p className="mt-7 text-lg">
            Mimi, we&apos;re coming to celebrate you! 🩷
          </p>
        </section>

        {/* THE GIRLS */}
        <section className="mt-12">
          <div className="rounded-2xl bg-white p-8 text-center shadow">

            <h3 className="text-2xl font-bold">
              The Girls 💖
            </h3>

            <p className="mt-2 text-gray-600">
              Same girls. Different chapter. Same energy.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">

              <div className="rounded-xl bg-rose-100 p-5">
                <p className="text-lg font-bold">Mimi 👑</p>
                <p className="text-sm text-gray-600">
                  The Main Character
                </p>
              </div>

              <div className="rounded-xl bg-pink-50 p-5">
                <p className="text-lg font-bold">Koo 🪩</p>
                <p className="text-sm text-gray-600">
                  Fun & Vibes Department
                </p>
              </div>

              <div className="rounded-xl bg-pink-50 p-5">
                <p className="text-lg font-bold">Neba 👩🏽‍🍳</p>
                <p className="text-sm text-gray-600">
                  The Chef
                </p>
              </div>

              <div className="rounded-xl bg-pink-50 p-5">
                <p className="text-lg font-bold">Ayasha 🎶</p>
                <p className="text-sm text-gray-600">
                  Resident DJ
                </p>
              </div>

              <div className="rounded-xl bg-pink-50 p-5">
                <p className="text-lg font-bold">Marina 📋</p>
                <p className="text-sm text-gray-600">
                  Miss Organised
                </p>
              </div>

              <div className="rounded-xl bg-pink-50 p-5">
                <p className="text-lg font-bold">Sophia 🧘🏽‍♀️</p>
                <p className="text-sm text-gray-600">
                  The Calm One
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* HONORARY GIRLS */}
        <section className="mt-12">
          <div className="rounded-2xl bg-rose-50 p-8 text-center">

            <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">
              Always Part of the Weekend
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Near & Far 💌
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              They may not be with us physically, but they were part of the
              planning and are never far from Mimi&apos;s heart. 💕
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="font-bold">Sarlasht 💕</p>
                <p className="mt-1 text-sm text-gray-600">
                  Mimi&apos;s sister
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="font-bold">Azmin 🥂</p>
                <p className="mt-1 text-sm text-gray-600">
                  Away celebrating her 10-year anniversary
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="font-bold">Sahar 🇩🇪</p>
                <p className="mt-1 text-sm text-gray-600">
                  Sending love from Germany
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="font-bold">Dominika 🇦🇪</p>
                <p className="mt-1 text-sm text-gray-600">
                  Sending love from Dubai
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ITINERARY */}
        <section className="mt-12">

          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">
              Same Girls • Different Chapter
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              The Itinerary ✨
            </h3>

            <p className="mt-2 text-gray-600">
              Different era. Same energy. 🤎
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* FRIDAY */}
            <div className="rounded-2xl bg-white p-7 shadow">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">
                Friday 16 October
              </p>

              <h4 className="mt-2 text-2xl font-bold">
                Friday ♡
              </h4>

              <div className="mt-6 space-y-5 text-gray-600">
                <p>🚗 Arrive in Wouldham, Kent</p>
                <p>🏡 Check in & settle</p>
                <p>🥂 Food & drinks <span className="text-xs">(to be discussed)</span></p>
                <p>💕 Catch up, hang out & good conversations</p>
                <p>🫧 Hot tub time — we made it!</p>
              </div>
            </div>

            {/* SATURDAY */}
            <div className="rounded-2xl bg-rose-50 p-7 shadow">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">
                Saturday 17 October
              </p>

              <h4 className="mt-2 text-2xl font-bold">
                Saturday ♡
              </h4>

              <div className="mt-6 space-y-5 text-gray-600">
                <p>🥐 Breakfast <span className="text-xs">(to be discussed)</span></p>
                <p>💄 Get ready & glam up</p>
                <p>🪩 Mimi&apos;s Maternity Rave</p>
                <p>🍕 Dinner <span className="text-xs">(to be discussed)</span></p>
                <p>🧖🏽‍♀️ R&R — recover and recharge</p>
              </div>
            </div>

            {/* SUNDAY */}
            <div className="rounded-2xl bg-white p-7 shadow">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">
                Sunday 18 October
              </p>

              <h4 className="mt-2 text-2xl font-bold">
                Sunday ♡
              </h4>

              <div className="mt-6 space-y-5 text-gray-600">
                <p>☕ Breakfast <span className="text-xs">(to be discussed)</span></p>
                <p>🏰 Walk & explore Rochester Castle</p>
                <p>🛍️ Coffee, lunch & bits <span className="text-xs">(to be discussed)</span></p>
                <p>🚆 Head home — until next time 💕</p>
              </div>
            </div>

          </div>
        </section>

        {/* HOUSE */}
        <section className="mt-12">
          <div className="rounded-2xl bg-white p-8 shadow">

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">
                Home for the Weekend
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Our Girls&apos; House 🏡
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                Our home away from home for the weekend — somewhere to eat,
                laugh, relax, catch up and make memories together.
              </p>
            </div>

            <div className="mt-8 grid gap-4 text-center sm:grid-cols-2 md:grid-cols-4">

              <div className="rounded-xl bg-pink-50 p-5">
                <p className="text-2xl">🛏️</p>
                <p className="mt-2 font-bold">4 Bedrooms</p>
              </div>

              <div className="rounded-xl bg-pink-50 p-5">
                <p className="text-2xl">🫧</p>
                <p className="mt-2 font-bold">Hot Tub</p>
              </div>

              <div className="rounded-xl bg-pink-50 p-5">
                <p className="text-2xl">🌿</p>
                <p className="mt-2 font-bold">Garden</p>
              </div>

              <div className="rounded-xl bg-pink-50 p-5">
                <p className="text-2xl">🍽️</p>
                <p className="mt-2 font-bold">Kitchen & Dining</p>
              </div>

            </div>
          </div>
        </section>

        {/* PACKING */}
        <section className="mt-12">
          <div className="rounded-2xl bg-rose-100 p-8 text-center">

            <h3 className="text-2xl font-bold">
              What To Pack 🧳
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-gray-700">
              Comfy clothes, PJs, your Maternity Rave outfit, swimwear for the
              hot tub and, most importantly, good vibes 🪩✨
            </p>

          </div>
        </section>

        {/* FINAL MESSAGE */}
        <section className="mt-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">
            Wouldham, Kent • October 2026
          </p>

          <h4 className="mt-2 text-3xl font-bold">
            Same Girls. Different Chapter. 💕
          </h4>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A weekend for Mimi — full of friendship, laughter, music,
            questionable decisions, good food and memories with the girls
            who love her most. 🪩✨
          </p>

          <p className="mt-6 font-semibold text-rose-500">
            This chapter means everything ♡
          </p>
        </section>

      </main>
    </div>
  );
}
