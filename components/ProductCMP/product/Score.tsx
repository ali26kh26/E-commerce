function Score({ Star }: { Star: Function }): JSX.Element {
  return (
    <div className="flex px-7 justify-around space-x-1">
      {<Star width={16} className={" fill-gray-300"} />}
      {<Star width={16} className={" fill-gray-300"} />}
      {<Star width={16} className={" fill-gray-300"} />}
      {<Star width={16} className={" fill-gray-300"} />}
      {<Star width={16} className={" fill-gray-300"} />}
    </div>
  );
}

export default Score;
