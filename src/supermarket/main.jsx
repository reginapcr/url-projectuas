import { createRoot } from "react-dom/client";
import ArtikelSayur from "./ArtikelSayur";
import Container from "./Container";
import './custom.css';
import QnASection from "./QnASection";
import Product from "./Product"

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <ArtikelSayur/>
                <QnASection/>
                <Product/>
            </Container>
        </div>
    )