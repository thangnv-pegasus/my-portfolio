import Intro from '~/components/Intro'
import AboutMe from '~/components/AboutMe'
import Worked from '~/components/Worked'

function App() {
  return (
    <div className="App min-h-[5000px] font-font_mono bg-navy">
      <div className="w-content-width mx-auto pt-24">
        <Intro />
        <AboutMe />
        <Worked />

      </div>
      
    </div>
  );
}

export default App;

