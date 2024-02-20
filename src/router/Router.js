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

import NivelBasico from "../pages/secoes/NivelBasico"
import NivelIntermediario from "../pages/secoes/NivelIntermediario"
import NivelAvancado from "../pages/secoes/NivelAvancado"

import Principal from "../pages/secoes/basico/saudacao/Principal";
import Calendario from "../pages/secoes/basico/calendario/Calendarr";

const usuarioValido = () => {
    const status = localStorage.getItem('status')
    if (status === 'autenticado') {
        return redirect('/home');
    }
    return null;
}
const usuarioInvalido = () => {
    const status = localStorage.getItem('status')
    if (status === null || status === undefined) {
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
        path: "/alterar-dados",
        element: <AlterarDados />,
        loader: usuarioInvalido
    },
    {
        path: "/alterar-senha",
        element: <AlterarSenha />,
        loader: usuarioInvalido
    }
    , {
        path: "/nivel-basico",
        element: <NivelBasico />,
    },
    {
        path: "/nivel-intermediario",
        element: <NivelIntermediario />,
    },
    {
        path: "/nivel-avancado",
        element: <NivelAvancado />,
    },
    {
        path: "/saudacoes",
        element: <Principal />,
    }
    ,{
        path: "/calendario",
        element: <Calendario />,
    }
    

]);
function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;