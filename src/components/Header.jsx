import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {


    return (


        <header aria-label="Site Header" class="border-b border-gray-100">
            <div
                class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
            >
                <div class="flex items-center gap-4">
                    <button type="button" class="p-2 lg:hidden">
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

                    <a href="/" class="flex">
                        <img class="h-16 w-52" src="https://i.ibb.co/rf6hyB6/MASALA-HOUSE.png"></img>
                 
                        {/* <span class="p-1 h-10 w-64 text-xl rounded-lg text-amber-400 font-bold bg-red-700">Masala House</span> */}
                    </a>
                </div>

                <div class="flex flex-1 items-center justify-end gap-8">
                    <nav
                        aria-label="Site Nav"
                        class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
                    >
                        <a
                            href="/"
                            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                            Home
                        </a>

                        <a
                            href="/menu"
                            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                            Menu
                        </a>

                    </nav>

                    <div class="flex items-center">
                        <div class="flex items-center border-x border-gray-100">
                            <span class="border-e border-e-gray-100">
                                <a
                                    href="/cart"
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
                                </a>
                            </span>

                     
                        </div>
                    </div>
                </div>
            </div>
        </header>



    )
}

export default Header; 