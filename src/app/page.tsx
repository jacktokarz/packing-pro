import { AppShell } from '@/components/app-shell';
import { FeatureCard } from '@/components/feature-card';

export default function HomePage() {
  return (
    <AppShell>
      <section className="welcome">
        <p className="eyebrow">TRAVEL, WITHOUT THE LAST-MINUTE SCRAMBLE</p>
        <h1>Pack for the trip.<br /><span>Not the stress.</span></h1>
        <p className="intro">
          Your personal packing assistant is taking shape. Start with a trip,
          then build a packing list that makes sense for where you’re going.
        </p>
        <button className="primary-button" type="button" disabled>
          Create your first trip <span aria-hidden="true">→</span>
        </button>
        <p className="coming-soon">Trip creation is coming soon.</p>
      </section>

      <section className="feature-grid" aria-label="App sections">
        <FeatureCard number="01" title="Your trips" description="Keep upcoming travel plans in one place." />
        <FeatureCard number="02" title="Smart packing lists" description="Build a checklist around each trip’s needs." />
        <FeatureCard number="03" title="Your preferences" description="Save the items and routines you use often." />
      </section>
    </AppShell>
  );
}
