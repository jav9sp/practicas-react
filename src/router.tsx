import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Layout from "./layouts/Layout";
import HelloWorld from "./views/excercises/HelloWorld";
import Counter from "./views/excercises/Counter";
import PracticesPage from "./views/PracticesPage";
import ToDoList from "./views/excercises/ToDoList";
import UsersForm from "./views/excercises/UsersForm";
import ConsultApi from "./views/excercises/ConsultApi";
import ShowModal from "./views/excercises/ShowModal";
import ShopCartView from "./views/excercises/ShopCartView";
import { useReducer } from "react";
import { cartReducer, initialState } from "./reducers/cartReducer";

export default function AppRouter() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout state={state} dispatch={dispatch} />}>
          <Route path="/" element={<HomePage />} index />
        </Route>
      </Routes>
      <Routes>
        <Route element={<Layout state={state} dispatch={dispatch} />}>
          <Route path="/practicas" element={<PracticesPage />} />
          <Route path="/practicas/hola-mundo" element={<HelloWorld />} />
          <Route path="/practicas/contador" element={<Counter />} />
          <Route path="/practicas/lista-tareas" element={<ToDoList />} />
          <Route
            path="/practicas/formulario-usuarios"
            element={<UsersForm />}
          />
          <Route path="/practicas/consulta-api" element={<ConsultApi />} />
          <Route path="/practicas/mostrar-modal" element={<ShowModal />} />
          <Route
            path="/practicas/carrito-compras"
            element={<ShopCartView state={state} dispatch={dispatch} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
