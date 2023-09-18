import React from "react";

function Login() {
  return (
    <>
      <body className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label
                for="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                for="password"
                className="block text-gray-600 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="remember"
                className="inline-flex items-center text-gray-600"
              >
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="text-blue-500"
                />
                <span className="ml-2">Remember me</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default Login;
