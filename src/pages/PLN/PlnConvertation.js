import { useFetchCurrencyPlnQuery } from '../../redux/currency-reduce';
import { useSelector } from 'react-redux';
import { getResult } from '../../redux/currency-selectors';

export const PlnConvertation = ({ transfer }) => {
  const result = useSelector(getResult);
  const { quantity } = transfer;
  const { data, error, isLoading, isFetching } = useFetchCurrencyPlnQuery({
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
          Result: {result} <span>zł</span> {isFetching ? '...' : ''}
        </h3>
      ) : null}
    </>
  );
};
