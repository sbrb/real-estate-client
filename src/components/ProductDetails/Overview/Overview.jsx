import "./Overview.css";
import {
  BedOutlined,
  CalendarMonthOutlined,
  SquareFootOutlined,
  DirectionsCarOutlined,
  BathtubOutlined,
} from "@mui/icons-material";

function Overview() {
  return (
    <div className="overview container">
      <div className="overview_title popery_page_title">Overview</div>
      <hr />
      <div className="overview_dieted divide_column_end">
        <ul>
          <li>
            <strong>Apartment</strong>
          </li>
          <br />
          <li>Property Type</li>
        </ul>
        <ul>
          <li>
            <BedOutlined className="mui_icon" />
            <strong>4</strong>
          </li>
          <br />
          <li>Bedrooms</li>
        </ul>
        <ul>
          <li>
            <BathtubOutlined className="mui_icon" />
            <strong>2</strong>
          </li>
          <br />
          <li>Bathrooms</li>
        </ul>
        <ul>
          <li>
            <DirectionsCarOutlined className="mui_icon" />
            <strong>1</strong>
          </li>
          <br />
          <li>Garage</li>
        </ul>
        <ul>
          <li>
            <SquareFootOutlined className="mui_icon" />
            <strong>1200</strong>
          </li>
          <br />
          <li>Sq Ft</li>
        </ul>
        <ul>
          <li>
            <CalendarMonthOutlined className="mui_icon" />
            <strong>2016</strong>
          </li>
          <br />
          <li>Year Built</li>
        </ul>
      </div>
    </div>
  );
}

export default Overview;


