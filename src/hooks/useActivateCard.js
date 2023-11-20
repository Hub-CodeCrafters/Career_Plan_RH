import { useState } from "react"
export function useActivate(){
    let [activate, setActivate] = useState(false)
    const handleActivate = () => setActivate(!activate)
    return {activate, handleActivate}
}