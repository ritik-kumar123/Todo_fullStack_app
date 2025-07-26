import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("jwt", data.token);
      setToken(data.token);

      toast.success(data.message || "User logged in successfully");
      navigateTo("/");

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.errors || "User login failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-5 text-center">Login</h2>
        <form onSubmit={handleRegister}>
          {/* email */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type Email"
            />
          </div>

          {/* password */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Password</label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-900 duration-300 rounded-xl font-semibold p-3"
          >
            Login
          </button>

          <p className="mt-4 text-center text-gray-600">
            New user?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
