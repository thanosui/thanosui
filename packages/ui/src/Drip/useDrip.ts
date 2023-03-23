import { CSSProperties, useRef, useState, MouseEvent } from "react";

export type DripInstance = {
    key: number;
    style: CSSProperties;
    "data-drip": boolean;
};

export function useDrip() {
    const [drips, setDrips] = useState<DripInstance[]>([]);
    const nextKey = useRef(0);

    const dripTimer = useRef<any>();

    const onClick = (event: MouseEvent<HTMLElement>) => {
        const trigger = event.currentTarget;

        const size = Math.max(trigger.clientWidth, trigger.clientHeight);
        const rect = trigger.getBoundingClientRect();
        const x = event.clientX - rect.x - size / 2;
        const y = event.clientY - rect.y - size / 2;

        const dripStyle: CSSProperties = {
            width: `${size}px`,
            height: `${size}px`,
            top: `${y}px`,
            left: `${x}px`,
        };

        setDrips((prev) => [
            ...prev,
            {
                key: nextKey.current,
                style: dripStyle,
                "data-drip": true,
            },
        ]);
        nextKey.current++;

        dripTimer.current = setTimeout(() => {
            setDrips((prev) => prev.slice(1));
        }, 340);
    };

    return {
        drips,
        onClick,
    };
}
