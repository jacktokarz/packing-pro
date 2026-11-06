type FeatureCardProps = {
  number: string;
  title: string;
  description: string;
};

export function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <span className="feature-number">{number}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
