import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classes from "./two-range-slider.module.scss";
import { useAppSelector } from "../../hooks/hooks";

const TwoRangeSlider = ({ min, max, onChange }) => {
  const { price } = useAppSelector((state) => state.fiter);
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  //sync values with global values
  useEffect(() => {
    setMinVal(price.min);
    setMaxVal(price.max);
    minValRef.current = price.min;
    maxValRef.current = price.max;
  }, [price]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // handle is mouse down or up
  const mouseDownHandler = () => {
    setIsMouseDown(true);
  };
  const mouseUpHandler = () => {
    setIsMouseDown(false);
  };
  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    if (!isMouseDown) {
      onChange({ min: minVal, max: maxVal });
    }
  }, [minVal, maxVal, isMouseDown]);

  return (
    <div className={classes.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`${classes.thumb} ${classes.thumb__left}`}
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`${classes.thumb} ${classes.thumb__right}`}
      />

      <div className={classes.slider}>
        <div className={classes.slider__track} />
        <div ref={range} className={classes.slider__range} />
        <div className={classes.slider__left_value}>{minVal}$</div>
        <div className={classes.slider__right_value}>{maxVal}$</div>
      </div>
    </div>
  );
};

TwoRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TwoRangeSlider;
