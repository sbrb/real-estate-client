import "./Details.css";
import { CalendarMonth } from "@mui/icons-material";

function Details() {
  return (
    <div className="details container">
      {/* upper_details */}
      <div className="upper_details">
        <div className="details_title divide_column_end">
          <div className="details_title_head popery_page_title">Details</div>
          <div className="details_title_date">
            <CalendarMonth className="mui_icon" />
            Updated on January 13, 2022 at 2:36 pm
          </div>
        </div>
        <hr />
        <div className="details_details divide_column_end">
          {/* left column */}
          <div className="details_details_left divide_column_half">
            <div className="divide_column_end">
              <strong>Property ID:</strong>
              <span> HZ40</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Price:</strong>
              <span>$4,500/mo</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Property Size:</strong>
              <span>1200 Sq Ft</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Bedrooms:</strong>
              <span>4</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Bathrooms:</strong>
              <span>2</span>
            </div>
            <hr />
          </div>
          {/* right column */}
          <div className="details_details_right divide_column_half">
            <div className="divide_column_end">
              <strong>Garage:</strong>
              <span>1</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Garage Size:</strong>
              <span>200 SqFt</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Year Built:</strong>
              <span>2016</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Property Type:</strong>
              <span>Apartment</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Property Status:</strong>
              <span>For Rent</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
      {/* lower_details */}
      <div className="lower_details">
        <div className="upper_address">
          <div className="popery_page_title">Additional Details</div>
        </div>
        <hr />
        <div className=" divide_column_end">
          {/* left column */}
          <div className="divide_column_half">
            <div className="divide_column_end">
              <strong>Deposit:</strong>
              <span>20%</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Pool Size:</strong>
              <span>300 Sqft</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Last remodel year:</strong>
              <span>1987</span>
            </div>
            <hr />
          </div>
          {/* right column */}
          <div className="divide_column_half">
            <div className="divide_column_end">
              <strong>Amenities:</strong>
              <span>Clubhouse</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Additional Rooms:</strong>
              <span>Guest Bath</span>
            </div>
            <hr />
            <div className="divide_column_end">
              <strong>Equipment:</strong>
              <span>Grill - Gas</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
