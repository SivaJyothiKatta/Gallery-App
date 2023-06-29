// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, activeThumbnailId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const thisThumbnailActive = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    activeThumbnailId(id)
  }

  return (
    <li className="list-items">
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thisThumbnailActive}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
