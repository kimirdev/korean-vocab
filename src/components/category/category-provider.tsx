import { createContext, useContext, useMemo, useState } from "react"

import topik1Data from "@/data/topik1.json"
import topik2Data from "@/data/topik2.json"
import russian5000 from "@/data/russian5000.json"

type Category = "topik1" | "topik2" | "all" | "russian5000"

type CategoryProviderProps = {
  children: React.ReactNode
  defaultCategory?: Category
  storageKey?: string
}

type CategoryProviderState = {
  category: Category
  setCategory: (category: Category) => void
  data: {korean: string, english: string}[]
}

const initialState: CategoryProviderState = {
  category: "topik1",
  setCategory: () => null,
  data: []
}

const CategoryProviderContext = createContext<CategoryProviderState>(initialState)

export function CategoryProvider({
  children,
  defaultCategory = "topik1",
  storageKey = "vite-ui-category",
  ...props
}: CategoryProviderProps) {
  const [category, setCategory] = useState<Category>(
    () => (localStorage.getItem(storageKey) as Category) || defaultCategory
  )

  const data = useMemo(() => {
    console.log("Category changed")
    switch (category) {
      case "topik1":
        return [...topik1Data]
      case "topik2":
        return [...topik2Data]
      case "all":
        return [...topik1Data, ...topik2Data]
      case "russian5000": 
        return[...russian5000]

    }
  }, [category])

  const value = {
    category,
    setCategory: (category: Category) => {
      localStorage.setItem(storageKey, category)
      setCategory(category)
    },
    data
  }

  return (
    <CategoryProviderContext.Provider {...props} value={value}>
      {children}
    </CategoryProviderContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCategory = () => {
  const context = useContext(CategoryProviderContext)

  if (context === undefined)
    throw new Error("useCategory must be used within a CategoryProvider")

  return context
}
