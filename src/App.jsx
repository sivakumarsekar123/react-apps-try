// source test codes - https://github.com/academind/react-complete-guide-course-resources.git

import Header from './Header';
import imgConn from './assets/components.png'
import { EXAMPLES, data } from './data';
import CompProp from './CompProp';
import { TabButton } from './TabButton'
import { useState } from 'react';
// import React from 'react';


const books = ['Crime', 'Fiction', 'Comics'];
let description = books[getRandom(2)];

//getting Random number
function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Creating Footer Component
function footer() {
  return <h1>footer</h1>
}

function App() {
  // how-not-to-update-ui | managing-state | deriving-computing-values
  const [selectedButton, setSelectedButton] = useState("Pls select an option");
  const [selectedContent, setSelectedContent] = useState("Pls select an option");
  function handleSelect(selectedButton) {
    setSelectedButton(selectedButton);
  }

  function handleSelectCon(selectedContent){    
    let tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedContent].title}</h3>
        <p>{EXAMPLES[selectedContent].description}</p>
        <pre> <code>{EXAMPLES[selectedContent].code}</code> </pre>
      </div>
    )
    console.log(tabContent);
    // alert(tabContent)
    setSelectedContent(tabContent);
  }
  
  return (
    <div>
      {/* creating-using-first-component */}
      <Header /> 

      {/* using-outputting-dynamic-values */}

      <p> I love {description} novels...</p>

      <main>
      {/* html-attributes-dynamically-image-files | Component Props | alternative-props-syntax
       | storing-cmp-in-files  */}
        <section id="core-concepts">
          <ul>
            <CompProp
              title={data[0].title}
              description={data[0].description}
              image={data[0].image}
            />
            <CompProp {...data[1]} />
            <CompProp {...data[2]} />
            <CompProp {...data[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Menu Bar with array</h2>
          {/* <img src="./src/assets/components.png"/> */}
          <menu>
            {/* composition-children-prop | reacting-to-events | passing-functions-as-values | 12-passing-custom-arguments-to-event-fn | */}
            <TabButton onSelect={() => handleSelect(data[0].description)}>Components</TabButton>
            <TabButton onSelect={() => handleSelect(data[1].description)}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect(data[2].description)}>State</TabButton>
            <TabButton onSelect={() => handleSelect(data[3].description)}>Virtual DoM</TabButton>
          </menu>
          
          {selectedButton}
        </section>

        <section id="examples">
        <h2>Menu Bar with Object</h2>
        <menu>
        <TabButton onSelect={() => handleSelectCon('components')}>Components</TabButton>
        <TabButton onSelect={() => handleSelectCon('jsx')}>JSX</TabButton>
        <TabButton onSelect={() => handleSelectCon('props')}>Props</TabButton>
        <TabButton onSelect={() => handleSelectCon('state')}>State</TabButton>
        </menu>

        {selectedContent}
        </section>
      </main>

      {footer()}

    </div>
  );
}

export default App;
