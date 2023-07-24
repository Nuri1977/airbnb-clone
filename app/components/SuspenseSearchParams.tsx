import { Suspense } from "react";

// This component passed as fallback to the Suspense boundary
// will be rendered in place of the children in the initial HTML.
// When the value is available during React hydration the fallback
// will be replaced with the `<SearchBar>` component.
function SearchBarFallback() {
  return <>placeholder</>;
}

interface SearchBarProps {
  children?: React.ReactNode;
}

export default function Page({ children }: SearchBarProps) {
  return (
    <>
      <Suspense fallback={<SearchBarFallback />}>{children}</Suspense>
    </>
  );
}
