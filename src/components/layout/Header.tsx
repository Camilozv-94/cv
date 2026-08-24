import Button from "../ui/Button";

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-between w-full h-16 px-4">
            <div>
                <h1 className="text-lg font-semibold">Camilo Zulauaga <span className="text-secondary">Software Engineer </span> = Sr. Full Stack Developer;  </h1>
            </div>
            <nav>
                <ul className="flex flex-row items-center gap-4 text-tertiary">
                    <li>
                        <a href="#">How I built</a> |
                    </li>
                    <li>
                        <a href="#">Experience</a> |
                    </li>
                    <li>
                        <a href="#">About</a> |
                    </li>
                    <li>
                        <Button title="Let's talk" variant="neon" url="#" />
                    </li>
                </ul>
            </nav>
        </header>
    );
}