function Address() {
  return (
    <div className="address container">
      {/* upper_address */}
      <div className="upper_address divide_column_end">
        <div className="address_title popery_page_title">Address</div>
        <button className="address_map_button">Open Map</button>
      </div>
      <hr />
      {/* lower_address */}
      <div className="lower_address divide_column_end">
        {/* left column */}
        <div className="address_left divide_column_half">
          <div className="divide_column_end">
            <strong>Address</strong>
            <span>2436 SW 8th St</span>
          </div>
          <hr />
          <div className="divide_column_end">
            <strong>City</strong>
            <span>Miami</span>
          </div>
          <hr />
          <div className="divide_column_end">
            <strong>State/county</strong>
            <span>Florida</span>
          </div>
          <hr />
        </div>
        {/* right column */}
        <div className="address_right divide_column_half">
          <div className="divide_column_end">
            <strong>Zip/Postal Code</strong>
            <span>33140</span>
          </div>
          <hr />
          <div className="divide_column_end">
            <strong>Area</strong>
            <span>West Flagger</span>
          </div>
          <hr />
          <div className="divide_column_end">
            <strong>Country</strong>
            <span>United States</span>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Address;
