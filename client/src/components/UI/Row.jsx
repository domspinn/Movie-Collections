function Row(props) {
  return (
    <div className={`custom-row row${props.fluid ? '-fluid' : ''}`}>
      {props.children}
    </div>
  );
}

export default Row;
