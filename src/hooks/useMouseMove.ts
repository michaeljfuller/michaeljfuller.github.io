import { useState, useEffect } from "react";

export interface MouseMoveState {
    clientX?: number;
    clientY?: number;
    movementX?: number;
    movementY?: number;
    offsetX?: number;
    offsetY?: number;
    pageX?: number;
    pageY?: number;
    screenX?: number;
    screenY?: number;
    x?: number;
    y?: number;
}

export function useMouseMove(): MouseMoveState {

    const [mousePosition, setMousePosition] = useState<MouseMoveState>({});

    useEffect(() => {
        const onMouseMove = (event: MouseEvent) => {
            setMousePosition({
                clientX: event.clientX,
                clientY: event.clientY,
                movementX: event.movementX,
                movementY: event.movementY,
                offsetX: event.offsetX,
                offsetY: event.offsetY,
                pageX: event.pageX,
                pageY: event.pageY,
                screenX: event.screenX,
                screenY: event.screenY,
                x: event.x,
                y: event.y,
            });
        };

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    return mousePosition;
}
export default useMouseMove;
