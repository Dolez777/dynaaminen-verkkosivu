import { Button, Form } from "react-bootstrap";
import { useState } from "react";
const Calculator = () => {
	//MUUTTUU = STATE
	const [weight, setWeight] = useState(0);
	const [bottles, setBottles] = useState(0);
	const [time, setTime] = useState(0);
	const [isMale, setIsMale] = useState(true);
	const [result, setResult] = useState(0);

	const calculateBloodAlcohol = () => {
		console.log(weight);
		console.log(bottles);
		console.log(time);
		let result;
		const litres = Number(bottles) * 0.33;
		const grams = Number(litres) * 8 * 4.5;
		const burning = Number(weight) / 10;
		const gramsLeft = grams - burning * time;

		if (isMale) {
			result = gramsLeft / (weight * 0.7);
		} else {
			result = gramsLeft / (weight * 0.6);
		}
		if (result < 0) {
			setResult(0);
		} else {
			setResult(result.toFixed(2));
		}
	};
	return (
		<div className="calculator-layout">
			<h3>Calculating alcohol blood level</h3>
			<Form>
				<Form.Group
					className="mb-3"
					controlId="exampleForm.ControlInput1"
				>
					<Form.Label>Weight</Form.Label>
					<Form.Control
						onChange={(event) => setWeight(event.target.value)}
						type="number"
						placeholder="kg"
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="exampleForm.ControlInput1"
				>
					<Form.Label>Bottles</Form.Label>
					<Form.Control
						type="number"
						placeholder="units"
						onChange={(event) => setBottles(event.target.value)}
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="exampleForm.ControlInput1"
				>
					<Form.Label>Time</Form.Label>
					<Form.Control
						type="number"
						placeholder="hours"
						onChange={(event) => setTime(event.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Gender</Form.Label>
					<Form.Check
						type="radio"
						label="Male"
						checked={isMale}
						onChange={(e) => setIsMale(e.target.value)}
					/>
					<Form.Check
						type="radio"
						label="Female"
						checked={!isMale}
						onChange={(e) => setIsMale(!e.target.value)}
					/>
				</Form.Group>
				<p>Result: {result}</p>
				<Button onClick={calculateBloodAlcohol} variant="outline-light">
					Calculate
				</Button>{" "}
			</Form>
		</div>
	);
};

export default Calculator;
