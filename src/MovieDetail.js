import CircleBar from "./CircleBar";
import LibCircle from "./LibCircle";

const MovieDetail = ({info,onClose}) => {
  // 닫기 X
  const style = {
    backgroundImage : `url(https://image.tmdb.org/t/p/w500${info.backdrop_path})` ,
    backgroundSize : 'cover',
    backgroundPosition : 'center'
  };
  return (
    <div className="movie-detail"> 
      <button onClick={onClose}>×</button>
      <div className="popup" style={style}>
        <div className="popup-img">
          {/* <img src={`https://image.tmdb.org/t/p/w342${info.backdrop_path}`} alt={info.title}/> */}
        </div>
        <div className="popup-txt">
          <h2>{info.title}</h2>
          {/* <p>개봉일 : {info.release_date.replaceAll("-","/")}</p> */}
          <p>개봉일 : {info.release_date}<span>(KR)</span></p>
          {/* <p>평점 : {info.vote_average}</p> */}
          <CircleBar percentage={info.vote_average*10}/>
          {/* <LibCircle percentage={Math.floor(info.vote_average*10)}/> */}
          <h3>줄거리</h3>
          <p>{info.overview}</p>        
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;