import TransactionTable from "./TransactionTable";





export default function TransactionHistory() {
    return (
        <section className="bg-[var(--color-background)]  p-4 rounded-lg flex flex-col items-start w-full shadow-[0px_4px_12px_#1212120A] " >
            <h1 className="text-[var(--color-neutral-300)] font-bold text-lg " > Transaction History </h1>



            <TransactionTable />











        </section>
    )
}