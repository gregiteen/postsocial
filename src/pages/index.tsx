import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Head>
        <title>PostSocial.io</title>
        <meta name="description" content="Welcome to PostSocial.io - The next-generation metasocial network." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">PostSocial.io</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          Welcome to <span className="text-blue-600">PostSocial.io!</span>
        </h1>

        <p className="mt-3 text-2xl text-gray-700">
          Get started by exploring our features.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Messaging &rarr;</h3>
            <p className="mt-4 text-xl text-gray-600">
              Seamlessly integrate chat, email, and task management into a universal POST stream.
            </p>
          </a>

          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Automation &rarr;</h3>
            <p className="mt-4 text-xl text-gray-600">
              AI-assisted workflow creation with webhook-based triggers.
            </p>
          </a>

          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">App Marketplace &rarr;</h3>
            <p className="mt-4 text-xl text-gray-600">
              Explore and monetize custom AI-driven applications.
            </p>
          </a>
        </div>
      </main>

      <footer className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-center items-center">
          <p className="text-gray-600">Powered by PostSocial.io</p>
        </div>
      </footer>
    </div>
  );
}