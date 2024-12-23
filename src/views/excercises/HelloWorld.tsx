import { useState } from "react";

export default function HelloWorld() {
  const [text, setText] = useState<string>("");

  return (
    <>
      <h1>Hola Mundo</h1>
      <div className="my-6 flex items-center justify-center gap-6">
        <label htmlFor="message">Escribe el texto:</label>
        <input
          type="text"
          id="message"
          className="border p-2"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <p className="text-2xl text-center">{text}</p>
    </>
  );
}
