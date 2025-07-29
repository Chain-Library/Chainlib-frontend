import * as React from "react"
import { SVGProps } from "react"

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
    aria-hidden="true"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12l4 4 8-8" />
  </svg>
)

export default CheckIcon
