import React, {PropsWithChildren} from "react"
import useMouseMove from "../hooks/useMouseMove"

export type ParallaxProps = PropsWithChildren<{
  modifier?: number;
}>
export default function Parallax({
  modifier = 0.1,
  children
}: ParallaxProps) {
  const {
    clientX = 0
  } = useMouseMove();

  const screenCenter = window.innerWidth/2;
  const offset = screenCenter - clientX;
  const fraction = offset / screenCenter;
  const minOpacity = 0.3;

  return <div style={{
    position: "relative",
    left: offset * modifier,
    textShadow: `${fraction * 15}px 4px 1px rgba(255, 255, 255, 0.3)`,
    opacity: ((1-Math.abs(fraction)) * (1-minOpacity)) + minOpacity
  }}>
    {children}
  </div>;
}
