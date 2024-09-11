// function MovieDetail(props) {
//   return (
//     <div className="text-center">
//       <img
//         alt={props.title}
//         className="img-fluid"
//         src={props.src}
//         style={{ margin: '0 auto' }}
//       />
//       <h3>Director(s): {props.director}</h3>
//       <h3>Genre: {props.genre}</h3>
//       <h3>Released: {props.released}</h3>
//     </div>
//   );
// }

// export default MovieDetail;

function MovieDetail(props) {
  return (
    <div className="movie-detail text-center">
      <img
        alt={props.title}
        className="movie-poster"
        src={props.src}
      />
      <h3>Director(s): {props.director}</h3>
      <h3>Genre: {props.genre}</h3>
      <h3>Released: {props.released}</h3>
    </div>
  );
}

export default MovieDetail;
