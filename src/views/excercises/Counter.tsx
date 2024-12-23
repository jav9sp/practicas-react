import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <h1>Contador</h1>
      <section>
        <div className="border w-24 h-24 flex items-center justify-center rounded mx-auto my-12">
          <span className="text-4xl font-semibold">{counter}</span>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            className="border px-4 py-2 rounded hover:bg-gray-100 transition-colors"
            onClick={(e) => setCounter(counter - 1)}>
            Disminuir
          </button>
          <button
            className="border px-4 py-2 rounded hover:bg-gray-100 transition-colors"
            onClick={(e) => setCounter(0)}>
            Resetear
          </button>
          <button
            className="border px-4 py-2 rounded hover:bg-gray-100 transition-colors"
            onClick={(e) => setCounter(counter + 1)}>
            Aumentar
          </button>
        </div>
      </section>
    </>
  );
}
