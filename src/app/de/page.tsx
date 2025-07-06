export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-12 font-sans bg-white text-black">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">George Mihai Vasilescu</h1>
        <p className="text-xl text-gray-700">
          Künstler und Forscher, tätig an der Schnittstelle von Tätowierungen, Erinnerung und Zukunftstechnologie.
        </p>
        <div className="text-sm mt-4">
          Sprache: <a href="/de" className="underline hover:text-blue-600">Deutsch</a> / <a href="/en" className="underline hover:text-blue-600">English</a>
        </div>
      </header>

      <section id="about" className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Über</h2>
        <p className="max-w-2xl">
          George Mihai Vasilescu ist der Gründer des Museum of Contemporary Tattoos – einer internationalen Plattform, auf der sich Tätowierkunst mit Augmented Reality, Blockchain-Technologie und urbaner Intervention verbindet. Seine Arbeit konzentriert sich auf den Aufbau neuer Systeme kultureller Präsenz jenseits traditioneller Formate.
        </p>
      </section>

      <section id="projects" className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Ausgewählte Arbeiten</h2>
        <ul className="list-disc list-inside">
          <li>Museum of Contemporary Tattoos (Berlin / Global)</li>
          <li>KI-gesteuerte Vaults und Tattoo-Auktionen</li>
          <li>AR-Monumente im öffentlichen Raum</li>
        </ul>
      </section>

      <section id="contact" className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p>Email: georgem.vasilescu@icloud.com</p>
        <p className="mt-2">
          Instagram:{" "}
          <a
            href="https://instagram.com/nameless_ta2"
            className="text-blue-600 underline"
            target="_blank"
          >
            @nameless_ta2
          </a>
        </p>
      </section>

      <footer className="text-sm text-gray-500 flex flex-col items-center">
        <p>&copy; 2025 George Mihai Vasilescu. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  );
}
