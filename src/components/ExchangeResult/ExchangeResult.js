export const ExchangeResult = ({ transfer, currency }) => {
  return (
    <>
      <p>
        Result: {transfer && transfer.toFixed(2)} <span>{currency}</span>
      </p>
    </>
  );
};
