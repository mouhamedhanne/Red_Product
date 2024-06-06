import { Plus } from "lucide-react";
import Link from "next/link";

export default function Hero_Hotels() {
  return (
    <div className="py-4 flex justify-between items-center">
      <div>
        <h3 className="text-3xl font-light">Hotels 8</h3>
      </div>
      <div>
        <Link
          href="/dashboard/add-new-hotel"
          className="flex space-x-2 border-2 border-gray-400 py-2 px-4 rounded-lg"
        >
          <Plus className="" /> <span>Creer un nouveau hotel</span>
        </Link>
      </div>
    </div>
  );
}
