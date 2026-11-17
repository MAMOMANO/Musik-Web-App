import bglogin from "../assets/illustrations/loginregis.svg";
export default function Registrasi() {
  return (
    <section className="p-5 gap-6 bg-bg w-full min-h-screen flex flex-col md:flex-row lg:flex-row lg:justify-center lg:items-center">
      <img src={bglogin} alt="bg login" />
      <div className="flex flex-col bg-bgcontainer px-6 py-8 rounded-lg justify-center gap-6 lg:w-120">
        <h1 className="text-3xl font-medium">Registrasi</h1>
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
              htmlFor="email"
              name="email"
              className="text-sm text-textprimary"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Masukan email Anda"
              className="border-0 outline-none focus:ring-0 px-6 py-4 rounded-lg bg-bg"
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

          <button
            // onSubmit={handleSubmit}
            className="bg-btndprimary px-6 py-4 text-white rounded-lg text-sm font-medium hover:bg-btndhover active:bg-btndpressed hover:cursor-pointer"
          >
            Login
          </button>
        </form>

        <div>
          <p className="text-center text-sm text-textprimary/70">
            Sudah punya akun?{" "}
            <button className="text-textprimary font-medium">Masuk</button>
          </p>
        </div>
      </div>
    </section>
  );
}
