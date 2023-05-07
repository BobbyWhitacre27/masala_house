import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({items}) => {
	const [dropDown, setDropDown] = useState(false)




	const cartWithItems = <Link
	to="/cart"
	class="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
>
	<div class="flex">
	<svg
		class="h-4 w-4 mt-1"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
		/>
	</svg>
	({items})
	</div>
	<span class="sr-only">Cart</span>
</Link>

    return (


        <header aria-label="Site Header" class="border-b border-gray-100">
            <div
                class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
            >
                <div class="flex items-center gap-4">
                    <button type="button" class="p-2 lg:hidden" onClick={() => setDropDown(true)}>
                        <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
					{dropDown === true ?
					<div class="absolute w-full h-32 bg-red-700">
						<img onClick={() => setDropDown(false)} class="absolute w-12 left-4 top-14" src="https://freesvg.org/img/close-button.png" />

						<div class="mt-16">
							<Link onClick={() => setDropDown(false)} to="/" class="text-white text-center text-2xl underline mt-2 pr-2">Home</Link>
							<Link onClick={() => setDropDown(false)} to="/menu" class="text-white text-center text-2xl underline mt-2 pl-2 pr-2">Menu</Link>
							<Link onClick={() => setDropDown(false)} to="/menu" class="text-white text-center text-2xl underline mt-2 pl-2">Cart</Link>
							</div>
					</div> : ""}

                    <Link to="/" class="flex">
                        <img class="h-16 w-52" src="https://i.ibb.co/rf6hyB6/MASALA-HOUSE.png"></img>
                 
                        {/* <span class="p-1 h-10 w-64 text-xl rounded-lg text-amber-400 font-bold bg-red-700">Masala House</span> */}
                    </Link>
                </div>

                <div class="flex flex-1 items-center justify-end gap-8">
                    <nav
                        aria-label="Site Nav"
                        class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
                    >
                        <Link
                            to="/"
                            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                            Home
                        </Link>

                        <Link
                            to="/menu"
                            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                            Menu
                        </Link>

                    </nav>

                    <div class="flex items-center">
                        <div class="flex items-center border-x border-gray-100">
                            <span class="border-e border-e-gray-100">
                                {items < 1 ? <Link
                                    to="/cart"
                                    class="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
                                >
                                    <svg
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>

                                    <span class="sr-only">Cart</span>
                                </Link> : cartWithItems}
                            </span>
                     
                        </div>
                    </div>
                </div>
            </div>
        </header>



    )
}

export default Header; 