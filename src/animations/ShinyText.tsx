import React from "react";

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
    text,
    disabled = false,
    speed = 2,
    className = "",
}) => {
    const animation = !disabled
        ? `shine ${speed}s linear infinite`
        : "none";

    return (
        <div
            className={`inline-block ${className}`}
            style={{
                backgroundImage: `
          linear-gradient(120deg, #b5b5b5a4 0%, #b5b5b5a4 40%, rgba(255,255,255,0.8) 50%, #b5b5b5a4 60%, #b5b5b5a4 100%)
        `,
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: animation,
            }}
        >
            {text}

            <style>
                {`
          @keyframes shine {
            0% { background-position: 100% 0; }
            100% { background-position: -100% 0; }
          }
        `}
            </style>
        </div>
    );
};

export default ShinyText;
