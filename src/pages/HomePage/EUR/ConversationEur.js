import { useState } from 'react';
// import { UsdConvertation } from './UsdConvertation';
import { EurConversation } from './EurConversation';

export default function ConvertationEur() {
  const [quantity, setQuantity] = useState('');
  //   const [value, setValue] = useState('');
  const [transfer, setTransfer] = useState({});

  const hundleChange = e => {
    const {
      //   name,
      value,
    } = e.currentTarget;
    // setValue(value);
    setQuantity(value);
  };

  const hundleSubmit = async e => {
    e.preventDefault();
    // setTransfer({ value });
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
            // value={value}
            value={quantity}
            onChange={hundleChange}
          />
          <button type="submit" onClick={hundleSubmit}>
            Сonvert
          </button>
        </form>
        {/* <UsdConvertation transfer={transfer} /> */}
        <EurConversation transfer={transfer} />
      </div>
    </>
  );
}
