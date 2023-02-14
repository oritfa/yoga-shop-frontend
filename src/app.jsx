import { Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { About } from './pages/about'
import { Home } from './pages/home'
import { Collections } from './pages/collections';
import { Cart } from './pages/cart';
import { Contact } from './pages/contact';
import { ItemApp } from './pages/item-app';

const App = () => {
  return (
    <section className="App">
      <AppHeader />
      <main>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collections" element={<Collections />}>
            {/* <Route path="/item/edit/:itemId?" element={<ItemEdit />} /> */}
            {/* <Route path="/item/:itemId" element={<ItemDetails />} /> */}
            <Route path="item" element={<ItemApp />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </main>
      {/* <AppFooter /> */}
    </section>
  );
}

export default App

