import { Hero } from '@/components/Hero';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { CPProfiles } from '@/components/CPProfiles';
import { ContactForm } from '@/components/ContactForm';

export default function HomePage() {
    return (
        <main>
            <Hero />

            <div className="position-relative">
                <FeaturedProjects />
                <div className="mario-star star-projects"></div>
            </div>

            <CPProfiles />

            <ContactForm />
        </main>
    );
}
