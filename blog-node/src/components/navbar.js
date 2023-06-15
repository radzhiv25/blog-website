export const Navbar = () => {
    return (
        <div className="nav bg-slate-200 p-5 flex items-center">
            <h1 className="mr-auto text-2xl font-semibold">Blog Node</h1>
            <ul className="flex gap-10">
                <li>
                    <a href="/events">
                        Events
                    </a>
                </li>
                <li>News</li>
                <li>Jobs</li>
            </ul>
        </div>
    )
}