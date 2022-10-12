function Price({ value }: { value: string }): JSX.Element {
  return <p className="text-xl font-bold">${value}</p>;
}

export default Price;
