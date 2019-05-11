class Sprite {
    constructor(x, y, texture) {
        this.texture = new Image();
        this.texture.src = texture;
        
        this.x = x;
        this.y = y;

        this.width = this.texture.width;
        this.height = this.texture.height;

        this.angle = 0;

        this.scale = {x: 1, y: 1};

        this.anchor = {x: 0.5, y: 0.5};

        this.alpha = 1;

        this.visible = true;
    }

    setTexture(t) {
        this.texture = new Image();
        this.texture.src = t;

        return this;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;

        return this;
    }

    setSize(w, h) {
        this.width = w;
        this.height = h;

        return this;
    }

    setAngle(a) {
        this.angle = a;

        return this;
    }

    setScale(x, y) {
        this.scale.x = x;
        this.scale.y = y;

        return this;
    }

    setAnchor(x, y) {
        this.anchor.x = x;
        this.anchor.y = y;

        return this;
    }

    setAlpha(a) {
        this.alpha = a;

        return this;
    }

    setVisible(v) {
        this.visible = v;

        return this;
    }
}