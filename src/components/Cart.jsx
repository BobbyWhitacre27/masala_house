import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ setTandoriChickenWings, tandoriChickenWings,
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
	setItems, items,
	setTotalCost, totalCost
}) => {

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

	const tandoriChickenWingsCost = 12.99 * tandoriChickenWings

	const vegetableSamosasCost = 5.99 * vegetableSamosas

	const paneerPakoraCost = 6.99 * paneerPakora

	const lentilsSoupCost = 5.99 * lentilsSoup

	const nannCost = 2.99 * nann

	const garicNannCost = 2.99 * garicNaan

	const rotiCost = 2.49 * roti

	const chickenTikkaMasalaCost = 15.99 * chickenTikkaMasala

	const butterChickenCost = 15.99 * butterChicken

	const chickenTandoriCost = 16.99 * chickenTandori

	const chickenCurryCost = 15.99 * chickenCurry

	const palakPaneerCost = 14.99 * palakPaneer

	const shahiPaneerCost = 14.99 * shahiPaneer

	const maliaKoftaCost = 14.99 * maliaKofta

	const aluGobuMasalaCost = 14.99 * aluGobuMasala

	const mangoChutneyCost = 3.99 * mangoChutney

	const riceCost = 2.99 * rice

	const vegetablesCost = 5.99 * vegtables

	const mangoIceCreamCost = 5.99 * mangoIceCream

	const costOfItemsInCart = [tandoriChickenWingsCost,
		vegetableSamosasCost,
		paneerPakoraCost,
		lentilsSoupCost,
		nannCost,
		garicNannCost,
		rotiCost,
		chickenTikkaMasalaCost,
		butterChickenCost,
		chickenTandoriCost,
		chickenCurryCost,
		palakPaneerCost,
		shahiPaneerCost,
		maliaKoftaCost,
		aluGobuMasalaCost,
		mangoChutneyCost,
		riceCost,
		vegetablesCost,
		mangoIceCreamCost]

	const itemsBeingOrdered = itemsInCart.map((a) => a > 0)

	console.log({ itemsBeingOrdered })

	const totalItemsInCart = itemsInCart.reduce((partialSum, a) => partialSum + a, 0);

	const subtotalPrice = costOfItemsInCart.reduce((partialSum, a) => partialSum + a, 0);

	const discount = (subtotalPrice * .1);

	const subtotalPriceMinusDiscount = subtotalPrice - discount

	const tax = (subtotalPriceMinusDiscount * .05);

	const finalTotal = subtotalPriceMinusDiscount + tax

	setItems(totalItemsInCart)

	setTotalCost(finalTotal)



	const tandoriChickenWingsItem = <li class="flex items-center gap-4">
		<div>
			<h3 class="text-xl font-bold text-gray-900">Tandori Chicken Wings - <span class="italic font-normal">${tandoriChickenWingsCost.toFixed(2)}</span></h3>
		</div>

		<div class="flex flex-1 items-center justify-end gap-2">

			<label for="Line1Qty" class="sr-only"> Quantity </label>
			<button onClick={() => setTandoriChickenWings(tandoriChickenWings - 1)}>-</button>
			<div
				type="number"
				min="1"
				value={tandoriChickenWings}
				id="Line1Qty"
				class="h-8 w-12 grid grid-cols-1 content-center rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
			>
				{tandoriChickenWings}
			</div>
			<button onClick={() => setTandoriChickenWings(tandoriChickenWings + 1)}>+</button>

			<button onClick={() => setTandoriChickenWings(0)} class="text-gray-600 transition hover:text-red-600">
				<span class="sr-only">Remove item</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</div>
	</li>

	const vegetableSamosasItem = <li class="flex items-center gap-4">
		<div>
			<h3 class="text-xl font-bold text-gray-900">Vegetable Samosas - <span class="italic font-normal">${vegetableSamosasCost.toFixed(2)}</span></h3>
		</div>

		<div class="flex flex-1 items-center justify-end gap-2">

			<label for="Line1Qty" class="sr-only"> Quantity </label>
			<button onClick={() => setVegetableSamosas(vegetableSamosas - 1)}>-</button>
			<div
				type="number"
				min="1"
				id="Line1Qty"
				class="h-8 w-12 grid grid-cols-1 content-center rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
			>
				{vegetableSamosas}
			</div>
			<button onClick={() => setVegetableSamosas(vegetableSamosas + 1)}>+</button>

			<button onClick={() => setVegetableSamosas(0)} class="text-gray-600 transition hover:text-red-600">
				<span class="sr-only">Remove item</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</div>
	</li>

	const paneerPakoraItem = <li class="flex items-center gap-4">
		<div>
			<h3 class="text-xl font-bold text-gray-900">Paneer Pakora - <span class="italic font-normal">${paneerPakoraCost.toFixed(2)}</span></h3>
		</div>

		<div class="flex flex-1 items-center justify-end gap-2">

			<label for="Line1Qty" class="sr-only"> Quantity </label>
			<button onClick={() => setPaneerPakora(paneerPakora - 1)}>-</button>
			<div
				type="number"
				min="1"
				id="Line1Qty"
				class="h-8 w-12 grid grid-cols-1 content-center rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
			>
				{paneerPakora}
			</div>
			<button onClick={() => setPaneerPakora(paneerPakora + 1)}>+</button>

			<button onClick={() => setPaneerPakora(0)} class="text-gray-600 transition hover:text-red-600">
				<span class="sr-only">Remove item</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</div>
	</li>

	const lentilsSoupItem = <li class="flex items-center gap-4">
		<div>
			<h3 class="text-xl font-bold text-gray-900">Lentils Soup - <span class="italic font-normal">${lentilsSoupCost.toFixed(2)}</span></h3>
		</div>

		<div class="flex flex-1 items-center justify-end gap-2">

			<label for="Line1Qty" class="sr-only"> Quantity </label>
			<button onClick={() => setLentilsSoup(lentilsSoup - 1)}>-</button>
			<div
				type="number"
				min="1"
				id="Line1Qty"
				class="h-8 w-12 grid grid-cols-1 content-center rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
			>
				{lentilsSoup}
			</div>
			<button onClick={() => setLentilsSoup(lentilsSoup + 1)}>+</button>

			<button onClick={() => setLentilsSoup(0)} class="text-gray-600 transition hover:text-red-600">
				<span class="sr-only">Remove item</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</div>
	</li>

	const nannItem = <li class="flex items-center gap-4">
		<div>
			<h3 class="text-xl font-bold text-gray-900">Naan - <span class="italic font-normal">${nannCost.toFixed(2)}</span></h3>
		</div>

		<div class="flex flex-1 items-center justify-end gap-2">

			<label for="Line1Qty" class="sr-only"> Quantity </label>
			<button onClick={() => setNaan(nann - 1)}>-</button>
			<div
				type="number"
				min="1"
				id="Line1Qty"
				class="h-8 w-12 grid grid-cols-1 content-center rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
			>
				{nann}
			</div>
			<button onClick={() => setNaan(nann + 1)}>+</button>

			<button onClick={() => setNaan(0)} class="text-gray-600 transition hover:text-red-600">
				<span class="sr-only">Remove item</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</div>
	</li>

	const garlicNannItem = <li class="flex items-center gap-4">
		<div>
			<h3 class="text-xl font-bold text-gray-900">Garlic Naan - <span class="italic font-normal">${garicNannCost.toFixed(2)}</span></h3>
		</div>

		<div class="flex flex-1 items-center justify-end gap-2">

			<label for="Line1Qty" class="sr-only"> Quantity </label>
			<button onClick={() => setGarlicNaan(garicNaan - 1)}>-</button>
			<div
				type="number"
				min="1"
				id="Line1Qty"
				class="h-8 w-12 grid grid-cols-1 content-center rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
			>
				{garicNaan}
			</div>
			<button onClick={() => setGarlicNaan(vegetableSamosas + 1)}>+</button>

			<button onClick={() => setGarlicNaan(0)} class="text-gray-600 transition hover:text-red-600">
				<span class="sr-only">Remove item</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</div>
	</li>

	const rotiItem = <li class="flex items-center gap-4">
		<div>
			<h3 class="text-xl font-bold text-gray-900">Roti - <span class="italic font-normal">${rotiCost.toFixed(2)}</span></h3>
		</div>

		<div class="flex flex-1 items-center justify-end gap-2">

			<label for="Line1Qty" class="sr-only"> Quantity </label>
			<button onClick={() => setRoti(roti - 1)}>-</button>
			<div
				type="number"
				min="1"
				id="Line1Qty"
				class="h-8 w-12 grid grid-cols-1 content-center rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
			>
				{roti}
			</div>
			<button onClick={() => setRoti(roti + 1)}>+</button>

			<button onClick={() => setRoti(0)} class="text-gray-600 transition hover:text-red-600">
				<span class="sr-only">Remove item</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</div>
	</li>

	const chickenTikkaMasalaItem = <li class="flex items-center gap-4">
		<div>
			<h3 class="text-xl font-bold text-gray-900">Chicken Tikka Masala - <span class="italic font-normal">${chickenTikkaMasalaCost.toFixed(2)}</span></h3>
		</div>

		<div class="flex flex-1 items-center justify-end gap-2">

			<label for="Line1Qty" class="sr-only"> Quantity </label>
			<button onClick={() => setChickenTikkaMasala(chickenTikkaMasala - 1)}>-</button>
			<div
				type="number"
				min="1"
				id="Line1Qty"
				class="h-8 w-12 grid grid-cols-1 content-center rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
			>
				{chickenTikkaMasala}
			</div>
			<button onClick={() => setChickenTikkaMasala(chickenTikkaMasala + 1)}>+</button>

			<button onClick={() => setChickenTikkaMasala(0)} class="text-gray-600 transition hover:text-red-600">
				<span class="sr-only">Remove item</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</div>
	</li>

	const butterChickenItem = <li class="flex items-center gap-4">
		<div>
			<h3 class="text-xl font-bold text-gray-900">Butter Chicken - <span class="italic font-normal">${butterChickenCost.toFixed(2)}</span></h3>
		</div>

		<div class="flex flex-1 items-center justify-end gap-2">

			<label for="Line1Qty" class="sr-only"> Quantity </label>
			<button onClick={() => setButterChicken(butterChicken - 1)}>-</button>
			<div
				type="number"
				min="1"
				id="Line1Qty"
				class="h-8 w-12 grid grid-cols-1 content-center rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
			>
				{butterChicken}
			</div>
			<button onClick={() => setButterChicken(butterChicken + 1)}>+</button>

			<button onClick={() => setButterChicken(0)} class="text-gray-600 transition hover:text-red-600">
				<span class="sr-only">Remove item</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</div>
	</li>

	const chickenTandoriItem = <li class="flex items-center gap-4">
		<div>
			<h3 class="text-xl font-bold text-gray-900">Chicken Tandori - <span class="italic font-normal">${chickenTandoriCost.toFixed(2)}</span></h3>
		</div>

		<div class="flex flex-1 items-center justify-end gap-2">

			<label for="Line1Qty" class="sr-only"> Quantity </label>
			<button onClick={() => setChickenTandori(chickenTandori - 1)}>-</button>
			<div
				type="number"
				min="1"
				id="Line1Qty"
				class="h-8 w-12 grid grid-cols-1 content-center rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
			>
				{chickenTandori}
			</div>
			<button onClick={() => setChickenTandori(chickenTandori + 1)}>+</button>

			<button onClick={() => setChickenTandori(0)} class="text-gray-600 transition hover:text-red-600">
				<span class="sr-only">Remove item</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</div>
	</li>

	const chickenCurryItem = <li class="flex items-center gap-4">
		<div>
			<h3 class="text-xl font-bold text-gray-900">Chicken Curry - <span class="italic font-normal">${chickenCurryCost.toFixed(2)}</span></h3>
		</div>

		<div class="flex flex-1 items-center justify-end gap-2">

			<label for="Line1Qty" class="sr-only"> Quantity </label>
			<button onClick={() => setChickenCurry(chickenCurry - 1)}>-</button>
			<div
				type="number"
				min="1"
				id="Line1Qty"
				class="h-8 w-12 grid grid-cols-1 content-center rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
			>
				{chickenCurry}
			</div>
			<button onClick={() => setChickenCurry(chickenCurry + 1)}>+</button>

			<button onClick={() => setChickenCurry(0)} class="text-gray-600 transition hover:text-red-600">
				<span class="sr-only">Remove item</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</div>
	</li>

	return (
		<section>



			<section>
				<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
					<div class="mx-auto max-w-3xl">
						<header class="text-center">
							<h1 class="text-3xl font-bold text-red-700 sm:text-3xl">Your Cart</h1>
						</header>
						<div class="mt-8">
							<ul class="space-y-4">
								{tandoriChickenWings > 0 ? tandoriChickenWingsItem : ""}
								{vegetableSamosas > 0 ? vegetableSamosasItem : ""}
								{paneerPakora > 0 ? paneerPakoraItem : ""}
								{lentilsSoup > 0 ? lentilsSoupItem : ""}
								{nann > 0 ? nannItem : ""}
								{garicNaan > 0 ? garlicNannItem : ""}
								{roti > 0 ? rotiItem : ""}
								{chickenTikkaMasala > 0 ? chickenTikkaMasalaItem : ""}
								{butterChicken > 0 ? butterChickenItem : ""}
								{chickenTandori > 0 ? chickenTandoriItem : ""}
								{chickenCurry > 0 ? chickenCurryItem: ""}

							</ul>

							<div class="mt-8 flex justify-center border-t border-gray-100 pt-8">
								<div class="w-screen max-w-lg space-y-4">
									<dl class="space-y-0.5 text-sm text-gray-700">
										<div class="flex justify-between">
											<dt>Subtotal</dt>
											<dd>${subtotalPrice.toFixed(2)}</dd>
										</div>

										<div class="flex justify-between">
											<dt>Discount (10%)</dt>
											<dd>-${discount.toFixed(2)}</dd>
										</div>

										<div class="flex justify-between">
											<dt>Tax (5%)</dt>
											<dd>${tax.toFixed(2)}</dd>
										</div>



										<div class="flex justify-between !text-base font-medium">
											<dt>Total</dt>
											<dd>${finalTotal.toFixed(2)}</dd>
										</div>
									</dl>



									<div class="flex justify-end">
										<Link to="/checkout"
											href="#"
											class="block rounded bg-red-700 px-5 py-3 text-sm m-auto text-gray-100 hover:text-white"
										>
											Checkout
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


		</section>
	)
}

export default Cart; 