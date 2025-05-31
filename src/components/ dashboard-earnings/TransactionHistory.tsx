import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";





export default function TransactionHistory () {
    return (
        <section className="bg-[var(--color-background)]  p-4 rounded-lg flex flex-col items-start w-full shadow-[0px_4px_12px_#1212120A] " >
        <h1 className="text-[var(--color-neutral-300)] font-bold text-lg " > Transaction History </h1>
<div className="w-full flex items-center justify-between gap-10 " >


<div className="flex items-center gap-10 " >
    <div className="flex items-center" >
        <Button>This Week</Button>
        <Button>This Month</Button>
        <Button>This Year</Button>

    </div>


    <div className="flex items-center gap-4" >

        <div className="flex items-center gap-4  " >
<input/>
to
<input/>
        </div>
<Button variant="ghost">Apply</Button>
    </div>

</div>


<Button variant="ghost">Filter by</Button>
     </div>







     <div className="w-full flex items-center justify-between gap-10  " >
        <p className=" font-normal text-sm text-[var(--color-neutral-400)] " >
            Showing 1 to 5 of 12
        </p>




<div className=" flex items-center gap-8 " >

<div className="flex items-center gap-8 text-[var(--color-neutral-400)]I" >
<button> <ChevronLeft/> </button>
<button> <ChevronRight/> </button>
</div>


<div className="flex items-center gap-8 text-base font-normal text-[var(--color-neutral-400)] " >


<button>1</button>
<button>2</button>
<button>3</button>
<button>....</button>
<button>10</button>
<button>11</button>
<button>12</button>

</div>






</div>
     </div>
            </section>
    )
}