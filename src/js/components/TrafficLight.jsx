import { useEffect } from "react";
import { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [newColor, setNewColor] = useState("purple")



    return (
        <div className="container">
            <div className="cabeza"></div>
            <div className="cuerpo"></div>
            <div className="luces">

                <div className={`red  ${color === "red" ? "light-on" : " "}`} onClick={() => setColor("red")}></div>
                <div className={`yellow ${color === "yellow" ? "light-on" : " "}`} onClick={() => setColor("yellow")}></div>
                <div className={`green ${color === "green" ? "light-on" : " "}`} onClick={() => setColor("green")}></div>

            </div>
        </div>
    )

};
export default TrafficLight;