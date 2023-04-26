function EnergyClass() {
  return (
    <div className="energy_class container">
      <div className="energy_class_title popery_page_title">Energy Class</div>
      <hr />
      <div className="energy_class_details">
        <div className="divide_column_end">
          <strong>Energetic class:</strong>
          <span className="divide_column_end_span1">A</span>
        </div>
        <hr />
        <div className="divide_column_end">
          <strong>Global Energy Performance Index:</strong>
          <span className="divide_column_end_span2">00.00 kWh / m²a</span>
        </div>
        <hr />
        <div className="divide_column_end">
          <strong>Renewable energy performance index:</strong>
          <span className="divide_column_end_span3">92.42 kWh / m²a</span>
        </div>
        <hr />
        <div className="divide_column_end">
          <strong>Energy performance of the building:</strong>
          <span className="divide_column_end_span1">98</span>
        </div>
        <hr />
        <div className="divide_column_end">
          <strong>EPC Current Rating:</strong>
          <span className="divide_column_end_span2">76</span>
        </div>
        <hr />
        <div className="divide_column_end">
          <strong>EPC Potential Rating:</strong>
          <span className="divide_column_end_span2">45</span>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default EnergyClass;
