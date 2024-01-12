import NextLink from 'next/link';
import Link from "next/link"; // Rename the imported Link component

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1  className="text-lg font-bold mb-8 text-black">Welcome to JK Filter, where innovation meets IT excellence. Transforming challenges into solutions.</h1>
      <h1 className="text-3xl font-bold mb-8 text-black">JK filters - Authentication</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
          <Link href="/signup" className="bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"> Sign-Up </Link>
          </li>
          <li>
          <Link href="/login" className="bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">Log-in</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
