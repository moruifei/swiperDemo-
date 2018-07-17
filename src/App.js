import React, { Component } from 'react';
import './App.css';
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'
import a from './images/1.jpg';
import b from './images/2.jpg';
import c from './images/3.jpg';
import d from './images/4.jpg';
import e from './images/5.png';
import f from './images/6.jpg';
import g from './images/7.jpeg';
import h from './images/8.jpg';
import i from './images/9.jpg';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        if ($('.swiper-container').length > 0) {
            var num = $('.gallery-top').find('.swiper-slide').length;
            if (num > 3) {
                var galleryTop = new Swiper('.gallery-top', {
                    autoplay:1000,
                    loop: true,
                    loopedSlides: num,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
                var galleryThumbs = new Swiper('.gallery-thumbs', {
                    slidesPerView: 4,
                    loop: true,
                    loopedSlides: num,
                    //centeredSlides: true,
                    slideToClickedSlide: true,
                });
            } else {
                var galleryTop = new Swiper('.gallery-top', {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
                var galleryThumbs = new Swiper('.gallery-thumbs', {
                    //centeredSlides: true,
                    slidesPerView: 'auto',
                    slideToClickedSlide: true,
                });
            }
            galleryTop.controller.control = galleryThumbs;
            galleryThumbs.controller.control = galleryTop;
        };
    }
    componentDidUpdate() {

    }
    render() {
        return (
            <div className="App">
                <div className="swiper-container gallery-top">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={a} alt=" " /></div>
                        <div className="swiper-slide"><img src={b} alt=" " /></div>
                        <div className="swiper-slide"><img src={c} alt=" " /></div>
                        <div className="swiper-slide"><img src={d} alt=" " /></div>
                        <div className="swiper-slide"><img src={e} alt=" " /></div>
                        <div className="swiper-slide"><img src={f} alt=" " /></div>
                        <div className="swiper-slide"><img src={g} alt=" " /></div>
                        <div className="swiper-slide"><img src={i} alt=" " /></div>
                    </div>
                    <div className="swiper-button-next swiper-button-white"></div>
                    <div className="swiper-button-prev swiper-button-white"></div>
                </div>
                <div className="swiper-container gallery-thumbs">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src={a} alt=" " /></div>
                        <div className="swiper-slide"><img src={b} alt=" " /></div>
                        <div className="swiper-slide"><img src={c} alt=" " /></div>
                        <div className="swiper-slide"><img src={d} alt=" " /></div>
                        <div className="swiper-slide"><img src={e} alt=" " /></div>
                        <div className="swiper-slide"><img src={f} alt=" " /></div>
                        <div className="swiper-slide"><img src={g} alt=" " /></div>
                        <div className="swiper-slide"><img src={i} alt=" " /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
