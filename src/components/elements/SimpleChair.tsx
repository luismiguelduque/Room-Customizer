import { DragControls, RoundedBox } from "@react-three/drei"

interface Props {
    position: [x: number, y: number, z: number],
    rotation?: [x: number, y: number, z: number]
}

export const SimpleChair = ({ position, rotation }: Props) => {
    const tableLegs: [x: number, y: number, z: number][] = [[-0.4, 0.2, 0.4], [0.4, 0.2, 0.4], [-0.4, 0.2, -0.4], [0.4, 0.2, -0.4]];
    const radius = 0.02;
    const smoothness = 4;

    return (
        <DragControls>
            <group position={position} rotation={rotation}>
                <RoundedBox
                    args={[1, 0.1, 1]}
                    radius={radius}
                    smoothness={smoothness}
                    position={[0, 0.5, 0]}
                    castShadow
                >
                    <meshStandardMaterial color="orange" />
                </RoundedBox>

                <RoundedBox
                    args={[1, 1, 0.1]}
                    radius={radius}
                    smoothness={smoothness}
                    position={[0, 1, -0.45]}
                    castShadow
                >
                    <meshStandardMaterial color="orange" />
                </RoundedBox>

                {tableLegs.map((pos, i) => (
                    <mesh key={i} position={pos} castShadow>
                        <boxGeometry args={[0.1, 0.5, 0.1]} />
                        <meshStandardMaterial color="brown" />
                    </mesh>
                ))}
            </group>
        </DragControls>
    )
}
