import { useFetchCurrencyEurQuery } from '../../redux/currency-reduce';
import { useSelector } from 'react-redux';
import { getResult } from '../../redux/currency-selectors';

export const EurConversation = ({ transfer }) => {
  const result = useSelector(getResult);
  const { quantity } = transfer;
  const { data, error, isLoading, isFetching } = useFetchCurrencyEurQuery({
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
          Result: {result && result.toFixed(2)} <span>€</span>{' '}
          {isFetching ? '...' : ''}
        </h3>
      ) : null}
    </>
  );
};
