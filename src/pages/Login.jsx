import React, { useState } from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen border">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">Login</h1>
        <hr className="mt-3" />
        <form>
          <div className="mt-3">
            <label for="username" className="block text-base mb-2">
              Username:
            </label>
            <input
              type="text"
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600"
              placeholder="Enter Username..."
            ></input>
          </div>
          <div className="mt-3">
            <label for="password" className="block text-base mb-2">
              Password:
            </label>
            <input
              type="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600"
              placeholder="Enter Password..."
            ></input>
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="border-2 border-[#27374D] bg-[#27374D] text-white py-1 w-full rounded-md hover:bg-transparent hover:text-[#27374D] font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
