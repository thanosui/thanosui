
// default: "text-gray-700 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300",
// primary: "text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600",
// secondary: "text-white bg-purple-500 hover:bg-purple-600 focus:bg-purple-600",
// success: "text-white bg-green-500 hover:bg-green-600 focus:bg-green-600",
// warning: "text-white bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600",
// danger: "text-white bg-red-500 hover:bg-red-600 focus:bg-red-600",

const solid = {
    neutral: "bg-neutral-200 text-gray-700 hover:bg-neutral-300 focus:bg-neutral-300",
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600",
    secondary: "bg-purple-500 text-white hover:bg-purple-600 focus:bg-purple-600",
    success: "bg-green-500 text-white hover:bg-green-600 focus:bg-green-600",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600 focus:bg-yellow-600",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:bg-red-600",
    foreground: "bg-foreground text-background hover:bg-blue-600 focus:bg-blue-600",
};

const shadow = {
    neutral: "shadow-lg shadow-neutral-500/50 text-gray-700",
    primary: "shadow-lg shadow-blue-500/50 text-white",
    secondary: "shadow-lg shadow-purple-500/50 text-white",
    success: "shadow-lg shadow-green-500/50 text-white",
    warning: "shadow-lg shadow-yellow-500/50 text-white",
    danger: "shadow-lg shadow-red-500/50 text-white",
    foreground: "shadow-lg shadow-foreground-500/50 text-background",
};

const bordered = {
    neutral: "bg-transparent border-neutral text-foreground",
    primary: "bg-transparent border-blue-500 text-blue-500",
    secondary: "bg-transparent border-purple-500 text-purple-500",
    success: "bg-transparent border-green-500 text-green-500",
    warning: "bg-transparent border-yellow-500 text-yellow-500",
    danger: "bg-transparent border-red-500 text-red-500",
    foreground: "bg-transparent border-foreground text-foreground",
};

const flat = {
    neutral: "bg-neutral-500/50 text-neutral-contrastText",
    primary: "bg-blue-500/50 text-blue-500",
    secondary: "bg-purple-500/50 text-purple-500",
    success: "bg-green-500/50 text-green-500",
    warning: "bg-yellow-500/50 text-yellow-500",
    danger: "bg-red-500/50 text-red-500",
    foreground: "bg-foreground/10 text-foreground",
};

const faded = {
    neutral: "border-neutral bg-neutral-100 text-neutral-contrastText",
    primary: "border-neutral bg-neutral-100 text-primary",
    secondary: "border-neutral bg-neutral-100 text-secondary",
    success: "border-neutral bg-neutral-100 text-success",
    warning: "border-neutral bg-neutral-100 text-warning",
    danger: "border-neutral bg-neutral-100 text-danger",
    foreground: "border-neutral bg-neutral-100 text-foreground",
};

const light = {
    neutral: "bg-transparent text-gray-700",
    primary: "bg-transparent text-blue-500",
    secondary: "bg-transparent text-purple-500",
    success: "bg-transparent text-green-500",
    warning: "bg-transparent text-yellow-500",
    danger: "bg-transparent text-red-500",
    foreground: "bg-transparent text-foreground",
};

const ghost = {
    neutral: "border-neutral-500 text-white-700 hover:!bg-neutral-200",
    primary: "border-blue-500 text-blue-500 hover:!text-white hover:!bg-blue-500",
    secondary: "border-purple-500 text-purple-500 hover:text-white hover:!bg-purple-500",
    success: "border-green-500 text-green-500 hover:!text-white hover:!bg-green-500",
    warning: "border-yellow-500 text-yellow-500 hover:!text-white hover:!bg-yellow-500",
    danger: "border-red-500 text-red-500 hover:!text-white hover:!bg-red-500",
    foreground: "border-foreground text-foreground hover:!bg-foreground",
};

export const colorVariants = {
    solid,
    shadow,
    bordered,
    flat,
    faded,
    light,
    ghost,
};