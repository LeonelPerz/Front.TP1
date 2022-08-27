import { useState } from "react"


function Semaforo() {
    const [lights, setLights] = useState([false, false, false]);
  
    function setActiveLight(isActive, index) {
      if (isActive) {
        lights[index] = false;
        setLights([...lights]);
      } else if (lights.every(active => !active)) {
        lights[index] = true;
        setLights([...lights]);
      }
    }
  
    return (
      <ul className="traffic-light">
        {lights.map((isActive, index) => (
          <li key={index} onClick={() => setActiveLight(isActive, index)}>
            <span className={isActive ? "on" : "off"} />
          </li>
        ))}
      </ul>
    );
  }

  export default Semaforo;