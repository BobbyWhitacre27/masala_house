import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {





    return (
        <section>


<div class="bg-red-700 px-4 py-3 text-white">
  <p class="text-center text-sm font-medium">
    Order within the next <span id="counter"></span>30:00 minutes and receieve 10% off from your order! <span> </span>
    <a href="/menu" class="inline-block underline">Click here!</a>
  </p>
</div>


<section>
  <div class="max-w-screen-xl px-4  mx-auto sm:px-6 lg:w-3/4 lg:px-8">


    <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
      <li>
        <a href="#" class="relative block group">
          <img
            src="https://i.ibb.co/LYxsBgn/Masala-House-Logo.png"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

        </a>
      </li>

      <li>
        <a href="#" class="relative block group">
          <img
            src="https://images.pexels.com/photos/14883757/pexels-photo-14883757.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
        

            <span
              class="mt-1.5 inline-block italic px-4 py-2 rounded-xl bg-red-700 text-lg font-bold uppercase tracking-wide text-white"
            >
              Samosas
            </span>
          </div>
        </a>
      </li>

      <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" class="relative block group">
          <img
            src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
          

            <span
              class="mt-1.5 inline-block italic px-4 py-2 rounded-xl bg-red-700 text-lg font-bold uppercase tracking-wide text-white"
            >
              Chicken Tika Masala
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>





<section class="">
  <div class="p-8 md:p-8 lg:px-16 lg:py-12">
    <div class="mx-auto max-w-lg text-center">
      <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
        Order Online!
      </h2>

      <p class="hidden text-gray-500 sm:mt-4 sm:block">
       Check out our menu and order your favoite items online. For delivery or pick-up!
      </p>
    </div>

    <div class="m-auto mt-8 max-w-xl">
      


        <a href="/menu"><button
          type="submit"
          class="group mt-4 flex w-full items-center m-auto gap-2 rounded-md bg-red-700 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
        >
          <span class="text-sm font-medium"> View Menu </span>

          
        </button>
        </a>
    </div>
  </div>
</section>


<div class="mx-auto max-w-5xl px-4 py-2">
  <section class="rounded-lg bg-gray-100 p-8">
    <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
      <img
        alt="Food"
        src="https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=800"
        class="aspect-square w-full rounded-lg object-cover"
      />

      <blockquote class="sm:col-span-2">
        <p class="text-xl font-medium sm:text-2xl">
          The #1 Indian Resturant in the whole metro area. You won't be sorry.
        </p>

        <cite class="mt-8 inline-flex items-center not-italic">
          <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
          <p class="text-sm uppercase text-gray-500 sm:ms-3">
            <strong>Mike B.</strong>, FoodCritics.com
          </p>
        </cite>
      </blockquote>
    </div>
  </section>
</div>

        <div class="text-xl justify-center gap-16 mt-4 ">
        <h1 class="font-bold text-3xl">Hours of Operation</h1>
            <div class="mt-8">
            <h1>Monday: 11:00 am - 10:00 pm</h1>
            <h1>Tuesday: 11:00 am - 10:00 pm</h1>
            <h1>Wednesday: closed</h1>
            <h1>Thursday: 11:00 am - 10:00 pm</h1>
            <h1>Friday: 11:00 am - 10:00 pm</h1>
            <h1>Saturday: 11:00 am - 10:00 pm</h1>
            <h1>Sunnday: 11:00 am - 10:00 pm</h1>
            </div>
            <div class="text-2xl mt-12">
                <h1>1654 Main Street</h1>
                <h1>Foodville, Virginia 22302</h1>
            </div>
        </div>

        </section>
    )
}

export default Home; 