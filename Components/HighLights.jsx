import { useEffect } from 'react'
import { Switch } from "@mui/material"

const HighLights = ({ showCard, state }) => {

    useEffect(() => { }, [state])
    // const [checked, setChecked] = useState(false);

    const showHandleChange = () => {
        showCard(!state)
    };

    return (
        < >
            HighLights <Switch onClick={showHandleChange} />

        </>
    )
}

export default HighLights
