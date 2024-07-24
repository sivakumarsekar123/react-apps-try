export const data = [
    {
      image :"src/assets/components.png",
      title : "Components",
      description:
        "React applications are built using components. Components are reusable, self-contained pieces of code that define how a certain part of the UI should look and behave."
    },
    {
        image :"src/assets/state-mgmt.png",
        title : "State Management",
        description:
          "State is a plain JavaScript object used by React to represent an information about the component's current situation. State can change over time, usually as a result of user actions."
      },
      {
        image :"src/assets/jsx-ui.png",
        title : "JSX",
        description:
          "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML elements in JavaScript and place them in the DOM without using createElement or appendChild methods."
      },    {
        image :"src/assets/react-core-concepts.png",
        title : "Virtual DoM",
        description:
          "React maintains a virtual representation of the real DOM. When the state of a component changes, React updates the virtual DOM first, then compares it with the previous virtual DOM, and finally applies the minimal set of changes to the real DOM"
      }
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};