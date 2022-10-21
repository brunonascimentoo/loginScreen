import "./app.css";
import { Screen } from "./components/Screen";

export function App() {
  return (
    <>
      <Screen />
      <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div>
    </>
  );
}
