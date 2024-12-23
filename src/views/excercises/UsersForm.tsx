import { useState } from "react";
import { checkIsEmail } from "../../utils/checkIsEmail";
import FormMessage from "../../components/FormMessage";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const initialUser = {
  name: "",
  email: "",
  password: "",
};

export default function UsersForm() {
  const [userData, setUserData] = useState<FormData>(initialUser);
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(
    null
  );
  const [message, setMessage] = useState<string>("");

  const validateForm = (
    data: FormData
  ): { isValid: boolean; message: string } => {
    if (!data.name || !data.email || !data.password) {
      return { isValid: false, message: "Debes llenar todos los campos" };
    }
    if (!checkIsEmail(data.email)) {
      return { isValid: false, message: "El email no es válido" };
    }

    return { isValid: true, message: "" };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      const isEmail = checkIsEmail(e.target.value);

      if (!isEmail) {
        setFormStatus("error");
        setMessage("Email no válido");
        return;
      }

      setFormStatus(null);
      setMessage("");
    }

    setUserData({ ...userData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateForm(userData);
    const form = e.target as HTMLFormElement;

    if (!validation.isValid) {
      setFormStatus("error");
      setMessage(validation.message);
      return;
    }

    setFormStatus("success");
    setMessage("¡Datos Guardados!");

    setUserData(initialUser);
    form.reset();
  };

  return (
    <>
      <h1>Formulario de Usuarios</h1>
      <legend className="text-center my-6 font-semibold text-xl">
        Ingresa tus datos en el formulario
      </legend>
      <form
        onSubmit={handleSubmit}
        className="max-w-80 mx-auto p-6 border rounded">
        <fieldset className="my-8 flex flex-col space-y-4">
          <label htmlFor="name">Nombre:</label>
          <input
            onChange={handleInputChange}
            className="border p-2 rounded"
            placeholder="Nombre"
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleInputChange}
            className="border p-2 rounded"
            placeholder="Email"
            type="text"
            name="email"
            id="email"
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            onChange={handleInputChange}
            className="border p-2 rounded"
            placeholder="Contraseña"
            type="password"
            name="password"
            id="password"
          />
        </fieldset>
        <button className="w-full border rounded p-2 font-bold hover:bg-violet-200 transition-colors">
          Enviar
        </button>
        {formStatus && <FormMessage type={formStatus} message={message} />}
      </form>
    </>
  );
}
