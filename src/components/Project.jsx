import Loader from "./Loader";

export default function Projects() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto" id="projects">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <p className="text-3xl mb-6">coming soon...</p>
            <div className="flex flex-wrap gap-3">
                <Loader />
            </div>
        </section>
    )
}