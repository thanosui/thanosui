import { CSSProperties } from "react";
import { tv } from "tailwind-variants";
import { DripInstance } from "./useDrip";

const drip = tv({
    base: [
        "hidden",
        "absolute",
        "bg-slate-100/20",
        "rounded-full",
        "pointer-events-none",
        'data-[drip="true"]:block',
        'data-[drip="true"]:animate-drip-expand',
        'transition-all',
        'duration-200'
    ],
});

export interface DripProps {
    drips?: DripInstance[];
}

const Drip = (props: DripProps) => {
    const { drips, ...otherProps } = props;

    const styles = drip();

    if (!drips || !Array.isArray(drips) || drips.length < 1) {
        return null;
    }

    return (
        <>
            {drips.map(({ key, ...dripProps }) => (
                <span key={key} className={styles} {...otherProps} {...dripProps} />
            ))}
        </>
    );
};


export default Drip;