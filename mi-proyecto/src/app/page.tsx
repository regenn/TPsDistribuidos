import Image from "next/image";
import Intro from "./components/Intro";
import Titulo from "./components/Titulo";


export default function Home() {
  return (
    <main 
      className='contenido' 
      style={{textAlign: "center", 
              padding:"30px",
              fontFamily: "'Roboto Mono', monospace",
              backgroundColor: "#2e1d3d",
              color: "#f8c9ff"}}>
        <Titulo/>
        <Intro/>
        <p> Les dejo el link al <a href="https://github.com/regenn/TPsDistribuidos/tree/actividad3"><strong>repositorio</strong></a>.</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src = "/snow-gif-2.gif" 
          alt = ":D" 
          width ={500} 
          height ={331}
          style={{ display: "block" }}
        /> 
        </div>
        <footer>
          <p>:3</p>
        </footer>
    </main>
  );
}
