import { useState } from "react"
export function useActivate(){
    let [activate, setActivate] = useState(true)
    const handleActivate = () => setActivate(!activate)
    return {activate, handleActivate}
}