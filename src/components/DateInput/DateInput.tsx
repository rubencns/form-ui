import { es } from "date-fns/locale";
import { FC, useMemo, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DateInput.css';
registerLocale("es", es);

interface Props {
  id: string
  value: string
  onChange: (date: string) => void
  onBlur?: () => void
  showTime?: boolean
}

const DateInput: FC<Props> = (props) => {
  const { id, value, onChange, onBlur, showTime = false, } = props

  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);

  const handleChange = (date: Date | null) => {
    onChange(date?.toISOString() || '')
    setSelectedDate(date)
  }

  const dateFormat = useMemo(() =>
    `dd/MM/yyyy${showTime ? ' HH:mm' : ''}`
    , [showTime])

  return (
    <DatePicker
      className="date-input"
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