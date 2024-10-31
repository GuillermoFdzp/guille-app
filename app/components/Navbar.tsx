import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-gray-800 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-8">
            <Link 
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link 
              href="/Proyecto"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Proyectos
            </Link>
            <Link 
              href="/Contacto"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}