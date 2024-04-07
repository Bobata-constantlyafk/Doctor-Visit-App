import React, { FC } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.scss";
//toshu kykata beshe tuk

interface CalendarBaseProps {
  onSelectDate: (date: Date) => void;
}

const CalendarBase: FC<CalendarBaseProps> = ({ onSelectDate }) => {
  return (
    <ReactCalendar
      minDate={new Date()}
      className={`${styles.calendarSelf} REACT-CALENDAR`}
      view="month"
      onClickDay={(date) => onSelectDate(date)}
      tileDisabled={({ date, view }) => {
        // Disable Saturdays (6) and Sundays (0)
        if (view === "month" && (date.getDay() === 6 || date.getDay() === 0)) {
          return true;
        }
        return false;
      }}
    />
  );
};

export default CalendarBase;
