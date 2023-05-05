import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {


    return (
        <section>

        <div class="flex border-3 border-red-700 sm:w-1/2 m-auto p-4 justify-between rounded-xl mt-4 shadow-xl hover:scale-110 transition duration-200">
        <div class="flex"><h1 class="p-1 font-bold text-xl">Chicken Tika Masala</h1> <h1 class="p-2 italic">$15.99</h1></div>
           <button class="bg-red-700 p-1 px-2 rounded-xl hover:bg-red-200 text-white">Add to Cart</button>
        </div>

        

        </section>
    )
}

export default Menu; 