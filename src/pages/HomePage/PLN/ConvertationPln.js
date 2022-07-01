import { useState } from 'react';
import { PlnConvertation } from './PlnConvertation';

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
      <div>
        <form>
          <input
            type="text"
            name="quantity"
            placeholder="quantity"
            value={quantity}
            onChange={hundleChange}
          />
          <button type="submit" onClick={hundleSubmit}>
            Сonvert
          </button>
        </form>
        <PlnConvertation transfer={transfer} />
      </div>
    </>
  );
}
