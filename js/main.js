class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="avg-volume__progress-bar progress-bar progress-bar--right">
        <div class="progress-bar__label">Residual 220ml</div>
        <div class="progress-bar__bar">
          <span class="progress-bar__stripe" style="width: 70%"></span>
        </div>
        <div class="progress-bar__degrees">
          <span class="progress-bar__degree"></span>
          <span class="progress-bar__degree"></span>
          <span class="progress-bar__degree"></span>
          <span class="progress-bar__degree"></span>
          <span class="progress-bar__degree"></span>
          <span class="progress-bar__degree"></span>
          <span class="progress-bar__degree"></span>
          <span class="progress-bar__degree"></span>
          <span class="progress-bar__degree"></span>
        </div>
        <div class="progress-bar__label progress-bar__label--min">150ml min</div>
        <div class="progress-bar__label progress-bar__label--max">500ml max</div>
        <div class="clearfix"></div>
      </div>
    `;
  }
}

customElements.define('progress-bar-right', MyComponent);
