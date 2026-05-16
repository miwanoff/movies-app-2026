import { Link } from "react-router-dom"
import PlaceHolderImage from "./../assets/placeholder.svg";


const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
 
  // Функція для заміни битого зображення
  const handleImageError = (e) => {
    e.target.src = PlaceHolderImage;
  };


  return (
    <div className='movie' key={imdbID}>
      <div>
        <h3>{Title}</h3>        
      </div>

      <div>
        <img
          src={Poster !== "N/A" ? Poster : PlaceHolderImage}
          alt={Title}
          onError={handleImageError} // Додаємо цей рядок для обробки помилки 404
        />
      </div>


      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        <p>{Year}</p>
        <Link to={`/movie/${imdbID}`}>Переглянути деталі</Link>
      </div>
    </div>
  )
}


export default MovieCard;