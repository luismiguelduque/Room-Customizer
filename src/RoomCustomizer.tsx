import { Sidebar } from './components/sidebar/Sidebar'
import { Viewer } from './components/Viewer'
import { RoomCustomizerContextProvider } from './context/RoomCustomizerContextProvider'

export const RoomCustomizer = () => {
    return (
        <RoomCustomizerContextProvider>
            <div className='flex flex-col md:flex-row h-screen'>

                <aside className='w-full md:w-64 p-4 m-2 md:mr-0 rounded'>
                    <Sidebar />
                </aside>

                <div className='flex-1 bg-gray-100 overflow-hidden'>
                    <Viewer />
                </div>

            </div>
        </RoomCustomizerContextProvider>
    )
}
