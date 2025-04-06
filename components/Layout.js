import Navbar from './Navbar';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        © {new Date().getFullYear()} ASCII Blog. All rights reserved.
      </footer>
    </div>
  );
}
