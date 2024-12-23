import { useEffect, useState } from "react";

type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function ApiResults() {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const consultApi = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Error al consultar los datos...");
        }
        const data = await response.json();
        setData(data);
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      } catch (error) {
        setError("Error al consultar la API, intenta recargar la página");
        setLoading(false);
      }
    };

    consultApi();
  }, []);

  if (loading) {
    return (
      <p className="text-2xl text-center font-semibold">Cargando datos...</p>
    );
  }

  if (error) {
    return <p className="text-2xl text-center font-semibold p-2">{error}</p>;
  }

  if (!data.length) {
    return (
      <p className="text-2xl text-center font-semibold">
        No hay datos para mostrar
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <div key={item.id} className="w-full border rounded p-2">
          <h2 className="text-lg my-2">{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
