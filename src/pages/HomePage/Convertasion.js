import { useState } from 'react';
import { ResultConvertation } from './ResultConvertation';
import Button from '../../components/Button/Button';
import s from './HomePage.module.scss';

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
      <div className={s.currencyWrapForm}>
        <h2>Currency converter</h2>
        <form className={s.formConvertation}>
          <input
            className={s.inputConvertation}
            type="text"
            name="from"
            value={from}
            placeholder="From"
            onChange={hundleChange}
          />
          <input
            className={s.inputConvertation}
            type="text"
            name="to"
            value={to}
            placeholder="To"
            onChange={hundleChange}
          />
          <input
            className={s.inputConvertation}
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={hundleChange}
          />
          <Button onClick={hundleSubmit}>Сonvert</Button>
        </form>
        <ResultConvertation transfer={transfer} />
      </div>
    </>
  );
}
