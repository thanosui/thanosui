import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Ripple({ x, y, color }: { x: number, y: number, color: string }) {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        setIsAnimating(false);
    }, []);

    return (
        <AnimatePresence>
            {isAnimating && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 2, opacity: 0 }}
                    exit={{ scale: 2, opacity: 0 }}
                    style={{
                        position: "absolute",
                        top: y,
                        left: x,
                        backgroundColor: color,
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                    }}
                />
            )}
        </AnimatePresence>
    );
}

export default Ripple