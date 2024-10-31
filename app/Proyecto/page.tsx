export default function Porfolio() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Mi Portfolio</h1>
      <div className="grid md:grid-cols-3 gap-8"> {/* Cambiado a tres columnas */}
        
        {/* Primer elemento */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/laravel-featured.png" alt="Imagen del proyecto 1" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proyecto Laravel</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Creacion pagina aplicacion con framework Laravel</p>
            <a href="https://github.com/GuillermoFdzp/blog" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ver
            </a>
          </div>
        </div>

        {/* Segundo elemento */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://i.pinimg.com/736x/91/17/48/91174838481320be811fa7da10a51fea.jpg" alt="Imagen del proyecto 2" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proyecto Html y CSS</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Creacion de pagina web mediante Html y css</p>
            <a href="https://github.com/GuillermoFdzp/Web-sencilla" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ver
            </a>
          </div>
        </div>

        {/* Tercer elemento */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://i.pinimg.com/736x/4a/2b/e7/4a2be73b1e2efb44355436c40bf496dd.jpg" alt="Imagen del proyecto 3" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proyecto Next.js</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Descripción del proyecto 3.</p>
            <a href="https://github.com/GuillermoFdzp/nextjs-dashboard" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ver
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
