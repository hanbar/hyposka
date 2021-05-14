import hyposka from './images/hyposka.svg';
import house from './images/house.svg';

const MainContent = () => {

        return (
            <main>
                <picture>
                    <img className="img-hyposka" src={hyposka} alt="Girl hypoška" />
                </picture>
                <h1>O projektu</h1>
                <h3>Appka HYPOŠKA</h3>
                <div className="uvod-text">
                    <p>
                        Náš projekt má seznámit kohokoli s postupem, co ho čeká, když
                        potřebuje hypotéku.
                    </p>
                    <p>
                        Stránka nebude nic nabízet, prodávat, ani nesežene nejnižší úrok.
                        Naším cílem je to, aby nikdo nemusel důsledně dodržovat něco, co po
                        něm banka/poradce chce a on netuší proč. Bude mít srozumitelné,
                        přátelsky podané informace. Vše pro něj bude jednodušší, rychlejší a
                        vždy si bude jist, že ví, o čem se rozhoduje.
                    </p>
                    <p>
                        Při zpracování hypoték jsem se setkala s tím, že lidé jsou buď velice
                        dobře připraveni a ví dopředu vše nebo naopak o hypotéce ví jen to, že
                        ji potřebují na zaplacení bydlení.
                    </p>
                    <img className="img-house" src={house} alt="Dům" />
                    <p>
                        Chceme vytvořit web, který shrne celý postup zpracování a teorii do
                        přehledných částí. Navíc se návštěvník může sám rozhodnout, kde chce
                        jít víc do hloubky.
                    </p>
                    <p>
                        Nemáme v plánu tvořit novinový článek, ale zajímavou stránku, která se
                        bude měnit dle výběru, který návštěvník při své cestě naší stránkou
                        zvolí.
                    </p>
                    <h2>Jeho cesta bude rozdělena do sekcí:</h2>
                    <ol>
                        <li>Co plánuje</li>
                        <li>Jak doloží, že na to má příjem</li>
                        <li>Zkusíme přibližně zjistit, jestli na to má</li>
                        <li>Kam se pro hypotéku může vydat</li>
                    </ol>
                    <p>Těšíme se na výsledek Slávka a Verča</p>
                </div>
            </main>
        );

}

export default MainContent;
