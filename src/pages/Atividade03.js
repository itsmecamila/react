import Voltar from "../components/Voltar";
import TableofContents from "../components/TableOfContents";
import Gallery from "../components/Gallery";
import PackingList from "../components/PackingList";
import List from "../components/List";
import TeaSet from "../components/TeaSet";
import TeaGathering from "../components/TeaGathering";
import Recipe from "../components/Recipe";
import Card from "../components/Card";
import '../css/Pages.css';

export default function Atividade03(){
    return(
        <main className="special">
            <Card>                
                <TableofContents/>
            </Card>
            <Card>
                <Gallery/>
            </Card>
            <Card>
                <PackingList/>
            </Card>
            <Card>            
                <List/>
            </Card>
            <Card>
                <TeaGathering/>
            </Card>
            <Card>
                <TeaSet/>
            </Card>      
            <Card>
            <h1>Spiced Chai Recipe</h1>
                <h2>For two</h2>
                <Recipe drinkers={2}/>
                <h2>For a gathering</h2>
                <Recipe drinkers={4}/>
            </Card>                    
            <Voltar/>
        </main>
        

    )

}