import ContentWrapper from '@/components/ContentWrapper';
import { LandingComponent } from '@/components/landing/LandingComponent';
import Navbar from '@/components/Navbar';
import WorkSection from '@/components/work/Section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ContentWrapper>
        <Navbar />
        <LandingComponent />
        <WorkSection />
      </ContentWrapper>
    </main>
  );
}
