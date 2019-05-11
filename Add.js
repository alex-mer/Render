class Add {
    constructor(context) {
        this._context = context;

        this.renderObjects = [];
    }

    sprite(x, y, texture) {
        let sprite = new Sprite(x, y, texture);
        this.renderObjects.push(sprite);

        return sprite;
    }
}