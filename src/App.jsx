// import Counter from "./components/Counter";
//import Todo from "./components/Todo";
//import Meals from "./components/Meals";
//import Calculate from "./components/Calculator";
//import ToggleBackgroundColor from "./components/ToggleBackgroundColor";
//import HiddenSearchBar from "./components/HiddenSearchBar";
//import Testimonials from "./components/Testimonials";
import Accordion from "./components/Accordion";
import { accordionData } from "./utils/content";

const App = () => {
  return (

    <div>
       {/* <Counter/> */}
       {/* <Todo/> */}
       {/* <Meals/>  */}
       {/* <Calculate/> */}
       {/* <ToggleBackgroundColor/> */}
       {/* <HiddenSearchBar/> */}
       {/* <Testimonials/> */}
      <div className="accordion">
          {accordionData.map(({title, content}) => (
              <Accordion title={title} content={content}/>
        ))}
      </div>
    </div>

  )
}

export default App;