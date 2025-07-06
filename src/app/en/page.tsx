export default function EnglishHome() {
  return (
    <main className="relative min-h-screen px-6 py-12 font-sans bg-white text-black">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">George Mihai Vasilescu</h1>
        <p className="text-xl text-gray-700">
          Artist and researcher working at the intersection of tattoos, memory, and future technology.
        </p>
        <p className="mt-4 text-sm">
          <a href="/de" className="underline text-blue-600">🇩🇪 Deutsch</a>
        </p>
      </header>

      <section id="about" className="mb-20">
        <h2 className="text-2xl text-semibold mb-4">About</h2>
        <p className="max-w-2xl">
          George Mihai Vasilescu is the founder of the Museum of Contemporary Tattoos, an international platform where tattoo art meets augmented reality, blockchain, and urban intervention. His work focuses on building new systems for cultural presence beyond traditional formats.
        </p>
      </section>

      <section id="projects" className="mb-20">
        <h2 className="text-2xl text-semibold mb-4">Selected Work</h2>
        <ul className="list-disc list-inside">
          <li>Museum of Contemporary Tattoos (Berlin / Global)</li>
          <li>AI-Driven Vaults and Tattoo Auctions</li>
          <li>AR Monuments in Public Spaces</li>
        </ul>
      </section>

      <section id="contact" className="mb-20">
        <h2 className="text-2xl text-semibold mb-4">Contact</h2>
        <p>Email: georgem.vasilescu@icloud.com</p>
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
