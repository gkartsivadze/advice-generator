import { useEffect, useState } from "react";

export default function useResize() {
    var [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, [])
    
    return width;
};
