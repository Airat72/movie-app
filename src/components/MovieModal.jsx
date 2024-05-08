const MovieModal = ({ movieInfo, handleClose }) => {
    return (
      <div className='modal display-block'>
        <section className='modal-main'>
          <div className='modal-body'>
             
          </div>
          <div className='modal-info'>
            <p>
              <b>Actors:</b> {movieInfo.Actors}
            </p>
            <p>
              <b>Genre:</b> {movieInfo.Genre}
            </p>
            <p>
              <b>Director:</b> {movieInfo.Director}
            </p>
            <p>
              <b>Released:</b> {movieInfo.Released}
            </p>
            <p>
              <b>Plot:</b> {movieInfo.Plot}
            </p>
          </div>
          <button className='modal-closebtn' onClick={handleClose}>
            Закрыть
          </button>
        </section>
      </div>
    );
  };
  
  export default MovieModal