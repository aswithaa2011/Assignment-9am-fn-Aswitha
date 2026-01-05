
// What is react?
// React is a JavaScript library for building user interfaces.

// React is used to build single-page applications.

// React allows us to create reusable UI components.


//    ------------------------------------------------------  //

//List 3 advantages of React

//1. Reusable Pieces (Components)
// Imagine you need a "Like" button on ten different pages. In the old way, you might have to copy and paste the code ten times.

// With React, you build the button once as a "component."

// You can then drop that same button anywhere you need it.

// If you want to change the color from blue to red, you only have to change it in one place, and it updates everywhere automatically.

// 2. Reusable and Maintainable Code

// Components can be reused across projects.

// Reduces code duplication and increases consistency.

// 3. It’s Very Fast
// Usually, when a website changes (like when you post a comment), the browser has to "refresh" or rethink the whole page, which can be slow.

// React is smart. It keeps a "hidden map" of the page.

// When something changes, it only updates the tiny part that actually moved.

// This makes the website feel snappy and instant, rather than laggy.


// SPA: Single Page Application

// A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the 
// content as the user interacts with the app, without reloading the entire page.
/**
 * ============================================================================
 * REACT JS VS. VANILLA JAVASCRIPT: THE COMPLETE OVERVIEW
 * ============================================================================
 * * | FEATURE          | JAVASCRIPT (VANILLA JS)      | REACT JS (LIBRARY)             |
 * |------------------|------------------------------|--------------------------------|
 * | Definition       | The core language (Bricks)   | The toolkit (Building Kit)     |
 * | Core Strength    | Total control over logic     | Fast, organized UI building    |
 * | Architecture     | Script-based (One long file) | Component-based (Lego blocks)  |
 * | Performance      | Slower (Updates Real DOM)    | Faster (Uses Virtual DOM)      |
 * | Reusability      | Hard (Copy-paste code)       | Easy (Reusable components)     |
 * | Learning Curve   | Must learn this first        | Learn after mastering JS       |
 * | Maintenance      | Difficult for large apps     | Simple for large apps          |
 * * ============================================================================
 * THREE MAIN ADVANTAGES OF REACT (IN SIMPLE WORDS)
 * ============================================================================
 * * 1. LEGO BRICKS (Components): 
 * Build a button once and use it everywhere. Change it once, and it updates 
 * everywhere automatically.
 * * 2. SUPER SPEED (Virtual DOM): 
 * React only refreshes the tiny part of the page that changed, instead of 
 * reloading everything. It feels "snappy."
 * * 3. HUGE COMMUNITY: 
 * Tons of pre-made parts you can download for free, and lots of people 
 * online to help you if you get stuck.
 * * ============================================================================
 */


// Virtual DOM (VDOM)

// The Virtual DOM is a concept used by libraries like React to improve performance and make UI updates more efficient.
// The Virtual DOM is a lightweight copy of the real DOM that lives in memory.

// When the UI changes, React updates the Virtual DOM first.

// Then, it compares the Virtual DOM with the real DOM to find the differences (a process called diffing).

// Finally, it updates only the parts of the real DOM that actually changed, instead of re-rendering the whole page.


// Components in React 

//components is a reusable piece of UI return as js function that returns JSX


//                 App
//                  │
//      ┌───────────┼───────────┐
//      │           │           │
//    Header       Main       Footer
//      │            │
//  ┌───┴───┐    ┌───┴───────────┐
//  │       │    │               │
// Logo    Nav  Sidebar        Content
//                                 │
//                         ┌───────┴────────┐
//                         │                │
//                       Post            Comment

// App → Root component

// Header, Main, Footer → Direct children of App

// Content → Nested inside Main

// Post & Comment → Children of Content