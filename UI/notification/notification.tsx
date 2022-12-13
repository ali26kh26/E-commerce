import classes from "./notification.module.scss";

const NotificationBadge = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: number;
}) => {
  return (
    <div className={classes.container}>
      {children}
      {value !== 0 && <div className={classes.inner}>{value}</div>}
    </div>
  );
};

export default NotificationBadge;
