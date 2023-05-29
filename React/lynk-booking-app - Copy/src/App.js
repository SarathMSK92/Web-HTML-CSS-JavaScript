
import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Brands from './components/Brands/Brands';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Brands />
      </main>
    </Fragment>
  )
}

export default App;
