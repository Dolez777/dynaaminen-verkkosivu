import { useEffect, useState } from "react";
import "./grid.scss";
import getDogs from "./../../api/getDogs";

const dogData = [
	"https://images.dog.ceo/breeds/setter-irish/n02100877_2283.jpg",
	"https://images.dog.ceo/breeds/cotondetulear/100_2397.jpg",
	"https://images.dog.ceo/breeds/terrier-norwich/n02094258_3329.jpg",
	"https://images.dog.ceo/breeds/bulldog-boston/n02096585_1668.jpg",
	"https://images.dog.ceo/breeds/spaniel-sussex/n02102480_5937.jpg",
	"https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_12438.jpg",
	"https://images.dog.ceo/breeds/hound-ibizan/n02091244_147.jpg",
	"https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg",
	"https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_3536.jpg",
];

function DogGrid() {
	const [imageUrls, setImageUrls] = useState([""]);

	const handleGetDogs = () => {
		getDogs(9)
			.then((response) => setImageUrls(response))
			.catch((error) => {});
	};

	useEffect(() => {
		handleGetDogs();
	}, []);

	const renderDog = imageUrls.map((url) => {
		return <img className="dog-pic" src={url} alt=""></img>;
	});

	return (
		<div className="">
			<button className="dog-button">Random Dogs</button>
			<div className="image-grid">{renderDog}</div>
		</div>
	);
}

export default DogGrid;
