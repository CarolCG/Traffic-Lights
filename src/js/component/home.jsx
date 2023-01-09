import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

function encenderRojo () {
	setColor1 ("btn-danger")
}
// function encenderRojo () {
// 	setColor1 ("btn-danger")
// }
// function encenderRojo () {
// 	setColor1 ("btn-danger")
// }

//create your first component
const Home = () => {
	const [color1,setColor1]= useState("");
	const [color2,setColor2]= useState("");
	const [color3,setColor3]= useState("");
	const [sombraColor1, setSombra1] = useState ("");
	const [sombraColor2, setSombra2] = useState ("");
	const [sombraColor3, setSombra3] = useState ("");
	const [sombraColor4, setSombra4] = useState ("");
	const [display, setDisplay] =useState("d-none");
	const [marginbt,setMargin]= useState("mb-3");

	function encenderRojo() {

		if(color1 === "btn-danger"){
			setColor1("btn-danger")
		}else{
			setColor1("")
			setSombra2("")
			setSombra3("")
			setSombra4("");
			setSombra1("0 0 15px 10px yellow")
	}
}

function encenderAmarillo() {
	if(color2 === "btn-warning"){
		setColor2("btn-warning")
	}else{
		setColor2("")
		setSombra1("")
		setSombra3("")
		setSombra4("");
		setSombra2("0 0 15px 10px yellow")
	}
}
function encenderVerde() {
	if(color3 === "btn-success"){
		setColor3("btn-success")
	}else{
		setColor3("")
		setSombra1("")
		setSombra2("")
		setSombra4("");
		setSombra3("0 0 15px 10px yellow")
	}
}

function alternarColor() {
	if(sombraColor1 === "0 0 15px 10px yellow"){
		setSombra1("");
		setSombra2("0 0 15px 10px yellow");
		setSombra3("");
		setSombra4("");
	}
	if(sombraColor2 === "0 0 15px 10px yellow"){
		setSombra1("");
		setSombra2("");
		setSombra4("");
		setSombra3("0 0 15px 10px yellow");
	}
	if(sombraColor3 === "0 0 15px 10px yellow"){
		setSombra2("");
		setSombra1("");
		setSombra3("");
		setSombra4("0 0 15px 10px yellow");
	}
	if(sombraColor4 === "0 0 15px 10px yellow"){
		setSombra1("0 0 15px 10px yellow");
		setSombra2("");
		setSombra3("");
		setSombra4("");
	}
	else if(sombraColor1 ==="" && sombraColor2 ==="" && sombraColor3 ==="" && sombraColor4 ===""){
		setSombra1("0 0 15px 10px yellow");
	}

}

function desplegarVioleta() {
if(display === "d-none"){
	setDisplay("")
	setMargin("")
}else{
setDisplay("d-none")
setMargin("mb-3")
}
}

function encenderVioleta(){
	if(sombraColor4 === "0 0 15px 10px yellow"){
		setSombra4("");
	}else{
		setSombra4("0 0 15px 10px yellow");
		setSombra1("");
		setSombra2("");
		setSombra3("");
	}
}
return (
	<div className="text-center d-flex flex-column align-items-center">
		<div class="bg-dark" style={{height:"150px", width:"10px"}}></div>
		<div class="d-grid gap-0 col-1 mx-auto bg-dark rounded-4">
		<button className={"btn border rounded-circle mt-3 mx-2 btn-danger "} onClick={encenderRojo} style={{height: "100px", boxShadow: sombraColor1}}></button>
		<button className={"btn border rounded-circle mx-2 btn-warning "} onClick={encenderAmarillo} style={{height: "100px", boxShadow: sombraColor2}}></button>
		<button className={"btn border rounded-circle mx-2 btn-success "+ marginbt} onClick={encenderVerde} style={{height: "100px", boxShadow: sombraColor3}}></button>
		<button className={"btn mb-2 mx-2 rounded-circle " + display} onClick={encenderVioleta} style={{height: "100px", backgroundColor: "purple", boxShadow: sombraColor4}}></button>
		</div>
		<button type="button" className="btn btn-info m-3" onClick={alternarColor}>Click to change light</button>
		<button type="button" className="btn btn-info m-3" onClick={desplegarVioleta}>Click to purple light</button>
	</div>
);
};


export default Home;
