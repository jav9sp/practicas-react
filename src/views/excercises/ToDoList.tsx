import { useEffect, useState } from "react";

type Task = {
  _id: number;
  title: string;
  completed: boolean;
};

function getList() {
  const todo = localStorage.getItem("practicas-reac-todo-list");
  const todoList = todo ? JSON.parse(todo) : [];
  return todoList;
}

export default function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>(getList());

  useEffect(() => {
    localStorage.setItem("practicas-reac-todo-list", JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const taskText = form.task.value;

    if (!taskText.trim()) {
      return;
    }

    const newTask: Task = {
      _id: Date.now(),
      title: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    form.reset();
  };

  const handleCompleteTask = (taskId: Task["_id"]) => {
    const updatedTasks = tasks.map((task) => {
      if (task._id === taskId) {
        const updatedTask = { ...task, completed: true };
        return updatedTask;
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: Task["_id"]) => {
    const updatedTasks = tasks.filter((task) => task._id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>Lista de Tareas</h1>

      <form
        className="my-12 max-w-96 mx-auto space-y-6"
        onSubmit={handleSaveTask}>
        <label htmlFor="create-task" className=" font-semibold text-2xl">
          Crear nueva tarea:
        </label>
        <input
          type="text"
          id="create-task"
          name="task"
          placeholder="Escribe la tarea acá..."
          className="border p-2 rounded w-full"
        />
        <button className="border py-2 px-4 w-full">Guardar Tarea</button>
      </form>

      <section>
        {/* TODO: Agregar funcionalidad para editar las tareas */}
        {tasks.length ? (
          <ul className="list-disc pl-11 space-y-3">
            {tasks.map((task) => (
              <li key={task._id} className="space-x-6">
                <span
                  className={`${
                    task.completed && "opacity-25 line-through"
                  } cursor-pointer`}>
                  {task.title}
                </span>
                {!task.completed ? (
                  <button
                    className="py-1 px-2 border rounded bg-green-200 hover:bg-green-300"
                    onClick={(e) => handleCompleteTask(task._id)}>
                    Completa
                  </button>
                ) : (
                  <button
                    className="py-1 px-2 border rounded bg-red-200 hover:bg-red-300"
                    onClick={(e) => handleDeleteTask(task._id)}>
                    Eliminar
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center font-semibold text-2xl">No hay tareas</p>
        )}
      </section>
    </>
  );
}
