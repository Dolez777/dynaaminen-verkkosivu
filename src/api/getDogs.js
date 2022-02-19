import axios from "../../node_modules/axios/index";

const getDogs = async (amount, breed) => {
	if (breed === "random") {
		return await axios.get(
			"https://dog.ceo/api/breeds/image/random/" + amount
		);
	} else {
		return await axios.get(
			`https://dog.ceo/api/breed/${breed.replace(
				"-",
				"/"
			)}/images/random/` + amount
		);
	}
};
/**https://dog.ceo/api/breed/
African
/images/random
 */
export default getDogs;
