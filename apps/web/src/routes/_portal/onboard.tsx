import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_portal/onboard')({
  component: OnboardComponent,
});

function OnboardComponent() {
  return (
    <div className="p-2">
      <h3>Onboard</h3>
    </div>
  );
}
