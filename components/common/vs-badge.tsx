const VsBadge = () => (
  <div className="top-8 left-1/2 z-10 absolute -translate-x-1/2">
    <div className="relative flex items-center">
      {/* Left dot */}
      {/* <div className="bg-gray-400 rounded-full size-2" /> */}

      {/* Left connector (mirrored) */}
      {/* <svg
        width="34"
        height="34"
        viewBox="0 0 58 48"
        className="-mr-2 overflow-visible"
        style={{ transform: "scaleX(-1)" }}
      >
        <defs>
          <linearGradient
            id="leftGradient"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>

        <path
          d="M 0 8
             L 0 32
             Q 0 40, 8 40
             L 56 40
             Q 64 40, 64 32
             L 64 24"
          fill="none"
          stroke="url(#leftGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg> */}

      {/* VS Badge */}
      <div className="z-10 bg-primary shadow-lg px-3 py-1.5 rounded-full font-semibold text-white text-sm">
        v/s
      </div>

      {/* Right connector (mirrored) */}
      {/* <svg
        width="34"
        height="34"
        viewBox="0 0 64 48"
        className="-ml-2 overflow-visible"
        style={{ transform: "scaleX(-1)" }}
      >
        <defs>
          <linearGradient
            id="rightGradient"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        <path
          d="M 0 24
             L 0 32
             Q 0 40, 8 40
             L 56 40
             Q 64 40, 64 32
             L 64 8"
          fill="none"
          stroke="url(#rightGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg> */}

      {/* Right dot */}
      {/* <div className="bg-primary rounded-full size-2" /> */}
    </div>
  </div>
);

export default VsBadge;
