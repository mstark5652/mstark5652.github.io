import { useEffect } from "react"

// fades [data-reveal] elements in as they scroll into view
const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]")
    if (!("IntersectionObserver" in window)) return

    document.documentElement.classList.add("can-reveal")
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -8% 0px" },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default useReveal
