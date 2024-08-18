import { FormEvent, useState } from "react";

// Define the Product interface based on the API response structure
export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { count: number; rate: number };
  title: string;
}

// type Idea = (count: number) => number;
export interface ProductData {
  data: Product[];
}

function Main({ data }: ProductData) {
  const [count, setCount] = useState(0);
  const [input, setIntput] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIntput("");
  }
  function handleClick() {
    setCount((count) => count + 1);
  }

  // const Counter: Idea = (count) => {
  //   return count
  // };

  const Counter: (count: number) => number = (count: number): number => {
    return count;
  };
  return (
    <>
      <div>
        {data.map((product, index) => (
          <div key={index}>{product.price}</div>
        ))}
      </div>
      <span>{count}</span>
      <button onClick={handleClick}>Increase</button>
      {Counter(count)}
      {input}
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          onChange={(e) => setIntput(e.target.value)}
        />
        <button>click to submit</button>
      </form>
    </>
  );
}

export default Main;

// import { ProductData } from "../Product.types";
// import value from './../images.d';
//export default function Main({ data }: ProductData) {
//   console.log(data);
//   return (
//     <div>
//       <p>
//         culpa maiores, saepe inventore error repellat. Sequi esse dignissimos ex
//         incidunt similique totam possimus officiis. saddasdas Lorem ipsum dolor
//       </p>
//     </div>
//   );
// }
