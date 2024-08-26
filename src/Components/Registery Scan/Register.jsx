import React, { useState } from 'react';
import Cs from './Register.module.css';
import Piechart from '../Piechart/Piechart';

function Register() {
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
    <div className={Cs.main}>
      <h1>CSPM Executive Dashboard</h1>
      <div className={Cs.cspmdash}>
        <div className={Cs.widgets}>
          <Piechart />
        </div>
        <div className={Cs.widgets}>
          <Piechart />
        </div>

        {widgets.map((widget, index) => (
          <div className={Cs.widgetss} key={index}>
            <p>{widget}</p>
          </div>
        ))}
        <div className={Cs.widgetss}>
          <button onClick={handleAddWidget}>
            <span>+</span> Add Widget
          </button>
        </div>
      </div>
      {showPopup && (
        <div className={Cs.popup}>
          <div className={Cs.popupContent}>
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
  );
}

export default Register;
