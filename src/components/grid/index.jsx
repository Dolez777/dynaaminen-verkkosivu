import { useEffect, useState } from "react";
import "./grid.scss";
import getDogs from "./../../api/getDogs";

function DogGrid() {
	/**State johon laitetaan kuva arrayta mitä näytetään UI:ssa */
	const [imageUrls, setImageUrls] = useState([""]);
	/**Loading state */
	const [loading, setLoading] = useState(false);
	/**Functio jolla haetaan dog apista kuva urlit ja tallennetaan stateen*/
	const handleGetDogs = () => {
		setLoading(true);

		/**Kutsutaan getDogs functiota arvolla 9 */
		getDogs(9)
			/**Kun axios request on valmis asetetaan response(kuvat) stateen */
			.then((response) => setImageUrls(response))
			.then(() => setLoading(false))
			.catch((error) => {
				setLoading(false);
				/**Tässä voidaan rakentaa logiikkaa mahdollien virheiden käsittelylle */
			});
	};
	/**useEffect on reactin vakio hook functio kuten myös kaikki use alkuiset functiot
	 * Aina kun komponentti renderoidaan ensimmäisen kerran useEffect ajetaan
	 * useEffectin tyhjään arrayhyn voi laittaa jonkun useStaten kun se state muuttuu useEffect ajetaan uudestaan
	 */
	useEffect(() => {
		handleGetDogs();
	}, []);
	/**Loopataan array state array.map:illa
	 * Kaikilla arraylla on functioita joita voidaan käyttää niiden muokkaamiseen esim .map
	 * map functio käy jokaisen arrayn indexin läpi ja palauttaa käyttäjän määrittämän value/muuttujan uuteen arrayhyn
	 * Lähes saman toiminnallisuuden voi tehdä forEach functiolla mutta forEach functio ei palauta uutta arrayta vaan muokkaa alkuperäistä
	 */
	const renderDog = imageUrls.map((url) => {
		return <img className="dog-pic" src={url} alt=""></img>;
	});
	if (loading) {
		return <div>Loading...</div>;
	} else {
		/**HTML ja jsx elementtejen sisälle muuttujia voidaan käyttää laittamalla ne {} sulkeisiin */
		return (
			<div className="">
				<button onClick={handleGetDogs} className="dog-button">
					Random Dogs
				</button>
				<div className="image-grid">{renderDog}</div>
			</div>
		);
	}
}

export default DogGrid;
