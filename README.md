# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Monument Refactor (React)


## Overview

#### What is this lab?

Today we're going to modernize a magazine website using a modern front-end library: React!

**The objective of this lab is to:**

* Refactor a static html site to use a component-based approach
* Familiarize yourself with React's filesystem and architecture on your terms
* Create reusable, robust codebase that will serve as a boilerplate for other work
* Continually grow the *Monument* brand until you are sick of light-blue branding styles


## Refactor!

**Suggested implementation**
1. Create a React application in this repository, preferably in a new folder.
2. Move *all* of your `html` content (minus the `head` tag) into a new component.
3. Copy images into your `public` folder. 
4. You may overwrite the `index.css` with the original *Monument* css.
5. Logically separate different pieces of the *Monument* html into smaller components.  


**Suggested components for `index.html`:**
   
    - NavBar
    - Landing
      - Header
      - Archive
        - Article
        - Article
        - Article
      - About
      - Gallery
      - Contact
    - Footer

**Suggested components for `blog.html`:**
   
    - NavBar
    - Blog
      - Header
      - Article
      - Sidebar
      - Comment
    - Footer

Keep components as large as possible until you begin to see opportunities to capitalize on repetition or obvious semantic separations, such as articles, sections, header/main/footer, etc. This will keep your workflow comprehensive and straightforward.  One early but major pitfall of React development is the tendency to prematurely optimize components to their smallest kernels. Taking the time to work incrementally ensures consistent code.
