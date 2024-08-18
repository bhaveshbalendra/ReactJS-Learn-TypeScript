import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { Product } from "./components/Main";

const URL = "https://fakestoreapi.com/products";

function App() {
  // Initialize productData as an array of Product objects
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL);
      const data: Product[] = await res.json();
      setProductData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <Main data={productData} />
      <Footer />
    </div>
  );
}

export default App;
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
// import { useEffect, useState } from "react";
// import { ProductData } from "./Product.types";

// const URL = "https://fakestoreapi.com/products";
// function App() {
//   const [productData, setProductData] = useState<ProductData | null>(null);
//   useEffect(function () {
//     async function fetchData() {
//       const res = await fetch(URL);
//       const data = await res.json();
//       setProductData(data);
//     }
//     fetchData();
//   }, []);
//   return (
//     <div className="container">
//       <Header />
//       <Main data={productData} />
//       <Footer />
//     </div>
//   );
// }

// export default App;
