import {render, h} from "preact"
import {App} from "./App"
import "./test-results"
import "./reset.css"
import "./global-types"

render(<App />, document.getElementById("app")!)
