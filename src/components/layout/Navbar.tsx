import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            Portfolio
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
              الرئيسية
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">
              من نحن
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
              اتصل بنا
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 