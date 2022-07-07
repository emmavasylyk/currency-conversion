import PropTypes from 'prop-types';

export const ExchangeResult = ({ transfer, currency }) => {
  return (
    <>
      <p>
        Result: {transfer && transfer.toFixed(2)} <span>{currency}</span>
      </p>
    </>
  );
};

ExchangeResult.protoTypes = {
  currency: PropTypes.string,
  transfer: PropTypes.number,
};
