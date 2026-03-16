interface IDotSVGBGPatternProps {
  classes?: string;
}

export default function DotSVGBGPattern({ classes }: IDotSVGBGPatternProps) {
  return (
    <svg
      className={classes}
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="dot-pattern"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect width={404} height={784} fill="url(#dot-pattern)" />
    </svg>
  );
}
