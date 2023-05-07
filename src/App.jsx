import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Menu from './components/Menu.jsx'
import Cart from './components/Cart.jsx'
import Footer from './components/Footer.jsx'

function App() {
	// Appetizers
	const [tandoriChickenWings, setTandoriChickenWings] = useState(0);
	const [vegetableSamosas, setVegetableSamosas] = useState(0);
	const [paneerPakora, setPaneerPakora] = useState(0);
	const [lentilsSoup, setLentilsSoup] = useState(0);

	// Breads
	const [nann, setNaan] = useState(0);
	const [garicNaan, setGarlicNaan] = useState(0);
	const [roti, setRoti] = useState(0);

	// Chicken Specialty
	const [chickenTikkaMasala, setChickenTikkaMasala] = useState(0);
	const [butterChicken, setButterChicken] = useState(0);
	const [chickenTandori, setChickenTandori] = useState(0);
	const [chickenCurry, setChickenCurry] = useState(0);

	// Vegetarian Specialty
	const [palakPaneer, setPalakPaneer] = useState(0);
	const [shahiPaneer, setShahiPaneer] = useState(0);
	const [maliaKofta, setMaliaKofta] = useState(0);
	const [aluGobuMasala, setAluGobuMasala] = useState(0);

	// Sides
	const [mangoChutney, setMangoChutney] = useState(0);
	const [rice, setRice] = useState(0);
	const [vegtables, setVegtables] = useState(0);

	// Dessert
	const [mangoIceCream, setMangoIceCream] = useState(0);

	// Items in cart
	const [items, setItems] = useState(0);

	// Special Applied
	const [special, setSpecial] = useState(false)

	// Total Cost
	const [totalCost, setTotalCost] = useState(0);

console.log(items)

	return (
		<div className="App">
			<BrowserRouter>
				<header><Header items={items}></Header></header>
				<Routes>
					<Route exact path="/" element={<Home setSpecial={setSpecial} special={special} />} />
					<Route path="/menu" element={<Menu
						setTandoriChickenWings={setTandoriChickenWings} tandoriChickenWings={tandoriChickenWings}
						setVegetableSamosas={setVegetableSamosas} vegetableSamosas={vegetableSamosas}
						setPaneerPakora={setPaneerPakora} paneerPakora={paneerPakora}
						setLentilsSoup={setLentilsSoup} lentilsSoup={lentilsSoup}
						setNaan={setNaan} nann={nann}
						setGarlicNaan={setGarlicNaan} garicNaan={garicNaan}
						setRoti={setRoti} roti={roti}
						setChickenTikkaMasala={setChickenTikkaMasala} chickenTikkaMasala={chickenTikkaMasala}
						setButterChicken={setButterChicken} butterChicken={butterChicken}
						setChickenTandori={setChickenTandori} chickenTandori={chickenTandori}
						setChickenCurry={setChickenCurry} chickenCurry={chickenCurry}
						setPalakPaneer={setPalakPaneer} palakPaneer={palakPaneer}
						setShahiPaneer={setShahiPaneer} shahiPaneer={shahiPaneer}
						setMaliaKofta={setMaliaKofta} maliaKofta={maliaKofta}
						setAluGobuMasala={setAluGobuMasala} aluGobuMasala={aluGobuMasala}
						setMangoChutney={setMangoChutney} mangoChutney={mangoChutney}
						setRice={setRice} rice={rice}
						setVegtables={setVegtables} vegtables={vegtables}
						setMangoIceCream={setMangoIceCream} mangoIceCream={mangoIceCream}
						setItems={setItems} items={items}
					/>} />
					<Route path="/cart" element={<Cart 
					setTandoriChickenWings={setTandoriChickenWings} tandoriChickenWings={tandoriChickenWings} 
					setVegetableSamosas={setVegetableSamosas} vegetableSamosas={vegetableSamosas}
					setPaneerPakora={setPaneerPakora} paneerPakora={paneerPakora}
					setLentilsSoup={setLentilsSoup} lentilsSoup={lentilsSoup}
					setNaan={setNaan} nann={nann}
					setGarlicNaan={setGarlicNaan} garicNaan={garicNaan}
					setRoti={setRoti} roti={roti}
					setChickenTikkaMasala={setChickenTikkaMasala} chickenTikkaMasala={chickenTikkaMasala}
					setButterChicken={setButterChicken} butterChicken={butterChicken}
					setChickenTandori={setChickenTandori} chickenTandori={chickenTandori}
					setChickenCurry={setChickenCurry} chickenCurry={chickenCurry}
					setPalakPaneer={setPalakPaneer} palakPaneer={palakPaneer}
					setShahiPaneer={setShahiPaneer} shahiPaneer={shahiPaneer}
					setMaliaKofta={setMaliaKofta} maliaKofta={maliaKofta}
					setAluGobuMasala={setAluGobuMasala} aluGobuMasala={aluGobuMasala}
					setMangoChutney={setMangoChutney} mangoChutney={mangoChutney}
					setRice={setRice} rice={rice}
					setVegtables={setVegtables} vegtables={vegtables}
					setMangoIceCream={setMangoIceCream} mangoIceCream={mangoIceCream}
					setItems={setItems} items={items}
					setTotalCost={setTotalCost} totalCost={totalCost}
					setSpecial={setSpecial} special={special} 
					/>} />
				</Routes>
				<footer><Footer></Footer></footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
