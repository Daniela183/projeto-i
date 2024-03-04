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
import Sobre from "../pages/Sobre";

import NivelBasico from "../pages/secoes/NivelBasico"
import NivelIntermediario from "../pages/secoes/NivelIntermediario"
import NivelAvancado from "../pages/secoes/NivelAvancado"
//Nível Básico
import Saudacao from "../pages/secoes/basico/saudacao/Saudacao";
import Calendario from "../pages/secoes/basico/calendario/Calendarr";
import Familia from "../pages/secoes/basico/familia/Familia"
import Cor from "../pages/secoes/basico/cor/Cor"
//Nível Intermediário
import Saudacaoi from "../pages/secoes/intermediario/saudacao/Saudacao";
import Calendarioi from "../pages/secoes/intermediario/calendario/Calendario";
import Familiai from "../pages/secoes/intermediario/familia/Familia"
import Cori from "../pages/secoes/intermediario/cor/Cor"
//Nível Avançado
import Saudacaoa from "../pages/secoes/avancado/saudacao/Saudacao";
import Calendarioa from "../pages/secoes/avancado/calendario/Calendario";
import Familiaa from "../pages/secoes/avancado/familia/Familia"
import Cora from "../pages/secoes/avancado/cor/Cor"

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
    },
    {
        path: "/sobre",
        element: <Sobre />,
    },
    {
        path: "/nivel-basico",
        element: <NivelBasico />,
    },
    {
        path: "/saudacoes",
        element: <Saudacao />,
    },
    {
        path: "/calendario",
        element: <Calendario />,
    },
    {
        path: "/familia",
        element: <Familia />,
    },
    {
        path: "/cor",
        element: <Cor />,
    },
    {
        path: "/nivel-intermediario",
        element: <NivelIntermediario />,
    },
    {
        path: "/saudacoes-intermediario",
        element: <Saudacaoi />,
    },
    {
        path: "/calendario-intermediario",
        element: <Calendarioi />,
    },
    {
        path: "/familia-intermediario",
        element: <Familiai />,
    },
    {
        path: "/cor-intermediario",
        element: <Cori />,
    },
    {
        path: "/nivel-avancado",
        element: <NivelAvancado />,
    },
    {
        path: "/saudacoes-avancado",
        element: <Saudacaoa />,
    },
    {
        path: "/calendario-avancado",
        element: <Calendarioa />,
    },
    {
        path: "/familia-avancado",
        element: <Familiaa />,
    },
    {
        path: "/cor-avancado",
        element: <Cora />,
    }
    

]);
function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;