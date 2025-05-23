import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена — 4-trip.ru",
  description:
    "Страница, которую вы ищете, не существует. Вернитесь на главную 4-trip.ru и найдите своё идеальное путешествие!",
  openGraph: {
    title: "Страница не найдена — 4-trip.ru",
    description:
      "Ошибка 404: страница не найдена. Перейдите на главную страницу сайта 4-trip.ru.",
    url: "https://4-trip.ru/404",
    type: "website",
    images: [
      {
        url: "https://4-trip.ru/images/cover.png",
        width: 1200,
        height: 630,
        alt: "4-trip.ru",
      },
    ],
  },
  alternates: {
    canonical: "https://4-trip.ru/404",
  },
};

export default function NotFound() {
  return (
    <div className="font-sans bg-white text-gray-900 scroll-smooth min-h-screen flex flex-col">
      <Header title="" main />

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-5xl font-bold mb-6">404 — Страница не найдена</h1>
          <p className="text-lg text-gray-600 mb-8">
            Кажется, вы свернули не туда. Такой страницы не существует или она
            была перемещена.
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            На главную
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
