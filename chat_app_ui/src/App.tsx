import { BrowserRouter ,Routes,  Route } from 'react-router-dom';
import Join from "./Join.js"

function App() {
    return( <BrowserRouter>
        <Routes>
            <Route path="/" element= { <Join />} />
        </Routes>
    </BrowserRouter>
    )
   
}

export default App
