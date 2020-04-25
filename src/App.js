import React from "react"
import {Link,Switch, Route} from "react-router-dom"

import Home from "./Home"
import Category from "./Category"

function App(){

        return (
            <div className="App">
                <Switch>
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/photos/:id" exact component = {Category} />
                </Switch>
            </div>
        )
}
export default App