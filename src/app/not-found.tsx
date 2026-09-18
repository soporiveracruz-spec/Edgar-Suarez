export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold text-corp-navy">404</h1>
      <p className="text-gray-500">Página no encontrada</p>
      <a href="/" className="mt-4 text-corp-orange font-bold">Volver al inicio</a>
    </div>
  );
}
