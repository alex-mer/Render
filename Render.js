class Render {
    constructor(id, w, h) {
        this.WIDTH = w;
        this.HEIGHT = h;
        
        this.createCanvas(id);

        this.add = new Add(this.context);
        
        this.run();
    }

    createCanvas(id) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.WIDTH;
        this.canvas.height = this.HEIGHT;

        this.context = this.canvas.getContext('2d');

        this.container = document.getElementById(id);
        this.container.appendChild(this.canvas);
    }

    run() {
        requestAnimationFrame(dt => {
            this._update(dt);
            this._render(dt);

            requestAnimationFrame(dt => this.run(dt));
        });
    }

    _update(dt) {

    }

    _render(dt) {
        this.context.clearRect(0, 0, this.WIDTH, this.HEIGHT);
        this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT);

        for (const obj of this.add.renderObjects) {
            if (obj.visible) {
                this.context.globalAlpha = obj.alpha;

                const width = obj.width * obj.scale.x;
                const height = obj.height * obj.scale.y;
                
                this.context.save();
                this.context.translate(obj.x, obj.y);
                this.context.rotate( RMath.angleToRadian(obj.angle) );
                this.context.translate(-width * obj.anchor.x, -height * obj.anchor.y);
                this.context.drawImage(obj.texture, 0, 0, width, height);
                this.context.restore();
            }
        }

        this.context.globalAlpha = 1;
    }
}