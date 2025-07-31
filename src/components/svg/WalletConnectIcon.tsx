import * as React from "react"
import { SVGProps } from "react"

const WalletConnectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="28" height="28" rx="8" fill="#3B99FC" />
    <text x="14" y="18" textAnchor="middle" fontSize="10" fill="#fff">
      WC
    </text>
  </svg>
)

export default WalletConnectIcon
