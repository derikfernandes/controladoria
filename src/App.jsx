import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Macrofluxo } from './pages/Macrofluxo';
import { Processos } from './pages/Processos';
import { Transparencia } from './pages/Transparencia';
import { Produto } from './pages/Produto';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/macrofluxo" element={<Macrofluxo />} />
          <Route path="/processos" element={<Processos />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/produto" element={<Produto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
