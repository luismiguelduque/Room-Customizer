import { use } from 'react'

import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import { RoomCustomizerContext } from '../../context/RoomCustomizerContext'

export const Floor = () => {

    const { currentFloorTexture } = use(RoomCustomizerContext)

    const texture = useTexture(currentFloorTexture.maps)
    texture.map.repeat.set(4, 4)
    texture.map.wrapS = texture.map.wrapT = THREE.RepeatWrapping
    texture.normalMap.repeat.set(4, 4)
    texture.normalMap.wrapS = texture.normalMap.wrapT = THREE.RepeatWrapping
    texture.roughnessMap.repeat.set(4, 4)
    texture.roughnessMap.wrapS = texture.roughnessMap.wrapT = THREE.RepeatWrapping

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
            <planeGeometry args={[16, 16]} />
            <meshStandardMaterial {...texture} />
        </mesh>
    )
}
