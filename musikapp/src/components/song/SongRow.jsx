import {
  CircleUserRound,
  Search,
  Heart,
  Plus,
  SlidersVertical,
} from "lucide-react";
export default function SongRow() {
  return (
    <div className="flex flex-row text-sm gap-4 bg-white border rounded-lg px-5 py-3 items-center">
      <p>
        <CircleUserRound size={34} />
      </p>
      <div className="flex flex-col">
        <h1 className="text-textprimary font-semibold text-lg">
          See You Again
        </h1>
        <p className="text-sm text-textprimary/70">
          Charlie Puth & Wizz Khalifa
        </p>
      </div>
      {/* <img src={musik} alt="" className="w-sm"/> */}
      <p>
        <SlidersVertical size={28} className="text-textprimary" />
      </p>
      <p>
        <Heart size={28} />
      </p>
      <p>
        <Plus size={30} />
      </p>
    </div>
  );
}
