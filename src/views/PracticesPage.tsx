import { Link } from "react-router-dom";
import { exercises } from "../lib/exercises";

export default function PracticesPage() {
  return (
    <>
      <h1>Prácticas</h1>
      <section className="flex gap-6 items-center justify-center flex-wrap">
        {exercises.map((exercise) => (
          <div
            key={exercise._id}
            className="w-96 h-36 py-3 px-6 border rounded bg-gradient-to-br from-slate-50 to-slate-200">
            <h2 className="my-4">{exercise.title}</h2>
            <Link
              to={exercise.slug}
              className="font-medium hover:underline hover:underline-offset-4">
              Ver ejercicio...
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
