import { es } from "date-fns/locale";
import { FC, FocusEvent, useMemo, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DateInput.css';
registerLocale("es", es);

interface Props {
  id: string
  value: string
  hasError?: boolean
  showTime?: boolean
  onChange: (date: string) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

const DateInput: FC<Props> = (props) => {
  const { id, value, hasError = false, showTime = false, onChange, onBlur } = props

  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);

  const handleChange = (date: Date | null) => {
    onChange(date?.toISOString() || '')
    setSelectedDate(date)
  }

  const dateFormat = useMemo(() =>
    `dd/MM/yyyy${showTime ? ' HH:mm' : ''}`
    , [showTime])

  const classNames = () => {
    let classes = 'date-input'
    if (hasError) classes += ' error'

    return classes
  }

  return (
    <DatePicker
      className={classNames()}
      id={id}
      name={id}
      selected={selectedDate}
      onChange={handleChange}
      onBlur={onBlur}
      dateFormat={dateFormat}
      locale="es"
      showTimeSelect={showTime}
      timeIntervals={15}
      showIcon
    />
  )
}

export default DateInput