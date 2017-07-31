function Carousel(obj) {
    this.activePage = 0;
    this.wrap = obj.wrap || document.body;
    this.wrapWidth = this.wrap.offsetWidth;
    this.init(obj.urlArr);
}

Carousel.prototype = {
    constructor: Carousel,
    init: function(urlArr) {
        this.wrap.innerHTML = '<span id="pre" class="fa fa-angle-left fa-5x"></span><span id="next" class="fa fa-angle-right fa-5x"></span><ul id="page"></ul><div id="container"></div>';
        let container = document.getElementById("container");
        let page = document.getElementById("page");
        container.style.width = this.wrapWidth + "px";
        container.innerHTML += '<div class="img-item"><img src="' + urlArr[urlArr.length-1] + '"></div>';
        for (let value of urlArr) {
            container.style.width = parseInt(container.style.width, 10) + this.wrapWidth + "px";
            container.innerHTML += '<div class="img-item"><img src="' + value + '"></div>';
            page.innerHTML += '<li class="pagination"></li>';
        }
        container.style.left = '-' + this.wrapWidth + 'px';
        this.pageActiveColor();
        this.bindEvent();
    },
    pageActiveColor: function() {
        document.getElementsByClassName("pagination")[this.activePage].id = "active";
    },
    bindEvent: function() {
        let preAngle = document.getElementById("pre");
        let nextAngle = document.getElementById("next");
        preAngle.addEventListener("click",this.leftAngleclick.bind(this));
        console.log(this);
        nextAngle.addEventListener("click",this.rightAngleclick.bind(this));
    },
    leftAngleclick: function() {
        let container = document.getElementById("container");
        this.activePage--;
        container.style.left = -1000 * (this.activePage + 1) + "px";
        console.log(container.style.left);
    },
    rightAngleclick: function() {
        let container = document.getElementById("container");
        let timeNumber = setInterval(function () {
            container.style.left++;
        }, 10);
        if (container.style.left == -1000 * (active + 1))
        clearInterval(timeNumber);
    }

}