type FormMessageProps = {
  type: "success" | "error" | null;
  message: string;
};

export default function FormMessage({ type, message }: FormMessageProps) {
  return (
    <p
      aria-live="polite"
      className={`mt-2 p-2 border rounded text-center ${
        type === "error" ? "bg-red-400" : "bg-green-400"
      } text-white font-semibold`}>
      {message}
    </p>
  );
}
