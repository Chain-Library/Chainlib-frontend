import * as React from "react"
import { SVGProps } from "react"

const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
    {...props}
  >
    <rect x="4" y="8" width="16" height="8" rx="3" fill="currentColor" />
    <circle cx="17" cy="12" r="1.5" fill="#3B82F6" />
  </svg>
)

export default WalletIcon
