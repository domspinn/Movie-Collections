function Col(props) {
  const size = props.size
    .split(' ')
    .map((size) => `col-${size}`)
    .join(' ');

  return <div className={size + ' custom-col'}>{props.children}</div>;
}

export default Col;
