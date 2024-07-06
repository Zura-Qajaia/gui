import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const mutation = useMutation(
    async (loginData) => {
      const response = await axios.post(
        "http://localhost:3000/signup",
        loginData,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      return response.data;
    },
    {
      onError: (error) => {
        setError("Invalid email or password");
        console.error("Error signing up:", error);
      },
      onSuccess: (data) => {
        console.log("Sign up successful:", data);
        navigate("/");
      },
    }
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={error}
          className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Create account
        </button>
        <span>
          We respect your privacy. By clicking "Create account" you agree to the
          Terms and Privacy Policy.
        </span>
        <div className="flex flex-row mt-5">
          <span>Already have an account?</span>
          <Link className="text-blue-800 ml-2" to="/signin">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
