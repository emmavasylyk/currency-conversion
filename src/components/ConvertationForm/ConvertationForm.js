import { getRates } from '../../redux/currency-selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ExchangeResult } from '../ExchangeResult/ExchangeResult';
import Button from '../../components/Button/Button';
import s from './ConvertationForm.module.scss';

export default function ConvertationForm({ currencyName, name }) {
  const [quantity, setQuantity] = useState('');
  const [result, setResult] = useState(0);

  const rate = useSelector(getRates);

  const hundleChange = ({ target }) => setQuantity(target.value);

  const hundleSubmit = async e => {
    e.preventDefault();
    setResult(rate[currencyName] * quantity);
  };

  return (
    <>
      <div className={s.currencyWrapForm}>
        <form className={s.form}>
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
        <ExchangeResult currency={name} transfer={result} />
      </div>
    </>
  );
}
