import { useEffect, useState } from "react";
import "./grid.scss";
import getDogs from "./../../api/getDogs";

function DogGrid(props) {
	const renderDog = props.imageUrls.map((url, index) => {
		return (
			<div
				key={index}
				className="dog-pic"
				style={{ backgroundImage: `url(${url})` }}
			></div>
		);
	});
	if (props.loading) {
		return <div>Loading...</div>;
	} else if (props.error) {
		return <div>ERORR DESTRUCKTION</div>;
	} else {
		/**HTML ja jsx elementtejen sisälle muuttujia voidaan käyttää laittamalla ne {} sulkeisiin */
		return (
			<div className="">
				<div className="image-grid">{renderDog}</div>
			</div>
		);
	}
}

export default DogGrid;
