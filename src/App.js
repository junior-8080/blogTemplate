import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from "./Home"
import Category from "./Category"
import Preview from "./Preview"

function App(){

        return (
            <div className="App">
                <Switch>
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/photos/:id" exact component = {Category} />
                    <Route path = "/photo/preview/:id" exact component = {Preview} />
                </Switch>
            </div>
        )
}
export default App