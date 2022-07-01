import Navigation from '../components/Navigation/Navigation';
import { CurrencyLatest } from './CurrencyLatest';
import Convertasion from './Convertasion';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <CurrencyLatest />
      <Convertasion />
    </>
  );
}
