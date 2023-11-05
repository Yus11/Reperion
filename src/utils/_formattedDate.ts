export function formattedDate(ISODate: string, options: Intl.DateTimeFormatOptions = { month: "short" }) {
  const date = new Date(ISODate)

  return `${date.getDate()} ${date.toLocaleString("en-us", options)}`
}
