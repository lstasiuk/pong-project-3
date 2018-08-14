import { SVG_NS } from '../settings';


export default class Score {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    render(svg, winner) {
        // try using svg text element, take a look at other render methods e.g. paddle for ideas as well as google for svg text elements

        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'font-family', 'Silkscreen Web');
        text.setAttributeNS(null, 'fill', 'white');
        text.setAttributeNS(null, 'font-size', 'this.size');
        text.textContent = winner;
        svg.appendChild(text);

    }
}