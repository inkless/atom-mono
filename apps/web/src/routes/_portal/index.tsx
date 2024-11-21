import { useEffect, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_portal/')({
  component: HomeComponent,
});

function HomeComponent() {
  const [cookie, setCookie] = useState('');
  useEffect(() => {
    if (document.cookie) {
      setCookie(document.cookie);
    }
  }, []);

  const injectedObj = JSON.parse(
    window.ReactNativeWebView?.injectedObjectJson() || '{}',
  );
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <h4>Cookie</h4>
      <pre>{cookie}</pre>
      {injectedObj.supportBack && (
        <button
          onClick={() => {
            window.ReactNativeWebView?.postMessage('Back');
          }}
        >
          Back
        </button>
      )}
    </div>
  );
}
