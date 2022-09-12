const html = `
<div id="stopwatch">
  <button></button>
  <div id="caption">
    <slot />
  </div>
</div>
`;

const htmlTemplate = document.createElement('template');
htmlTemplate.innerHTML = html;

export default htmlTemplate;
