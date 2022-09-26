import { Route, Routes } from 'react-router-dom';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Items } from './components/Items/Items';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/items' element={<Items />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
