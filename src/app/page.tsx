import { Button } from '@react/components/button';

export const metadata = {
  title: 'Express Next Template',
};

export default async function Page() {
  return (
    <main style={{ fontFamily: 'monospace' }}>
      <h1>Express Next Template</h1>
      <p>
        API endpoints starts with{' '}
        <a href="/api">
          <mark>/api</mark>
        </a>
      </p>
      <br />
      <Button initCount={0} />
    </main>
  );
}
