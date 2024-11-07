import Logo from "./Logo.tsx";
import Counter from "./Counter.tsx";

export default function Header() {
    return (
        <header className="flex items-center justify-between col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08] overflow-hidden px-[38px]">
           <Logo />
            <Counter  />
        </header>

    )
}