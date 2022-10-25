function Price({ value }: { value: number }): JSX.Element {
  return <p className="text-xl font-bold">${value}</p>;
}

export default Price;
