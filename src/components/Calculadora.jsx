import "../css/Calculadora.css";

export default function Calculadora(){

    function LimparTela(){
        
        
    }
    return(
        <div class="interface">
            <div class="linha1">
                <button>AC</button>
                <button>+/-</button>
                <button>%</button>
                <button>/</button>
            </div>
            
            <div class="linha2">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>x</button>
            </div>
            
            <div class="linha3">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
            </div>

            <div class="linha4">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
            </div>

            <div class="linha5">
                <button>0</button>
                <button>,</button>
                <button>=</button>
            </div>
        </div>
    )
}