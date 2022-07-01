import { useFetchCurrencyLatestQuery } from '../redux/currency-reduce';
import { useSelector } from 'react-redux';
import { getRates } from '../redux/currency-selectors';

export const CurrencyLatest = () => {
  const rates = useSelector(getRates);
  console.log('rates', rates);
  const { data, error, isLoading, isFetching } = useFetchCurrencyLatestQuery(
    {},
  );
  //   console.log('data2', data);
  const values = Object.values(rates);
  //   console.log('values', values);

  return (
    <>
      <h1>Tetst</h1>
      <>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <h3>
            {values && values.map(value => <span>{value}</span>)}
            {isFetching ? '...' : ''}
          </h3>
        ) : null}
      </>
    </>
  );
};
