export default function GermanHome() {
  return (
    <main className="relative min-h-screen px-6 py-12 font-sans bg-white text-black">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">George Mihai Vasilescu</h1>
        <p className="text-xl text-gray-700">
          Künstler und Forscher an der Schnittstelle von Tätowierung, Erinnerung und Zukunftstechnologie.
        </p>
        <p className="mt-4 text-sm">
          <a href="/en" className="underline text-blue-600">🇬🇧 English</a>
        </p>
      </header>

      <section id="about" className="mb-20">
        <h2 className="text-2xl text-semibold mb-4">Über</h2>
        <p className="max-w-xl">
          George Mihai Vasilescu ist der Gründer des Museum of Contemporary Tattoos, einer internationalen Plattform, auf der Tätowierkunst auf Augmented Reality, Blockchain und urbane Intervention trifft. Seine Arbeit konzentriert sich auf den Aufbau neuer Systeme für kulturelle Präsenz jenseits traditioneller Formate.
        </p>
      </section>

      <section id="projects" className="mb-20">
        <h2 className="text-2xl text-semibold mb-4">Ausgewählte Projekte</h2>
        <ul className="list-disc list-inside">
          <li>Museum of Contemporary Tattoos (Berlin / Global)</li>
          <li>KI-gesteuerte Vaults und Tattoo-Auktionen</li>
          <li>AR-Monumente im öffentlichen Raum</li>
        </ul>
      </section>

      <section id="contact" className="mb-20">
        <h2 className="text-2xl text-semibold mb-4">Kontakt</h2>
        <p>Email: georgem.vasilescu@icloud.com</p>
        <p className="mt-2">
          Instagram: <a href="https://instagram.com/nameless_ta2" className="text-blue-600 underline" target="_blank">@nameless_ta2</a>
        </p>
      </section>

      <footer className="text-sm text-gray-500 flex flex-col items-center">
        <p>© 2025 George Mihai Vasilescu. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  );
}
