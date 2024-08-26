import React, { useState } from 'react'
import Cw from './cwpp.module.css';
import Piechart from '../Piechart/Piechart';

function Cwpp() {
  const [widgets, setWidgets] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newWidgetContent, setNewWidgetContent] = useState("");

  const handleAddWidget = () => {
    setShowPopup(true);
  };

  const handleSubmit = () => {
    setWidgets([...widgets, newWidgetContent]);
    setShowPopup(false);
    setNewWidgetContent("");
  };
  return (
    <div className={Cw.main}>
      <h1>CWPP Executive Dashboard</h1>
      <div className={Cw.cspmdash}>
        <div className={Cw.widgets}>
          <Piechart />
        </div>
        <div className={Cw.widgets}>
          <Piechart />
        </div>

        {widgets.map((widget, index) => (
          <div className={Cw.widgetss} key={index}>
            <p>{widget}</p>
          </div>
        ))}
        <div className={Cw.widgetss}>
          <button onClick={handleAddWidget}>
            <span>+</span> Add Widget
          </button>
        </div>
      </div>
      {showPopup && (
        <div className={Cw.popup}>
          <div className={Cw.popupContent}>
            <h3>Add New Widget</h3>
            <input
              type="text"
              value={newWidgetContent}
              onChange={(e) => setNewWidgetContent(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cwpp
