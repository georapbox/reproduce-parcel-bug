class MyCounter extends HTMLElement {
  #count = 0;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = /* html */`
      <button id="add">Add</button>
      <button id="substract">Substract</button>
      <div id="result">0</div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#add').addEventListener('click', this.#add);
    this.shadowRoot.querySelector('#substract').addEventListener('click', this.#substract);

    this.#render();
  }

  #add = () => {
    this.#count++;
    this.#render();
  }

  #substract = () => {
    this.#count--;
    this.#render();
  }

  #render() {
    this.shadowRoot.querySelector('#result').textContent = this.#count;
  }

  static define(elementName = 'my-counter') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, MyCounter);
    }
  }
}

export { MyCounter };