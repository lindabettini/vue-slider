console.log('VUE OK', Vue);

Vue.config.devtools = true; 

const app = new Vue ({
    el: '#root',
    data: {
        autoplay: undefined, 
        isAutoplay: false,
        autoplayButton: {
            className: 'btn-primary', 
            text: 'Play'
        },
        currentIndex: 0,    
        images: [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        ]
    },
    methods: {
        isActive(index) {
            return index === this.currentIndex;
        }, 

        setPic(index) {
            this.currentIndex = index; 
        }, 

        prevPic() {
            if (this.currentIndex === 0) this.currentIndex = this.images.length - 1; 
            else this.currentIndex--;
        },

        nextPic() {
            if (this.currentIndex === this.images.length - 1) this.currentIndex = 0; 
            else this.currentIndex++;
        },

        // & AUTOPLAY
        startAutoplay() {
            this.autoplay = setInterval(this.nextPic, 3000);
            this.isAutoplay = true;
        }, 

        stopAutoplay() {
            clearInterval(this.autoplay);
            this.isAutoplay = false;
        },

        toggleAutoplay(){
            this.isAutoplay ? this.stopAutoplay() : this.startAutoplay();
        }
    }
})