import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar"

const MainLayOut= ({children}) => {
    return (
        <div className="flex flex-col min-h-sceen">
            <NavBar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default MainLayOut;