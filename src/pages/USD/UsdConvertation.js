import { useFetchCurrencyUsdQuery } from '../../redux/currency-reduce';
import { useSelector } from 'react-redux';
import { getResult } from '../../redux/currency-selectors';

export const UsdConvertation = ({ transfer }) => {
  const result = useSelector(getResult);
  const { quantity } = transfer;
  const { data, error, isLoading, isFetching } = useFetchCurrencyUsdQuery({
    quantity,
  });

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <h3>
          {' '}
          Result: {result && result.toFixed(2)} <span>$</span>{' '}
          {isFetching ? '...' : ''}
        </h3>
      ) : null}
    </>
  );
};
