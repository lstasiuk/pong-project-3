import { SVG_NS } from '../settings';


export default class Paddle {

    constructor(boardHeight, width, height, x, y, up, down, player) {
            this.boardHeight = boardHeight;
            this.width = width;
            this.height = height;
            this.x = x;
            this.y = y;
            this.speed = 10;
            this.score = 0;
            this.name = player;


            document.addEventListener("keydown", event => {
                switch (event.key) {
                    case up:
                        this.up();
                        break;
                    case down:
                        this.down();
                        break;
                }
            });


        }
        // end of constructor
    up() {
        this.y = Math.max(5, this.y - this.speed);
    }
    down() {
        this.y = Math.min(195, this.y + this.speed);
    }


    coordinates(x, y, width, height) {
        let leftX = x;
        let rightX = x + width;
        let topY = y;
        let bottomY = y + height;
        return [leftX, rightX, topY, bottomY];
    }

    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'white');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);
        svg.appendChild(rect);
    }
}