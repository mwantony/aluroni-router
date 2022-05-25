import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu></Menu>

        <Routes>
          <Route path="/" element={<PaginaPadrao></PaginaPadrao>}>
            <Route index element={<Inicio></Inicio>}></Route>
            <Route path="cardapio" element={<Cardapio></Cardapio>}></Route>
            <Route path="sobre" element={<Sobre></Sobre>}></Route>
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
