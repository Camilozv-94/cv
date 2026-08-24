import Button from "../ui/Button";

const HomeSection = () => {
    return (
        <div className="flex flex-row my-10">
            <div className="flex flex-col flex-1 gap-4">
                <h1 className="text-4xl font-bold flex flex-col">I turn interfaces into <span className="text-secondary">experiences.</span></h1>

                <p className="text-lg text-tertiary">I develop scalable, accessible, and user-focused digital interfaces, where design and code work together as a single experience.</p>
                <div className="flex flex-row gap-4 mt-8">
                    <Button title="Ver experiencias" variant="solid" url="#" />
                    <Button title="Sobre mi" variant="outline" url="#" />
                </div>
            </div>
            <span className="w-1/2 h-50 bg-secondary " />
        </div>
    )
}

export default HomeSection