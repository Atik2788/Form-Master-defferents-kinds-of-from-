import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue)

    // 1st way to create hook
    // const handleChange = e =>{
    //     setValue(e.target.value)
    // }

    // return[ value, handleChange]

    // todo:  2nd waw to create hook
    const onChange = e => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange
    }
}

export default useInputState;