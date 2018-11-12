import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import { create } from './create';

const dom = new JSDOM(`<ul>
  <li id="1">
    Item
    <span>
      (Span) 1
    </span>
    <div>
      This is a div
    </div>
    <p>
      This is a paragraph
    </p>
    <a href="#">Anchor 1</a>
    <ol>
      <li id="1-1"><a href="#">Anchor 1.1</a></li>
      <li id="1-2">Text: <a href="#">Anchor 1.2</a></li>
      <li id="1-3"><span>Span: <a href="#">Anchor 1.3</a></span></li>
    </ol>
  </li>
  <li id="2">
    Item 2
    <menu>
      <li>Menu item? (li)</li>
    </menu>
    <menu>
      <menuitem>Menu item? (menuitem)</menuitem>
    </menu>
  </li>
  <li id="3">
    Item <em>*3*</em>
  </li>
  <li id="4">
    <!-- Take all text here as the same level? Is there intended nesting here? -->
    <div>
      Item
      <p>(P) 4</p>
    </div>
  </li>
  <li id="5">
    .nesting
    <ul>
      <li>
        ..nesting
        <ol>
          <li>...nesting</li>
          <li>...nesting</li>
        </ol>
      </li>
    </ul>
  </li>
</ul>`);
create(dom.window.document.body);
