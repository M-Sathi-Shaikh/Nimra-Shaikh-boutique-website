import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

export default function ForgotPassword() {
  return (
    <AuthLayout title="Forgot Password">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Enter your email*</label>
          <input
            type="email"
            placeholder="Enter your email Or Mobile Number"
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-between gap-3">
          <Link
            to="/"
            className="w-1/2 py-2 text-center border rounded-md hover:bg-gray-100"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="w-1/2 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md hover:opacity-90"
          >
            Send Reset Link
          </button>
        </div>

        <p className="text-center text-sm mt-3">
          Back to{" "}
          <Link
            to="/"
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
