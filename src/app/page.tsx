import ContentWrapper from '@/components/ContentWrapper';
import EventsSection from '@/components/events/Section';
import Footer from '@/components/Footer';
import { LandingComponent } from '@/components/landing/LandingComponent';
import Navbar from '@/components/Navbar';
import ProjectSection from '@/components/projects/Section';
import WorkSection from '@/components/work/Section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ContentWrapper>
        <Navbar />
        <LandingComponent />
        <WorkSection />
        <ProjectSection />
        <EventsSection />
      </ContentWrapper>
      <Footer />
    </main>
  );
}
