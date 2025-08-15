import './App.css';
import { AuthProvider } from "./context/AuthContext";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import { useEffect } from "react";

function VerticalScroll() {
  useEffect(() => {
    const container = document.querySelector(".sections-container") as HTMLElement | null;
    if (!container) return;

    let isScrolling = false;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;
      isScrolling = true;

      const sections = Array.from(container.querySelectorAll(".section")) as HTMLElement[];
      const sectionHeight = container.clientHeight;
      const currentIndex = Math.round(container.scrollTop / sectionHeight);

      let targetIndex = currentIndex + (e.deltaY > 0 ? 1 : -1);
      targetIndex = Math.max(0, Math.min(sections.length - 1, targetIndex));

      container.scrollTo({
        top: sections[targetIndex].offsetTop,
        behavior: "smooth"
      });

      setTimeout(() => { isScrolling = false; }, 600);
    };

    container.addEventListener("wheel", onWheel as EventListener, { passive: false });
    return () => container.removeEventListener("wheel", onWheel as EventListener);
  }, []);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <AppBar />
        <VerticalScroll />
        
        <div className="sections-container">
          <section className="section"><Home /></section>
          <section className="section"><About /></section>
          <section className="section"><Services /></section>
          <section className="section"><Portfolio /></section>
          <section className="section"><Contact /></section>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;