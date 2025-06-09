import React from 'react';

export default function ProfileCompletionAlert({ label = "Just a few more details and your profile will be complete!", showProfileAlert, setShowProfileModal }: { label?: string; showProfileAlert: boolean, setShowProfileModal: (x: boolean) => void }) {
    return (<>
        {showProfileAlert && (
            <div className="bg-special-100/4 border border-special-100 rounded-lg p-4 my-8 flex flex-col md:flex-row items-start justify-between">
                <div className="flex items-start md:items-center">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 md:mt-0 rounded-full border text-special-100/60 border-special-100 mr-3">
                        <span>!</span>
                    </span>
                    <p className=" text-neutral-800">
                        <span className='text-label-large font-bold '> {label}</span>
                        <br />
                        <span className="text-label-small font-medium">Let&apos;s get this done so you can enjoy all the features.</span>
                    </p>
                </div>
                <button
                    className="px-4 self-start md:self-end py-2 cursor-pointer text-sm text-neutral-800 mt-2 md:mt-0 bg-special-100/20 rounded-full hover:bg-special-100/10 transition-colors"
                    onClick={() => setShowProfileModal(true)}
                >
                    Complete Set-up
                </button>
            </div>)}
    </>
    )
}
