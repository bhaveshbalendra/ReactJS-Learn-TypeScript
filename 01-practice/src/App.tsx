// import { List } from "./List";

import { useState } from "react";

// export default function App() {

//   const items = [1, 2, 3, 4, 5];
//   return (
//     <div>
//       <List
//         items={items}
//         onClick={(value: React.MouseEvent<HTMLDivElement>) =>
//           console.log(value)
//         }
//       />
//     </div>
//   );
// }

// import { List } from "./List";

// export default function App() {
//   const items = [1, 2, 3, 4, 5];

//   //   const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
//   //     console.log(e);
//   //   };

//   return (
//     <div>
//       <List
//         items={items}
//         onClick={(e) => {
//           console.log(e);
//         }}
//       />
//     </div>
//   );
// }

type AuthUser = {
  name: string;
  email: string;
};
export default function App() {
  const [user, setUser] = useState<AuthUser | null>(null);
  //   const [user, setUser] = useState<AuthUser>({} as AuthUser); // no user?.email simple user.email
  return (
    <div>
      <button>Login{user?.email}</button>
      <button>Logout</button>
      <div>User is </div>
    </div>
  );
}
