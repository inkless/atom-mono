import { Link, Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_portal')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div className="header">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/onboard"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Onboard
        </Link>
        <Link
          to="/about"
          activeProps={{
            className: 'font-bold',
          }}
        >
          About
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
