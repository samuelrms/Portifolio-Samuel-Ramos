import { SVGProps } from 'react';

export const LogoSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={60}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g strokeWidth={3} strokeLinecap="round">
      <path d="m27.494 32.033 5.65-28.713M39.724 2l18.188 15.244a1 1 0 0 1-.028 1.556l-18.16 14.133M24.414 5.867l-13.578 11.23a1 1 0 0 0 .028 1.563l13.55 10.407" />
      <path d="M20.586 2 2.398 17.244a1 1 0 0 0 .028 1.556l18.16 14.133M35.896 5.867l13.578 11.23a1 1 0 0 1-.028 1.563l-13.55 10.407" />
    </g>
  </svg>
);
