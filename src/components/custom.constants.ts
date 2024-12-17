export const spacedEmDash = " — ";

export const currencyFormat = (num: number | Intl.StringNumericLiteral) => new Intl.NumberFormat('ru', {
  style: 'currency',
  currency: 'RUB',
  maximumSignificantDigits: 3,
}).format(num)
