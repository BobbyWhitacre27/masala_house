import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = ({
	setTandoriChickenWings, tandoriChickenWings,
	setVegetableSamosas, vegetableSamosas,
	setPaneerPakora, paneerPakora,
	setLentilsSoup, lentilsSoup,
	setNaan, nann,
	setGarlicNaan, garicNaan,
	setRoti, roti,
	setChickenTikkaMasala, chickenTikkaMasala,
	setButterChicken, butterChicken,
	setChickenTandori, chickenTandori,
	setChickenCurry, chickenCurry,
	setPalakPaneer, palakPaneer,
	setShahiPaneer, shahiPaneer,
	setMaliaKofta, maliaKofta,
	setAluGobuMasala, aluGobuMasala,
	setMangoChutney, mangoChutney,
	setRice, rice,
	setVegtables, vegtables,
	setMangoIceCream, mangoIceCream,
	setItems, items
}) => {

	const [addToCart, setAddToCart] = useState(false);

	const handleAddToCart = () => {
		setAddToCart(true)
		const setCartToFalse = () => {
			setAddToCart(false)
		}
		setTimeout(setCartToFalse, 1500)
	}

	const handleTandoriChickenWings = (event) => {
		handleAddToCart() 
		var wings = tandoriChickenWings + 1
		setTandoriChickenWings(wings)
		// window.alert("Tandori Chicken Wings added to cart!")
	}

	const handleVegetableSamosas = (event) => {
		handleAddToCart() 
		var food = vegetableSamosas + 1
		setVegetableSamosas(food)
		// window.alert("Vegetable Samosas added to cart!")
	}

	const handlePaneerPakora = (event) => {
		handleAddToCart() 
		var food = paneerPakora + 1
		setPaneerPakora(food)
		// window.alert("Paneer Pakora added to cart!")
	}

	const handleLentilsSoup = (event) => {
		handleAddToCart() 
		var food = lentilsSoup + 1
		setLentilsSoup(food)
		// window.alert("Lentils Soup added to cart!")
	}

	const handleNaan = (event) => {
		handleAddToCart() 
		var food = nann + 1
		setNaan(food)
		// window.alert("Naan added to cart!")
	}

	const handleGarlicNaan = (event) => {
		handleAddToCart() 
		var food = garicNaan + 1
		setGarlicNaan(food)
		// window.alert("Garlic Naan added to cart!")
	}

	const handleRoti = (event) => {
		handleAddToCart() 
		var food = roti + 1
		setRoti(food)
		// window.alert("Roti added to cart!")
	}

	const handleChickenTikkaMasala = (event) => {
		handleAddToCart() 
		var food = chickenTikkaMasala + 1
		setChickenTikkaMasala(food)
		// window.alert("Chicken Tikka Masala added to cart!")
	}

	const handleButterChicken = (event) => {
		handleAddToCart() 
		var food = butterChicken + 1
		setButterChicken(food)
		// window.alert("Butter Chicken added to cart!")
	}

	const handleChickenTandori = (event) => {
		handleAddToCart() 
		var food = chickenTandori + 1
		setChickenTandori(food)
		// window.alert("Chicken Tandori added to cart!")
	}

	const handleChickenCurry = (event) => {
		handleAddToCart() 
		var food = chickenCurry + 1
		setChickenCurry(food)
		// window.alert("Chicken Curry added to cart!")
	}

	const handlePalakPaneer = (event) => {
		handleAddToCart() 
		var food = palakPaneer + 1
		setPalakPaneer(food)
		// window.alert("Palak Paneer added to cart!")
	}

	const handleShahiPaneer = (event) => {
		handleAddToCart() 
		var food = shahiPaneer + 1
		setShahiPaneer(food)
		// window.alert("Shahi Paneer added to cart!")
	}

	const handleMaliaKofta = (event) => {
		handleAddToCart() 
		var food = maliaKofta + 1
		setMaliaKofta(food)
		// window.alert("Malia Kofta added to cart!")
	}

	const handleAluGobuMasala = (event) => {
		handleAddToCart() 
		var food = aluGobuMasala + 1
		setAluGobuMasala(food)
		// window.alert("Alu - Gobu Masala added to cart!")
	}

	const handleMangoChutney = (event) => {
		handleAddToCart() 
		var food = mangoChutney + 1
		setMangoChutney(food)
		// window.alert("Mango Chutney added to cart!")
	}

	const handleRice = (event) => {
		handleAddToCart() 
		var food = rice + 1
		setRice(food)
		// window.alert("Rice added to cart!")
	}

	const handleVegetables = (event) => {
		handleAddToCart() 
		var food = vegtables + 1
		setVegtables(food)
		// window.alert("Vegetables added to cart!")
	}

	const handleMagnoIceCream = (event) => {
		handleAddToCart() 
		var food = mangoIceCream + 1
		setMangoIceCream(food)
		// window.alert("Mango Ice Cream added to cart!")
	}

	const itemsInCart = [tandoriChickenWings,
		vegetableSamosas,
		paneerPakora,
		lentilsSoup,
		nann,
		garicNaan,
		roti,
		chickenTikkaMasala,
		butterChicken,
		chickenTandori,
		chickenCurry,
		palakPaneer,
		shahiPaneer,
		maliaKofta,
		aluGobuMasala,
		mangoChutney,
		rice,
		vegtables,
		mangoIceCream]

	const totalItemsInCart = itemsInCart.reduce((partialSum, a) => partialSum + a, 0);

	setItems(totalItemsInCart)

	return (
		<section>
			<div><br></br></div>

			{addToCart === true ? <div
				role="alert"
				class="fixed right-2 top-2 rounded-xl w-1/8 bg-red-700 p-3 animate-fade"
			>
				<div class="flex items-start gap-4">
					<div class="flex-1">
						<strong class="block font-bold text-white"> Item Added to Cart! </strong>

					
					</div>
				</div>
			</div> : ""}

			<div class="sm:w-3/4 m-auto text-left">
				<h1 class="text-2xl text-black italic pl-2">Appetizers</h1>
				<div class="border-black border-1" />
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Tandori Chicken Wings - <span class="italic font-normal">$12.99</span></h1></div>
					<button onClick={handleTandoriChickenWings} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Spicy chicken wings, 8 per serving.</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Vegetable Samosas - <span class="italic font-normal">$5.99</span></h1></div>
					<button onClick={handleVegetableSamosas} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Two crisp samosas filled with mashed potatoes and peas</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Paneer Pakora - <span class="italic font-normal">$6.99</span></h1></div>
					<button onClick={handlePaneerPakora} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Cheese friiters</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Lentils Soup - <span class="italic font-normal">$5.99</span></h1></div>
					<button onClick={handleLentilsSoup} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Savoury with onions, carrots and celery</p>
			</div>


			<div class="sm:w-3/4 m-auto text-left">
				<h1 class="text-2xl text-black italic pl-2">Breads</h1>
				<div class="border-black border-1" />
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Naan - <span class="italic font-normal">$2.99</span></h1></div>
					<button onClick={handleNaan} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Regular made from flour</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Garlic Naan - <span class="italic font-normal">$3.99</span></h1></div>
					<button onClick={handleGarlicNaan} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Naan with garlic and flavorful seasonings</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Roti - <span class="italic font-normal">$2.49</span></h1></div>
					<button onClick={handleRoti} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Whole wheat and thin</p>
			</div>

			<div class="sm:w-3/4 m-auto text-left">
				<h1 class="text-2xl text-black italic pl-2">Chicken Specialty</h1>
				<div class="border-black border-1" />
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Chicken Tikka Masala - <span class="italic font-normal">$15.99</span></h1></div>
					<button onClick={handleChickenTikkaMasala} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Juicy marinated chicken served in tangy tomato sauce with onions and peppers, served with a side of rice</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Butter Chicken - <span class="italic font-normal">$15.99</span></h1></div>
					<button onClick={handleButterChicken} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Juicy marinated chicken served in tangy tomato sauce, served with a side of rice</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Chicken Tandori - <span class="italic font-normal">$16.99</span></h1></div>
					<button onClick={handleChickenTandori} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">White and dark meat spiced chicken, served with a naan and a side of vegetable</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Chicken Curry - <span class="italic font-normal">$15.99</span></h1></div>
					<button onClick={handleChickenCurry} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Onion based curry, served with a side of rice</p>
			</div>

			<div class="sm:w-3/4 m-auto text-left">
				<h1 class="text-2xl text-black italic pl-2">Vegetarian Specialty</h1>
				<div class="border-black border-1" />
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Palak Paneer - <span class="italic font-normal">$14.99</span></h1></div>
					<button onClick={handlePalakPaneer} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Spinach based cooked with homemade cheese and spices, served with rice</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Shahi Paneer - <span class="italic font-normal">$14.99</span></h1></div>
					<button onClick={handleShahiPaneer} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Tangy tomato sauce based with homemade cheese, served with rice</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Malia Kofta - <span class="italic font-normal">$14.99</span></h1></div>
					<button onClick={handleMaliaKofta} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Vegtable dumpings in a creamy sauce, served with rice</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Alu - Gobu Masala- <span class="italic font-normal">$14.99</span></h1></div>
					<button onClick={handleAluGobuMasala} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Cauliflower and potatoes, served with rice</p>
			</div>

			<div class="sm:w-3/4 m-auto text-left">
				<h1 class="text-2xl text-black italic pl-2">Sides</h1>
				<div class="border-black border-1" />
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Mango Chutney - <span class="italic font-normal">$3.99</span></h1></div>
					<button onClick={handleMangoChutney} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Sweet sauce</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Rice - <span class="italic font-normal">$2.99</span></h1></div>
					<button onClick={handleRice} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Basmati rice</p>
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Vegetables - <span class="italic font-normal">$5.99</span></h1></div>
					<button onClick={handleVegetables} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Green beans, cauliflower, carrots and onions</p>
			</div>

			<div class="sm:w-3/4 m-auto text-left">
				<h1 class="text-2xl text-black italic pl-2">Dessert</h1>
				<div class="border-black border-1" />
			</div>

			<div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
				<div class="flex  justify-between">
					<div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Mango Ice Cream - <span class="italic font-normal">$5.99</span></h1></div>
					<button onClick={handleMagnoIceCream} class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
				</div>
				<p class="text-left text-gray-500 italic">Sweet ice cream dessert</p>
			</div>



		</section>
	)
}

export default Menu; 