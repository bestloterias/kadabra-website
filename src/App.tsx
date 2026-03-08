/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { StateLotteries } from '@/pages/StateLotteries';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background-dark text-white font-body selection:bg-primary selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loterias-estaduais" element={<StateLotteries />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
