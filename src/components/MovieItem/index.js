import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'
import 'reactjs-popup/dist/index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={25} color="#231f20" />
            </button>
            <div className="player-container">
              <ReactPlayer url={videoUrl} width="40vw" />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
