import "./Features.css";
import { CheckCircleOutline } from "@mui/icons-material";

function Features() {
  return (
    <div className="features container">
      <div className="features_title popery_page_title">Features</div>
      <hr />
      <div className="features_des">
        <div className="features_des_1">
          <div>
            <CheckCircleOutline />
            <span>Air Conditioning</span>
          </div>
          <div>
            <CheckCircleOutline />
            <span>Barbeque</span>
          </div>
          <div>
            <CheckCircleOutline />
            <span>Dryer</span>
          </div>
          <div>
            <CheckCircleOutline />
            <span>Gym</span>
          </div>
          <div>
            <CheckCircleOutline />
            <span>Laundry</span>
          </div>
        </div>

        <div className="features_des_2">
          <div>
            <CheckCircleOutline />
            <span>Lawn</span>
          </div>
          <div>
            <CheckCircleOutline />
            <span>Microwave</span>
          </div>
          <div>
            <CheckCircleOutline />
            <span>Outdoor Shower</span>
          </div>
          <div>
            <CheckCircleOutline />
            <span>Refrigerator</span>
          </div>
          <div>
            <CheckCircleOutline />
            <span>Sauna</span>
          </div>
        </div>

        <div className="features_des_3">
          <div>
            <CheckCircleOutline />
            <span>Swimming Pool</span>
          </div>

          <div>
            <CheckCircleOutline />
            <span>TV Cable</span>
          </div>
          <div>
            <CheckCircleOutline />
            <span>Washer</span>
          </div>
          <div>
            <CheckCircleOutline />
            <span>WiFi</span>
          </div>
          <div>
            <CheckCircleOutline />
            <span>Window Coverings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
