# Day 1 Quiz

Q. How does JSX differ from HTML?
A. JSX gets compiled into HTML.
JSX adds behaviour to the page.
Different attribute names. (camelCase vs kebab-case)
Key words. (class / className)

Q. Is JSX required?
A. No, you can use plain JS if you want.

Q. What tool compiles JSX?
A. Babel.

Q. What is destructuring? Why do we do it? Contrast object destructuring with array destructuring.
A. Destructuring is the process of converting an array or object into a number of variables. With destructuring the order in which you declare your variable names is in important, however array destructuring you can name the variables whatever you want. Object destructing you have to explicitly state the 'component' variables unless you use the colon.

Q. Why prefer const/let over var?
A. var doesn't support block-level scope which can be confusing and lead to mistakes.

Q. What tool did we use to create our React app?
A. Vite.

Q. What Hooks did we use? What were they for?
A. useState. Track data for re-rendedring.

Q. How do we declare data that changes over time?
A. useState e.g. "const [books, setBooks] = useState(defaultBooks);"

Q. What’s the term for passing config settings into a component?
A. Props. Data type for props is an object.

Q. How do we declare what values our component accepts?
A. PropTypes. Type definitions.

Q. When do you declare a key? Why declare a key? What’s a good key? What’s a bad key?
A. Declare a key when looping through a set of objects to help identify the uniqueness of the object. A bad key is the loop index. A good key would be a primary key.

Q. How do you run an npm script?
A. npm run "script".

Q. How do you make a function public?
A. Export it.

Q. When does React re-render?
A. When something within the state changes.

Q. How do you declare state in a class? A function?
A. useState function.

Q. What tool are we using to automatically format our code?
A. Prettier.

Q. What does JSX compile down to?
A. HTML.

Q. What array method did we use to iterate over the list of books? What does it return?
A. Filter / Some / Any.

Q. What is a predicate?
A. A function that returns a boolean.

Q. What is a higher order function? List some higher order functions on the array prototype.
A. Something that takes a function and returns a function. Map function.

Q. What are the benefits and downsides of using a default export?
A. B: You can use it within other components. Can use any name when exporting D: Hard to search for usages.

Q. Var is dead. Why? What should you use instead?
A. const, or let.

Q. Does const make an object immutable?
A. No, you can still change variables within an object.

Q. Name 2 ways to declare a React component. Which should you prefer?
A.

Q. What’s the name for arguments passed to React components?
A. props.

Q. How do we specify the types for each argument?
A. Using the colon character followed by what type it is.

Q. How did we debug?
A. Added 'debugger;' to the line we want to debug at.

Q. Is the code we see in the browser what’s actually running?
A. No. Can't explain why though, I forget.
