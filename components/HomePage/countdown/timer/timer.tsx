import React from "react";
import { useState, useEffect } from "react";
import TimeBoxList from "../time-box-list/time-box-list";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const finalDay = new Date("2023-02-26T24:00:00");
    const finalDAaySeconds = Math.floor(finalDay.getTime() / 1000);
    const currentDate = new Date();
    const currentDateSeconds = Math.floor(currentDate.getTime() / 1000);
    const remainDateSeconds = finalDAaySeconds - currentDateSeconds;
    const translatedTime = secondsToTime(remainDateSeconds);
    setDays(translatedTime.d);
    setHours(translatedTime.h);
    setMinutes(translatedTime.m);
    setSeconds(translatedTime.s);
  }, []);

  const secondsToTime = (secs: number) => {
    let days = Math.floor(secs / (60 * 60 * 24));

    let divisor_for_hours = secs % (60 * 60 * 24);
    let hours = Math.floor(divisor_for_hours / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      d: days,
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            setDays(days - 1);
            setHours(23);
            setMinutes(59);
            setSeconds(59);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      <TimeBoxList day={days} hour={hours} minute={minutes} second={seconds} />
    </div>
  );
};

export default Timer;
