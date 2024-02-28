import CurrencyAPI from '@everapi/currencyapi-js';
const currencyApi = new CurrencyAPI('cur_live_FpMEuHsmnAXiNu0wYrqPfGA3rXqTOgF126eN9FGp');

// convertCurrency("USD","INR",3).then(res =>console.log(res));
export async function convertCurrency(fromCurrency, toCurrency, units) {
    const res = await currencyApi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency,
          });
    const multiplier=res.data[toCurrency].value;
    return multiplier*units;
}



