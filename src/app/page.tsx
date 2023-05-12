export const metadata = {
  title: 'Express Next Template',
};

export default async function Page() {
  return (
    <main style={{ fontFamily: 'monospace' }}>
      <h1>Hello, World!</h1>
      <p>
        API endpoints starts with{' '}
        <a href="/api">
          <mark>/api</mark>
        </a>
      </p>
    </main>
  );
}
