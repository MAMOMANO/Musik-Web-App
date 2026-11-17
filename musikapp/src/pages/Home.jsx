import bghome from "../assets/illustrations/container.svg";
import bghome1 from "../assets/illustrations/container1.svg";
import { CircleUserRound, Search } from "lucide-react";
import SongRow from "../components/song/SongRow";
export default function Home() {
  return (
    <section className="p-5 gap-6 bg-bg w-full min-h-screen flex flex-col md:flex-row lg:flex-row lg:justify-center lg:items-center">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row  items-center gap-2">
          <div>
            <CircleUserRound size={36} className="text-textprimary" />
          </div>
          <form className="">
            <div className="px-6 py-3 rounded-full bg-bgcontainer/50 flex flex-row gap-2 items-center">
              <Search />
              <input
                type="search"
                placeholder="Search Song..."
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </form>
        </div>

        <div className="bg-bgcontainer px-8 py-4 rounded-lg flex flex-col w-full">
          <div className="flex flex-row justify-center items-center p-2 relative overflow-hidden isolate">
            {/* <img src={rectangle} alt="" className="absolute inset-0  w-full h-full -z-10 object-cover " /> */}
            <div>
              <h2 className="text-2xl text-textprimary font-medium">
                Hello Marno
              </h2>
              <h4 className="text-md text-textprimary/80">
                Dengarkan Musik Vaforit Kamu
              </h4>
            </div>
            <div>
              <img src={bghome} alt="" className="h-24" />
            </div>
          </div>
          <div className="flex flex-row">
            <img src={bghome1} alt="" className="h-18" />
            <img src={bghome1} alt="" className="h-20" />
            <img src={bghome1} alt="" className="h-12" />
            <img src={bghome1} alt="" className="h-8" />
          </div>
        </div>
        <div className="bg-orange-200/30 px-4 py-2 rounded-full">
          <ul className="flex flex-row gap-1 justify-center text-textprimary font-medium text-md">
            <li className="hover:bg-orange-200 px-6 py-2 rounded-full">
              Semua Lagu
            </li>
            <li className="hover:bg-orange-200 px-6 py-2 rounded-full">
              Vaforit
            </li>
            <li className="hover:bg-orange-200 px-6 py-2 rounded-full">
              PlayList
            </li>
          </ul>
        </div>
        <SongRow />
      </div>
    </section>
  );
}
