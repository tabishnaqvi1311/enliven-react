import { useState } from "react";
import TransitionEffect from "./TransitionEffect";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are necessary.");
      return;
    }
  };

  return (
    <div className="w-full lg:h-[90vh] p-5 lg:p-0">
      <TransitionEffect />
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center gap-10">
            <h3>Create an Account</h3>
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <div className="flex items-center gap-3 text-2xl border border-primary p-3 rounded-xl cursor-pointer hover:shadow-xl">
                <FcGoogle size={30} />
                <p>Google</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <p className="text-2xl sm:text-2xl lg:text-3xl">-OR-</p>
            </div>

            <form
              className="flex flex-col items-start gap-5"
              onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Id"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="p-3 rounded-tr-xl rounded-bl-xl bg-primary text-background  border border-primary font-semibold hover:bg-background hover:text-secondary text-xl duration-150">
              Register
            </button>
              {error && (
                <div className="bg-red-500 text-background w-fit text-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}
            </form>

            <div className="flex items-center justify-center">
              <p className="text-2xl">
                Already have a account?{" "}
                <Link to="/login" className="text-secondary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
