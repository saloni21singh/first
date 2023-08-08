
import './App.css';
import React from 'react';
import Prop from './Prop';
import Sdata from './Sdata';

function App() {
  return(
    <div  className='App'>

      <h2  className='heading-style'>List of Some free Cartoon movies</h2>
   <Prop 
 imgsrc  ={Sdata[0].imgsrc}
      sname={Sdata[0].sname}
      title={Sdata[0].title}
      link={Sdata[0].link}/>
      
<Prop 
    imgsrc={Sdata[1].imgsrc}
    sname={Sdata[1].sname}
    link={Sdata[1].link}/>

<Prop 
imgsrc={Sdata[2].imgsrc}
link={Sdata[2].link}
sname={Sdata[2].sname}/>

<Prop  
imgsrc={Sdata[3].imgsrc}
link={Sdata[3].link}
sname={Sdata[3].sname}/>

<Prop 
    imgsrc={Sdata[4].imgsrc}
sname={Sdata[4].sname}
link={Sdata[4].link}/>


<Prop
imgsrc={Sdata[5].imgsrc}
sname={Sdata[5].sname}
link={Sdata[5].link}/>


<Prop
imgsrc={Sdata[6].imgsrc}
sname={Sdata[6].sname}
link={Sdata[6].link}
/>
    </div>
    



);
  
}

export default App;
