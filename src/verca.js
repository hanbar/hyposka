import verca from './images/Veronika Sípalová.jpg';
import vercaSdetmi from './images/Veru.jpg';

const MainContent = () => {

    return (
        <main className="verca">
            <h1>Verča Sípalová</h1>
            <p>
                Jmenuji se Verča, jsem z Českých Budějovic. Doma mám dvě nezbedné děti
                Adélku, 5 let a Honzíka, 8 let. V předchozích letech jsem vystřídala pár
                zaměstnání, spíše administrativních. Ráda bych do budoucna změnu, dělat
                trochu dynamičtější práci a hlavně si myslím, že v oblasti webdesignu
                budu mít větší možnost určit si přesně čas, kdy se mohu věnovat práci a
                kdy dětem.
            </p>
            <p>
                Do digitální akademie jsem se přihlásila ze zvědavosti, a s vidinou
                rozšíření vědomostí a obzorů a mít příležitost do budoucna ucházet se o
                novou práci. Za svoji parťačku jsem si vybrala Slávku a po společném
                setkání a povídáním o nás, jsme se rozhodly pro Appku HYPOŠKU.
            </p>
            <img
              className="verca__image"
              src={verca}
              alt="Verča"
            />
            <p>
                Po absolvování Ekonomické fakulty Jihočeské Univerzity jsem pracovala v
                E.ONu na pozici Account Managera. Soukromě jsem si k tomu založila
                e-shop se svatebními doplňky a pomáhala s koordinací svateb. K tvorbě
                e-shopu jsem musela využít pomoci kamaráda a pak si správu webu dělala
                sama. Tady vznikla prvně myšlenka, že by bylo moc fajn toto umět a
                udělat si vlastní kreativní web. Pak přišla mateřská a skloubit dvě
                ratolesti, koordinaci svateb a správu e-shopu už nebylo možné zvládat.
                E-shop a koordinace šly do ústraní. Po mateřské při návratu zpět do
                pracovního procesu jsem byla po roce působení v korporátu vyčerpaná a
                bez kreativity, stala se z práce rutina. Každý den to samé. I díky COVID
                době jsem se začala více zajímat, kde by bylo možné se dál vzdělávat a
                rozvíjet se a našla jsem na Facebooku upoutávku na Digitální akademii.
                Začala jsem ji sledovat a postupně i nabídku kurzů, co nabízí. Jsem
                ráda, že jsem se na Digitální akademii WEB přihlásila, podaří se mi ji
                úspěšně absolvovat a v budoucnu využít získané znalosti.
            </p>
            <img className="verca__deti" src={vercaSdetmi} alt="Verča s dětmi" />
            <p>
                Digitální akademie WEB je opravdu intenzivní 3 měsíční kurz, neustále se
                učíme nové věci, procvičujeme znalosti, je to náročné i díky tomu, že je
                offline a doma vám k tomu běhají děti. Věřím však, že náš projekt bude
                skvělý a využijeme k tomu veškeré získané znalosti.
            </p>
        </main>
    );

}

export default MainContent;
