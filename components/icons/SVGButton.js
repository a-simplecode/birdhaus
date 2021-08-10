import * as React from "react"

export default function SVGButton(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={252}
      height={66}
      viewBox="0 0 252 66"
      {...props}
    >
      <g data-name="CTA">
        <g fill="#ffde52" stroke="#000" strokeMiterlimit={10} strokeWidth={2}>
          <rect width={252} height={66} rx={10} stroke="none" />
          <rect x={1} y={1} width={250} height={64} rx={9} fill="none" />
        </g>
        <text
          data-name="Send a message now"
          transform="translate(31 38)"
          fontSize={14}
          fontFamily="Montserrat-Medium, Montserrat"
          fontWeight={500}
        >
          <tspan x={0} y={0} fontSize={15}>
            {"Send us a message"}
          </tspan>
        </text>
        <g
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeMiterlimit={10}
        >
          <path data-name="Line 2" d="M202.5 33.5h-22.809" />
          <path data-name="Line 3" d="M202.5 33.5l-3.321-3.321" />
          <path data-name="Line 4" d="M202.5 33.5l-3.321 3.321" />
        </g>
      </g>
    </svg>
  )
}