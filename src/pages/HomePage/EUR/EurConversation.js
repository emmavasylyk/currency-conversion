// import { useFetchCurrencyEurQuery } from '../../../redux/currency-reduce';
// import { useSelector } from 'react-redux';
// import { getResult } from '../../../redux/currency-selectors';

// export const EurConversation = ({ transfer }) => {
//   console.log('transfer', transfer);
//   const result = useSelector(getResult);
//   const { quantity } = transfer;
//   //   const { value } = transfer;
//   console.log('quantity', quantity);
//   // const { data, error, isLoading, isFetching } = useFetchCurrencyUsdQuery({
//   //   value,
//   // });

//   const { data, error, isLoading, isFetching } = useFetchCurrencyEurQuery({
//     quantity,
//   });

//   return (
//     <>
//       {error ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : data ? (
//         <h3>
//           {result} {isFetching ? '...' : ''}
//         </h3>
//       ) : null}
//     </>
//   );
// };

// 2
import { useFetchCurrencyEurQuery } from '../../../redux/currency-reduce';
import { useSelector } from 'react-redux';
import { getResult } from '../../../redux/currency-selectors';

export const EurConversation = ({ transfer }) => {
  const result = useSelector(getResult);
  const { quantity } = transfer;
  // const { value } = transfer;
  const { data, error, isLoading, isFetching } = useFetchCurrencyEurQuery({
    quantity,
  });

  // const { data, error, isLoading, isFetching } = useFetchCurrencyEurQuery({
  //   value,
  // });

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
