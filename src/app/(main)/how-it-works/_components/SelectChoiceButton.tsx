export default function SelectChoiceButton({ writerIsActive, scrollToSection }: { writerIsActive: boolean, scrollToSection: (value: string) => void }) {

    return (
        <div className="sticky top-4 sm:top-10 lg:top-28 flex justify-center items-center p-2 gap-2 border rounded-x-large border-primary-100 shadow-base w-fit z-5">
            <button onClick={() => scrollToSection("writer")} className={`${writerIsActive ? "bg-primary-300" : "bg-primary-50"} text-body-medium font-light rounded-x-large px-6 flex justify-center cursor-pointer items-center py-3`} type="button">
                <span>For Writers</span>
            </button>
            <button onClick={() => scrollToSection("reader")} className={`${!writerIsActive ? "bg-primary-300" : "bg-primary-50"} text-body-medium font-light rounded-x-large px-6 cursor-pointer flex justify-center items-center py-3`} type="button">
                <span>Readers</span>
            </button>
        </div>
    )
}
