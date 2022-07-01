import { useState } from 'react';
import { EurConversation } from './EurConversation';
import Button from '../../components/Button/Button';
import s from './eur.module.scss';

export default function ConvertationEur() {
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
        <EurConversation transfer={transfer} />
      </div>
    </>
  );
}
