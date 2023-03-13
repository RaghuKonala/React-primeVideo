import MoviesSlider from '../MoviesSlider'
import './index.css'

const movieIdConstants = {
  action: 'ACTION',
  comedy: 'COMEDY',
}

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === movieIdConstants.action,
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === movieIdConstants.comedy,
  )

  return (
    <div className="app-container">
      <img
        className="app-image"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="app-responsive-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesData={actionMovies} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesData={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
