interface GetWeekdaysParams {
  short?: boolean
}

export function getWeekdays({ short = false }: GetWeekdaysParams = {}) {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
  })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map((weekDay) => {
      if (short) {
        return weekDay.substring(0, 3).toUpperCase()
      }

      return weekDay.charAt(0).toUpperCase() + weekDay.slice(1)
    })
}
