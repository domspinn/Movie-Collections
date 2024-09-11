function Container(props) {
  return (
    <div className={`custom-container container${props.fluid ? '-fluid' : ''}`}>
      {props.children}
    </div>
  );
}

export default Container;
