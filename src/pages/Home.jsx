import lodgings from "../data/logement.json";
import img from "../images/img.png";
import Banner from "../components/Banner";
import Card from "../components/Card";
function Home() {
    return (
        <main className="home">
            <Banner img={img} text={"Chez vous, partout et ailleurs"} />
            <div className="home__cards-container">
                {lodgings.map((lodging) => {
                    return <Card id={lodging.id} title={lodging.title} img={lodging.cover} key={lodging.id} />;
                })}
            </div>
        </main>
    );
}
export default Home;
