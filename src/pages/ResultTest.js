import { useFetchCurrencyQuery } from '../redux/currency-reduce';
import { useSelector } from 'react-redux';
import { getResult } from '../redux/currency-selectors';

export const ResultTest = ({ transfer }) => {
  const result = useSelector(getResult);
  const { from, to, quantity } = transfer;

  const { data, error, isLoading, isFetching } = useFetchCurrencyQuery({
    from,
    to,
    quantity,
  });
  console.log('data', data);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <h3>
          {result} {isFetching ? '...' : ''}
        </h3>
      ) : null}
    </>
  );
};
