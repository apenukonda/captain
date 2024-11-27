import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SecondHandMarket from "@/components/SecondhandMarket/SecondHandMarket";
const SecondHandmarket = () => {
    return (
      
        <main>
            <Navbar />
            <SecondHandMarket 
                    purchasedProducts={purchasedProducts}
                    setPurchasedProducts={setPurchasedProducts}
                    secondHandMarket={secondHandMarket}
                    setSecondHandMarket={setSecondHandMarket}/>
            <Footer />
        </main>

      
    );
  };
  
  export default SecondHandmarket;
  