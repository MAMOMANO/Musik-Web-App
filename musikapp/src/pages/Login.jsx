import { useState } from "react";
import bglogin from "../assets/illustrations/loginregis.svg";
import Button from "../components/ui/Button";
export default function Login() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <section className="p-5 gap-6 bg-bg w-full min-h-screen flex flex-col md:flex-row lg:flex-row lg:justify-center lg:items-center">
      <img src={bglogin} alt="bg login" />
      <div className="flex flex-col bg-bgcontainer px-6 py-8 rounded-lg justify-center gap-6 lg:w-120">
        <h1 className="text-3xl font-medium">Login</h1>
        <form action="input" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Username"
              name="username"
              className="text-sm text-textprimary"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Masukan username Anda"
              className="border-0 outline-none focus:ring-0  px-6 rounded-lg py-4 bg-bg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Password"
              name="password"
              className="text-sm text-textprimary"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Masukan password Anda"
              className="border-0 outline-none focus:ring-0 px-6 py-4 rounded-lg bg-bg"
            />
          </div>
          <Button onSubmit={handleSubmit}/>
        </form>

        <div>
          <p className="text-center text-sm text-textprimary/70">
            Belum punya akun?{" "}
            <button className="text-textprimary font-medium">Daftar</button>
          </p>
        </div>
      </div>
    </section>
  );
}
