import Nav          from './components/Nav.jsx';
import Hero         from './sections/Hero.jsx';
import Problem      from './sections/Problem.jsx';
import WhoItsFor    from './sections/WhoItsFor.jsx';
import GiftOfHealth from './sections/GiftOfHealth.jsx';
import Vision       from './sections/Vision.jsx';
import Solution     from './sections/Solution.jsx';
import AppPreview   from './sections/AppPreview.jsx';
import HowItWorks   from './sections/HowItWorks.jsx';
import Team         from './sections/Team.jsx';
import CTA          from './sections/CTA.jsx';
import Footer       from './sections/Footer.jsx';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhoItsFor />
        <GiftOfHealth />
        <Vision />
        <Solution />
        <AppPreview />
        <HowItWorks />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
