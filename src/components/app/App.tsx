import React, { createRef, Component } from 'react';
import './App.css';
import { Introduction } from '../introduction/introduction';
import { About } from '../about/about';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { Projects } from '../projects/projects';

interface State{
  scrollPosition?: number;
  activeMenuItem?: number
}
interface Props{
}

class App extends Component<Props, State>{
  constructor(props: Props){
      super(props);
      this.state = {
        scrollPosition: this.wrapperRef.current?.scrollTop,
        activeMenuItem: 1
    }
  }
  section1 =  createRef<HTMLDivElement>();
  section2 =  createRef<HTMLDivElement>();
  section3 =  createRef<HTMLDivElement>();
  dumyForSecondSection = createRef<HTMLDivElement>();
  wrapperRef=createRef<HTMLDivElement>();
  handleClick = () => {
    this.dumyForSecondSection.current?.scrollIntoView({ behavior: 'smooth' });
  }
componentDidMount(){
  window.addEventListener("scroll", this.handleScroll)
}
handleScroll = (event: any) => {
  const scrollPos = window.pageYOffset;
  const section2Offset = this.section2.current?.offsetTop! - 41;
  const section3Offset = this.section3.current?.offsetTop! - 41;
  const first = scrollPos! < (section2Offset-150);
  const second = scrollPos! > section2Offset && scrollPos! < section3Offset;
  const third = scrollPos! > section3Offset;
  if(first){
    this.setState({activeMenuItem: 1});
  } else if(second){
    this.setState({activeMenuItem: 2});
  } else if(third){
    this.setState({activeMenuItem: 3})
  }
  }
handleScrollToSection = (sectionNum: number) => {
  switch (sectionNum) {
    case 1:
      this.section1.current?.scrollIntoView({ behavior: 'smooth' });
      break;
      case 2:
        this.dumyForSecondSection.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        this.section3.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    default:
      break;
  }
}
  
  render()
  //solve overflow problem
  {
  return (
    <div className="App">
  <section className="section parallax bg1" id="section1" ref={this.section1}>
  <Introduction scrollPosition={this.state.scrollPosition}
    onClick={() => this.handleClick() }
    />
  </section>
  <div>
  <div ref={this.dumyForSecondSection}></div>
    <NavigationBar handleScrollToSection={this.handleScrollToSection} activeMenuItem={this.state.activeMenuItem!}/>
  <section className="section static" ref={this.section2} id="sec2">
    <About />
  </section>
  <section className="section parallax bg2" ref={this.section3}>
    <Projects />
  </section>
</div>
</div>
  );
  }
}

export default App;
