// type ListProps = {
//     items:string[]|number[];
//     onClick:(value:string|number) => void;
// }

// export default function List({items,onClick}:ListProps) {
//   return (
//     <div>
//         {items.map((item,index) => {
//             return <div key={index} onClick={() => onClick(item)}>{item}</div>
//         })}
//     </div>
//   )
// }
type ListProps<T> = {
  items: T[];
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const List = <T extends number>({
  items,
  onClick,
}: ListProps<T>): JSX.Element => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={onClick}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
