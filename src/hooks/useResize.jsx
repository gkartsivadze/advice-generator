import { useEffect } from "react";

export default function useResize() {
    let width = window.innerWidth;

    useEffect(() => {
        document.addEventListener("resize", () => {
            width = window.innerWidth;
            console.log(width);
        });
    }, [])
};
