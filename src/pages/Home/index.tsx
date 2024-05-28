import { FC } from "react";
import A from "../components/A";
import B from "../components/B";
import { ContextProvider } from "../Context";

const Home: FC = () => {

  return (
    <div>
      <ContextProvider>
        <div>Home</div>
        <A />
        <B />
      </ContextProvider>
    </div>
  );
};

export default Home;
