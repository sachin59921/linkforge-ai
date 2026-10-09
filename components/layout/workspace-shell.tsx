"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export function WorkspaceShell({
children,
}: {
children: React.ReactNode;
}) {
const [mobileOpen, setMobileOpen] = useState(false);

const handleMobileMenuToggle = () => {
setMobileOpen((open) => !open);
};

return ( <div className="min-h-screen bg-slate-50">
<Sidebar
mobileOpen={mobileOpen}
onMobileMenuClose={() => setMobileOpen(false)}
/>

```
  <div className="min-w-0 lg:pl-64">
    <Header
      mobileOpen={mobileOpen}
      onMobileMenuToggle={handleMobileMenuToggle}
    />

    <main className="min-w-0">{children}</main>
  </div>
</div>
```

);
}
