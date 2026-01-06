import React from "react";

export const NextJsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 180 180"
    fill="currentColor"
    {...props}
  >
    <mask
      height="180"
      id="mask0_408_134"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
      width="180"
      x="0"
      y="0"
    >
      <circle cx="90" cy="90" fill="black" r="90" />
    </mask>
    <g mask="url(#mask0_408_134)">
      <circle cx="90" cy="90" data-circle="true" fill="black" r="90" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="white"
      />
      <rect fill="white" height="72" width="12" x="115" y="54" />
    </g>
  </svg>
);

export const ViteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 410 404"
    fill="none"
    {...props}
  >
    <path
      d="M399.641 44.9723L389.043 23.7559C387.826 21.0477 384.288 20.3398 381.966 22.4637L204.607 175.789L27.2477 22.4637C24.9258 20.3398 21.3879 21.0477 20.1711 23.7559L9.57263 44.9723C7.91334 47.9592 9.01951 51.9416 11.8956 53.6009L202.284 179.882L204.607 181.43L206.93 179.882L397.318 53.6009C400.194 51.9416 401.3 47.9592 399.641 44.9723Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M204.607 181.43L202.284 179.882L11.8956 53.6009C9.01951 51.9416 7.91334 47.9592 9.57263 44.9723L19.4632 24.3094L204.607 399.196L389.751 24.3094L399.641 44.9723C401.3 47.9592 400.194 51.9416 397.318 53.6009L206.93 179.882L204.607 181.43Z"
      fill="url(#paint1_linear)"
    />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear"
        x1="204.607"
        x2="204.607"
        y1="19.1026"
        y2="175.789"
      >
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint1_linear"
        x1="204.607"
        x2="204.607"
        y1="23.9786"
        y2="399.196"
      >
        <stop stopColor="#FFEA83" />
        <stop offset="0.0833333" stopColor="#FFDD35" />
        <stop offset="1" stopColor="#FFA800" />
      </linearGradient>
    </defs>
  </svg>
);

export const LaravelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid"
    fill="currentColor"
    {...props}
  >
    <path
      d="M48.724 81.365l14.07-22.126L89.842 16.5l22.75 35.858-15.012 23.639h38.567l15.012-23.639 25.105-39.525-27.18 42.793 15.012 23.639h6.398l-7.01-11.042 13.567-21.363L191.01 26.5l27.042 42.584 14.12 22.235h-36.966l-14.12-22.238L153.905 26.5l-25.105 39.525L103.695 26.5 80.945 62.33 53.906 104.908l-27.42 43.17h52.705l-13.67 21.528H15.01L78.653 69.514h82.59l8.657 13.635-43.914 69.155H47.058l-13.67 21.527h111.95l14.398-22.673 14.398-22.67 21.685-34.148 13.33-20.99 26.26-41.353h-34.613l-13.25 20.865-18.73 29.497-21.687 34.148-18.17 28.61h41.09l-13.67 21.528h-59.507l-13.67 21.527h126.31l13.67-21.527H204.42l-21.026-33.107 14.12-22.236h37.28l-51.107 80.48H44.152L241.01 249.5l-20.57-32.396H107.034l-13.67 21.528h146.438l12.502 19.686L239.123 239.5l-14.28 22.486H0l17.07-26.88 5.688-8.956 5.684-8.953 20.28-31.933M48.724 81.365z"
      fill="#F05340"
    />
  </svg>
);

export const CdnIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);
