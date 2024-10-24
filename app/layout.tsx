import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Aplicación",
  description: "Descripción de mi aplicación",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sección de Enlaces */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces Personales</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-gray-300">Inicio</Link></li>
                  <li><Link href="/about" className="hover:text-gray-300">Sobre Nosotros</Link></li>
                  <li><Link href="/contact" className="hover:text-gray-300">Contacto</Link></li>
                </ul>
              </div>

              {/* Sección de Contacto */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <ul className="space-y-2">
                  <li>Email: guillermo.fernández.pérez2005@gmail.com</li>
                  <li>Teléfono: 687 254 841</li>
                  <li>Dirección: Tu Dirección</li>
                </ul>
              </div>

              {/* Sección de Redes Sociales */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Mis links</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/GuillermoFdzp" className="hover:text-gray-300">
                    Github
                  </a>
                  {/* <a href="#" className="hover:text-gray-300">
                    Email
                  </a> */}
                  <a href="linkedin.com/in/guillermofernándezpérez/" className="hover:text-gray-300">
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}