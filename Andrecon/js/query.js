function query(className) {
    return new Query([...document.getElementsByClassName(className)]);
}

class Query {
    constructor(items = []) {
        this.items = items;
    }

    callEvery(callback) {
        for (let i = 0; i < this.getLength(); i++) {
            if (callback(this.items[i], i) == false) { return false; }
        }

        return true;
    }

    callFirst(callback) {
        if (this.getLength() > 0) {
            return callback(this.items[0]);
        }

        return undefined;
    }

    findChild(className) {
        var items = [];

        this.callEvery(
            function(element) {
                items = items.concat([...element.getElementsByClassName(className)]);
            }
        );

        return new Query(items);
    }

    filter(callback) {
        return new Query(this.items.filter(callback));
    }

    attachEvent(eventType, callback) {
        this.callEvery(
            function(element) {
                element.addEventListener(eventType, callback);
            }
        );
    }

    removeEvent(eventType, callback) {
        this.callEvery(
            function(element) {
                element.removeEventListener(eventType, callback);
            }
        );
    }

    addClass(className) {
        this.callEvery(
            function(element) {
                element.classList.add(className);
            }
        );
    }

    removeClass(className) {
        this.callEvery(
            function(element) {
                element.classList.remove(className);
            }
        );
    }

    toggleClass(className) {
        this.callEvery(
            function(element) {
                element.classList.toggle(className);
            }
        );
    }

    getLength() {
        return this.items.length;
    }

    setStyle(styleMap) {
        let keys = Object.keys(styleMap);

        for (let i = 0; i < keys.length; i++) {
            this.callEvery(
                function(element) { element.style[keys[i]] = styleMap[keys[i]]; }
            );
        }
    }

    setAttribute(key, value) {
        this.callEvery(element => element.setAttribute(key, value));
    }
}