import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({	setTandoriChickenWings, tandoriChickenWings, 
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
	setItems, items}) => {

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

		console.log({tandoriChickenWings, 
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
			mangoIceCream})

	const totalItemsInCart = itemsInCart.reduce((partialSum, a) => partialSum + a, 0);

	setItems(totalItemsInCart)

	// const itemsInCartOver0 = totalItemsInCart.filter()

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
                                <li class="flex items-center gap-4">
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-900">Tandori Chicken Wings - <span class="italic font-normal">$12.99</span></h3>
                                    </div>

                                    <div class="flex flex-1 items-center justify-end gap-2">
                                        <form>
                                            <label for="Line1Qty" class="sr-only"> Quantity </label>

                                            <input
                                                type="number"
                                                min="1"
                                                value={tandoriChickenWings}
                                                id="Line1Qty"
                                                class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                            />
                                        </form>

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

                               
                            </ul>

                            <div class="mt-8 flex justify-center border-t border-gray-100 pt-8">
                                <div class="w-screen max-w-lg space-y-4">
                                    <dl class="space-y-0.5 text-sm text-gray-700">
                                        <div class="flex justify-between">
                                            <dt>Subtotal</dt>
                                            <dd>$250</dd>
                                        </div>

                                        <div class="flex justify-between">
                                            <dt>Tax</dt>
                                            <dd>$25</dd>
                                        </div>

                                        <div class="flex justify-between">
                                            <dt>Discount</dt>
                                            <dd>-$20</dd>
                                        </div>

                                        <div class="flex justify-between !text-base font-medium">
                                            <dt>Total</dt>
                                            <dd>$200</dd>
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