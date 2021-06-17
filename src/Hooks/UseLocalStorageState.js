import { useState, useEffect } from 'react'

function UseLocalstorageState(key, defaultValue) {
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        } catch (error) {
            val = defaultValue;
        }

        return val
    })

    useEffect(() => {
        localStorage.setItem(`${key}`, JSON.stringify(state))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return [state, setState]
}
export default UseLocalstorageState;