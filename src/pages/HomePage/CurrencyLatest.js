import { nanoid } from 'nanoid';
import { useFetchCurrencyLatestQuery } from '../../redux/currency-reduce';
import { useSelector } from 'react-redux';
import { getRates } from '../../redux/currency-selectors';
import s from './HomePage.module.scss';

export const CurrencyLatest = () => {
  const rates = useSelector(getRates);
  const { data, error, isLoading, isFetching } = useFetchCurrencyLatestQuery(
    {},
  );
  const values = Object.values(rates);

  return (
    <div className={s.rateWrap}>
      <h2 className={s.rateTitle}>Current exchange rate</h2>
      <>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <p className={s.currency}>
              <span>EUR (€)</span>
              <span>PLN (zł)</span>
              <span>USD ($)</span>
            </p>
            <ul className={s.currency}>
              {values &&
                values.map(value => (
                  <li key={nanoid()}>
                    <span className={s.rateValue}>{value.toFixed(4)}</span>
                  </li>
                ))}
              {isFetching ? '...' : ''}
            </ul>
          </>
        ) : null}
      </>
    </div>
  );
};
