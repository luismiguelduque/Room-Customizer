export interface FloorTexture {
    id: string;
    name: string;
    maps: Record<string, string>
}

export interface WallColor {
    id: string;
    name: string;
    value: string;
}

export const FLOOR_TEXTURES: FloorTexture[] = [
    {
        id: 'graywood',
        name: 'Gray wood',
        maps: {
            map: '/assets/textures/wooden_color.jpg',
            normalMap: '/assets/textures/wooden_normal.jpg',
            roughnessMap: '/assets/textures/wooden_rough.jpg',
        }
    },
    {
        id: 'brownwood',
        name: 'Brown wood',
        maps: {
            map: '/assets/textures/wooden_normal.jpg',
            normalMap: '/assets/textures/wooden_color.jpg',
            roughnessMap: '/assets/textures/wooden_rough.jpg',
        }
    },
    {
        id: 'yellowwood',
        name: 'Yellow wood',
        maps: {
            map: '/assets/textures/wooden_rough.jpg',
            normalMap: '/assets/textures/wooden_normal.jpg',
            roughnessMap: '/assets/textures/wooden_color.jpg',
        }
    }
];

export const WALL_COLORS: WallColor[] = [
    { id: 'classic-white', name: 'Classic white', value: '#f5f5f5' },
    { id: 'slate-grey', name: 'Slate grey', value: '#707070' },
    { id: 'warm-beige', name: 'Warm beige', value: '#dcd0c0' },
];