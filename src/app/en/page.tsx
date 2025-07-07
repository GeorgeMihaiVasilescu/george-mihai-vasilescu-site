export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-12 font-sans bg-white text-black">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">George Mihai Vasilescu</h1>
        <p className="text-xl text-gray-700">
          Artist and researcher working at the intersection of tattoos, memory, and future technology.
        </p>
        <div className="text-sm mt-4">
          Language: <a href="/en" className="underline hover:text-blue-600">English</a> / <a href="/de" className="underline hover:text-blue-600">Deutsch</a>
        </div>
      </header>

      <section id="about" className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="max-w-2xl">
          George Mihai Vasilescu is the founder of the <a href="https://museumofcontemporarytattoos.com" className="underline text-blue-600" target="_blank">Museum of Contemporary Tattoos</a>, an international platform where tattoo art meets augmented reality, blockchain, and urban intervention. His work focuses on building new systems for cultural presence beyond traditional formats.
        </p>
      </section>

      <section id="projects" className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Selected Work</h2>
        <ul className="list-disc list-inside">
          <li>Museum of Contemporary Tattoos (Berlin / Global)</li>
          <li>AI-Driven Vaults and Tattoo Auctions</li>
          <li>AR Monuments in Public Spaces</li>
        </ul>
      </section>

      <section id="partnerships" className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Institutional Partnerships</h2>
        <p className="max-w-2xl mb-4">
          We are currently inviting selected long-term institutional and brand partners to support the development of the Museum of Contemporary Tattoos — a next-generation cultural platform at the intersection of tattoo art, AR, and blockchain.
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Visible placement on digital monuments, in the app, and on the website</li>
          <li>Integration in institutional reports and archives</li>
          <li>Access to private previews and networking events</li>
          <li>Custom opportunities for co-branded cultural activations</li>
        </ul>
        <p className="mt-2">
          Learn more: <a href="https://museumofcontemporarytattoos.com" className="text-blue-600 underline" target="_blank">museumofcontemporarytattoos.com</a>
        </p>
      </section>

      <section id="contact" className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mt-2">
          Email: <a href="mailto:georgem.vasilescu@icloud.com" className="text-blue-600 underline">georgem.vasilescu@icloud.com</a>
        </p>
        <p className="mt-2">
          Instagram: <a href="https://instagram.com/nameless_ta2" className="text-blue-600 underline" target="_blank">@nameless_ta2</a>
        </p>
      </section>

      <footer className="text-sm text-gray-500 flex flex-col items-center">
        <p>&copy; 2025 George Mihai Vasilescu. All rights reserved.</p>
      </footer>
    </main>
  );
}

