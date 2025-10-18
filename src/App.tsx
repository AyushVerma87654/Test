import type { FC } from "react";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="text-blue-500 h-screen w-screen flex items-center justify-center">
      This is test website
    </div>
  );
};

export default App;
