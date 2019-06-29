---
title: 'Installation'
summary: 'A step-by-step guide of how to include v-drag in your project and how to start using it.'
---

## Requisites

...

## Install

There are two different ways to install v-drag in your project. [A package manager](#package-manager) is more optimal if you are working with Node, whereas [a &lt;script&gt; tag](#script-tag) is better fro browser-based projects.

### Package manager

The easiest and quickest method to download v-drag into a Node project is a package manager. npm, included by default with Node, and Yarn are the most popular options. Open Terminal and run the command from the package manager you prefer:

```sh
yarn add v-drag
```

```sh
install v-drag --save
```

Then import v-drag into your project’s main file, or any other file you are planning to use it. You can use either `import` or `require`, although the first one is most recommended as it’s part of the ES6 spec:

```js
import vdrag from 'v-drag';
```

```js
const vdrag = require('v-drag');
```

Finally, in the same JS file as the code above, call the directive:

```js
Vue.use(vdrag);
```

::: warning Warning: Vue is not defined
Depending on the file you have imported v-drag into, you might get an error saying that Vue is not defined. In such case, import Vue into the same file using the line `import Vue from 'vue` or `const Vue = require('vue')`.
:::

### &lt;script&gt; tag

Another method of installation, this one more suited for browser-based projects, is importing v-drag using HTML’s `script` tag. Download v-drag’s source code directly from GitHub:

+ [Uncompressed](https://raw.githubusercontent.com/nil/v-drag/master/dist/browser.js)
+ [Minified](https://raw.githubusercontent.com/nil/v-drag/master/dist/browser.js)

v-drag is also available on [unpkg](https://unpkg.com/v-drag):

```html
<script src="https://unpkg.com/v-drag"></script>
```

## Usage

You have now completed v-drag’s installation. However, there is no element that by default is draggable. To allow the drag interaction, v-drag uses a custom directive. Add the `v-drag` attribute to the element you want to make draggable:

```vue
<div v-drag>Drag me!</div>
```

<DemoContainer id="installation-01">
  <div class="drag" v-drag>Drag me!</div>
</DemoContainer>

As it can be appreciated in the above demo, this code will provide a basic dragging interaction to the element. View [all the options](/options) there are available to customize its behavior.