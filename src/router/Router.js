import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";
import Registrar from "../pages/Registrar";
import Login from "../pages/Login";
import Esqueceu from "../pages/Esqueceu";
import Home from "../pages/Home";
import Configurar from "../pages/Configurar";
import AlterarDados from "../pages/AlterarDados";
import AlterarSenha from "../pages/AlterarSenha";

const usuarioValido = () =>{
    const status = localStorage.getItem('status')
    if(status === 'autenticado'){
        return redirect('/home');
    }
   return null;
} 
const usuarioInvalido = () =>{
    const status = localStorage.getItem('status')
    if(status === null || status === undefined){
        return redirect('/login');
    }
   return null;
} 

const router = createBrowserRouter([
    {
        path: "/",
        element: <Registrar />,
        loader: usuarioValido
    },
    {
        path: "/login",
        element: <Login />,
        loader: usuarioValido
    },
    {
        path: "/esqueceu",
        element: <Esqueceu />,
        loader: usuarioValido
    },
    {
        path: "/home",
        element: <Home />,
        loader: usuarioInvalido
    },
    {
        path: "/configuracao",
        element: <Configurar />,
        loader: usuarioInvalido
    },
    {
        path: "/alterarDados",
        element: <AlterarDados />,
        loader: usuarioInvalido
    },
    {
        path: "/alterarSenha",
        element: <AlterarSenha />,
        loader: usuarioInvalido
    }
]);
function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;