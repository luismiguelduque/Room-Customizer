import { use } from "react"

import { FLOOR_TEXTURES, WALL_COLORS } from "../../data/RoomConfigOptions"
import { RoomCustomizerContext } from "../../context/RoomCustomizerContext";

export const Sidebar = () => {

    const { changeFloorTexture, changeWallsColor } = use(RoomCustomizerContext);

    return (
        <div>
            <img src="/assets/images/roomvo_logo.jpg" className="h-[25px]" alt="Logo" />

            <h2 className="text-[1.2rem] mb-[10px] font-bold mt-4">Walls</h2>
            <p className="text-[0.9rem] text-[#666]">Select a color:</p>
            <div className="grid grid-cols-2 gap-[10px]">
                {WALL_COLORS.map((opt) => (
                    <button
                        key={opt.name}
                        onClick={() => changeWallsColor(opt.id)}
                        className="p-[10px] cursor-pointer border border-[#ddd] rounded-lg bg-[#f9f9f9] hover:bg-gray-200 transition-colors"
                    >
                        {opt.name}
                    </button>
                ))}
            </div>

            <hr className="my-5 border-t-[0.5px] border-[#eee]" />

            <h2 className="text-[1.2rem] mb-[10px] font-bold">Floor</h2>
            <p className="text-[0.9rem] text-[#666]">Select a material:</p>
            <div className="grid grid-cols-2 gap-[10px]">
                {FLOOR_TEXTURES.map((opt) => (
                    <button
                        key={opt.name}
                        onClick={() => changeFloorTexture(opt.id)}
                        className="p-[10px] cursor-pointer border border-[#ddd] rounded-lg bg-[#f9f9f9] hover:bg-gray-200 transition-colors"
                    >
                        {opt.name}
                    </button>
                ))}
            </div>

            <hr className="my-5 border-t-[0.5px] border-[#eee]" />
            <h2 className="text-[1.2rem] mb-[10px] font-bold">Repository</h2>
            <p className="text-[0.9rem] text-[#666]">Find the code behind this here: </p>
        </div>
    )
}
