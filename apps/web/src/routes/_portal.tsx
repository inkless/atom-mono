import { Link, Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_portal')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div className="p-2 flex gap-2 text-lg">
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
