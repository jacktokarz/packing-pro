import type { ReactNode } from 'react';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-mark" aria-hidden="true">↗</span> packwise</div>
        <div className="nav-label">YOUR TRAVEL COMPANION</div>
      </header>
      <main>{children}</main>
    </div>
  );
}
