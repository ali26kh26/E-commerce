import classes from "./collapsible.module.scss";
import React, { useEffect, useRef, useState } from "react";

interface IProps {
  open?: boolean;
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);
  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.label} onClick={handleFilterOpening}>
          <h6>{title}</h6>
          <div className={classes.icon}>{!isOpen ? "+" : "-"}</div>
        </div>
        <div className={classes.content} style={{ height }}>
          <div ref={ref}>{isOpen && <div>{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
