import { handler } from "daisyui";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Checkout = ({ totalCost,
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
	setItems, items,
	setTotalCost,
	setSpecial, special
}) => {
	const [delivery, setDilvery] = useState(false)

	const handleDelivery = (event) => {
		if(delivery === false){
			setDilvery(true)
		}else{
		setDilvery(false)
		}
	}

	console.log(delivery)
	const handlePay = () => {
	// Appetizers
	setTandoriChickenWings(0)
	setVegetableSamosas(0)
	setPaneerPakora(0)
	setLentilsSoup(0)

	// Breads
	setNaan(0)
	setGarlicNaan(0)
	setRoti(0)

	// Chicken Specialty
	setChickenTikkaMasala(0)
	setButterChicken(0)
	setChickenTandori(0)
	setChickenCurry(0)

	// Vegetarian Specialty
	setPalakPaneer(0)
	setShahiPaneer(0)
	setMaliaKofta(0)
	setAluGobuMasala(0)

	// Sides
	setMangoChutney(0)
	setRice(0)
	setVegtables(0)

	// Dessert
	setMangoIceCream(0)

	// Items in cart
	setItems(0)

	// Special Applied
	setSpecial(false)

	// Total Cost
	setTotalCost(0)

	window.alert("Thank you for your order!")
	}


	return (
		<section>
			<header class="flex m-auto text-center sm:w-1/2 justify-between p-2 mt-4">
				<h1 class="text-3xl font-bold text-red-700 sm:text-3xl">Checkout</h1> <h1 class="text-3xl font-bold text-red-700 sm:text-3xl">Total: <span class="text-black font-normal">${totalCost.toFixed(2)}</span></h1>
			</header>

			<div class="text-xs">(This is not a real resturant website, payment info is not documented)</div>

			<section>
				<h1 class="sr-only">Checkout</h1>

		

					<div class="bg-white mt-4">
						<div class="mx-auto max-w-lg px-4 lg:px-8">
						<div class="text-xs text-left font-medium text-gray-700">Pick-up? <span><input type="checkbox" onClick={handleDelivery}/> </span></div>
							<form class="grid grid-cols-6 gap-4">

							{delivery === false ? <div class="col-span-6">
									<label for="Email" class="block text-xs font-medium text-gray-700">
										Delivery Address
									</label>

									<input
										type="email"
										id="Email"
										class="mt-1 w-full rounded-md border-black border-2 shadow-sm sm:text-sm"
									/>
								</div> : ""}

								<div class="col-span-3">
									<label
										for="FirstName"
										class="block text-xs font-medium text-gray-700"
									>
										First Name
									</label>

									<input
										type="text"
										id="FirstName"
										class="mt-1 w-full rounded-md shadow-sm sm:text-sm border-black border-2"
									/>
								</div>

								<div class="col-span-3">
									<label
										for="LastName"
										class="block text-xs font-medium text-gray-700"
									>
										Last Name
									</label>

									<input
										type="text"
										id="LastName"
										class="mt-1 w-full rounded-md border-black border-2 shadow-sm sm:text-sm"
									/>
								</div>

								<div class="col-span-6">
									<label for="Email" class="block text-xs font-medium text-gray-700">
										Email
									</label>

									<input
										type="email"
										id="Email"
										class="mt-1 w-full rounded-md border-black border-2 shadow-sm sm:text-sm"
									/>
								</div>

								<div class="col-span-6">
									<label for="Phone" class="block text-xs font-medium text-gray-700">
										Phone
									</label>

									<input
										type="tel"
										id="Phone"
										class="mt-1 w-full rounded-md border-black border-2 shadow-sm sm:text-sm"
									/>
								</div>

								<fieldset class="col-span-6">
									<legend class="block text-sm font-medium text-gray-700">
										Card Details
									</legend>

									<div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
										<div>
											<label for="CardNumber" class="sr-only"> Card Number </label>

											<input
												type="text"
												id="CardNumber"
												placeholder="Card Number"
												class="relative mt-1 w-full rounded-t-md border-black border-2 focus:z-10 sm:text-sm"
											/>
										</div>

										<div class="flex">
											<div class="flex-1">
												<label for="CardExpiry" class="sr-only"> Card Expiry </label>

												<input
													type="text"
													id="CardExpiry"
													placeholder="Expiry Date"
													class="relative w-full rounded-es-md border-black border-2 focus:z-10 sm:text-sm"
												/>
											</div>

											<div class="-ms-px flex-1">
												<label for="CardCVC" class="sr-only"> Card CVC </label>

												<input
													type="text"
													id="CardCVC"
													placeholder="CVC"
													class="relative w-full rounded-ee-md border-black border-2 focus:z-10 sm:text-sm"
												/>
											</div>
										</div>
									</div>
								</fieldset>

								<fieldset class="col-span-6">
									<legend class="block text-sm font-medium text-gray-700">
										Billing Address
									</legend>

									<div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
					

										<div>
											<label class="sr-only" for="PostalCode"> ZIP/Post Code </label>

											<input
												type="text"
												id="PostalCode"
												placeholder="ZIP/Post Code"
												class="relative w-full rounded-b-md border-black border-2 focus:z-10 sm:text-sm"
											/>
										</div>
									</div>
								</fieldset>
							
								<div class="col-span-6">
									<Link to="/"
										onClick={handlePay}
										class="block w-full rounded-md bg-red-700 p-2.5 text-sm text-white transition hover:shadow-lg"
									>
										Pay Now
									</Link>
								</div>
							</form>
						</div>
					</div>
		
			</section>


		</section>
	)
}

export default Checkout; 