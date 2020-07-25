class Bar2 extends Foo {
  static content() {
    return this.builder`
      <span>This is bar2</span>
    `;
  }
}

window.$app.addView("bar2", Bar2);
