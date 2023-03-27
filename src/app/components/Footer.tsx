import Link from "next/link";


export default function Footer() {
    return <div>
        <footer className="p-4 bg-gray-100 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 font-semibold">
            <span className="text-sm text-black sm:text-center">© 2023 <Link href="" className="hover:underline" title="click to visit">Salman Ahmed™</Link>. All Rights Reserved.
            </span>
        </footer>
    </div>;
}
