import { ContactShadows } from "@react-three/drei";

import { WallBaseboard } from "./elements/WallBaseboard";
import { SimpleChair } from "./elements/SimpleChair"
import { SimpleTable } from "./elements/SimpleTable"
import { WallPrinting } from "./elements/WallPrinting"
import { Floor } from "./elements/Floor";
import { Wall } from "./elements/Wall";

export const Room = () => {
    return (
        <group>
            <Floor />
            <WallBaseboard width={16} position={[0, -0.90, -7.98]} />
            <WallBaseboard width={16} position={[-7.98, -0.90, 0]} rotation={[0, Math.PI / 2, 0]} />
            <WallPrinting
                url="/assets/images/logo2.png"
                position={[0, 2.5, -7.99]}
            />
            <Wall position={[0, 2, -8]} args={[16, 6]} />
            <Wall rotation={[0, Math.PI / 2, 0]} position={[-8, 2, 0]} args={[16, 6]} />

            <ContactShadows position={[0, -0.99, 0]} opacity={0.4} scale={10} blur={2.5} far={1} />

            <SimpleChair position={[-2, -1, 0]} />
            <SimpleChair position={[-2, -1, 4]} rotation={[0, Math.PI / 1, 0]} />
            <SimpleChair position={[-4, -1, 2]} rotation={[0, Math.PI / 2, 0]} />
            <SimpleTable position={[-2, -1, 2]} />

            <SimpleChair position={[0.5, -1, 0]} />
            <SimpleChair position={[0.5, -1, 4]} rotation={[0, Math.PI / 1, 0]} />
            <SimpleChair position={[3, -1, 2]} rotation={[0, Math.PI / 0.6, 0]} />
            <SimpleTable position={[0.5, -1, 2]} />
        </group>
    )
}
