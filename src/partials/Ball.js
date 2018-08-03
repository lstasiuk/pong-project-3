import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
            this.radius = radius;
            this.boardWidth = boardWidth;
            this.boardHeight = boardHeight;
            this.direction = 1;
            this.reset();
        }
        // this resets the ball ideally after a player scores a goal
    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
    }

    render(svg) {
        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'fill', 'white');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        svg.appendChild(circle);
    }
}