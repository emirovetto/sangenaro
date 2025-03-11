import { Suspense } from "react"
import SearchResults from "./search-results"

export default function SearchPage(): JSX.Element {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Cargando...</div>}>
      <SearchResults />
    </Suspense>
  )
}
