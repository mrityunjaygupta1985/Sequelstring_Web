export const isMobile = () => (typeof window !== "undefined" ? window.innerWidth <= 600 : false);
export const isTab = () => (typeof window !== "undefined" ? window.innerWidth <= 1024 : false);
