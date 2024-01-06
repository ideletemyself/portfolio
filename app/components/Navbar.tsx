import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Brandon McKimmons Portfolio</h1>
        <div>
          <Link href="/" className="px-3 py-2 rounded hover:bg-gray-700">
            Home
          </Link>
          <Link href="/photos" className="px-3 py-2 rounded hover:bg-gray-700">
            Photos
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
