export const ResultConvertation = ({ transfer }) => {
  return <h3>Result: {transfer && transfer.toFixed(2)}</h3>;
};
