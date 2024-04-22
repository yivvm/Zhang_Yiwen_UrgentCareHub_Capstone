import React, { useState, useEffect, useRef } from "react";
import { departmentMappings } from "../../data/departments";

export default function DoctorCard({ doctorcard }) {
  const [flip, setFlip] = useState(false);

  const frontEl = useRef();
  const backEl = useRef();

  const getDepartmentName = (typeName) => {
    return departmentMappings[typeName] || "Primary Care";
  }

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        <div className="image-container">
          {doctorcard.sprites.other.showdown.front_default || doctorcard.sprites.front_default ? (
            <img 
              src={doctorcard.sprites.other.showdown.front_default ? doctorcard.sprites.other.showdown.front_default : doctorcard.sprites.front_default} 
              alt={doctorcard.name} 
              style={{ maxWidth: "150px", maxHeight: "130px" }} 
            />
          ) : (
            <div className="placeholder-image" />
          )}
        </div>
        <h3 className="name">
          Dr. {doctorcard.name ? doctorcard.name.charAt(0).toUpperCase() + doctorcard.name.slice(1) : "Strange" }
        </h3>
        Title: {doctorcard.abilities && doctorcard.abilities.length > 0 ? doctorcard.abilities[0].ability.name.charAt(0).toUpperCase() + doctorcard.name.slice(1) : "Physician" } 
        <div className="card-departments">
          {
            doctorcard.types && doctorcard.types.length > 0?
            doctorcard.types.map((type, index) => {
              return (
                <div className="card-department" key={index}>
                  {getDepartmentName(type.type.name)}
                </div>
              );
            }) :
            <div>Primary Care</div>
          }
        </div>
      </div>
      <div className="back" ref={backEl}>
        {"View Profile"}<br />
        {"Schedule Appointment Online"}<br />
        {`Call 999-999-9999`}<br />
        {`Reviews`}<br />
      </div>
    </div>
  );
}
