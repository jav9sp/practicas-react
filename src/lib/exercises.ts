type Exercise = {
  _id: number;
  title: string;
  slug: string;
};

export const exercises: Exercise[] = [
  {
    _id: 1,
    title: "Hola Mundo",
    slug: "/practicas/hola-mundo",
  },
  {
    _id: 2,
    title: "Contador",
    slug: "/practicas/contador",
  },
  {
    _id: 3,
    title: "Lista de Tareas",
    slug: "/practicas/lista-tareas",
  },
  {
    _id: 4,
    title: "Formulario de Usuarios",
    slug: "/practicas/formulario-usuarios",
  },
  {
    _id: 5,
    title: "Consultando una API",
    slug: "/practicas/consulta-api",
  },
  {
    _id: 6,
    title: "Mostrando Modal con CreatePortal",
    slug: "/practicas/mostrar-modal",
  },
  {
    _id: 7,
    title: "Simulador Carrito de Compras con useReducer",
    slug: "/practicas/carrito-compras",
  },
];
