// ─── ENOVA Dev Full Curriculum ────────────────────────────────────

export const CURRICULUM = {
  html: {
    label: "HTML",
    color: "#e34c26",
    icon: "⬡",
    description: "The skeleton of every webpage. Learn structure, tags, and semantic markup.",
    levels: [
      {
        id: "html-1", title: "What is HTML?", xp: 100, order: 1,
        objective: "Understand HTML structure and write your first webpage.",
        theory: `HTML (HyperText Markup Language) is the standard language for creating webpages. It uses <strong>tags</strong> wrapped in angle brackets to define elements. Every HTML page has a basic structure: DOCTYPE declaration, html, head, and body.`,
        task: "Create a page with a heading, a paragraph, and your name inside a &lt;strong&gt; tag.",
        hints: ["Use &lt;h1&gt; for the main heading", "Wrap your name in &lt;strong&gt;", "Put content inside &lt;body&gt;"],
        starterCode: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <!-- Write your code below -->\n\n  </body>\n</html>`,
        solutionCheck: (code) => code.includes("<h1") && code.includes("<p") && code.includes("<strong")
      },
      {
        id: "html-2", title: "Headings & Paragraphs", xp: 120, order: 2,
        objective: "Use all 6 heading levels and paragraph tags correctly.",
        theory: `HTML has 6 heading tags: &lt;h1&gt; through &lt;h6&gt;. h1 is the most important (largest), h6 is the least. &lt;p&gt; wraps paragraph text. Use &lt;br&gt; for line breaks and &lt;hr&gt; for horizontal rules.`,
        task: "Build a page with h1, h2, h3 headings and two paragraphs separated by a horizontal rule.",
        hints: ["&lt;hr&gt; is self-closing", "&lt;br&gt; creates a line break", "Only use one &lt;h1&gt; per page"],
        starterCode: `<!DOCTYPE html>\n<html lang="en">\n<head><title>Headings</title></head>\n<body>\n  <!-- Add your headings and paragraphs here -->\n\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("<h1") && code.includes("<h2") && code.includes("<hr")
      },
      {
        id: "html-3", title: "Links & Navigation", xp: 150, order: 3,
        objective: "Create hyperlinks that open in new tabs and link to page sections.",
        theory: `The &lt;a&gt; tag creates links. The <strong>href</strong> attribute sets the destination. Use <strong>target="_blank"</strong> to open in a new tab. Use <strong>href="#id"</strong> to link to a section on the same page.`,
        task: "Create 3 links: one to google.com (new tab), one to github.com, and one that jumps to a section with id='about'.",
        hints: ["target=\"_blank\" opens new tab", "Add rel=\"noopener\" for security", "Sections need an id attribute"],
        starterCode: `<!DOCTYPE html>\n<html lang="en">\n<head><title>Links</title></head>\n<body>\n  <!-- Navigation links -->\n\n  <!-- About section -->\n  <section id="about">\n    <h2>About</h2>\n  </section>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes('href="https://') && code.includes('target="_blank"') && code.includes('href="#about"')
      },
      {
        id: "html-4", title: "Images & Media", xp: 150, order: 4,
        objective: "Embed images with proper alt text and understand responsive images.",
        theory: `&lt;img&gt; embeds images. Always include an <strong>alt</strong> attribute for accessibility. Use <strong>width</strong> and <strong>height</strong> attributes to prevent layout shift. &lt;figure&gt; and &lt;figcaption&gt; give images semantic context.`,
        task: "Add an image with alt text, wrap it in a figure with a caption, and set its width to 300px.",
        hints: ["img is self-closing", "alt text describes the image for screen readers", "figcaption goes inside figure"],
        starterCode: `<!DOCTYPE html>\n<html lang="en">\n<head><title>Images</title></head>\n<body>\n  <!-- Add your image inside a figure here -->\n\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("<figure") && code.includes("alt=") && code.includes("<figcaption")
      },
      {
        id: "html-5", title: "Lists", xp: 120, order: 5,
        objective: "Create ordered, unordered, and nested lists.",
        theory: `&lt;ul&gt; creates bullet lists. &lt;ol&gt; creates numbered lists. Both use &lt;li&gt; for items. Lists can be nested inside each other. &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt; create definition lists.`,
        task: "Build a recipe page with an ingredients list (unordered) and cooking steps (ordered), with at least one nested list.",
        hints: ["Nest a &lt;ul&gt; inside an &lt;li&gt;", "ol items are automatically numbered", "Use semantic meaning: ingredients = ul, steps = ol"],
        starterCode: `<!DOCTYPE html>\n<html lang="en">\n<head><title>Lists</title></head>\n<body>\n  <h1>My Recipe</h1>\n  <!-- Add your lists here -->\n\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("<ul") && code.includes("<ol") && code.includes("<li")
      },
      {
        id: "html-6", title: "Tables", xp: 180, order: 6,
        objective: "Build structured data tables with proper semantic markup.",
        theory: `Tables use &lt;table&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tr&gt; (row), &lt;th&gt; (header cell), &lt;td&gt; (data cell). Use &lt;caption&gt; for table title. colspan and rowspan merge cells.`,
        task: "Create a schedule table with days as columns and time slots as rows. Merge at least one cell with colspan.",
        hints: ["thead contains the header row", "tbody contains the data rows", "colspan merges columns"],
        starterCode: `<!DOCTYPE html>\n<html lang="en">\n<head><title>Tables</title></head>\n<body>\n  <table>\n    <caption>Weekly Schedule</caption>\n    <!-- Add thead and tbody here -->\n\n  </table>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("<thead") && code.includes("<tbody") && code.includes("colspan")
      },
      {
        id: "html-7", title: "Forms & Inputs", xp: 200, order: 7,
        objective: "Build a complete form with validation attributes.",
        theory: `Forms collect user input. &lt;form&gt; wraps inputs. Use &lt;label&gt; with <strong>for</strong> attribute matching input <strong>id</strong>. Input types: text, email, password, number, checkbox, radio, select, textarea. Add <strong>required</strong>, <strong>minlength</strong>, <strong>pattern</strong> for validation.`,
        task: "Build a registration form with: name (required), email (required), password (min 8 chars), age (number), and a terms checkbox.",
        hints: ["label for= must match input id=", "type=\"email\" validates email format", "required attribute prevents empty submission"],
        starterCode: `<!DOCTYPE html>\n<html lang="en">\n<head><title>Forms</title></head>\n<body>\n  <form action="#" method="POST">\n    <h2>Register</h2>\n    <!-- Add your form fields here -->\n    <button type="submit">Create Account</button>\n  </form>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes('type="email"') && code.includes('required') && code.includes('type="checkbox"')
      },
      {
        id: "html-8", title: "Semantic HTML", xp: 200, order: 8,
        objective: "Structure a webpage using semantic HTML5 elements.",
        theory: `Semantic elements describe their meaning. Use: &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;, &lt;footer&gt; instead of generic divs. This improves SEO and accessibility.`,
        task: "Rebuild a blog page layout using only semantic elements — no divs for structure.",
        hints: ["header = top of page", "nav = navigation links", "article = self-contained content", "footer = bottom of page"],
        starterCode: `<!DOCTYPE html>\n<html lang="en">\n<head><title>Semantic HTML</title></head>\n<body>\n  <!-- Replace this comment with semantic structure -->\n  <!-- header, nav, main, article, aside, footer -->\n\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("<header") && code.includes("<main") && code.includes("<footer") && code.includes("<nav")
      }
    ]
  },

  css: {
    label: "CSS",
    color: "#264de4",
    icon: "◈",
    description: "Style and design. Make your pages beautiful, responsive, and alive.",
    levels: [
      {
        id: "css-1", title: "Selectors & Properties", xp: 100, order: 1,
        objective: "Apply styles using element, class, and ID selectors.",
        theory: `CSS (Cascading Style Sheets) styles HTML. Selectors target elements: <strong>element</strong> (p), <strong>class</strong> (.name), <strong>ID</strong> (#name). Properties like color, font-size, background control appearance. CSS is written as: selector { property: value; }`,
        task: "Style a page: body background #111, h1 color cyan, paragraph font-size 18px, and a .highlight class with yellow background.",
        hints: ["Color names or hex values work", "font-size uses px, rem, em", "background-color or background shorthand"],
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* Write your CSS here */\n\n</style>\n</head>\n<body>\n  <h1>Styled Page</h1>\n  <p>Regular paragraph</p>\n  <p class="highlight">Highlighted paragraph</p>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("background") && code.includes("color") && code.includes(".highlight")
      },
      {
        id: "css-2", title: "Box Model", xp: 150, order: 2,
        objective: "Understand and apply margin, padding, border, and box-sizing.",
        theory: `Every element is a box. From inside out: <strong>content → padding → border → margin</strong>. Use <strong>box-sizing: border-box</strong> to include padding/border in width calculations. Margin collapses between vertical elements.`,
        task: "Create 3 boxes: each 200px wide with 20px padding, 2px border, different margins, and box-sizing: border-box.",
        hints: ["box-sizing: border-box is best practice", "margin: auto centers block elements", "border shorthand: width style color"],
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  * { box-sizing: border-box; }\n  /* Style your boxes */\n\n</style>\n</head>\n<body>\n  <div class="box">Box 1</div>\n  <div class="box">Box 2</div>\n  <div class="box">Box 3</div>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("padding") && code.includes("border") && code.includes("margin")
      },
      {
        id: "css-3", title: "Flexbox", xp: 200, order: 3,
        objective: "Build flexible layouts with Flexbox.",
        theory: `Flexbox makes layout easy. Set <strong>display: flex</strong> on a container. Key properties: <strong>flex-direction</strong> (row/column), <strong>justify-content</strong> (main axis), <strong>align-items</strong> (cross axis), <strong>gap</strong> (spacing), <strong>flex-wrap</strong> (wrapping).`,
        task: "Build a nav bar (logo left, links right) and a 3-card row — all using flexbox.",
        hints: ["justify-content: space-between spreads items", "align-items: center vertically centers", "flex: 1 makes items grow equally"],
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { margin: 0; background: #111; color: white; font-family: sans-serif; }\n  /* Add flexbox styles */\n\n</style>\n</head>\n<body>\n  <nav>\n    <div class="logo">ENOVA</div>\n    <div class="links">\n      <a href="#">Home</a>\n      <a href="#">About</a>\n      <a href="#">Contact</a>\n    </div>\n  </nav>\n  <div class="cards">\n    <div class="card">Card 1</div>\n    <div class="card">Card 2</div>\n    <div class="card">Card 3</div>\n  </div>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("display: flex") && code.includes("justify-content")
      },
      {
        id: "css-4", title: "CSS Grid", xp: 220, order: 4,
        objective: "Create complex 2D layouts with CSS Grid.",
        theory: `Grid is for 2D layouts. <strong>display: grid</strong> on container. <strong>grid-template-columns</strong> defines columns. <strong>grid-template-rows</strong> defines rows. <strong>gap</strong> adds spacing. Items can span multiple cells with <strong>grid-column</strong> and <strong>grid-row</strong>.`,
        task: "Build a magazine-style layout: full-width header, 2-col content area (main + sidebar), full-width footer.",
        hints: ["grid-template-columns: 2fr 1fr splits 2:1", "grid-column: 1 / -1 spans full width", "Use named areas with grid-template-areas"],
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { margin: 0; font-family: sans-serif; }\n  .layout {\n    display: grid;\n    /* Define your grid here */\n  }\n</style>\n</head>\n<body>\n  <div class="layout">\n    <header>Header</header>\n    <main>Main Content</main>\n    <aside>Sidebar</aside>\n    <footer>Footer</footer>\n  </div>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("display: grid") && code.includes("grid-template")
      },
      {
        id: "css-5", title: "Animations & Transitions", xp: 220, order: 5,
        objective: "Add smooth transitions and keyframe animations.",
        theory: `<strong>transition</strong> animates property changes: <code>transition: property duration easing</code>. <strong>@keyframes</strong> define animation sequences. <strong>animation</strong> applies them: <code>animation: name duration easing iteration</code>.`,
        task: "Create a button that changes color on hover (transition), and a pulsing circle animation on page load.",
        hints: ["transition: all 0.3s ease is a good default", "@keyframes uses 0%/100% or from/to", "animation-iteration-count: infinite loops"],
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { display: flex; flex-direction: column; align-items: center; gap: 40px; padding: 60px; background: #111; }\n  /* Add transitions and animations */\n\n  @keyframes pulse {\n    /* Define here */\n  }\n</style>\n</head>\n<body>\n  <button class="btn">Hover Me</button>\n  <div class="circle"></div>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("transition") && code.includes("@keyframes") && code.includes("animation")
      },
      {
        id: "css-6", title: "Responsive Design", xp: 250, order: 6,
        objective: "Build layouts that work on all screen sizes.",
        theory: `Responsive design adapts to screen size. Use <strong>media queries</strong>: <code>@media (max-width: 768px) { }</code>. Mobile-first means writing base styles for mobile, then adding desktop styles. Use relative units: %, rem, vw, vh instead of fixed px.`,
        task: "Build a 3-column card grid that collapses to 1 column on mobile (under 768px).",
        hints: ["Start with mobile styles, then add desktop", "max-width media queries target max screen size", "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) is responsive by default"],
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  body { margin: 0; padding: 20px; font-family: sans-serif; background: #111; color: white; }\n  .grid {\n    /* Add responsive grid styles */\n  }\n  .card {\n    background: #1e1e2e;\n    padding: 24px;\n    border-radius: 12px;\n  }\n  /* Add media query for mobile */\n\n</style>\n</head>\n<body>\n  <div class="grid">\n    <div class="card">Card 1</div>\n    <div class="card">Card 2</div>\n    <div class="card">Card 3</div>\n  </div>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("@media") && code.includes("max-width")
      }
    ]
  },

  js: {
    label: "JavaScript",
    color: "#f7df1e",
    icon: "⬟",
    description: "Bring your pages to life. Logic, interactivity, and dynamic content.",
    levels: [
      {
        id: "js-1", title: "Variables & Data Types", xp: 100, order: 1,
        objective: "Declare variables and understand JavaScript's 6 primitive types.",
        theory: `JavaScript has 3 variable declarations: <strong>var</strong> (old, avoid), <strong>let</strong> (reassignable), <strong>const</strong> (constant). Types: string, number, boolean, null, undefined, symbol. Use <strong>typeof</strong> to check types. Template literals use backticks.`,
        task: "Declare variables for a user profile (name, age, isStudent, score), log them, and display them in the HTML using template literals.",
        hints: ["const for values that won't change", "let for values that will change", "Template literals: `Hello ${name}`"],
        starterCode: `<!DOCTYPE html>\n<html>\n<body>\n  <div id="output"></div>\n  <script>\n    // Declare your variables here\n\n\n    // Display them in #output\n    document.getElementById('output').innerHTML = ``;\n  </script>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("const") && code.includes("let") && code.includes("getElementById")
      },
      {
        id: "js-2", title: "Functions", xp: 150, order: 2,
        objective: "Write regular functions, arrow functions, and understand parameters.",
        theory: `Functions encapsulate reusable logic. <strong>function declaration</strong> is hoisted. <strong>Arrow functions</strong> are shorter: <code>const fn = (param) => value</code>. Functions can have <strong>default parameters</strong>. Use <strong>return</strong> to send a value back.`,
        task: "Write 3 functions: a greet function, an add function, and an arrow function that squares a number. Call all 3 and display results.",
        hints: ["Arrow functions: const fn = (x) => x * 2", "Default params: function greet(name = 'World')", "Return sends a value back to the caller"],
        starterCode: `<!DOCTYPE html>\n<html>\n<body>\n  <div id="output"></div>\n  <script>\n    // 1. Regular function: greet(name)\n\n    // 2. Regular function: add(a, b)\n\n    // 3. Arrow function: square(n)\n\n    // Call them and display results\n    document.getElementById('output').innerHTML = ``;\n  </script>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("function") && code.includes("=>") && code.includes("return")
      },
      {
        id: "js-3", title: "DOM Manipulation", xp: 200, order: 3,
        objective: "Select, modify, and create HTML elements with JavaScript.",
        theory: `The DOM (Document Object Model) is the JS interface to HTML. Select elements with <strong>querySelector</strong>, <strong>getElementById</strong>. Modify with <strong>textContent</strong>, <strong>innerHTML</strong>, <strong>style</strong>, <strong>classList</strong>. Create with <strong>createElement</strong> + <strong>appendChild</strong>.`,
        task: "Build a dynamic list: input field + button that adds items to a ul. Items should be removable on click.",
        hints: ["createElement creates a new element", "appendChild adds it to the DOM", "addEventListener listens for events"],
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { font-family: sans-serif; padding: 20px; }\n  li { cursor: pointer; padding: 8px; margin: 4px 0; background: #f0f0f0; }\n  li:hover { background: #ffcccc; }\n</style>\n</head>\n<body>\n  <input id="itemInput" placeholder="Add item..."/>\n  <button id="addBtn">Add</button>\n  <ul id="list"></ul>\n  <script>\n    // Write your DOM manipulation here\n\n  </script>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("createElement") && code.includes("addEventListener") && code.includes("appendChild")
      },
      {
        id: "js-4", title: "Events", xp: 180, order: 4,
        objective: "Handle user events: clicks, keyboard, mouse, and form events.",
        theory: `Events fire when users interact. Use <strong>addEventListener(event, callback)</strong>. Common events: click, keydown, keyup, mouseover, mouseout, submit, input, change. The <strong>event object</strong> has info like event.target, event.key, event.preventDefault().`,
        task: "Build a color picker: clicking colored buttons changes the page background. Add a keyboard shortcut (press 'r' to reset).",
        hints: ["event.target is the clicked element", "event.key gives the pressed key", "document.body.style.background sets background"],
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { transition: background 0.3s; padding: 40px; font-family: sans-serif; }\n  .color-btn { width: 50px; height: 50px; border: none; border-radius: 50%; cursor: pointer; margin: 8px; }\n</style>\n</head>\n<body>\n  <h2>Click a color or press 'R' to reset</h2>\n  <button class="color-btn" style="background:#00d4ff" data-color="#00d4ff"></button>\n  <button class="color-btn" style="background:#7c3aed" data-color="#7c3aed"></button>\n  <button class="color-btn" style="background:#f59e0b" data-color="#f59e0b"></button>\n  <button class="color-btn" style="background:#ef4444" data-color="#ef4444"></button>\n  <script>\n    // Add event listeners here\n\n  </script>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("addEventListener") && code.includes("click") && code.includes("keydown")
      },
      {
        id: "js-5", title: "Arrays & Loops", xp: 200, order: 5,
        objective: "Work with arrays using loops and array methods.",
        theory: `Arrays store ordered data. Methods: <strong>push</strong>, <strong>pop</strong>, <strong>shift</strong>, <strong>unshift</strong>, <strong>splice</strong>. Functional methods: <strong>map</strong>, <strong>filter</strong>, <strong>find</strong>, <strong>reduce</strong>, <strong>forEach</strong>. Loops: for, for...of, while.`,
        task: "Given an array of products, display only those under $50 using filter(), then display names in uppercase using map().",
        hints: ["filter() returns a new array of matching items", "map() transforms each item", "Arrow functions make these very clean"],
        starterCode: `<!DOCTYPE html>\n<html>\n<body>\n  <div id="output"></div>\n  <script>\n    const products = [\n      { name: "Keyboard", price: 79 },\n      { name: "Mouse", price: 35 },\n      { name: "Monitor", price: 299 },\n      { name: "Headset", price: 45 },\n      { name: "Webcam", price: 89 },\n      { name: "USB Hub", price: 25 }\n    ];\n\n    // 1. Filter products under $50\n\n    // 2. Map to get uppercase names\n\n    // 3. Display results\n    document.getElementById('output').innerHTML = ``;\n  </script>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes(".filter(") && code.includes(".map(")
      },
      {
        id: "js-6", title: "Objects", xp: 200, order: 6,
        objective: "Create and manipulate objects, and understand destructuring.",
        theory: `Objects store key-value pairs. Access with <strong>dot notation</strong> (obj.key) or <strong>bracket notation</strong> (obj['key']). <strong>Destructuring</strong>: <code>const { name, age } = user</code>. <strong>Spread operator</strong>: <code>{ ...obj, newProp: val }</code>. Methods are functions inside objects.`,
        task: "Create a student object with methods (greet, getGrade). Destructure its properties and display a profile card in HTML.",
        hints: ["Methods: { greet() { return ... } }", "Destructure: const { name, grade } = student", "Spread to copy: { ...student, updated: true }"],
        starterCode: `<!DOCTYPE html>\n<html>\n<body>\n  <div id="profile"></div>\n  <script>\n    const student = {\n      // Add properties: name, age, grade, courses[]\n      // Add methods: greet(), getLetterGrade()\n    };\n\n    // Destructure and display\n\n  </script>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("{") && code.includes("greet") && code.includes("const {")
      },
      {
        id: "js-7", title: "Fetch & APIs", xp: 280, order: 7,
        objective: "Fetch data from a public API and display it dynamically.",
        theory: `<strong>fetch()</strong> makes HTTP requests. It returns a Promise. Use <strong>async/await</strong> for clean syntax. Always handle errors with try/catch. Parse JSON with <strong>response.json()</strong>. APIs return data you can use to build dynamic UIs.`,
        task: "Fetch 5 random users from https://randomuser.me/api/?results=5 and display their photo, name, and email in cards.",
        hints: ["fetch() is async, always await it", "await response.json() parses the data", "Wrap in try/catch to handle errors"],
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { font-family: sans-serif; padding: 20px; background: #111; color: white; }\n  .users { display: flex; flex-wrap: wrap; gap: 16px; }\n  .user-card { background: #1e1e2e; padding: 20px; border-radius: 12px; text-align: center; width: 160px; }\n  .user-card img { border-radius: 50%; width: 80px; }\n  #loading { color: #00d4ff; }\n</style>\n</head>\n<body>\n  <h1>Random Users</h1>\n  <div id="loading">Loading...</div>\n  <div class="users" id="users"></div>\n  <script>\n    async function fetchUsers() {\n      // Fetch and display users here\n\n    }\n\n    fetchUsers();\n  </script>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("fetch(") && code.includes("await") && code.includes(".json()")
      },
      {
        id: "js-8", title: "Local Storage", xp: 220, order: 8,
        objective: "Persist data in the browser with localStorage.",
        theory: `<strong>localStorage</strong> stores data that survives page refreshes. Methods: <strong>setItem(key, value)</strong>, <strong>getItem(key)</strong>, <strong>removeItem(key)</strong>, <strong>clear()</strong>. Always JSON.stringify() objects before saving, JSON.parse() when reading.`,
        task: "Build a notes app: textarea + save button. Notes persist after refresh. Show a list of saved notes with delete buttons.",
        hints: ["JSON.stringify() converts objects to strings", "JSON.parse() converts strings back to objects", "Load saved notes on page load with DOMContentLoaded"],
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { font-family: sans-serif; padding: 20px; max-width: 500px; }\n  textarea { width: 100%; height: 100px; margin-bottom: 8px; padding: 12px; }\n  .note { background: #f5f5f5; padding: 12px; margin: 8px 0; border-radius: 8px; display: flex; justify-content: space-between; }\n</style>\n</head>\n<body>\n  <h2>My Notes</h2>\n  <textarea id="noteInput" placeholder="Write a note..."></textarea>\n  <button id="saveBtn">Save Note</button>\n  <div id="notesList"></div>\n  <script>\n    // Implement notes with localStorage\n\n  </script>\n</body>\n</html>`,
        solutionCheck: (code) => code.includes("localStorage") && code.includes("JSON.stringify") && code.includes("JSON.parse")
      }
    ]
  }
};

export const TRACKS = ["html", "css", "js"];
export const TRACK_ORDER = { html: 0, css: 1, js: 2 };

export function getTotalXP() {
  return Object.values(CURRICULUM).flatMap(t => t.levels).reduce((a, l) => a + l.xp, 0);
}

export function getLevelById(id) {
  for (const track of Object.values(CURRICULUM)) {
    const level = track.levels.find(l => l.id === id);
    if (level) return level;
  }
  return null;
}

export function getNextLesson(completedLessons) {
  for (const track of TRACKS) {
    for (const level of CURRICULUM[track].levels) {
      if (!completedLessons.includes(level.id)) return level;
    }
  }
  return null;
}

export function getTrackProgress(track, completedLessons) {
  const levels = CURRICULUM[track].levels;
  const done = levels.filter(l => completedLessons.includes(l.id)).length;
  return { done, total: levels.length, pct: Math.round((done / levels.length) * 100) };
}
