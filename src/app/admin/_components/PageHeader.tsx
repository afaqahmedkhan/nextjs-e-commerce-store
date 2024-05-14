/**
 * Having it enclosed in underscore named folder let's nextjs know that this isn't a route.
 */

import { ReactNode } from "react"

export function PageHeader({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl mb-4">{children}</h1>
}