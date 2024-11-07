import BackgroundHeading from "./BackgroundHeading.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import SideBar from "./SideBar.tsx";
import TodoList from "./TodoList.tsx";


function App() {


    return (
        <div className='justify-center flex items-center font-sans  min-h-screen bg-[#f1d4b3] flex-col'>
           <BackgroundHeading />
          <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
              <Header />
                <TodoList  />
              <SideBar />
          </main>
         <Footer />
      </div>
  )
}

export default App
