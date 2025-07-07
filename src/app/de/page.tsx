export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-12 font-sans bg-white text-black">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">George Mihai Vasilescu</h1>
        <p className="text-xl text-gray-700">
          Künstler und Forscher an der Schnittstelle von Tätowierungen, Erinnerung und Zukunftstechnologie.
        </p>
        <div className="text-sm mt-4">
          Sprache: <a href="/en" className="underline hover:text-blue-600">English</a> / <a href="/de" className="underline hover:text-blue-600">Deutsch</a>
        </div>
      </header>

      <section id="about" className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Über</h2>
        <p className="max-w-2xl">
          George Mihai Vasilescu ist der Gründer des <a href="https://museumofcontemporarytattoos.com" className="underline text-blue-600" target="_blank">Museum of Contemporary Tattoos</a>, einer internationalen Plattform, auf der Tätowierkunst auf Augmented Reality, Blockchain und urbane Intervention trifft. Seine Arbeit konzentriert sich auf den Aufbau neuer Systeme für kulturelle Präsenz jenseits traditioneller Formate.
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

      <section id="partnerships" className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Institutionelle Partnerschaften</h2>
        <p className="max-w-2xl mb-4">
          Wir laden derzeit ausgewählte langfristige institutionelle und Markenpartner ein, die Entwicklung des Museum of Contemporary Tattoos zu unterstützen – einer kulturellen Plattform der nächsten Generation an der Schnittstelle von Tätowierkunst, AR und Blockchain.
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Sichtbare Platzierung auf digitalen Monumenten, in der App und auf der Website</li>
          <li>Integration in institutionelle Berichte und Archive</li>
          <li>Zugang zu privaten Vorschauen und Netzwerkveranstaltungen</li>
          <li>Individuelle Möglichkeiten für co-gebrandete kulturelle Aktivitäten</li>
        </ul>
        <p className="mt-2">
          Weitere Informationen: <a href="https://museumofcontemporarytattoos.com" className="text-blue-600 underline" target="_blank">museumofcontemporarytattoos.com</a>
        </p>
      </section>

      <section id="contact" className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p className="mt-2">
          E-Mail: <a href="mailto:georgem.vasilescu@icloud.com" className="text-blue-600 underline">georgem.vasilescu@icloud.com</a>
        </p>
        <p className="mt-2">
          Instagram: <a href="https://instagram.com/nameless_ta2" className="text-blue-600 underline" target="_blank">@nameless_ta2</a>
        </p>
      </section>

      <footer className="text-sm text-gray-500 flex flex-col items-center">
        <p>&copy; 2025 George Mihai Vasilescu. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  );
}

