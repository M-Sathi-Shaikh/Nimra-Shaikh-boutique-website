import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />

      <a
        href="https://wa.me/923000000000"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl text-3xl z-50 hover:scale-110 duration-300"
      >
        💬
      </a>
    </>
  );
}

export default App;