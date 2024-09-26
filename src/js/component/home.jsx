import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ selectedColor, setselectedColor ] = useState("");

	let str = ""

	return (
		<div className="semaforo">
			<div className="palo"></div>
			<div className="cuadrado">
				<div onClick={() => setselectedColor("luzroja")} className={"luzroja"+((selectedColor === "luzroja") ? " brillo" : "")}></div>
				<div onClick={() => setselectedColor("luzamarilla")} className={"luzamarilla"+((selectedColor === "luzamarilla") ? " brillo" : "")}></div>
				<div onClick={() => setselectedColor("luzverde")} className={"luzverde"+((selectedColor === "luzverde") ? " brillo" : "")}></div>
			</div>

		</div>
	);
};

export default Home;
