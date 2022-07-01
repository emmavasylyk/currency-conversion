import { useState } from 'react';
import { PlnConvertation } from './PlnConvertation';
import Button from '../../components/Button/Button';
import s from './pln.module.scss';

export default function ConvertationPln() {
  const [quantity, setQuantity] = useState('');
  const [transfer, setTransfer] = useState({});

  const hundleChange = e => {
    const { value } = e.currentTarget;
    setQuantity(value);
  };

  const hundleSubmit = async e => {
    e.preventDefault();
    setTransfer({ quantity });
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
        <PlnConvertation transfer={transfer} />
      </div>
    </>
  );
}
