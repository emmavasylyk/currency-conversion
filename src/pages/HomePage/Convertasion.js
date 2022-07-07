import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getRates,
  getRatesUsd,
  getRatesEur,
  getRatesPln,
} from '../../redux/currency-selectors';
import {
  useFetchCurrencyEurQuery,
  useFetchCurrencyUsdQuery,
  useFetchCurrencyPlnQuery,
} from '../../redux/currency-reduce';

import { ResultConvertation } from './ResultConvertation';
import Button from '../../components/Button/Button';
import s from './HomePage.module.scss';

const availableRate = ['USD', 'PLN', 'EUR', 'UAH'];

export default function Convertasion() {
  useFetchCurrencyEurQuery();
  useFetchCurrencyUsdQuery();
  useFetchCurrencyPlnQuery();

  const rate = useSelector(getRates);
  const rateUsd = useSelector(getRatesUsd);
  const rateEur = useSelector(getRatesEur);
  const ratePln = useSelector(getRatesPln);

  const [result, setResult] = useState(0);
  const [currencyData, setCurrencyData] = useState({});

  const hundleChange = ({ target }) => {
    const { name, value } = target;

    setCurrencyData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const hundleSubmit = async e => {
    e.preventDefault();
    const currentRates = {
      UAH: rate,
      USD: rateUsd,
      EUR: rateEur,
      PLN: ratePln,
    };

    const rateFrom = currencyData?.from?.toUpperCase();
    const rateTo = currencyData?.to?.toUpperCase();
    const quantity = currencyData?.quantity;

    if (availableRate.includes(rateFrom)) {
      setResult(currentRates[rateFrom][rateTo] * quantity);
    }
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
            value={currencyData?.from || ''}
            placeholder="From"
            onChange={hundleChange}
          />
          <input
            className={s.inputConvertation}
            type="text"
            name="to"
            value={currencyData?.to || ''}
            placeholder="To"
            onChange={hundleChange}
          />
          <input
            className={s.inputConvertation}
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={currencyData?.quantity || ''}
            onChange={hundleChange}
          />
          <Button onClick={hundleSubmit}>Сonvert</Button>
        </form>
        <ResultConvertation transfer={result} />
      </div>
    </>
  );
}
