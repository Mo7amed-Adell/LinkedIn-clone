import Header from "./components/Header"
import Left from "./components/LeftSide" ;
import Main from "./components/Main";
import Right from "./components/RightSide";
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto mt-6 px-4">
        <div className="md:col-span-1">
          <Left />
        </div>

        <div className="md:col-span-2">
          <Main />
        </div>

        <div className="md:col-span-1">
          <Right />
        </div>
      </div>
    </div>
  );
}