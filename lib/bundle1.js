import { html, render } from "lit-html";

class App {
  constructor() {
    this.views = {};
  }

  addView(name, cls) {
    this.views[name] = cls;
  }

  getView(name) {
    return this.views[name];
  }
}

class Foo {
  static get builder() {
    return html;
  }
}

class Bar1 extends Foo {
  static content() {
    return this.builder`
      <span>This is bar1</span>
    `;
  }
}

window.$app = new App();
window.$app.addView("bar1", Bar1);

document.addEventListener("DOMContentLoaded", ev => {
  console.log("Loading content");
  render(window.$app.getView("bar1").content, document.getElementById("view1"));
  render(window.$app.getView("bar2").content, document.getElementById("view2"));
});
