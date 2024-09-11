function Card(props) {
  return (
    <div className="custom-card text-center">
      <div className="custom-card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="custom-card-body">{props.children}</div>
    </div>
  );
}

export default Card;
