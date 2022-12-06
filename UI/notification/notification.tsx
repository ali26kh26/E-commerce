import classes from "./notification.module.scss";

const NotificationBadge = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: number;
}) => {
  if (value === 0) {
    return <div></div>;
  }
  return (
    <div className={classes.container}>
      {children}
      <div className={classes.inner}>{value}</div>
    </div>
  );
};

export default NotificationBadge;
