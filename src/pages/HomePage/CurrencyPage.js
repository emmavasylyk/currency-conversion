import { CurrencyLatest } from './CurrencyLatest';
import Convertasion from './Convertasion';
import Container from '../../components/Container/Container';
import s from './HomePage.module.scss';

export default function CurrencyPage() {
  return (
    <>
      <div className={s.WrapContainer}>
        <Container>
          <CurrencyLatest className={s.currencyLatest} />
          <Convertasion />
        </Container>
      </div>
    </>
  );
}
