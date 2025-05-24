import { createRoot } from "react-dom/client";
import './tailwind.css';
import UserForm from "./barangForm";
import HitungGajiForm from "./PelangganForm";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <UserForm/>
            <HitungGajiForm/>
        </div>
)