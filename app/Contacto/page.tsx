
export default function Contacto(){
    return (
      <div className="py-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Contacto</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nombre</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Mensaje</label>
            <textarea className="w-full p-2 border rounded h-32"></textarea>
          </div>
          <button className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
            Enviar
          </button>
        </div>
      </div>
    );
  };

