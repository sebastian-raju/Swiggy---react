import {IMG_URL} from "../../utils/constants"

const CardComponent = ({cardObj}) => {

  // document.querySelector('.card-body-container').style.gridTemplateColumns = "1fr 1fr 1fr 1fr";

  const {name, areaName, cloudinaryImageId, cuisines, avgRating} = cardObj;
  return (
    <div className="card-container">
      <div className="img-container">
        <img className="hotel-img" src={IMG_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="content-container">
        <div className="hotel-name">
          {name}
        </div>
        <div className="rating">
         ★ {avgRating}
        </div>
        <div className="type">
        {cuisines.join(', ')}
        </div>
        <div className="place">
          Kerala, {areaName}
        </div>
      </div>
    </div>
  )
}

export default CardComponent;