import { DragControls } from "@react-three/drei"

interface Props {
    position: [x: number, y: number, z: number]
}

export const SimpleTable = ({ position }: Props) => {
    const chairLegs: [x: number, y: number, z: number][] = [[-0.8, 0.2, 0.8], [0.8, 0.2, 0.8], [-0.8, 0.2, -0.8], [0.8, 0.2, -0.8]];
    return (
        <DragControls>
            <group position={position}>
                <mesh position={[0, 0.5, 0]} castShadow>
                    <boxGeometry args={[2, 0.1, 2]} />
                    <meshStandardMaterial color="orange" />
                </mesh>

                {chairLegs.map((pos, i) => (
                    <mesh key={i} position={pos} castShadow>
                        <boxGeometry args={[0.1, 0.5, 0.1]} />
                        <meshStandardMaterial color="brown" />
                    </mesh>
                ))}
            </group>
        </DragControls>
    )
}
