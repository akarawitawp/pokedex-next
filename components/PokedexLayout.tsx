import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import NavBar from "./nav";

type PokedexLayoutProps = {
  children?: ReactNode;
};
const PokedexLayout: React.FC<PokedexLayoutProps> = (props) => {
  const { children } = props;
  return (
    <main
      className={twMerge(
        "flex flex-col justify-center items-center",
        "max-w-screen-lg mx-auto"
      )}
    >
      <NavBar />
      {children}
    </main>
  );
};
export default PokedexLayout;
/*<NavBar />*/
