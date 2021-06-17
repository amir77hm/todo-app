import { useState } from "react";

export default function UseToggleState(initialVal = false) {
    const [state, setState] = useState(initialVal);
    const toggle = () => { setState(!state) }

    return [state, toggle]
}
