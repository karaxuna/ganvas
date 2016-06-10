class Parent {
    constructor(children = []) {
        this.children = [];
        children.forEach((child) => this.addChild(child));
    }
    
    addChild(child, index) {
        if (this.children.indexOf(child) !== -1) {
            throw 'Failed to add child because it already exists!';
        }
        
        this.children.splice(index !== undefined ? index : this.children.length - 1, 0, child);
        child.parent = this;
        return this;
    }
    
    removeChild(child) {
        var index = this.children.indexOf(child);
        
        if (index === -1) {
            throw 'Failed to remove child because it was not found!';
        }
        
        this.children.splice(index, 1);
        child.parent = null;
        return this;
    }
}

module.exports = Parent;
