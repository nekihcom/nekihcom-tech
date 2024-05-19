import { Button } from '@chakra-ui/react'
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <Button>Button</Button>
        </>
    )
}
export default App
