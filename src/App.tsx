import { Route, Routes } from 'react-router-dom';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Item } from './components/item/Item';
import { Items } from './components/AllCarts/Items';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/items' element={<Items />} />
        <Route path='/items/:id' element={<Item />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
