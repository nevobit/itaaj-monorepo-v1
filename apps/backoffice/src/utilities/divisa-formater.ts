interface CurrencyFormatOptions {
  value: number;
  currency?: string;
  format?: string;
  minFractionDigits?: number;
  thousandsSeparator?: string;
  currencyDisplay?: string
}

export const DivisaFormater = ({value, currency = 'COP', format = 'es-CO', minFractionDigits = 0, thousandsSeparator = '.', currencyDisplay}: CurrencyFormatOptions) => {
  const formatter = new Intl.NumberFormat(format, {
    style: 'currency',
    currency,
    minimumFractionDigits: minFractionDigits,
    useGrouping: true,
    currencyDisplay
  });
  
  const formattedValue = formatter.format(value);
  return formattedValue.replace(',', thousandsSeparator);
}