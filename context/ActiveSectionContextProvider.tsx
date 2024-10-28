'use client';

import React, { useState, createContext, useContext } from 'react';
import type { SectionName } from '@/lib/types';

{/* this component will keep track of state logic */}
{/* navbar active section */}


type ActiveSectionContextProvidersProps = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProvidersProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('About')

  return (
    <ActiveSectionContext.Provider 
      value={{
        activeSection,
        setActiveSection
    }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

{/* custom hook */}
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    )
  }

  return context
}