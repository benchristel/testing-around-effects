import {h} from "preact"
import "./app.css"

export function App() {
  return <h1>Hello from Preact!</h1>
}

test("App", {
  "renders a greeting"() {
    expect(App().props.children, equals, "Hello from Preact!")
  },
})
