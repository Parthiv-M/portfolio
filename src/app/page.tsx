import ContentWrapper from '@/components/ContentWrapper';
import { LandingComponent } from '@/components/landing/LandingComponent';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ContentWrapper>
        <Navbar />
        <LandingComponent />
      </ContentWrapper>
    </main>
  );
}
