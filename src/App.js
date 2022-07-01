import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Triangle } from 'react-loader-spinner';

const HomeView = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const CurrencyView = lazy(() =>
  import(
    './pages/HomePage/CurrencyPage.js' /* webpackChunkName: "currency-page" */
  ),
);
const USDView = lazy(() =>
  import('./pages/USD/USDPage.js' /* webpackChunkName: "usd-page" */),
);
const EURView = lazy(() =>
  import('./pages/EUR/EURPage.js' /* webpackChunkName: "eur-page" */),
);
const PLNView = lazy(() =>
  import('./pages/PLN/PLNPage.js' /* webpackChunkName: "pln-page" */),
);

function App() {
  return (
    <Suspense
      fallback={
        <Triangle color="#00BFFF" height={80} width={80} ariaLabel="loading" />
      }
    >
      <Routes>
        <Route path="/" element={<HomeView />}>
          <Route index element={<CurrencyView />} />
          <Route path="uah-usd" element={<USDView />} />
          <Route path="uah-eur" element={<EURView />} />
          <Route path="uah-pln" element={<PLNView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
