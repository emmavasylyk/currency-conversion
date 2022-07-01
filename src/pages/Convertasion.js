import { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { ResultTest } from './ResultTest';

export default function Convertasion() {
  const [quantity, setQuantity] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [transfer, setTransfer] = useState({});

  const hundleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'quantity':
        setQuantity(value);
        break;

      case 'from':
        setFrom(value);
        break;

      case 'to':
        setTo(value);
        break;

      default:
        return;
    }
  };

  const hundleSubmit = async e => {
    e.preventDefault();

    setTransfer({ from, to, quantity });
  };

  return (
    <>
      <div>
        <h2>Currency converter</h2>
        <form>
          {/* <form onSubmit={hundleSubmit}> */}
          <lable>
            {/* Enter the currency you want to transfer */}
            <input
              type="text"
              name="from"
              // value={from1}
              value={from}
              placeholder="expample UAH"
              onChange={hundleChange}
            />
          </lable>
          <lable>
            {/* Enter the currency in you want to transfer */}
            <input
              type="text"
              name="to"
              // value={to1}
              value={to}
              placeholder="to"
              onChange={hundleChange}
            />
          </lable>
          <lable>
            {/* Quantity */}
            <input
              type="text"
              name="quantity"
              placeholder="quantity"
              value={quantity}
              onChange={hundleChange}
            />
          </lable>
          <button type="submit" onClick={hundleSubmit}>
            Сonvert
          </button>
        </form>
        {/* <span>{result ? result.toFixed() : null}</span> */}
        <ResultTest transfer={transfer} />
      </div>
    </>
  );
}
