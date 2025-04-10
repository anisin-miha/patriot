"use client";

import { useState } from "react";

async function sendMessageToTelegram(
  name: string,
  phone: string,
  email: string,
  date: string,
  people: number,
) {
  await fetch("https://telegram-proxy-tau.vercel.app/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, email, date, people }),
  });
}

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formattedDate = new Date(date).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    try {
      await sendMessageToTelegram(name, phone, email, formattedDate, people);
      setSent(true);
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      alert("Ошибка при отправке. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSent(false);
    setName("");
    setPhone("");
    setEmail("");
    setDate("");
    setPeople(1);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      {!sent ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">
              Имя
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-semibold">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block mb-2 font-semibold">
              Предпочтительная дата
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              // required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="people" className="block mb-2 font-semibold">
              Количество человек
            </label>
            <input
              type="number"
              id="people"
              value={people}
              onChange={(e) => setPeople(parseInt(e.target.value))}
              min="1"
              // required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300 font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? "Отправка..." : "Отправить заявку"}
          </button>
        </form>
      ) : (
        <div className="text-center space-y-6">
          <p className="text-xl font-semibold text-green-700">
            ✅ Заявка отправлена!
          </p>
          <p className="text-gray-600">Мы свяжемся с вами в ближайшее время.</p>
          <button
            onClick={resetForm}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Отправить ещё одну заявку
          </button>
        </div>
      )}
    </div>
  );
}
