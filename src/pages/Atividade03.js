import Voltar from "../components/Voltar";
import TableofContents from "../components/TableOfContents";
import Gallery from "../components/Gallery";
import PackingList from "../components/PackingList";
import List from "../components/List";
import TeaSet from "../components/TeaSet";
import TeaGathering from "../components/TeaGathering";
import Recipe from "../components/Recipe";
import '../css/Pages.css';

export default function Atividade03(){
    return(
        <main>
            <div class="components">
            <div>
                <TableofContents/>
            </div>
            <div>
                <Gallery/>
            </div>
            <div>
                <PackingList/>
            </div>
            <div>
                <List/>
            </div>
            <div>
                <TeaGathering/>
            </div>
            <div>
                <TeaSet/>
            </div>
            <div>                    
                <h1>Spiced Chai Recipe</h1>
                <h2>For two</h2>
                <Recipe drinkers={2}/>
                <h2>For a gathering</h2>
                <Recipe drinkers={4}/>
            </div>
        </div>    
            <Voltar/>
        </main>
        

    )

}