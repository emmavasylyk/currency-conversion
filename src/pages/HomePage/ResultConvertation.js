import { useFetchCurrencyQuery } from '../../redux/currency-reduce';
import { useSelector } from 'react-redux';
import { getResult } from '../../redux/currency-selectors';

export const ResultConvertation = ({ transfer }) => {
  const result = useSelector(getResult);

  const { from, to, quantity } = transfer;

  const { data, error, isLoading, isFetching } = useFetchCurrencyQuery({
    from,
    to,
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
          <span>Result: </span>
          {result && result.toFixed(2)} {isFetching ? '...' : ''}
        </h3>
      ) : null}
    </>
  );
};
