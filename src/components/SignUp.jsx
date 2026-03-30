import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

export default function Signup() {
  return (
    <AuthLayout title="Sign Up">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">User name*</label>
          <input
            type="text"
            placeholder="Please enter user name"
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password*</label>
          <input
            type="password"
            placeholder="Please enter your password"
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Confirm password*</label>
          <input
            type="password"
            placeholder="Please re-enter your password"
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Mobile no.</label>
          <div className="flex gap-2 ">
            <select className="p-2 border rounded-md">
              <option>+92 (Pakistan)</option>
              <option>+91 (India)</option>
              <option>+1 (USA)</option>
            </select>
            <input
              type="text"
              placeholder="Enter Mobile No."
              className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Email*</label>
          <input
            type="email"
            placeholder="Please enter your email"
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md hover:opacity-90"
        >
          Sign Up
        </button>

        <p className="text-center text-sm mt-3">
          Have an account?{" "}
          <Link
            to="/"
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
