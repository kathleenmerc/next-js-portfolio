import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { SectionName } from "./types"

 {/* setting the active section when each section is in viewport */ }

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    })

    const { setActiveSection } = useActiveSectionContext()

    useEffect(() => {
        if (inView) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection])

    return {
        ref
    }
}
