import React, { useEffect } from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

const loadStylesheets = (links) => {
    const linkElements = links.map(link => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = link.href;
        linkElement.media = link.media;
        return linkElement;
    });

    linkElements.forEach(linkElement => {
        document.head.appendChild(linkElement);
    });

    return () => {
        linkElements.forEach(linkElement => {
            document.head.removeChild(linkElement);
        });
    };
};

export default function Header() {

    useEffect(() => {
        const cleanup = loadStylesheets([
            { href: 'https://fonts.googleapis.com/css?family=Roboto:400%7CManrope:400%2C700&display=swap' },
            { href: 'https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-671.css?ver=1661932588', media: 'all' },
            { href: 'https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-705.css?ver=1661932588', media: 'all' },
            { href: 'https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2483.css?ver=1661932589', media: 'all' },
            { href: 'https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2492.css?ver=1661932589', media: 'all' },
            { href: 'https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2498.css?ver=1661932589', media: 'all' },
            { href: 'https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2504.css?ver=1661932589', media: 'all' },
            { href: 'https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.7.3', media: 'all' },
            { href: 'https://demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/css/rs6.css?ver=6.5.31', media: 'all' },
        ]);

        return cleanup;
    }, []);



    return (
        <header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
            <p class="main-title bhf-hidden" itemprop="headline"><a href="https://demo2.themelexus.com/delicioz"
                title="Delicioz" rel="home">Delicioz</a></p>
            <div data-elementor-type="wp-post" data-elementor-id="84" class="elementor elementor-84">
                <div class="elementor-section elementor-top-section elementor-element elementor-element-8482736 elementor-section-content-middle elementor-section-stretched header-absolute elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="8482736" data-element_type="section"
                    data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                    <div class="elementor-container elementor-column-gap-no">
                        <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e890c86"
                            data-id="e890c86" data-element_type="column"
                            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                            <div class="elementor-widget-wrap elementor-element-populated">
                                <div class="elementor-element elementor-element-a97701c elementor-widget elementor-widget-site-logo"
                                    data-id="a97701c" data-element_type="widget" data-widget_type="site-logo.default">
                                    <div class="elementor-widget-container">
                                        <div class="hfe-site-logo">
                                            <a data-elementor-open-lightbox class="elementor-clickable"
                                                href="https://demo2.themelexus.com/delicioz">
                                                <div class="hfe-site-logo-set">
                                                    <div class="hfe-site-logo-container">
                                                        <img class="hfe-site-logo-img elementor-animation-"
                                                            src="https://kenton.vaghaar.co.uk/wp-content/uploads/2022/07/Vaghaar-Logo-H-1-1.png"
                                                            alt />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ab72718"
                            data-id="ab72718" data-element_type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                                <div class="elementor-element elementor-element-f19d126 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-delicioz-nav-menu"
                                    data-id="f19d126" data-element_type="widget"
                                    data-widget_type="delicioz-nav-menu.default">
                                    <div class="elementor-widget-container">
                                        <div class="elementor-nav-menu-wrapper">
                                            <nav class="main-navigation" role="navigation"
                                                aria-label="Primary Navigation">
                                                <div class="primary-navigation">
                                                    <ul id="menu-1-f19d126" class="menu">
                                                        <li id="menu-item-58"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-20 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-58 has-mega-menu has-stretchwidth">
                                                            <a href="#"><span
                                                                class="menu-title"><Link to="/home">Home</Link></span></a>
                                                            {/* <ul class="sub-menu mega-menu mega-stretchwidth">
                                                                <li class="mega-menu-item">
                                                                    <div data-elementor-type="page"
                                                                        data-elementor-id="671"
                                                                        class="elementor elementor-671">
                                                                        <div class="elementor-section elementor-top-section elementor-element elementor-element-2ebe1ba0 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                            data-id="2ebe1ba0"
                                                                            data-element_type="section"
                                                                            data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                                                            <div
                                                                                class="elementor-container elementor-column-gap-no">
                                                                                <div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-20abfc4d"
                                                                                    data-id="20abfc4d"
                                                                                    data-element_type="column">
                                                                                    <div
                                                                                        class="elementor-widget-wrap elementor-element-populated">
                                                                                        <div class="elementor-element elementor-element-29fbefba image-style-delicioz-yes elementor-widget elementor-widget-image"
                                                                                            data-id="29fbefba"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="image.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <a
                                                                                                    href="https://demo2.themelexus.com/delicioz/">
                                                                                                    <img width="242"
                                                                                                        height="280"
                                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/megamenu_home-1-2.jpg"
                                                                                                        class="attachment-full size-full"
                                                                                                        alt
                                                                                                        loading="lazy" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="elementor-element elementor-element-7da49b5d elementor-align-center elementor-button-link elementor-widget elementor-widget-button"
                                                                                            data-id="7da49b5d"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="button.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <div
                                                                                                    class="elementor-button-wrapper">
                                                                                                    <a href="https://demo2.themelexus.com/delicioz/"
                                                                                                        class="elementor-button-link elementor-button elementor-size-sm"
                                                                                                        role="button">
                                                                                                        <span
                                                                                                            class="elementor-button-content-wrapper">
                                                                                                            <span
                                                                                                                class="elementor-button-text">Homepage
                                                                                                                01</span>
                                                                                                        </span>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-17448c6"
                                                                                    data-id="17448c6"
                                                                                    data-element_type="column">
                                                                                    <div
                                                                                        class="elementor-widget-wrap elementor-element-populated">
                                                                                        <div class="elementor-element elementor-element-524921db image-style-delicioz-yes elementor-widget elementor-widget-image"
                                                                                            data-id="524921db"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="image.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <a
                                                                                                    href="https://demo2.themelexus.com/delicioz/home-2/">
                                                                                                    <img width="242"
                                                                                                        height="280"
                                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/megamenu_home-2.jpg"
                                                                                                        class="attachment-full size-full"
                                                                                                        alt
                                                                                                        loading="lazy" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="elementor-element elementor-element-45abb5b3 elementor-align-center elementor-button-link elementor-widget elementor-widget-button"
                                                                                            data-id="45abb5b3"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="button.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <div
                                                                                                    class="elementor-button-wrapper">
                                                                                                    <a href="https://demo2.themelexus.com/delicioz/home-2/"
                                                                                                        class="elementor-button-link elementor-button elementor-size-sm"
                                                                                                        role="button">
                                                                                                        <span
                                                                                                            class="elementor-button-content-wrapper">
                                                                                                            <span
                                                                                                                class="elementor-button-text">Homepage
                                                                                                                02</span>
                                                                                                        </span>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-2421fb4f"
                                                                                    data-id="2421fb4f"
                                                                                    data-element_type="column">
                                                                                    <div
                                                                                        class="elementor-widget-wrap elementor-element-populated">
                                                                                        <div class="elementor-element elementor-element-4a9e54bd image-style-delicioz-yes elementor-widget elementor-widget-image"
                                                                                            data-id="4a9e54bd"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="image.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <a
                                                                                                    href="https://demo2.themelexus.com/delicioz/home-3/">
                                                                                                    <img width="242"
                                                                                                        height="280"
                                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/megamenu_home-3.jpg"
                                                                                                        class="attachment-full size-full"
                                                                                                        alt
                                                                                                        loading="lazy" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="elementor-element elementor-element-41569e16 elementor-align-center elementor-button-link elementor-widget elementor-widget-button"
                                                                                            data-id="41569e16"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="button.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <div
                                                                                                    class="elementor-button-wrapper">
                                                                                                    <a href="https://demo2.themelexus.com/delicioz/home-3/"
                                                                                                        class="elementor-button-link elementor-button elementor-size-sm"
                                                                                                        role="button">
                                                                                                        <span
                                                                                                            class="elementor-button-content-wrapper">
                                                                                                            <span
                                                                                                                class="elementor-button-text">Homepage
                                                                                                                03</span>
                                                                                                        </span>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-7e891abb"
                                                                                    data-id="7e891abb"
                                                                                    data-element_type="column">
                                                                                    <div
                                                                                        class="elementor-widget-wrap elementor-element-populated">
                                                                                        <div class="elementor-element elementor-element-21182a21 image-style-delicioz-yes elementor-widget elementor-widget-image"
                                                                                            data-id="21182a21"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="image.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <a
                                                                                                    href="https://demo2.themelexus.com/delicioz/home-4/">
                                                                                                    <img width="242"
                                                                                                        height="280"
                                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/megamenu_home-4.jpg"
                                                                                                        class="attachment-full size-full"
                                                                                                        alt
                                                                                                        loading="lazy" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="elementor-element elementor-element-5571447 elementor-align-center elementor-button-link elementor-widget elementor-widget-button"
                                                                                            data-id="5571447"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="button.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <div
                                                                                                    class="elementor-button-wrapper">
                                                                                                    <a href="https://demo2.themelexus.com/delicioz/home-4/"
                                                                                                        class="elementor-button-link elementor-button elementor-size-sm"
                                                                                                        role="button">
                                                                                                        <span
                                                                                                            class="elementor-button-content-wrapper">
                                                                                                            <span
                                                                                                                class="elementor-button-text">Homepage
                                                                                                                04</span>
                                                                                                        </span>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-3bf6e6b2"
                                                                                    data-id="3bf6e6b2"
                                                                                    data-element_type="column">
                                                                                    <div
                                                                                        class="elementor-widget-wrap elementor-element-populated">
                                                                                        <div class="elementor-element elementor-element-17437caa image-style-delicioz-yes elementor-widget elementor-widget-image"
                                                                                            data-id="17437caa"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="image.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <a
                                                                                                    href="https://demo2.themelexus.com/delicioz/home-5/">
                                                                                                    <img width="242"
                                                                                                        height="280"
                                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/megamenu_home-5.jpg"
                                                                                                        class="attachment-full size-full"
                                                                                                        alt
                                                                                                        loading="lazy" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="elementor-element elementor-element-44e223f2 elementor-align-center elementor-button-link elementor-widget elementor-widget-button"
                                                                                            data-id="44e223f2"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="button.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <div
                                                                                                    class="elementor-button-wrapper">
                                                                                                    <a href="https://demo2.themelexus.com/delicioz/home-5/"
                                                                                                        class="elementor-button-link elementor-button elementor-size-sm"
                                                                                                        role="button">
                                                                                                        <span
                                                                                                            class="elementor-button-content-wrapper">
                                                                                                            <span
                                                                                                                class="elementor-button-text">Homepage
                                                                                                                05</span>
                                                                                                        </span>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul> */}
                                                        </li>
                                                        <li id="menu-item-66"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-66">
                                                            <a href=""><span
                                                                class="menu-title"><Link to="/about">About</Link></span></a>
                                                            {/* <ul class="sub-menu">
                                                                <li id="menu-item-67"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-67">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/about-us-1/"><span
                                                                            class="menu-title">About us 1</span></a>
                                                                </li>
                                                                <li id="menu-item-65"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-65">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/about-us-2/"><span
                                                                            class="menu-title">About us 2</span></a>
                                                                </li>
                                                            </ul> */}
                                                        </li>
                                                        <li id="menu-item-64"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-64 has-mega-menu has-stretchwidth">
                                                            <a
                                                                href="#"><span
                                                                    class="menu-title"><Link to="/menu">Menu</Link></span></a>
                                                            {/* <ul class="sub-menu mega-menu mega-stretchwidth">
                                                                <li class="mega-menu-item">
                                                                    <div data-elementor-type="page"
                                                                        data-elementor-id="705"
                                                                        class="elementor elementor-705">
                                                                        <div class="elementor-section elementor-top-section elementor-element elementor-element-8308cc2 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                            data-id="8308cc2"
                                                                            data-element_type="section"
                                                                            data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                                                            <div
                                                                                class="elementor-container elementor-column-gap-no">
                                                                                <div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-412f26c7"
                                                                                    data-id="412f26c7"
                                                                                    data-element_type="column">
                                                                                    <div
                                                                                        class="elementor-widget-wrap elementor-element-populated">
                                                                                        <div class="elementor-element elementor-element-711441a2 image-style-delicioz-yes elementor-widget elementor-widget-image"
                                                                                            data-id="711441a2"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="image.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <a
                                                                                                    href="https://demo2.themelexus.com/delicioz/menu-list-01/">
                                                                                                    <img width="242"
                                                                                                        height="242"
                                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-1.jpg"
                                                                                                        class="attachment-full size-full"
                                                                                                        alt
                                                                                                        loading="lazy"
                                                                                                        srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-1.jpg 242w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-1-150x150.jpg 150w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-1-100x100.jpg 100w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-1-50x50.jpg 50w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-1-96x96.jpg 96w"
                                                                                                        sizes="(max-width: 242px) 100vw, 242px" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="elementor-element elementor-element-19203ac5 elementor-align-center elementor-button-link elementor-widget elementor-widget-button"
                                                                                            data-id="19203ac5"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="button.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <div
                                                                                                    class="elementor-button-wrapper">
                                                                                                    <a href="https://demo2.themelexus.com/delicioz/menu-list-01/"
                                                                                                        class="elementor-button-link elementor-button elementor-size-sm"
                                                                                                        role="button">
                                                                                                        <span
                                                                                                            class="elementor-button-content-wrapper">
                                                                                                            <span
                                                                                                                class="elementor-button-text">Menu
                                                                                                                List
                                                                                                                01</span>
                                                                                                        </span>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-1bb7add7"
                                                                                    data-id="1bb7add7"
                                                                                    data-element_type="column">
                                                                                    <div
                                                                                        class="elementor-widget-wrap elementor-element-populated">
                                                                                        <div class="elementor-element elementor-element-78cd9d6d image-style-delicioz-yes elementor-widget elementor-widget-image"
                                                                                            data-id="78cd9d6d"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="image.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <a
                                                                                                    href="https://demo2.themelexus.com/delicioz/menu-list-02/">
                                                                                                    <img width="242"
                                                                                                        height="242"
                                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-2.jpg"
                                                                                                        class="attachment-full size-full"
                                                                                                        alt
                                                                                                        loading="lazy"
                                                                                                        srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-2.jpg 242w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-2-150x150.jpg 150w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-2-100x100.jpg 100w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-2-50x50.jpg 50w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-2-96x96.jpg 96w"
                                                                                                        sizes="(max-width: 242px) 100vw, 242px" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="elementor-element elementor-element-66f8dfac elementor-align-center elementor-button-link elementor-widget elementor-widget-button"
                                                                                            data-id="66f8dfac"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="button.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <div
                                                                                                    class="elementor-button-wrapper">
                                                                                                    <a href="https://demo2.themelexus.com/delicioz/menu-list-02/"
                                                                                                        class="elementor-button-link elementor-button elementor-size-sm"
                                                                                                        role="button">
                                                                                                        <span
                                                                                                            class="elementor-button-content-wrapper">
                                                                                                            <span
                                                                                                                class="elementor-button-text">Menu
                                                                                                                List
                                                                                                                02</span>
                                                                                                        </span>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-1283da95"
                                                                                    data-id="1283da95"
                                                                                    data-element_type="column">
                                                                                    <div
                                                                                        class="elementor-widget-wrap elementor-element-populated">
                                                                                        <div class="elementor-element elementor-element-1d3acd1c image-style-delicioz-yes elementor-widget elementor-widget-image"
                                                                                            data-id="1d3acd1c"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="image.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <a
                                                                                                    href="https://demo2.themelexus.com/delicioz/menu-grid/">
                                                                                                    <img width="242"
                                                                                                        height="242"
                                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-3.jpg"
                                                                                                        class="attachment-full size-full"
                                                                                                        alt
                                                                                                        loading="lazy"
                                                                                                        srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-3.jpg 242w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-3-150x150.jpg 150w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-3-100x100.jpg 100w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-3-50x50.jpg 50w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-3-96x96.jpg 96w"
                                                                                                        sizes="(max-width: 242px) 100vw, 242px" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="elementor-element elementor-element-29eb3d89 elementor-align-center elementor-button-link elementor-widget elementor-widget-button"
                                                                                            data-id="29eb3d89"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="button.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <div
                                                                                                    class="elementor-button-wrapper">
                                                                                                    <a href="https://demo2.themelexus.com/delicioz/menu-grid/"
                                                                                                        class="elementor-button-link elementor-button elementor-size-sm"
                                                                                                        role="button">
                                                                                                        <span
                                                                                                            class="elementor-button-content-wrapper">
                                                                                                            <span
                                                                                                                class="elementor-button-text">Menu
                                                                                                                Grid</span>
                                                                                                        </span>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-52670eb5"
                                                                                    data-id="52670eb5"
                                                                                    data-element_type="column">
                                                                                    <div
                                                                                        class="elementor-widget-wrap elementor-element-populated">
                                                                                        <div class="elementor-element elementor-element-3559280d image-style-delicioz-yes elementor-widget elementor-widget-image"
                                                                                            data-id="3559280d"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="image.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <a
                                                                                                    href="https://demo2.themelexus.com/delicioz/menu-tab/">
                                                                                                    <img width="242"
                                                                                                        height="242"
                                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-4.jpg"
                                                                                                        class="attachment-full size-full"
                                                                                                        alt
                                                                                                        loading="lazy"
                                                                                                        srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-4.jpg 242w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-4-150x150.jpg 150w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-4-100x100.jpg 100w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-4-50x50.jpg 50w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-4-96x96.jpg 96w"
                                                                                                        sizes="(max-width: 242px) 100vw, 242px" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="elementor-element elementor-element-38710ae9 elementor-align-center elementor-button-link elementor-widget elementor-widget-button"
                                                                                            data-id="38710ae9"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="button.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <div
                                                                                                    class="elementor-button-wrapper">
                                                                                                    <a href="https://demo2.themelexus.com/delicioz/menu-tab/"
                                                                                                        class="elementor-button-link elementor-button elementor-size-sm"
                                                                                                        role="button">
                                                                                                        <span
                                                                                                            class="elementor-button-content-wrapper">
                                                                                                            <span
                                                                                                                class="elementor-button-text">Menu
                                                                                                                Tab</span>
                                                                                                        </span>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-7c6e8400"
                                                                                    data-id="7c6e8400"
                                                                                    data-element_type="column">
                                                                                    <div
                                                                                        class="elementor-widget-wrap elementor-element-populated">
                                                                                        <div class="elementor-element elementor-element-27918604 image-style-delicioz-yes elementor-widget elementor-widget-image"
                                                                                            data-id="27918604"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="image.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <a
                                                                                                    href="https://demo2.themelexus.com/delicioz/menu-woocommerce/">
                                                                                                    <img width="242"
                                                                                                        height="242"
                                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-5.jpg"
                                                                                                        class="attachment-full size-full"
                                                                                                        alt
                                                                                                        loading="lazy"
                                                                                                        srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-5.jpg 242w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-5-150x150.jpg 150w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-5-100x100.jpg 100w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-5-50x50.jpg 50w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/menu_list-5-96x96.jpg 96w"
                                                                                                        sizes="(max-width: 242px) 100vw, 242px" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="elementor-element elementor-element-2a338196 elementor-align-center elementor-button-link elementor-widget elementor-widget-button"
                                                                                            data-id="2a338196"
                                                                                            data-element_type="widget"
                                                                                            data-widget_type="button.default">
                                                                                            <div
                                                                                                class="elementor-widget-container">
                                                                                                <div
                                                                                                    class="elementor-button-wrapper">
                                                                                                    <a href="https://demo2.themelexus.com/delicioz/menu-woocommerce/"
                                                                                                        class="elementor-button-link elementor-button elementor-size-sm"
                                                                                                        role="button">
                                                                                                        <span
                                                                                                            class="elementor-button-content-wrapper">
                                                                                                            <span
                                                                                                                class="elementor-button-text">Menu
                                                                                                                Woocommerce</span>
                                                                                                        </span>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul> */}
                                                        </li>
                                                        {/* <li id="menu-item-73"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-73">
                                                            <a href="https://demo2.themelexus.com/delicioz/blog/"><span
                                                                class="menu-title">Blog</span></a>
                                                            <ul class="sub-menu">
                                                                <li id="menu-item-222"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-222">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/blog/"><span
                                                                            class="menu-title">Blog Standard</span></a>
                                                                </li>
                                                                <li id="menu-item-223"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-223">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/blog/?blog_style=style-2&#038;blog_columns=3&#038;blog_sidebar=none"><span
                                                                            class="menu-title">Blog Grid 01</span></a>
                                                                </li>
                                                                <li id="menu-item-224"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-224">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/blog/?blog_style=style-1&#038;blog_columns=3&#038;blog_sidebar=none"><span
                                                                            class="menu-title">Blog Grid 02</span></a>
                                                                </li>
                                                                <li id="menu-item-225"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-225">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/how-to-choose-the-best-type-of-combi-oven/"><span
                                                                            class="menu-title">Single Post</span></a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="menu-item-74"
                                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74">
                                                            <a href="#"><span class="menu-title">Pages</span></a>
                                                            <ul class="sub-menu">
                                                                <li id="menu-item-77"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/reservation/"><span
                                                                            class="menu-title">Reservation (Contact Form
                                                                            7)</span></a>
                                                                </li>
                                                                <li id="menu-item-76"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/reservation-2/"><span
                                                                            class="menu-title">Reservation (Open
                                                                            Table)</span></a>
                                                                </li>
                                                                <li id="menu-item-79"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-79">
                                                                    <a href="https://demo2.themelexus.com/delicioz/404"><span
                                                                        class="menu-title">404 Error</span></a>
                                                                </li>
                                                                <li id="menu-item-82"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/icons/"><span
                                                                            class="menu-title">Icons</span></a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li id="menu-item-506"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-506">
                                                            <a href="https://demo2.themelexus.com/delicioz/shop/"><span
                                                                class="menu-title">Shop</span></a>
                                                            <ul class="sub-menu">
                                                                <li id="menu-item-507"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-507">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/shop/?woocommerce_archive_sidebar=left"><span
                                                                            class="menu-title">Shop Sidebar</span></a>
                                                                </li>
                                                                <li id="menu-item-508"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-508">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/shop/?woocommerce_archive_layout=canvas&#038;woocommerce_catalog_columns=4"><span
                                                                            class="menu-title">Shop Fullwidth</span></a>
                                                                </li>
                                                                <li id="menu-item-509"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-product menu-item-509">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/product/grilled-salmon/"><span
                                                                            class="menu-title">Single Product</span></a>
                                                                </li>
                                                            </ul>
                                                        </li> */}
                                                        <li id="menu-item-75"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75">
                                                            <a href="#"><span
                                                                class="menu-title"><Link to="/contact">Contact</Link></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div class="elementor-element elementor-element-6c082b3 elementor-widget__width-auto elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra delicioz-canvas-menu-layout-2 elementor-widget elementor-widget-delicioz-menu-canvas"
                                    data-id="6c082b3" data-element_type="widget"
                                    data-widget_type="delicioz-menu-canvas.default">
                                    <div class="elementor-widget-container">
                                        <div class="elementor-canvas-menu-wrapper">
                                            <a href="#" class="menu-mobile-nav-button">
                                                <span class="toggle-text screen-reader-text">Menu</span>
                                                <div class="delicioz-icon">
                                                    <span class="icon-1"></span>
                                                    <span class="icon-2"></span>
                                                    <span class="icon-3"></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-aa65abd elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile"
                            data-id="aa65abd" data-element_type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                                {/* <div class="elementor-element elementor-element-3d4bbca elementor-widget__width-auto elementor-widget elementor-widget-delicioz-header-group"
                                    data-id="3d4bbca" data-element_type="widget"
                                    data-widget_type="delicioz-header-group.default">
                                    <div class="elementor-widget-container">
                                        <div class="elementor-header-group-wrapper">
                                            <div class="header-group-action">
                                                <div class="site-header-account">
                                                    <a href="https://demo2.themelexus.com/delicioz/my-account/">
                                                        <i class="delicioz-icon-account"></i>
                                                    </a>
                                                    <div class="account-dropdown">
                                                    </div>
                                                </div>
                                                <div class="site-header-cart menu">
                                                    <a class="cart-contents"
                                                        href="https://demo2.themelexus.com/delicioz/cart/"
                                                        title="View your shopping cart">
                                                        <span class="count">0</span>
                                                        <span class="woocommerce-Price-amount amount"><bdi><span
                                                            class="woocommerce-Price-currencySymbol">&#36;</span>0.00</bdi></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div class="elementor-element elementor-element-50a58f1 elementor-widget__width-auto elementor-button-default elementor-widget elementor-widget-button"
                                    data-id="50a58f1" data-element_type="widget" data-widget_type="button.default">
                                    <div class="elementor-widget-container">
                                        <div class="elementor-button-wrapper">
                                            <a href="https://demo2.themelexus.com/delicioz/reservation/"
                                                class="elementor-button-link elementor-button elementor-size-sm"
                                                role="button">
                                                <span class="elementor-button-content-wrapper">
                                                    <span class="elementor-button-text">reservation</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style id="rs-plugin-settings-inline-css">
                {`
        #rev_slider_1_1_wrapper .ares.tp-bullets {}

        #rev_slider_1_1_wrapper .ares.tp-bullets:before {
            content: ' ';
            position: absolute;
            width: 100%;
            height: 100%;
            background: transparent;
            padding: 10px;
            margin-left: -10px;
            margin-top: -10px;
            box-sizing: content-box
        }

        #rev_slider_1_1_wrapper .ares .tp-bullet {
            width: 10px;
            height: 10px;
            position: absolute;
            background: #c7c7cc;
            border-radius: 50%;
            cursor: pointer;
            box-sizing: content-box
        }

        #rev_slider_1_1_wrapper .ares .tp-bullet.rs-touchhover,
        #rev_slider_1_1_wrapper .ares .tp-bullet.selected {
            background: #ffcc00
        }

        #rev_slider_1_1_wrapper .ares .tp-bullet-title {
            position: absolute;
            color: #888888;
            font-size: 12px;
            padding: 0px 10px;
            font-weight: 600;
            right: 27px;
            top: -4px;
            background: rgba(255, 255, 255, 0.75);
            visibility: hidden;
            transform: translatex(-20px);
            -webkit-transform: translatex(-20px);
            transition: transform 0.3s;
            -webkit-transition: transform 0.3s;
            line-height: 20px;
            white-space: nowrap
        }

        #rev_slider_1_1_wrapper .ares .tp-bullet-title:after {
            width: 0px;
            height: 0px;
            border-style: solid;
            border-width: 10px 0 10px 10px;
            border-color: transparent transparent transparent rgba(255, 255, 255, 0.75);
            content: ' ';
            position: absolute;
            right: -10px;
            top: 0px
        }

        #rev_slider_1_1_wrapper .ares .tp-bullet.rs-touchhover .tp-bullet-title {
            visibility: visible;
            transform: translatex(0px);
            -webkit-transform: translatex(0px)
        }

        #rev_slider_1_1_wrapper .ares .tp-bullet.selected.rs-touchhover .tp-bullet-title {
            background: #ffcc00
        }

        #rev_slider_1_1_wrapper .ares .tp-bullet.selected.rs-touchhover .tp-bullet-title:after {
            border-color: transparent transparent transparent #ffcc00
        }

        #rev_slider_1_1_wrapper .ares.tp-bullets.rs-touchhover .tp-bullet-title {
            visibility: hidden
        }

        #rev_slider_1_1_wrapper .ares.tp-bullets.rs-touchhover .tp-bullet.rs-touchhover .tp-bullet-title {
            visibility: visible;
            transform: translateX(0px) translatey(0px);
            -webkit-transform: translateX(0px) translatey(0px)
        }

        #rev_slider_1_1_wrapper .ares.nav-dir-vertical.nav-pos-hor-left .tp-bullet-title {
            right: auto;
            left: 27px;
            transform: translatex(20px);
            -webkit-transform: translatex(20px)
        }

        #rev_slider_1_1_wrapper .ares.nav-dir-vertical.nav-pos-hor-left .tp-bullet-title:after {
            border-width: 10px 10px 10px 0 !important;
            border-color: transparent rgba(255, 255, 255, 0.75) transparent transparent;
            right: auto !important;
            left: -10px !important
        }

        #rev_slider_1_1_wrapper .ares.nav-dir-vertical.nav-pos-hor-left .tp-bullet.selected.rs-touchhover .tp-bullet-title:after {
            border-color: transparent #ffcc00 transparent transparent !important
        }

        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-center .tp-bullet-title,
        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-bottom .tp-bullet-title {
            top: -35px;
            left: 50%;
            right: auto;
            transform: translateX(-50%) translateY(-10px);
            -webkit-transform: translateX(-50%) translateY(-10px)
        }

        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-center .tp-bullet-title:after,
        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-bottom .tp-bullet-title:after {
            border-width: 10px 10px 0px 10px;
            border-color: rgba(255, 255, 255, 0.75) transparent transparent transparent;
            right: auto;
            left: 50%;
            margin-left: -10px;
            top: auto;
            bottom: -10px
        }

        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-center .tp-bullet.selected.rs-touchhover .tp-bullet-title:after,
        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-bottom .tp-bullet.selected.rs-touchhover .tp-bullet-title:after {
            border-color: #ffcc00 transparent transparent transparent
        }

        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-center .tp-bullet.rs-touchhover .tp-bullet-title,
        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-bottom .tp-bullet.rs-touchhover .tp-bullet-title {
            transform: translateX(-50%) translatey(0px);
            -webkit-transform: translateX(-50%) translatey(0px)
        }

        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-top .tp-bullet-title {
            top: 25px;
            left: 50%;
            right: auto;
            transform: translateX(-50%) translateY(10px);
            -webkit-transform: translateX(-50%) translateY(10px)
        }

        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-top .tp-bullet-title:after {
            border-width: 0 10px 10px 10px;
            border-color: transparent transparent rgba(255, 255, 255, 0.75) transparent;
            right: auto;
            left: 50%;
            margin-left: -10px;
            bottom: auto;
            top: -10px
        }

        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-top .tp-bullet.selected.rs-touchhover .tp-bullet-title:after {
            border-color: transparent transparent #ffcc00 transparent
        }

        #rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-top .tp-bullet.rs-touchhover .tp-bullet-title {
            transform: translateX(-50%) translatey(0px);
            -webkit-transform: translateX(-50%) translatey(0px)
        }

        @font-face {
            font-family: 'Material Icons';
            font-style: normal;
            font-weight: 400;
            src: url(//fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2')
        }

        rs-module .material-icons {
            font-family: 'Material Icons';
            font-weight: normal;
            font-style: normal;
            font-size: inherit;
            display: inline-block;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
            vertical-align: top;
            line-height: inherit;
            font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
            -moz-osx-font-smoothing: grayscale
        }`}
            </style>
        </header>
    )
}
