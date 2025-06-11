import PageDetail from "@/app/_components/PageDetail";

interface Follower {
    id: number;
    name: string;
    avatar: string;
}

const followers: Follower[] = [
    { id: 1, name: 'John Doe', avatar: '/api/placeholder/40/40' },
    { id: 2, name: 'Jane Smith', avatar: '/api/placeholder/40/40' },
    { id: 3, name: 'Mike Johnson', avatar: '/api/placeholder/40/40' },
    { id: 4, name: 'Sarah Wilson', avatar: '/api/placeholder/40/40' },
    { id: 5, name: 'David Brown', avatar: '/api/placeholder/40/40' },
    { id: 6, name: 'Emily Davis', avatar: '/api/placeholder/40/40' },
    { id: 7, name: 'Chris Miller', avatar: '/api/placeholder/40/40' },
    { id: 8, name: 'Lisa Anderson', avatar: '/api/placeholder/40/40' },
    { id: 9, name: 'Tom Wilson', avatar: '/api/placeholder/40/40' },
    { id: 10, name: 'Amy Taylor', avatar: '/api/placeholder/40/40' },
];

export default function Followers() {

    return (
        <>
            <PageDetail title='Followers' />
            <div className=" h-full">
                <div className="flex md:justify-start justify-between items-center border border-primary-200 px-3 py-1 shadow-base">
                    <div className="w-fit border border-primary-200 px-3 py-1 shadow-base rounded-large flex justify-center items-center gap-2">
                        <span>Total</span>
                        <span className="font-bold text-label-small">17</span>
                    </div>

                    <div className="w-fit border border-primary-200 px-3 py-1 shadow-base rounded-large md:hidden flex justify-center items-center gap-2">
                        <span>Verified</span>
                        <span className="font-bold text-label-small">12</span>
                    </div>

                    <div className="w-fit border border-primary-200 px-3 py-1 shadow-base rounded-large md:hidden flex justify-center items-center gap-2">
                        <span>Unverified</span>
                        <span className="font-bold text-label-small">5</span>
                    </div>
                </div>


                <div className="p-4 flex flex-col gap-3 max-h-138 md:max-h-98 overflow-y-auto">
                    {followers.map((follower) => (
                        <div key={follower.id} className="bg-white rounded-lg py-2 shadow-sm border border-gray-100">
                            <div className="flex items-center text-[#5D5D5D] justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 relative bg-gray-300 rounded-full flex items-center justify-center">
                                        {/* <Image src="" alt="user-image-avatar"/> */}
                                    </div>
                                    <div>
                                        <h3 className="font-normal text-label-large">{follower.name}</h3>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="px-2.5 py-1.5 rounded-full text-label-large font-normal transition-colors">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


