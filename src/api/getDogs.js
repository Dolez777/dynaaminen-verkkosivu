import axios from "../../node_modules/axios/index";

const getDogs = async (amount) => {
	return await axios
		.get("https://dog.ceo/api/breeds/image/random/" + amount)
		.then((response) => response.data.message)
		.catch((err) => err);
};

export default getDogs;
