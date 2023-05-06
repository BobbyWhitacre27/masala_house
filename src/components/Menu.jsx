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
	setMaliaKofta,maliaKofta,
	setAluGobuMasala, aluGobuMasala,
	setMangoChutney, mangoChutney,
	setRice, rice,
	setVegtables, vegtables,
	setMangoIceCream, mangoIceCream,
}) => {


	const handleTandoriChickenWings = (event) => {
        var wings = tandoriChickenWings + 1
        setTandoriChickenWings(wings)
        window.alert("Tandori Chicken Wings added to cart!")
    }

	const handleVegetableSamosas = (event) => {
        var food = vegetableSamosas + 1
        setVegetableSamosas(food)
        window.alert("Vegetable Samosas added to cart!")
    }

	const handlePaneerPakora = (event) => {
        var food = paneerPakora + 1
        setPaneerPakora(food)
        window.alert("Paneer Pakora added to cart!")
    }
    
	const handleLentilsSoup = (event) => {
        var food = lentilsSoup + 1
        setLentilsSoup(food)
        window.alert("Lentils Soup added to cart!")
    }

	const handleNaan = (event) => {
        var food = nann + 1
        setNaan(food)
        window.alert("Naan added to cart!")
    }

	const handleGarlicNaan = (event) => {
        var food = garicNaan + 1
        setGarlicNaan(food)
        window.alert("Garlic Naan added to cart!")
    }

	const handleRoti = (event) => {
        var food = roti + 1
        setRoti(food)
        window.alert("Roti added to cart!")
    }

	const handleChickenTikkaMasala = (event) => {
        var food = chickenTikkaMasala + 1
        setChickenTikkaMasala(food)
        window.alert("Chicken Tikka Masala added to cart!")
    }

	const handleButterChicken = (event) => {
        var food = butterChicken + 1
        setButterChicken(food)
        window.alert("Butter Chicken added to cart!")
    }

	const handleChickenTandori = (event) => {
        var food = chickenTandori + 1
        setChickenTandori(food)
        window.alert("Chicken Tandori added to cart!")
    }

	const handleChickenCurry = (event) => {
        var food = chickenCurry + 1
        setChickenCurry(food)
        window.alert("Chicken Curry added to cart!")
    }

	const handlePalakPaneer = (event) => {
        var food = palakPaneer + 1
        setPalakPaneer(food)
        window.alert("Palak Paneer added to cart!")
    }

    return (
        <section>
            <div><br></br></div>

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
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Cheese friiters</p>
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Lentils Soup - <span class="italic font-normal">$5.99</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Savoury with onions, carrots and celery</p>
            </div>


            <div class="sm:w-3/4 m-auto text-left">
                <h1 class="text-2xl text-black italic pl-2">Breads</h1>
                <div class="border-black border-1" />
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Nann - <span class="italic font-normal">$2.99</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Regular made from flour</p>
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Garlic Nann - <span class="italic font-normal">$3.99</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Naan with garlic and flavorful seasonings</p>
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Roti - <span class="italic font-normal">$2.49</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
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
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Juicy marinated chicken served in tangy tomato sauce with onions and peppers, served with a side of rice</p>
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Butter Chicken - <span class="italic font-normal">$15.99</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Juicy marinated chicken served in tangy tomato sauce, served with a side of rice</p>
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Chicken Tandori - <span class="italic font-normal">$16.99</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">White and dark meat spiced chicken, served with a naan and a side of vegetable</p>
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Chicken Curry - <span class="italic font-normal">$15.99</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
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
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Spinach based cooked with homemade cheese and spices, served with rice</p>
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Shahi Paneer - <span class="italic font-normal">$14.99</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Tangy tomato sauce based with homemade cheese, served with rice</p>
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Malia Kofta - <span class="italic font-normal">$14.99</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Vegtable dumpings in a creamy sauce, served with rice</p>
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Alu - Gobu Masala- <span class="italic font-normal">$14.99</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
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
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Sweet sauce</p>
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Rice - <span class="italic font-normal">$2.99</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Basmati rice</p>
            </div>

            <div class="border-3 border-red-700 sm:w-1/2 m-auto p-2 rounded-xl mt-4 mb-4 shadow-xl sm:hover:scale-110 transition duration-200">
                <div class="flex  justify-between">
                <div class="sm:flex"><h1 class="p-1 font-bold sm:text-xl text-left">Vegetables - <span class="italic font-normal">$5.99</span></h1></div>
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
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
                <button class="bg-red-700 sm:p-1 px-2 content-evenly rounded-xl h-8 w-28 mt-1 mb-1 hover:bg-red-200 text-white">Add to Cart</button>
                </div>
                <p class="text-left text-gray-500 italic">Sweet ice cream dessert</p>
            </div>



        </section>
    )
}

export default Menu; 