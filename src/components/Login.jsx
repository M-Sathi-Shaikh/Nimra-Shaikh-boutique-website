import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

export default function Login() {
  return (
    <AuthLayout title="Log in">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">User name*</label>
          <input
            type="text"
            placeholder="User name"
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password*</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            />
            <FaEye className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>

        <div className="text-right text-sm">
          <Link
            to="/forgot"
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="flex justify-between gap-3">
          <button
            type="button"
            className="w-1/2 py-2 border rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md hover:opacity-90"
          >
            Login
          </button>
        </div>

        <p className="text-center text-sm mt-3">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
