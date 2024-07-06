import React, { useEffect } from 'react'
import './home.css'

const AddHttpPrefix = () => {
    // Define the function to add 'http://' prefix if necessary
    const maybePrefixUrlField = (event) => {
        if (event.target.value.trim() !== '' && event.target.value.indexOf('http') !== 0) {
            event.target.value = 'http://' + event.target.value;
        }
    };

    // Use useEffect to run the script after component mounts
    useEffect(() => {
        // Select all input fields of type 'url' with class 'mc4wp-form'
        const urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
        if (urlFields) {
            // Add event listener to each urlField on blur event
            urlFields.forEach(field => {
                field.addEventListener('blur', maybePrefixUrlField);
            });
        }

        // Clean up by removing event listeners when component unmounts
        return () => {
            if (urlFields) {
                urlFields.forEach(field => {
                    field.removeEventListener('blur', maybePrefixUrlField);
                });
            }
        };
    }, []); // Empty dependency array ensures useEffect runs only once after mount

    // Return null or empty fragment because the component doesn't render any UI
    return null;
};

export default function index() {
    return (
        <div className="home page-template page-template-template-homepage page-template-template-homepage-php page page-id-20 wp-custom-logo wp-embed-responsive theme-delicioz woocommerce-no-js ehf-header ehf-footer ehf-template-delicioz ehf-stylesheet-demo-child woo-variation-swatches wvs-behavior-blur wvs-theme-demo-child wvs-show-label wvs-tooltip chrome woocommerce-active product-block-style-1 elementor-default elementor-kit-7 elementor-page elementor-page-20">
            {/* SVG 1 */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                    left: '-9999px',
                    overflow: 'hidden'
                }}>
                <defs>
                    <filter id="wp-duotone-dark-grayscale">
                        <feColorMatrix colorInterpolationFilters="sRGB" type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0 0.49803921568627" />
                            <feFuncG type="table" tableValues="0 0.49803921568627" />
                            <feFuncB type="table" tableValues="0 0.49803921568627" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>

            {/* SVG 2 */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                    left: '-9999px',
                    overflow: 'hidden'
                }}>
                <defs>
                    <filter id="wp-duotone-grayscale">
                        <feColorMatrix colorInterpolationFilters="sRGB" type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0 1" />
                            <feFuncG type="table" tableValues="0 1" />
                            <feFuncB type="table" tableValues="0 1" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>

            {/* SVG 3 */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                    left: '-9999px',
                    overflow: 'hidden'
                }}>
                <defs>
                    <filter id="wp-duotone-purple-yellow">
                        <feColorMatrix colorInterpolationFilters="sRGB" type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0.54901960784314 0.98823529411765" />
                            <feFuncG type="table" tableValues="0 1" />
                            <feFuncB type="table" tableValues="0.71764705882353 0.25490196078431" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>

            {/* SVG 4 */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                    left: '-9999px',
                    overflow: 'hidden'
                }}>
                <defs>
                    <filter id="wp-duotone-blue-red">
                        <feColorMatrix colorInterpolationFilters="sRGB" type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0 1" />
                            <feFuncG type="table" tableValues="0 0.27843137254902" />
                            <feFuncB type="table" tableValues="0.5921568627451 0.27843137254902" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>

            {/* SVG 5 */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                    left: '-9999px',
                    overflow: 'hidden'
                }}>
                <defs>
                    <filter id="wp-duotone-midnight">
                        <feColorMatrix colorInterpolationFilters="sRGB" type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0 0" />
                            <feFuncG type="table" tableValues="0 0.64705882352941" />
                            <feFuncB type="table" tableValues="0 1" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>

            {/* SVG 6 */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                    left: '-9999px',
                    overflow: 'hidden'
                }}>
                <defs>
                    <filter id="wp-duotone-magenta-yellow">
                        <feColorMatrix colorInterpolationFilters="sRGB" type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0.78039215686275 1" />
                            <feFuncG type="table" tableValues="0 0.94901960784314" />
                            <feFuncB type="table" tableValues="0.35294117647059 0.47058823529412" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>

            {/* SVG 7 */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                    left: '-9999px',
                    overflow: 'hidden'
                }}>
                <defs>
                    <filter id="wp-duotone-purple-green">
                        <feColorMatrix colorInterpolationFilters="sRGB" type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0.65098039215686 0.40392156862745" />
                            <feFuncG type="table" tableValues="0 1" />
                            <feFuncB type="table" tableValues="0.44705882352941 0.4" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>

            {/* SVG 8 */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                    left: '-9999px',
                    overflow: 'hidden'
                }}>
                <defs>
                    <filter id="wp-duotone-blue-orange">
                        <feColorMatrix colorInterpolationFilters="sRGB" type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0.098039215686275 1" />
                            <feFuncG type="table" tableValues="0 0.66274509803922" />
                            <feFuncB type="table" tableValues="0.84705882352941 0.41960784313725" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>

            <div id="page" class="hfeed site">
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
                                                                    src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/logo.svg"
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
                                                                    <a href="https://demo2.themelexus.com/delicioz/"><span
                                                                        class="menu-title">Home</span></a>
                                                                    <ul class="sub-menu mega-menu mega-stretchwidth">
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
                                                                    </ul>
                                                                </li>
                                                                <li id="menu-item-66"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-66">
                                                                    <a href="https://demo2.themelexus.com/delicioz/about-us-1/"><span
                                                                        class="menu-title">About</span></a>
                                                                    <ul class="sub-menu">
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
                                                                    </ul>
                                                                </li>
                                                                <li id="menu-item-64"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-64 has-mega-menu has-stretchwidth">
                                                                    <a
                                                                        href="https://demo2.themelexus.com/delicioz/menu-list-01/"><span
                                                                            class="menu-title">Menu</span></a>
                                                                    <ul class="sub-menu mega-menu mega-stretchwidth">
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
                                                                    </ul>
                                                                </li>
                                                                <li id="menu-item-73"
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
                                                                                    7)</span></a></li>
                                                                        <li id="menu-item-76"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76">
                                                                            <a
                                                                                href="https://demo2.themelexus.com/delicioz/reservation-2/"><span
                                                                                    class="menu-title">Reservation (Open
                                                                                    Table)</span></a></li>
                                                                        <li id="menu-item-79"
                                                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-79">
                                                                            <a href="https://demo2.themelexus.com/delicioz/404"><span
                                                                                class="menu-title">404 Error</span></a></li>
                                                                        <li id="menu-item-82"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82">
                                                                            <a
                                                                                href="https://demo2.themelexus.com/delicioz/icons/"><span
                                                                                    class="menu-title">Icons</span></a></li>
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
                                                                </li>
                                                                <li id="menu-item-75"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75">
                                                                    <a href="https://demo2.themelexus.com/delicioz/contact-us/"><span
                                                                        class="menu-title">Contact</span></a></li>
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
                                        <div class="elementor-element elementor-element-3d4bbca elementor-widget__width-auto elementor-widget elementor-widget-delicioz-header-group"
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
                                        </div>
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
                </header>
                <div class="breadcrumb-wrap">
                    <div data-elementor-type="wp-post" data-elementor-id="101" class="elementor elementor-101">
                        <section
                            class="elementor-section elementor-top-section elementor-element elementor-element-4fdca72 elementor-section-content-middle elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="4fdca72" data-element_type="section"
                            data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                            <div class="elementor-background-overlay"></div>
                            <div class="elementor-container elementor-column-gap-no">
                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-617dbdb"
                                    data-id="617dbdb" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <div class="elementor-element elementor-element-901b06e hidden-delicioz-title-single-yes elementor-widget elementor-widget-woocommerce-breadcrumb"
                                            data-id="901b06e" data-element_type="widget"
                                            data-widget_type="woocommerce-breadcrumb.default">
                                            <div class="elementor-widget-container">
                                                <div class="delicioz-woocommerce-title"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div id="content" class="site-content" tabindex="-1">
                    <div class="col-full">
                        <div class="woocommerce"></div>
                        <div id="primary" class="content-area">
                            <main id="main" class="site-main">
                                <div data-elementor-type="wp-page" data-elementor-id="20" class="elementor elementor-20">
                                    <div class="elementor-section elementor-top-section elementor-element elementor-element-b1a0cb1 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="b1a0cb1" data-element_type="section"
                                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-71d9a7c"
                                                data-id="71d9a7c" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-c098de7 elementor-widget elementor-widget-slider_revolution"
                                                        data-id="c098de7" data-element_type="widget"
                                                        data-widget_type="slider_revolution.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="wp-block-themepunch-revslider">
                                                                <p class="rs-p-wp-fix"></p>
                                                                <rs-module-wrap id="rev_slider_1_1_wrapper"
                                                                    data-source="gallery"
                                                                    style={{
                                                                        visibility: 'hidden',
                                                                        background: 'transparent',
                                                                        padding: 0,
                                                                        margin: '0px auto',
                                                                        marginTop: 0,
                                                                        marginBottom: 0
                                                                    }}>
                                                                    <rs-module id="rev_slider_1_1" data-version="6.5.31">
                                                                        <rs-slides>
                                                                            <rs-slide style={{ position: 'absolute' }}
                                                                                data-key="rs-1" data-title="Slide"
                                                                                data-thumb="//demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/rev_h1-50x100.jpg"
                                                                                data-anim="adpr:false;" data-in="o:0;"
                                                                                data-out="a:false;">
                                                                                <img src="//demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                                                                    alt title="rev_h1" width="1920" height="900"
                                                                                    className="rev-slidebg tp-rs-img rs-lazyload"
                                                                                    data-lazyload="//demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/rev_h1.jpg"
                                                                                    data-bg="p:left center;"
                                                                                    data-panzoom="d:10000;ss:100;se:110%;"
                                                                                    data-no-retina />
                                                                                <rs-zone id="rrzt_1" className="rev_row_zone_top"
                                                                                    style={{ zIndex: 22 }}>
                                                                                    <rs-row
                                                                                        id="slider-1-slide-1-layer-0"
                                                                                        data-type="row"
                                                                                        data-xy="xo:50px;yo:50px;"
                                                                                        data-rsp_bd="off"
                                                                                        data-margin="t:275,230,150,130;r:0,0,15,15;b:0,0,70,70;l:0,0,15,15;"
                                                                                        data-frame_0="o:1;"
                                                                                        data-frame_999="o:0;st:w;sR:8700;sA:9000;"
                                                                                        style={{ zIndex: 1 }}>
                                                                                        <rs-column
                                                                                            id="slider-1-slide-1-layer-1"
                                                                                            data-type="column"
                                                                                            data-xy="xo:50px;yo:50px;"
                                                                                            data-text="a:center;"
                                                                                            data-rsp_bd="off"
                                                                                            data-column="w:100%;"
                                                                                            data-frame_0="o:1;"
                                                                                            data-frame_999="o:0;st:w;sR:8700;sA:9000;"
                                                                                            style={{ zIndex: 2, width: '100%' }}>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-6"
                                                                                                data-type="image"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;"
                                                                                                data-dim="w:['35px','35px','35px','35px'];h:['40px','40px','40px','40px'];"
                                                                                                data-disp="inline-block"
                                                                                                data-margin="b:20;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:70;sp:1500;sR:70;"
                                                                                                data-frame_999="o:0;st:w;sR:7430;"
                                                                                                style={{ zIndex: 3, display: 'inline-block' }}>
                                                                                                <img
                                                                                                    src="//demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                                                                                    alt
                                                                                                    className="tp-rs-img rs-lazyload"
                                                                                                    width="35" height="40"
                                                                                                    data-lazyload="//demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/rev_chef1.png"
                                                                                                    data-no-retina />
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-7"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 4 }}>
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-8"
                                                                                                data-type="text"
                                                                                                data-color="#ffdea0"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;s:12;l:18;ls:3px;a:center;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-padding="b:18;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:480;sp:1500;sR:480;"
                                                                                                data-frame_999="o:0;st:w;sR:7020;"
                                                                                                style={{ zIndex: 5, fontFamily: "'Manrope'", textTransform: 'uppercase', display: 'inline-block' }}>
                                                                                                WELCOME TO delicioz
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-11"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 6 }}>
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-10"
                                                                                                data-type="shape"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;"
                                                                                                data-dim="w:7px;h:7px;"
                                                                                                data-spike="l:middle;r:middle;lw:50%;rw:50%;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-margin="r:1;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:1330;sp:1000;sR:1330;"
                                                                                                data-frame_999="o:0;st:w;sR:6670;"
                                                                                                style={{ zIndex: 7, backgroundColor: '#ffdea0', display: 'inline-block' }}>
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-12"
                                                                                                data-type="shape"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;"
                                                                                                data-dim="w:7px;h:7px;"
                                                                                                data-spike="l:middle;r:middle;lw:50%;rw:50%;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-margin="r:1;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:1330;sp:1000;sR:1330;"
                                                                                                data-frame_999="o:0;st:w;sR:6670;"
                                                                                                style={{ zIndex: 8, backgroundColor: '#ffdea0', display: 'inline-block' }}>
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-13"
                                                                                                data-type="shape"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;"
                                                                                                data-dim="w:7px;h:7px;"
                                                                                                data-spike="l:middle;r:middle;lw:50%;rw:50%;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:1330;sp:1000;sR:1330;"
                                                                                                data-frame_999="o:0;st:w;sR:6670;"
                                                                                                style={{ zIndex: 9, backgroundColor: '#ffdea0', display: 'inline-block' }}>
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-9"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 10 }}>
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-4"
                                                                                                data-type="text"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;s:80,70,64,50;l:88,76,70,55;a:center;"
                                                                                                data-dim="w:800px,630px,auto,auto;"
                                                                                                data-disp="inline-block"
                                                                                                data-padding="t:13;b:7;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:2100;sp:1500;sR:2100;"
                                                                                                data-frame_999="o:0;st:w;sR:5400;"
                                                                                                style={{ zIndex: 11, fontFamily: "'Delicioz'", textTransform: 'capitalize', display: 'inline-block' }}>
                                                                                                Feels like home, tastes like paradise
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-3"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 12 }}>
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-2"
                                                                                                data-type="text"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;s:18,18,18,14;l:26;a:center;"
                                                                                                data-disp="inline-block"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:2880;sp:1500;sR:2880;"
                                                                                                data-frame_999="o:0;st:w;sR:4620;"
                                                                                                style={{ zIndex: 13, fontFamily: "'Manrope'", display: 'inline-block' }}>
                                                                                                Discover a world of culinary bliss at Delicioz!
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-15"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 14 }}>
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-1-layer-14"
                                                                                                className="rev-btn-outline rev-btn"
                                                                                                data-type="button"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;s:12;l:54,54,50,46;ls:3px;fw:700;"
                                                                                                data-dim="minh:0px,none,none,none;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-margin="t:59;"
                                                                                                data-padding="r:40,40,30,25;l:40,40,30,25;"
                                                                                                data-border="bos:solid;boc:#ffdea0;bow:1px,1px,1px,1px;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:3710;sp:1500;sR:3710;"
                                                                                                data-frame_999="o:0;st:w;sR:3790;"
                                                                                                data-frame_hover="c:#000;bgc:rgba(0,0,0,0);boc:#ffdea0;bor:0px,0px,0px,0px;bos:solid;bow:1px,1px,1px,1px;e:power1.inOut;"
                                                                                                style={{ zIndex: 15, backgroundColor: 'rgba(0,0,0,0)', fontFamily: "'Manrope'", display: 'inline-block' }}>
                                                                                                DISCOVER MENU
                                                                                            </rs-layer>
                                                                                        </rs-column>
                                                                                    </rs-row>
                                                                                </rs-zone>
                                                                            </rs-slide>

                                                                            <rs-slide
                                                                                style={{ position: 'absolute' }}
                                                                                data-key="rs-3"
                                                                                data-title="Slide"
                                                                                data-thumb="//demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/rev_h1_01-50x100.jpg"
                                                                                data-anim="adpr:false;"
                                                                                data-in="o:0;"
                                                                                data-out="a:false;"
                                                                            >
                                                                                <img
                                                                                    src="//demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                                                                    alt
                                                                                    title="rev_h1_01"
                                                                                    width="1920"
                                                                                    height="900"
                                                                                    className="rev-slidebg tp-rs-img rs-lazyload"
                                                                                    data-lazyload="//demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/rev_h1_01.jpg"
                                                                                    data-bg="p:right center;"
                                                                                    data-panzoom="d:10000;ss:100;se:110%;"
                                                                                    data-no-retina
                                                                                />
                                                                                <rs-zone id="rrzt_3" className="rev_row_zone_top" style={{ zIndex: 22 }}>
                                                                                    <rs-row
                                                                                        id="slider-1-slide-3-layer-0"
                                                                                        data-type="row"
                                                                                        data-xy="xo:50px;yo:50px;"
                                                                                        data-rsp_bd="off"
                                                                                        data-margin="t:275,230,150,130;r:0,0,15,15;b:0,0,70,70;l:0,0,15,15;"
                                                                                        data-frame_0="o:1;"
                                                                                        data-frame_999="o:0;st:w;sR:8700;sA:9000;"
                                                                                        style={{ zIndex: 1 }}
                                                                                    >
                                                                                        <rs-column
                                                                                            id="slider-1-slide-3-layer-1"
                                                                                            data-type="column"
                                                                                            data-xy="xo:50px;yo:50px;"
                                                                                            data-text="a:center;"
                                                                                            data-rsp_bd="off"
                                                                                            data-column="w:100%;"
                                                                                            data-frame_0="o:1;"
                                                                                            data-frame_999="o:0;st:w;sR:8700;sA:9000;"
                                                                                            style={{ zIndex: 2, width: '100%' }}
                                                                                        >
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-3-layer-6"
                                                                                                data-type="image"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;"
                                                                                                data-dim="w:['40px','40px','40px','40px'];h:['40px','40px','40px','40px'];"
                                                                                                data-disp="inline-block"
                                                                                                data-margin="b:20;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:70;sp:1500;sR:70;"
                                                                                                data-frame_999="o:0;st:w;sR:7430;"
                                                                                                style={{ zIndex: 3, display: 'inline-block' }}
                                                                                            >
                                                                                                <img
                                                                                                    src="//demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                                                                                    alt
                                                                                                    className="tp-rs-img rs-lazyload"
                                                                                                    width="40"
                                                                                                    height="40"
                                                                                                    data-lazyload="//demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/rev_chef2.png"
                                                                                                    data-no-retina
                                                                                                />
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-3-layer-7"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 4 }}
                                                                                            ></rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-3-layer-8"
                                                                                                data-type="text"
                                                                                                data-color="#ffdea0"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;s:12;l:18;ls:3px;a:center;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-padding="b:18;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:840;sp:1000;"
                                                                                                data-frame_999="o:0;st:w;sR:6660;"
                                                                                                style={{
                                                                                                    zIndex: 5,
                                                                                                    fontFamily: "'Manrope'",
                                                                                                    textTransform: 'uppercase',
                                                                                                    display: 'inline-block',
                                                                                                }}
                                                                                            >
                                                                                                SEAFOOD PHILOSOPHY
                                                                                            </rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-3-layer-11"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 6 }}
                                                                                            ></rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-3-layer-10"
                                                                                                data-type="shape"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;"
                                                                                                data-dim="w:7px;h:7px;"
                                                                                                data-spike="l:middle;r:middle;lw:50%;rw:50%;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-margin="r:1;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:1340;sp:1000;sR:1340;"
                                                                                                data-frame_999="o:0;st:w;sR:6660;"
                                                                                                style={{
                                                                                                    zIndex: 7,
                                                                                                    backgroundColor: '#ffdea0',
                                                                                                    display: 'inline-block',
                                                                                                }}
                                                                                            ></rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-3-layer-12"
                                                                                                data-type="shape"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;"
                                                                                                data-dim="w:7px;h:7px;"
                                                                                                data-spike="l:middle;r:middle;lw:50%;rw:50%;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-margin="r:1;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:1330;sp:1000;sR:1330;"
                                                                                                data-frame_999="o:0;st:w;sR:6670;"
                                                                                                style={{
                                                                                                    zIndex: 8,
                                                                                                    backgroundColor: '#ffdea0',
                                                                                                    display: 'inline-block',
                                                                                                }}
                                                                                            ></rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-3-layer-13"
                                                                                                data-type="shape"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;"
                                                                                                data-dim="w:7px;h:7px;"
                                                                                                data-spike="l:middle;r:middle;lw:50%;rw:50%;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:1340;sp:1000;sR:1340;"
                                                                                                data-frame_999="o:0;st:w;sR:6660;"
                                                                                                style={{
                                                                                                    zIndex: 9,
                                                                                                    backgroundColor: '#ffdea0',
                                                                                                    display: 'inline-block',
                                                                                                }}
                                                                                            ></rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-3-layer-9"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 10 }}
                                                                                            ></rs-layer>
                                                                                            <rs-layer
                                                                                                id="slider-1-slide-3-layer-4"
                                                                                                data-type="text"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;s:18,14,10,6;l:40,32,24,15;fw:700;a:center;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:870;sp:1000;sR:870;"
                                                                                                data-frame_999="o:0;st:w;sR:7130;"
                                                                                                style={{
                                                                                                    zIndex: 11,
                                                                                                    fontFamily: "'Manrope'",
                                                                                                    color: '#ffffff',
                                                                                                    display: 'inline-block',
                                                                                                }}
                                                                                            >
                                                                                                Restaurant Food Menu
                                                                                            </rs-layer>
                                                                                        </rs-column>
                                                                                    </rs-row>
                                                                                </rs-zone>
                                                                                <rs-zone id="rrzm_3" className="rev_row_zone_middle" style={{ zIndex: 23 }}></rs-zone>
                                                                                <rs-zone id="rrzb_3" className="rev_row_zone_bottom" style={{ zIndex: 24 }}></rs-zone>
                                                                            </rs-slide>


                                                                            <rs-slide style={{ position: 'absolute' }}
                                                                                data-key="rs-2" data-title="Slide"
                                                                                data-thumb="//demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/rev_h1_02-50x100.jpg"
                                                                                data-anim="adpr:false;" data-in="o:0;"
                                                                                data-out="a:false;">
                                                                                <img src="//demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                                                                    alt title="rev_h1_02" width="1920"
                                                                                    height="900"
                                                                                    class="rev-slidebg tp-rs-img rs-lazyload"
                                                                                    data-lazyload="//demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/rev_h1_02.jpg"
                                                                                    data-panzoom="d:10000;ss:100;se:110%;"
                                                                                    data-no-retina />
                                                                                <rs-zone id="rrzt_2" class="rev_row_zone_top"
                                                                                    style={{ zIndex: 24 }}><rs-row
                                                                                        id="slider-1-slide-2-layer-0"
                                                                                        data-type="row"
                                                                                        data-xy="xo:50px;yo:50px;"
                                                                                        data-rsp_bd="off"
                                                                                        data-margin="t:275,230,150,130;r:0,0,15,15;b:0,0,70,70;l:0,0,15,15;"
                                                                                        data-frame_0="o:1;"
                                                                                        data-frame_999="o:0;st:w;sR:8700;sA:9000;"
                                                                                        style={{ zIndex: 1 }}
                                                                                    ><rs-column
                                                                                        id="slider-1-slide-2-layer-1"
                                                                                        data-type="column"
                                                                                        data-xy="xo:50px;yo:50px;"
                                                                                        data-text="a:center;"
                                                                                        data-rsp_bd="off"
                                                                                        data-column="w:100%;"
                                                                                        data-frame_0="o:1;"
                                                                                        data-frame_999="o:0;st:w;sR:8700;sA:9000;"
                                                                                        style={{ zIndex: 2, width: '100%' }}
                                                                                    ><rs-layer
                                                                                        id="slider-1-slide-2-layer-6"
                                                                                        data-type="image"
                                                                                        data-rsp_ch="on"
                                                                                        data-xy="xo:50px;yo:50px;"
                                                                                        data-text="w:normal;"
                                                                                        data-dim="w:['35px','35px','35px','35px'];h:['40px','40px','40px','40px'];"
                                                                                        data-disp="inline-block"
                                                                                        data-margin="b:20;"
                                                                                        data-frame_0="y:50;"
                                                                                        data-frame_1="st:60;sp:1500;sR:60;"
                                                                                        data-frame_999="o:0;st:w;sR:7440;"
                                                                                        style={{ zIndex: 3, display: 'inline-block' }}
                                                                                    ><img
                                                                                                    src="//demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                                                                                    alt
                                                                                                    class="tp-rs-img rs-lazyload"
                                                                                                    width="35" height="40"
                                                                                                    data-lazyload="//demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/rev_chef1.png"
                                                                                                    data-no-retina />
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-7"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 4 }}
                                                                                            >
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-8"
                                                                                                data-type="text"
                                                                                                data-color="#ffdea0"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;s:12;l:18;ls:3px;a:center;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-padding="b:18;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:710;sp:1500;sR:710;"
                                                                                                data-frame_999="o:0;st:w;sR:6790;"
                                                                                                style={{ zIndex: 5, fontFamily: 'Manrope', textTransform: 'uppercase', display: 'inline-block' }}
                                                                                            >WELCOME
                                                                                                TO delicioz
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-11"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 6 }}
                                                                                            >
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-10"
                                                                                                data-type="shape"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;"
                                                                                                data-dim="w:7px;h:7px;"
                                                                                                data-spike="l:middle;r:middle;lw:50%;rw:50%;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-margin="r:1;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:1330;sp:1000;sR:1330;"
                                                                                                data-frame_999="o:0;st:w;sR:6670;"
                                                                                                style={{ zIndex: 7, backgroundColor: '#ffdea0', display: 'inline-block' }}
                                                                                            >
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-12"
                                                                                                data-type="shape"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;"
                                                                                                data-dim="w:7px;h:7px;"
                                                                                                data-spike="l:middle;r:middle;lw:50%;rw:50%;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-margin="r:1;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:1330;sp:1000;sR:1330;"
                                                                                                data-frame_999="o:0;st:w;sR:6670;"
                                                                                                style={{ zIndex: 8, backgroundColor: '#ffdea0', display: 'inline-block' }}
                                                                                            >
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-13"
                                                                                                data-type="shape"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;"
                                                                                                data-dim="w:7px;h:7px;"
                                                                                                data-spike="l:middle;r:middle;lw:50%;rw:50%;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:1330;sp:1000;sR:1330;"
                                                                                                data-frame_999="o:0;st:w;sR:6670;"
                                                                                                style={{ zIndex: 9, backgroundColor: '#ffdea0', display: 'inline-block' }}
                                                                                            >
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-9"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 10 }}
                                                                                            >
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-4"
                                                                                                data-type="text"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;s:80,70,64,50;l:88,76,70,55;a:center;"
                                                                                                data-dim="w:800px,630px,auto,auto;"
                                                                                                data-disp="inline-block"
                                                                                                data-padding="t:13;b:7;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="x:5px,0,0,0;y:-2px,0,0,0;st:1980;sp:1500;sR:1980;"
                                                                                                data-frame_999="o:0;st:w;sR:5520;"
                                                                                                style={{ zIndex: 11, fontFamily: 'Delicioz', textTransform: 'capitalize', display: 'inline-block' }}
                                                                                            >Delicious
                                                                                                Food Eating Experience
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-3"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 12 }}
                                                                                            >
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-2"
                                                                                                data-type="text"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;s:18,18,18,14;l:26;a:center;"
                                                                                                data-disp="inline-block"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:2640;sp:1500;sR:2640;"
                                                                                                data-frame_999="o:0;st:w;sR:4860;"
                                                                                                style={{ zIndex: 13, fontFamily: 'Manrope', display: 'inline-block' }}
                                                                                            >We
                                                                                                Serve Food, Harmony, & Laughter
                                                                                                Since 1991
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-15"
                                                                                                data-type="shape"
                                                                                                data-rsp_ch="on"
                                                                                                data-xy="xo:50px,41px,31px,19px;yo:50px,41px,31px,19px;"
                                                                                                data-text="w:normal;s:20,16,12,7;c:both;l:0,20,15,9;"
                                                                                                data-flcr="c:both;"
                                                                                                data-dim="w:100%;h:1px;"
                                                                                                data-frame_999="o:0;st:w;sR:8700;"
                                                                                                style={{ zIndex: 14 }}
                                                                                            >
                                                                                            </rs-layer><rs-layer
                                                                                                id="slider-1-slide-2-layer-17"
                                                                                                class="rev-btn-outline rev-btn"
                                                                                                data-type="button"
                                                                                                data-xy="xo:50px;yo:50px;"
                                                                                                data-text="w:normal;s:12;l:54,54,50,46;ls:3px;fw:700;"
                                                                                                data-dim="minh:0px,none,none,none;"
                                                                                                data-rsp_o="off"
                                                                                                data-rsp_bd="off"
                                                                                                data-disp="inline-block"
                                                                                                data-margin="t:59;"
                                                                                                data-padding="r:40,40,30,25;l:40,40,30,25;"
                                                                                                data-border="bos:solid;boc:#ffdea0;bow:1px,1px,1px,1px;"
                                                                                                data-frame_0="y:50;"
                                                                                                data-frame_1="st:3380;sp:1500;sR:3380;"
                                                                                                data-frame_999="o:0;st:w;sR:4120;"
                                                                                                data-frame_hover="c:#000;bgc:rgba(0,0,0,0);boc:#ffdea0;bor:0px,0px,0px,0px;bos:solid;bow:1px,1px,1px,1px;e:power1.inOut;"
                                                                                                style={{ zIndex: 15, backgroundColor: 'rgba(0,0,0,0)', fontFamily: 'Manrope', display: 'inline-block' }}
                                                                                            >DISCOVER
                                                                                                MENU
                                                                                            </rs-layer></rs-column></rs-row></rs-zone>
                                                                            </rs-slide>
                                                                        </rs-slides>

                                                                        <rs-static-layers>
                                                                            <rs-group
                                                                                id="slider-1-slide-1-layer-5"
                                                                                class="rs-layer-static"
                                                                                data-type="group"
                                                                                data-xy="x:c;y:m,m,b,b;yo:0,0,20px,20px;"
                                                                                data-text="w:normal;"
                                                                                data-dim="w:100%;h:50px;"
                                                                                data-vbility="t,t,f,f"
                                                                                data-basealign="slide"
                                                                                data-rsp_o="off"
                                                                                data-rsp_bd="off"
                                                                                data-onslides="s:1;"
                                                                                data-frame_0="o:1;"
                                                                                data-frame_999="o:0;st:w;sA:9000;"
                                                                                style={{ zIndex: 10 }}
                                                                            >
                                                                                <rs-layer
                                                                                    id="slider-1-slide-1-layer-16"
                                                                                    class="rev-btn rs-layer-static"
                                                                                    data-type="button"
                                                                                    data-xy="x:l,l,c,c;xo:60px,30px,-25px,-25px;y:m;"
                                                                                    data-text="w:normal;l:40;a:center;"
                                                                                    data-dim="w:40px;h:40px;minh:0px,none,none,none;"
                                                                                    data-actions="o:click;a:jumptoslide;slide:previous;"
                                                                                    data-rsp_o="off"
                                                                                    data-rsp_bd="off"
                                                                                    data-onslides="s:1;"
                                                                                    data-border="bos:solid;boc:#ffffff;bow:1px,1px,1px,1px;bor:30px,30px,30px,30px;"
                                                                                    data-frame_999="o:0;st:w;"
                                                                                    data-frame_hover="c:#ffdea0;bgc:rgba(0,0,0,0);boc:rgba(255,222,160,0.75);bor:30px,30px,30px,30px;bos:solid;bow:1px,1px,1px,1px;e:power1.inOut;"
                                                                                    style={{ zIndex: 9, backgroundColor: 'rgba(0,0,0,0)', fontFamily: 'Roboto', cursor: 'pointer' }}
                                                                                >
                                                                                    <i className="material-icons">arrow_back</i>
                                                                                </rs-layer>
                                                                                <rs-layer
                                                                                    id="slider-1-slide-1-layer-18"
                                                                                    class="rev-btn rs-layer-static"
                                                                                    data-type="button"
                                                                                    data-xy="x:r,r,c,c;xo:60px,30px,25px,25px;y:m;"
                                                                                    data-text="w:normal;l:40;a:center;"
                                                                                    data-dim="w:40px;h:40px;minh:0px,none,none,none;"
                                                                                    data-actions="o:click;a:jumptoslide;slide:next;"
                                                                                    data-rsp_o="off"
                                                                                    data-rsp_bd="off"
                                                                                    data-onslides="s:1;"
                                                                                    data-margin="l:20,20,0,0;"
                                                                                    data-border="bos:solid;boc:#ffffff;bow:1px,1px,1px,1px;bor:30px,30px,30px,30px;"
                                                                                    data-frame_999="o:0;st:w;"
                                                                                    data-frame_hover="c:#ffdea0;bgc:rgba(0,0,0,0);boc:rgba(255,222,160,0.75);bor:30px,30px,30px,30px;bos:solid;bow:1px,1px,1px,1px;e:power1.inOut;"
                                                                                    style={{ zIndex: 8, backgroundColor: 'rgba(0,0,0,0)', fontFamily: 'Roboto', cursor: 'pointer' }}
                                                                                >
                                                                                    <i className="material-icons">arrow_forward</i>
                                                                                </rs-layer>
                                                                            </rs-group>
                                                                        </rs-static-layers>

                                                                    </rs-module>
                                                                    {/* <script>
                                                                        setREVStartSize({c: 'rev_slider_1_1', rl: [1240, 1024, 778, 480], el: [900, 768, 700, 650], gw: [1240, 1024, 778, 480], gh: [900, 768, 700, 650], type: 'standard', justify: '', layout: 'fullwidth', mh: "0" }); if (window.RS_MODULES !== undefined && window.RS_MODULES.modules !== undefined && window.RS_MODULES.modules["revslider11"] !== undefined) {window.RS_MODULES.modules["revslider11"].once = false; window.revapi1 = undefined; if (window.RS_MODULES.checkMinimal !== undefined) window.RS_MODULES.checkMinimal() }
                                                                    </script> */}
                                                                </rs-module-wrap>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-section elementor-top-section elementor-element elementor-element-097a1ba elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="097a1ba" data-element_type="section"
                                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a795ed4"
                                                data-id="a795ed4" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-2e8c5d0 show-icon-deco-yes elementor-position-top elementor-position-below elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                                        data-id="2e8c5d0" data-element_type="widget"
                                                        data-widget_type="image-box.default">
                                                        <div class="elementor-widget-container">



                                                            <div class="elementor-image-box-wrapper">
                                                                <div class="elementor-image-box-content">
                                                                    <div class="icon"><i aria-hidden="true"
                                                                        class="delicioz-icon- delicioz-icon-dining-table"></i>
                                                                    </div>
                                                                    <h3 class="elementor-image-box-title"><a href="#">The
                                                                        perfect place for an<br /> exceptional experience</a>
                                                                    </h3>
                                                                    <div class="elementor-image-box-sub-title">All Day
                                                                        Experience</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-section elementor-inner-section elementor-element elementor-element-704c983 elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default"
                                                        data-id="704c983" data-element_type="section">
                                                        <div class="elementor-container elementor-column-gap-no">
                                                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-67013cd"
                                                                data-id="67013cd" data-element_type="column">
                                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-19e4106 elementor-widget elementor-widget-image"
                                                                        data-id="19e4106" data-element_type="widget"
                                                                        data-widget_type="image.default">
                                                                        <div class="elementor-widget-container">
                                                                            <img width="410" height="500"
                                                                                src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-banner01.jpg"
                                                                                class="attachment-full size-full" alt
                                                                                loading="lazy"
                                                                                srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-banner01.jpg 410w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-banner01-246x300.jpg 246w"
                                                                                sizes="(max-width: 410px) 100vw, 410px" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-67d82ae"
                                                                data-id="67d82ae" data-element_type="column">
                                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-66108ce elementor-widget elementor-widget-image"
                                                                        data-id="66108ce" data-element_type="widget"
                                                                        data-widget_type="image.default">
                                                                        <div class="elementor-widget-container">
                                                                            <img width="410" height="600"
                                                                                src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-banner02.jpg"
                                                                                class="attachment-full size-full" alt
                                                                                loading="lazy"
                                                                                srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-banner02.jpg 410w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-banner02-205x300.jpg 205w"
                                                                                sizes="(max-width: 410px) 100vw, 410px" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-78a56cf"
                                                                data-id="78a56cf" data-element_type="column">
                                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-6152437 elementor-widget elementor-widget-text-editor"
                                                                        data-id="6152437" data-element_type="widget"
                                                                        data-widget_type="text-editor.default">
                                                                        <div class="elementor-widget-container">



                                                                            <p>By day, Delicioz provides a hub to meet friends
                                                                                and<br />colleagues with a well-crafted wine
                                                                                list, discreet yet professional service and
                                                                                sophisticated menus all delivered in a relaxed
                                                                                setting.</p>
                                                                            <p>By night the scene is set for any and all
                                                                                occasions.<br />From intimate tables for two to
                                                                                small groups or larger<br />private events. Our
                                                                                unparalleled attention to detail and strong
                                                                                focus on delivering the best
                                                                                culinary<br />experiences is designed to exceed
                                                                                expectations.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-element elementor-element-eca105d elementor-widget elementor-widget-text-editor"
                                                                        data-id="eca105d" data-element_type="widget"
                                                                        data-widget_type="text-editor.default">
                                                                        <div class="elementor-widget-container">
                                                                            <p>Booking request</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-element elementor-element-193c943 elementor-widget elementor-widget-heading"
                                                                        data-id="193c943" data-element_type="widget"
                                                                        data-widget_type="heading.default">
                                                                        <div class="elementor-widget-container">



                                                                            <h2
                                                                                class="elementor-heading-title elementor-size-default">
                                                                                +39-055-123456</h2>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-element elementor-element-842747f elementor-button-default elementor-widget elementor-widget-button"
                                                                        data-id="842747f" data-element_type="widget"
                                                                        data-widget_type="button.default">
                                                                        <div class="elementor-widget-container">
                                                                            <div class="elementor-button-wrapper">
                                                                                <a href="https://demo2.themelexus.com/delicioz/reservation/"
                                                                                    class="elementor-button-link elementor-button elementor-size-lg"
                                                                                    role="button">
                                                                                    <span
                                                                                        class="elementor-button-content-wrapper">
                                                                                        <span class="elementor-button-text">make
                                                                                            a reservation</span>
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-f53c090 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image"
                                                        data-id="f53c090" data-element_type="widget"
                                                        data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                                        data-widget_type="image.default">
                                                        <div class="elementor-widget-container">
                                                            <img width="356" height="391"
                                                                src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-bg02.png"
                                                                class="attachment-full size-full" alt loading="lazy"
                                                                srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-bg02.png 356w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-bg02-273x300.png 273w"
                                                                sizes="(max-width: 356px) 100vw, 356px" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-section elementor-top-section elementor-element elementor-element-1725817 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                                        data-id="1725817" data-element_type="section"
                                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-81d0da1"
                                                data-id="81d0da1" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-db172cb elementor-position-left show-icon-deco-yes show-button-link-yes elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                                        data-id="db172cb" data-element_type="widget"
                                                        data-widget_type="image-box.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-image-box-wrapper">
                                                                <figure class="elementor-image-box-img"><a
                                                                    href="https://demo2.themelexus.com/delicioz/menu-list-01/"><img
                                                                        width="960" height="800"
                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-banner03.jpg"
                                                                        class="elementor-animation-grow attachment-full size-full"
                                                                        alt loading="lazy" /></a></figure>
                                                                <div class="elementor-image-box-content">
                                                                    <div class="icon"><i aria-hidden="true"
                                                                        class="delicioz-icon- delicioz-icon-cloche"></i>
                                                                    </div>
                                                                    <h3 class="elementor-image-box-title"><a
                                                                        href="https://demo2.themelexus.com/delicioz/menu-list-01/">Michelin
                                                                        lunch,<br /> dinner or both?</a></h3>
                                                                    <div class="elementor-image-box-sub-title">UNIQUELY
                                                                        L’delicio</div>
                                                                    <p class="elementor-image-box-description">It’s the story of
                                                                        an everlasting love affair, Dieter Delicioz and the
                                                                        Atlantic Ocean.
                                                                        Our proximity to the abundant riches of the sea and
                                                                        Portugal’s excellent
                                                                        produce has provided a constant source of inspiration
                                                                        for Chef L'delicio,
                                                                        ever since he set foot in our kitchen 30 years ago.</p>
                                                                    <div class="elementor-image-box-button-wrapper"><a
                                                                        href="https://demo2.themelexus.com/delicioz/menu-list-01/"
                                                                        class="elementor-image-box-button"><span
                                                                            class="elementor-image-box-button-text">
                                                                            DISCOVER Menu</span></a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-section elementor-top-section elementor-element elementor-element-99d0e22 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                                        data-id="99d0e22" data-element_type="section"
                                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c5f7611"
                                                data-id="c5f7611" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-57a9d38 elementor-position-right show-icon-deco-yes show-button-link-yes elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                                        data-id="57a9d38" data-element_type="widget"
                                                        data-widget_type="image-box.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-image-box-wrapper">
                                                                <figure class="elementor-image-box-img"><a href="#"><img
                                                                    width="960" height="800"
                                                                    src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-banner4.jpg"
                                                                    class="elementor-animation-grow attachment-full size-full"
                                                                    alt loading="lazy" /></a></figure>
                                                                <div class="elementor-image-box-content">
                                                                    <div class="icon"><i aria-hidden="true"
                                                                        class="delicioz-icon- delicioz-icon-chef"></i></div>
                                                                    <h3 class="elementor-image-box-title"><a href="#">Chef
                                                                        Dieter<br />Delicioz</a></h3>
                                                                    <div class="elementor-image-box-sub-title">30 YEARS OF
                                                                        INSPIRATION</div>
                                                                    <p class="elementor-image-box-description">Everyday Chef
                                                                        Delicioz sets himself the challenge to start from
                                                                        scratch – his tools: ingenuity, curiosity, enthusiasm,
                                                                        unparalleled talent and the highest craftsmanship.</p>
                                                                    <div class="elementor-image-box-button-wrapper"><a href="#"
                                                                        class="elementor-image-box-button"><span
                                                                            class="elementor-image-box-button-text"> meet
                                                                            our team</span></a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-section elementor-top-section elementor-element elementor-element-ba8ef02 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="ba8ef02" data-element_type="section"
                                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dc22d07"
                                                data-id="dc22d07" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-12eea2e show-icon-deco-yes elementor-position-top elementor-position-below elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                                        data-id="12eea2e" data-element_type="widget"
                                                        data-widget_type="image-box.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-image-box-wrapper">
                                                                <div class="elementor-image-box-content">
                                                                    <div class="icon"><i aria-hidden="true"
                                                                        class="delicioz-icon- delicioz-icon-fork-knife"></i>
                                                                    </div>
                                                                    <h3 class="elementor-image-box-title"><a href="#">Best
                                                                        Specialties</a></h3>
                                                                    <div class="elementor-image-box-sub-title">Special Offers
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-0dae27f menulist-align-left arrow-style-1 elementor-widget elementor-widget-delicioz-menu-list"
                                                        data-id="0dae27f" data-element_type="widget"
                                                        data-widget_type="delicioz-menu-list.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-menu-list-item-wrapper">
                                                                <div class="row menu-style-4 delicioz-carousel"
                                                                    data-settings="{&quot;centerMode&quot;:false,&quot;variableWidth&quot;:false,&quot;centerPadding&quot;:&quot;50px&quot;,&quot;navigation&quot;:&quot;arrows&quot;,&quot;autoplayHoverPause&quot;:true,&quot;autoplay&quot;:true,&quot;autoplaySpeed&quot;:5000,&quot;infinite&quot;:true,&quot;items&quot;:&quot;4&quot;,&quot;$items_widescreen&quot;:&quot;4&quot;,&quot;items_laptop&quot;:&quot;4&quot;,&quot;items_tablet_extra&quot;:&quot;3&quot;,&quot;items_tablet&quot;:&quot;2&quot;,&quot;items_mobile_extra&quot;:&quot;2&quot;,&quot;items_mobile&quot;:&quot;1&quot;,&quot;centerPadding_laptop&quot;:&quot;50px&quot;,&quot;centerPadding_tablet_extra&quot;:&quot;50px&quot;,&quot;centerPadding_tablet&quot;:&quot;50px&quot;,&quot;centerPadding_mobile_extra&quot;:&quot;50px&quot;,&quot;centerPadding_mobile&quot;:&quot;50px&quot;,&quot;breakpoint_laptop&quot;:1366,&quot;breakpoint_tablet_extra&quot;:1200,&quot;breakpoint_tablet&quot;:1024,&quot;breakpoint_mobile_extra&quot;:880,&quot;breakpoint_mobile&quot;:767}">
                                                                    <div class="column-item elementor-menu-list-item">
                                                                        <div class="elementor-menu-list-image">
                                                                            <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/thumbs/best-speciaties_1-psuk36f7n7hhpivuclvqs61ynqb4sle2339y80iix4.jpg"
                                                                                alt="Spaghetti Pasta" />
                                                                        </div>
                                                                        <div class="elementor-menu-list-text">
                                                                            <div class="elementor-menu-list-title"><a
                                                                                href="#">Spaghetti Pasta</a></div>
                                                                            <div class="elementor-menu-list-description">Ground
                                                                                beef, onion, chopped, garlic, minced, green bell
                                                                                pepper, diced...</div>
                                                                            <div class="elementor-menu-list-price">$34.95</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="column-item elementor-menu-list-item">
                                                                        <div class="elementor-menu-list-image">
                                                                            <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/thumbs/best-speciaties_2-psuk398q7plcocrqw53mhnccfvx8fop93h8enueceg.jpg"
                                                                                alt="Beef Meat Steak" />
                                                                        </div>
                                                                        <div class="elementor-menu-list-text">
                                                                            <div class="elementor-menu-list-title"><a
                                                                                href="#">Beef Meat Steak</a></div>
                                                                            <div class="elementor-menu-list-description">These
                                                                                are stewed in a soy sauce and lemon juice
                                                                                mixture until the beef...</div>
                                                                            <div class="elementor-menu-list-price">$22.95</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="column-item elementor-menu-list-item">
                                                                        <div class="elementor-menu-list-image">
                                                                            <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/thumbs/best-speciaties_3-psuk3b4eldnxbkp0l5wvmmv9mnnyv2wprqjdmebk20.jpg"
                                                                                alt="Lomo De Salmon" />
                                                                        </div>
                                                                        <div class="elementor-menu-list-text">
                                                                            <div class="elementor-menu-list-title"><a
                                                                                href="#">Lomo De Salmon</a></div>
                                                                            <div class="elementor-menu-list-description">
                                                                                Tomatoes and the garlic, mix it with the olive
                                                                                oil and arrange the mixture...</div>
                                                                            <div class="elementor-menu-list-price">$36.95</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="column-item elementor-menu-list-item">
                                                                        <div class="elementor-menu-list-image">
                                                                            <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/thumbs/best-speciaties_4-psuk3d02z1qhysmaa6q4rme6tfepah46fzucky8rpk.jpg"
                                                                                alt="Steamed Lobster" />
                                                                        </div>
                                                                        <div class="elementor-menu-list-text">
                                                                            <div class="elementor-menu-list-title"><a
                                                                                href="#">Steamed Lobster</a></div>
                                                                            <div class="elementor-menu-list-description">The
                                                                                meat from steamed lobsters is more tender and
                                                                                flavorful than...</div>
                                                                            <div class="elementor-menu-list-price">$22.95</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="column-item elementor-menu-list-item">
                                                                        <div class="elementor-menu-list-image">
                                                                            <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/thumbs/best-speciaties_2-psuk398q7plcocrqw53mhnccfvx8fop93h8enueceg.jpg"
                                                                                alt="Beef Meat Steak" />
                                                                        </div>
                                                                        <div class="elementor-menu-list-text">
                                                                            <div class="elementor-menu-list-title"><a
                                                                                href="#">Beef Meat Steak</a></div>
                                                                            <div class="elementor-menu-list-description">These
                                                                                are stewed in a soy sauce and lemon juice
                                                                                mixture until the beef...</div>
                                                                            <div class="elementor-menu-list-price">$22.95</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="column-item elementor-menu-list-item">
                                                                        <div class="elementor-menu-list-image">
                                                                            <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/thumbs/best-speciaties_3-psuk3b4eldnxbkp0l5wvmmv9mnnyv2wprqjdmebk20.jpg"
                                                                                alt="Lomo De Salmon" />
                                                                        </div>
                                                                        <div class="elementor-menu-list-text">
                                                                            <div class="elementor-menu-list-title"><a
                                                                                href="#">Lomo De Salmon</a></div>
                                                                            <div class="elementor-menu-list-description">
                                                                                Tomatoes and the garlic, mix it with the olive
                                                                                oil and arrange the mixture...</div>
                                                                            <div class="elementor-menu-list-price">$36.95</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-section elementor-top-section elementor-element elementor-element-751d289 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="751d289" data-element_type="section"
                                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3e891f6"
                                                data-id="3e891f6" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-53a5857 arrow-style-1 dots-style-1 elementor-widget elementor-widget-delicioz-testimonials"
                                                        data-id="53a5857" data-element_type="widget"
                                                        data-widget_type="delicioz-testimonials.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-testimonial-item-wrapper">
                                                                <div class="row layout-3 delicioz-carousel"
                                                                    data-settings="{&quot;navigation&quot;:&quot;arrows&quot;,&quot;autoplayHoverPause&quot;:true,&quot;autoplay&quot;:true,&quot;autoplaySpeed&quot;:5000,&quot;items&quot;:1,&quot;items_laptop&quot;:&quot;1&quot;,&quot;items_tablet_extra&quot;:&quot;1&quot;,&quot;items_tablet&quot;:&quot;1&quot;,&quot;items_mobile_extra&quot;:&quot;1&quot;,&quot;items_mobile&quot;:&quot;1&quot;,&quot;loop&quot;:true,&quot;breakpoint_laptop&quot;:1366,&quot;breakpoint_tablet_extra&quot;:1200,&quot;breakpoint_tablet&quot;:1024,&quot;breakpoint_mobile_extra&quot;:880,&quot;breakpoint_mobile&quot;:767}">
                                                                    <div class="column-item elementor-testimonial-item">
                                                                        <div class="inner">
                                                                            <div class="icon">
                                                                                <i aria-hidden="true"
                                                                                    class="delicioz-icon- delicioz-icon-quote-left"></i>
                                                                            </div>
                                                                            <div class="testimonial-content">
                                                                                <div class="content">Thank you so much for the
                                                                                    wonderful meal on Saturday night celebrating
                                                                                    my birthday with my family and friends.
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="column-item elementor-testimonial-item">
                                                                        <div class="inner">
                                                                            <div class="icon">
                                                                                <i aria-hidden="true"
                                                                                    class="delicioz-icon- delicioz-icon-quote-left"></i>
                                                                            </div>
                                                                            <div class="testimonial-content">
                                                                                <div class="content">This cozy restaurant has
                                                                                    left the best impressions! Hospitable hosts,
                                                                                    delicious dishes, beautiful presentation
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="column-item elementor-testimonial-item">
                                                                        <div class="inner">
                                                                            <div class="icon">
                                                                                <i aria-hidden="true"
                                                                                    class="delicioz-icon- delicioz-icon-quote-left"></i>
                                                                            </div>
                                                                            <div class="testimonial-content">
                                                                                <div class="content">I want to say you Thank you
                                                                                    for these reviews and also giving advice
                                                                                    about some restaurants. Thank you very much.
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="column-item elementor-testimonial-item">
                                                                        <div class="inner">
                                                                            <div class="icon">
                                                                                <i aria-hidden="true"
                                                                                    class="delicioz-icon- delicioz-icon-quote-left"></i>
                                                                            </div>
                                                                            <div class="testimonial-content">
                                                                                <div class="content">I ate a taco from there and
                                                                                    it came with pineapples and that was the
                                                                                    first time I ever had pineapples with my el
                                                                                    pastor tacos</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="testimonial-image-wrap">
                                                                    <div class="line">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 25 8">
                                                                            <g class="nc-icon-wrapper">
                                                                                <path
                                                                                    d="M3.536 0l3.536 3.536L3.536 7.07 0 3.536z">
                                                                                </path>
                                                                                <path
                                                                                    d="M12.536 0l3.536 3.536-3.536 3.535L9 3.536z">
                                                                                </path>
                                                                                <path
                                                                                    d="M20.535 0l3.536 3.536-3.536 3.535-3.536-3.535z">
                                                                                </path>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                    <div class="testimonial-image-style">
                                                                        <div class="details">
                                                                            <div class="details-center">
                                                                                <div class="elementor-testimonial-image">
                                                                                    <img width="527" height="527"
                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_2.jpg"
                                                                                        class="attachment-full size-full" alt
                                                                                        loading="lazy"
                                                                                        srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_2.jpg 527w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_2-300x300.jpg 300w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_2-150x150.jpg 150w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_2-100x100.jpg 100w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_2-50x50.jpg 50w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_2-96x96.jpg 96w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_2-460x460.jpg 460w"
                                                                                        sizes="(max-width: 527px) 100vw, 527px" />
                                                                                </div>
                                                                                <span class="name">Wesley Brewer</span> <span
                                                                                    class="job">Cheft</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="details">
                                                                            <div class="details-center">
                                                                                <div class="elementor-testimonial-image">
                                                                                    <img width="600" height="600"
                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_1.jpg"
                                                                                        class="attachment-full size-full" alt
                                                                                        loading="lazy"
                                                                                        srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_1.jpg 600w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_1-300x300.jpg 300w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_1-150x150.jpg 150w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_1-100x100.jpg 100w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_1-50x50.jpg 50w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_1-96x96.jpg 96w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_1-460x460.jpg 460w"
                                                                                        sizes="(max-width: 600px) 100vw, 600px" />
                                                                                </div>
                                                                                <span class="name">Nirbhay Singh</span> <span
                                                                                    class="job">Actuary</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="details">
                                                                            <div class="details-center">
                                                                                <div class="elementor-testimonial-image">
                                                                                    <img width="500" height="500"
                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_3.jpg"
                                                                                        class="attachment-full size-full" alt
                                                                                        loading="lazy"
                                                                                        srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_3.jpg 500w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_3-300x300.jpg 300w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_3-150x150.jpg 150w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_3-100x100.jpg 100w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_3-50x50.jpg 50w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_3-96x96.jpg 96w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_3-460x460.jpg 460w"
                                                                                        sizes="(max-width: 500px) 100vw, 500px" />
                                                                                </div>
                                                                                <span class="name">Parth Pancholi</span> <span
                                                                                    class="job">Cheft</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="details">
                                                                            <div class="details-center">
                                                                                <div class="elementor-testimonial-image">
                                                                                    <img width="500" height="500"
                                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_4.jpg"
                                                                                        class="attachment-full size-full" alt
                                                                                        loading="lazy"
                                                                                        srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_4.jpg 500w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_4-300x300.jpg 300w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_4-150x150.jpg 150w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_4-100x100.jpg 100w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_4-50x50.jpg 50w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_4-96x96.jpg 96w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/image_testi_4-460x460.jpg 460w"
                                                                                        sizes="(max-width: 500px) 100vw, 500px" />
                                                                                </div>
                                                                                <span class="name">Arlo Cordell</span> <span
                                                                                    class="job">Cheft</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="current-item"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-section elementor-top-section elementor-element elementor-element-13955dc elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="13955dc" data-element_type="section"
                                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8024a80"
                                                data-id="8024a80" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-bdfe5a5 show-icon-deco-yes elementor-position-top elementor-position-below elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                                        data-id="bdfe5a5" data-element_type="widget"
                                                        data-widget_type="image-box.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-image-box-wrapper">
                                                                <div class="elementor-image-box-content">
                                                                    <div class="icon"><i aria-hidden="true"
                                                                        class="delicioz-icon- delicioz-icon-fork-knife"></i>
                                                                    </div>
                                                                    <h3 class="elementor-image-box-title"><a href="#">Best
                                                                        offers</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-7d20438 show-icon-deco-yes elementor-tabs-alignment-center elementor-tabs-view-horizontal tabs-border-type-none elementor-widget elementor-widget-tabs elementor-widget-tabs"
                                                        data-id="7d20438" data-element_type="widget"
                                                        data-widget_type="tabs.default">
                                                        <div class="elementor-widget-container">



                                                            <div class="elementor-tabs elementor-delicioz-tabs" role="tablist">
                                                                <div class="elementor-tabs-wrapper">
                                                                    <div id="elementor-tab-title-1311"
                                                                        class="elementor-tab-title elementor-tab-desktop-title elementor-active elementor-repeater-item-254be37"
                                                                        data-tab="1" role="tab"
                                                                        aria-controls="elementor-tab-content-1311">
                                                                        <span class="title">Morning </span>
                                                                    </div>
                                                                    <div id="elementor-tab-title-1312"
                                                                        class="elementor-tab-title elementor-tab-desktop-title  elementor-repeater-item-40ca863"
                                                                        data-tab="2" role="tab"
                                                                        aria-controls="elementor-tab-content-1312">
                                                                        <span class="title">Weekday lunch</span>
                                                                    </div>
                                                                    <div id="elementor-tab-title-1313"
                                                                        class="elementor-tab-title elementor-tab-desktop-title  elementor-repeater-item-0dbfa4d"
                                                                        data-tab="3" role="tab"
                                                                        aria-controls="elementor-tab-content-1313">
                                                                        <span class="title">Dinner</span>
                                                                    </div>
                                                                    <div id="elementor-tab-title-1314"
                                                                        class="elementor-tab-title elementor-tab-desktop-title  elementor-repeater-item-eba05f4"
                                                                        data-tab="4" role="tab"
                                                                        aria-controls="elementor-tab-content-1314">
                                                                        <span class="title">Wines</span>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-tabs-content-wrapper">
                                                                    <div class="elementor-tab-title elementor-tab-mobile-title elementor-active elementor-repeater-item-254be37"
                                                                        data-tab="1" role="tab"
                                                                        aria-controls="elementor-tab-content-1311">
                                                                        <span class="title">Morning </span>
                                                                    </div>
                                                                    <div id="elementor-tab-content-1311"
                                                                        class="elementor-tab-content elementor-clearfix elementor-active elementor-repeater-item-254be37"
                                                                        data-tab="1" role="tabpanel"
                                                                        aria-labelledby="elementor-tab-title-1311">
                                                                        <div data-elementor-type="section"
                                                                            data-elementor-id="2483"
                                                                            class="elementor elementor-2483">
                                                                            <div class="elementor-section elementor-top-section elementor-element elementor-element-4d831cfb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                                data-id="4d831cfb" data-element_type="section">
                                                                                <div
                                                                                    class="elementor-container elementor-column-gap-no">
                                                                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7464fe27"
                                                                                        data-id="7464fe27"
                                                                                        data-element_type="column">
                                                                                        <div
                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                            <div class="elementor-section elementor-inner-section elementor-element elementor-element-1de74bb8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                                                data-id="1de74bb8"
                                                                                                data-element_type="section">
                                                                                                <div
                                                                                                    class="elementor-container elementor-column-gap-no">
                                                                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-70b175ae"
                                                                                                        data-id="70b175ae"
                                                                                                        data-element_type="column">
                                                                                                        <div
                                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                                            <div class="elementor-element elementor-element-1d8894ba menulist-align-left arrow-style-1 elementor-widget elementor-widget-delicioz-menu-list"
                                                                                                                data-id="1d8894ba"
                                                                                                                data-element_type="widget"
                                                                                                                data-widget_type="delicioz-menu-list.default">
                                                                                                                <div
                                                                                                                    class="elementor-widget-container">
                                                                                                                    <div
                                                                                                                        class="elementor-menu-list-item-wrapper">
                                                                                                                        <div class="row menu-style-2 row"
                                                                                                                            data-elementor-columns-widescreen="1"
                                                                                                                            data-elementor-columns="1"
                                                                                                                            data-elementor-columns-laptop="1"
                                                                                                                            data-elementor-columns-tablet-extra="1"
                                                                                                                            data-elementor-columns-tablet="1"
                                                                                                                            data-elementor-columns-mobile-extra="1"
                                                                                                                            data-elementor-columns-mobile="1">
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_1.jpg"
                                                                                                                                        alt="Greek Salab " />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Greek
                                                                                                                                                Salab
                                                                                                                                            </a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $34.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Sliced
                                                                                                                                        cucumbers,
                                                                                                                                        tomatoes,
                                                                                                                                        green
                                                                                                                                        bell
                                                                                                                                        pepper,
                                                                                                                                        red
                                                                                                                                        onion,
                                                                                                                                        olives,
                                                                                                                                        and
                                                                                                                                        feta
                                                                                                                                        cheese.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_2.jpg"
                                                                                                                                        alt="Tortilla Espanola" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Tortilla
                                                                                                                                                Espanola</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $22.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Spanish
                                                                                                                                        omelette
                                                                                                                                        made
                                                                                                                                        of
                                                                                                                                        egg,
                                                                                                                                        potato,
                                                                                                                                        and
                                                                                                                                        onion
                                                                                                                                        cooked
                                                                                                                                        in
                                                                                                                                        olive
                                                                                                                                        oil.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_3.jpg"
                                                                                                                                        alt="Olivas Rellenas" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Olivas
                                                                                                                                                Rellenas</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $36.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Crab
                                                                                                                                        Salad
                                                                                                                                        Stuffed
                                                                                                                                        Avocados
                                                                                                                                        With
                                                                                                                                        Crab
                                                                                                                                        Meat,
                                                                                                                                        Red
                                                                                                                                        Onion,
                                                                                                                                        Red
                                                                                                                                        Bell
                                                                                                                                        Pepper,
                                                                                                                                        Green
                                                                                                                                        Bell
                                                                                                                                        Pepper,
                                                                                                                                        Cucumber,
                                                                                                                                        ...
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5a43e03a"
                                                                                                        data-id="5a43e03a"
                                                                                                        data-element_type="column">
                                                                                                        <div
                                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                                            <div class="elementor-element elementor-element-715775dc menulist-align-left arrow-style-1 elementor-widget elementor-widget-delicioz-menu-list"
                                                                                                                data-id="715775dc"
                                                                                                                data-element_type="widget"
                                                                                                                data-widget_type="delicioz-menu-list.default">
                                                                                                                <div
                                                                                                                    class="elementor-widget-container">
                                                                                                                    <div
                                                                                                                        class="elementor-menu-list-item-wrapper">
                                                                                                                        <div class="row menu-style-2 row"
                                                                                                                            data-elementor-columns-widescreen="1"
                                                                                                                            data-elementor-columns="1"
                                                                                                                            data-elementor-columns-laptop="1"
                                                                                                                            data-elementor-columns-tablet-extra="1"
                                                                                                                            data-elementor-columns-tablet="1"
                                                                                                                            data-elementor-columns-mobile-extra="1"
                                                                                                                            data-elementor-columns-mobile="1">
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_4.jpg"
                                                                                                                                        alt="Verduras Con Olivada" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Verduras
                                                                                                                                                Con
                                                                                                                                                Olivada</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $17.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Mira
                                                                                                                                        esta
                                                                                                                                        rica
                                                                                                                                        receta
                                                                                                                                        de
                                                                                                                                        Vegetales
                                                                                                                                        multicolor
                                                                                                                                        con
                                                                                                                                        Olivada
                                                                                                                                        para
                                                                                                                                        dipear.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_5.jpg"
                                                                                                                                        alt="Lasagne" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Lasagne</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $28.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Ground
                                                                                                                                        meats
                                                                                                                                        and
                                                                                                                                        tomato
                                                                                                                                        sauce,
                                                                                                                                        vegetables,
                                                                                                                                        cheeses
                                                                                                                                        ,
                                                                                                                                        and
                                                                                                                                        seasonings
                                                                                                                                        and
                                                                                                                                        spices
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_6.jpg"
                                                                                                                                        alt="Tokusen Wagyu" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Tokusen
                                                                                                                                                Wagyu</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $24.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Beef
                                                                                                                                        indulges
                                                                                                                                        you
                                                                                                                                        in
                                                                                                                                        the
                                                                                                                                        taste
                                                                                                                                        of
                                                                                                                                        authentic
                                                                                                                                        Japanese
                                                                                                                                        wagyu,
                                                                                                                                        premium
                                                                                                                                        beef
                                                                                                                                        with
                                                                                                                                        maximum
                                                                                                                                        tenderness
                                                                                                                                        and
                                                                                                                                        flavour.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-tab-title elementor-tab-mobile-title  elementor-repeater-item-40ca863"
                                                                        data-tab="2" role="tab"
                                                                        aria-controls="elementor-tab-content-1312">
                                                                        <span class="title">Weekday lunch</span>
                                                                    </div>
                                                                    <div id="elementor-tab-content-1312"
                                                                        class="elementor-tab-content elementor-clearfix  elementor-repeater-item-40ca863"
                                                                        data-tab="2" role="tabpanel"
                                                                        aria-labelledby="elementor-tab-title-1312">
                                                                        <div data-elementor-type="section"
                                                                            data-elementor-id="2492"
                                                                            class="elementor elementor-2492">
                                                                            <div class="elementor-section elementor-top-section elementor-element elementor-element-50f1c3cf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                                data-id="50f1c3cf" data-element_type="section">
                                                                                <div
                                                                                    class="elementor-container elementor-column-gap-no">
                                                                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4cc65c2c"
                                                                                        data-id="4cc65c2c"
                                                                                        data-element_type="column">
                                                                                        <div
                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                            <div class="elementor-section elementor-inner-section elementor-element elementor-element-cb23ee elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                                                data-id="cb23ee"
                                                                                                data-element_type="section">
                                                                                                <div
                                                                                                    class="elementor-container elementor-column-gap-no">
                                                                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1991f284"
                                                                                                        data-id="1991f284"
                                                                                                        data-element_type="column">
                                                                                                        <div
                                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                                            <div class="elementor-element elementor-element-786b3cc4 menulist-align-left arrow-style-1 elementor-widget elementor-widget-delicioz-menu-list"
                                                                                                                data-id="786b3cc4"
                                                                                                                data-element_type="widget"
                                                                                                                data-widget_type="delicioz-menu-list.default">
                                                                                                                <div
                                                                                                                    class="elementor-widget-container">
                                                                                                                    <div
                                                                                                                        class="elementor-menu-list-item-wrapper">
                                                                                                                        <div class="row menu-style-2 row"
                                                                                                                            data-elementor-columns-widescreen="1"
                                                                                                                            data-elementor-columns="1"
                                                                                                                            data-elementor-columns-laptop="1"
                                                                                                                            data-elementor-columns-tablet-extra="1"
                                                                                                                            data-elementor-columns-tablet="1"
                                                                                                                            data-elementor-columns-mobile-extra="1"
                                                                                                                            data-elementor-columns-mobile="1">
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_4.jpg"
                                                                                                                                        alt="Verduras Con Olivada" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Verduras
                                                                                                                                                Con
                                                                                                                                                Olivada</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $17.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Mira
                                                                                                                                        esta
                                                                                                                                        rica
                                                                                                                                        receta
                                                                                                                                        de
                                                                                                                                        Vegetales
                                                                                                                                        multicolor
                                                                                                                                        con
                                                                                                                                        Olivada
                                                                                                                                        para
                                                                                                                                        dipear.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_5.jpg"
                                                                                                                                        alt="Lasagne" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Lasagne</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $28.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Ground
                                                                                                                                        meats
                                                                                                                                        and
                                                                                                                                        tomato
                                                                                                                                        sauce,
                                                                                                                                        vegetables,
                                                                                                                                        cheeses
                                                                                                                                        ,
                                                                                                                                        and
                                                                                                                                        seasonings
                                                                                                                                        and
                                                                                                                                        spices
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_6.jpg"
                                                                                                                                        alt="Tokusen Wagyu" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Tokusen
                                                                                                                                                Wagyu</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $24.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Beef
                                                                                                                                        indulges
                                                                                                                                        you
                                                                                                                                        in
                                                                                                                                        the
                                                                                                                                        taste
                                                                                                                                        of
                                                                                                                                        authentic
                                                                                                                                        Japanese
                                                                                                                                        wagyu,
                                                                                                                                        premium
                                                                                                                                        beef
                                                                                                                                        with
                                                                                                                                        maximum
                                                                                                                                        tenderness
                                                                                                                                        and
                                                                                                                                        flavour.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4e507027"
                                                                                                        data-id="4e507027"
                                                                                                        data-element_type="column">
                                                                                                        <div
                                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                                            <div class="elementor-element elementor-element-1b63f54c menulist-align-left arrow-style-1 elementor-widget elementor-widget-delicioz-menu-list"
                                                                                                                data-id="1b63f54c"
                                                                                                                data-element_type="widget"
                                                                                                                data-widget_type="delicioz-menu-list.default">
                                                                                                                <div
                                                                                                                    class="elementor-widget-container">
                                                                                                                    <div
                                                                                                                        class="elementor-menu-list-item-wrapper">
                                                                                                                        <div class="row menu-style-2 row"
                                                                                                                            data-elementor-columns-widescreen="1"
                                                                                                                            data-elementor-columns="1"
                                                                                                                            data-elementor-columns-laptop="1"
                                                                                                                            data-elementor-columns-tablet-extra="1"
                                                                                                                            data-elementor-columns-tablet="1"
                                                                                                                            data-elementor-columns-mobile-extra="1"
                                                                                                                            data-elementor-columns-mobile="1">
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_1.jpg"
                                                                                                                                        alt="Greek Salab " />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Greek
                                                                                                                                                Salab
                                                                                                                                            </a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $34.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Sliced
                                                                                                                                        cucumbers,
                                                                                                                                        tomatoes,
                                                                                                                                        green
                                                                                                                                        bell
                                                                                                                                        pepper,
                                                                                                                                        red
                                                                                                                                        onion,
                                                                                                                                        olives,
                                                                                                                                        and
                                                                                                                                        feta
                                                                                                                                        cheese.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_2.jpg"
                                                                                                                                        alt="Tortilla Espanola" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Tortilla
                                                                                                                                                Espanola</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $22.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Spanish
                                                                                                                                        omelette
                                                                                                                                        made
                                                                                                                                        of
                                                                                                                                        egg,
                                                                                                                                        potato,
                                                                                                                                        and
                                                                                                                                        onion
                                                                                                                                        cooked
                                                                                                                                        in
                                                                                                                                        olive
                                                                                                                                        oil.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_3.jpg"
                                                                                                                                        alt="Olivas Rellenas" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Olivas
                                                                                                                                                Rellenas</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $36.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Crab
                                                                                                                                        Salad
                                                                                                                                        Stuffed
                                                                                                                                        Avocados
                                                                                                                                        With
                                                                                                                                        Crab
                                                                                                                                        Meat,
                                                                                                                                        Red
                                                                                                                                        Onion,
                                                                                                                                        Red
                                                                                                                                        Bell
                                                                                                                                        Pepper,
                                                                                                                                        Green
                                                                                                                                        Bell
                                                                                                                                        Pepper,
                                                                                                                                        Cucumber,
                                                                                                                                        ...
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-tab-title elementor-tab-mobile-title  elementor-repeater-item-0dbfa4d"
                                                                        data-tab="3" role="tab"
                                                                        aria-controls="elementor-tab-content-1313">
                                                                        <span class="title">Dinner</span>
                                                                    </div>
                                                                    <div id="elementor-tab-content-1313"
                                                                        class="elementor-tab-content elementor-clearfix  elementor-repeater-item-0dbfa4d"
                                                                        data-tab="3" role="tabpanel"
                                                                        aria-labelledby="elementor-tab-title-1313">
                                                                        <div data-elementor-type="section"
                                                                            data-elementor-id="2498"
                                                                            class="elementor elementor-2498">
                                                                            <div class="elementor-section elementor-top-section elementor-element elementor-element-799b504c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                                data-id="799b504c" data-element_type="section">
                                                                                <div
                                                                                    class="elementor-container elementor-column-gap-no">
                                                                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-41b0ad0b"
                                                                                        data-id="41b0ad0b"
                                                                                        data-element_type="column">
                                                                                        <div
                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                            <div class="elementor-section elementor-inner-section elementor-element elementor-element-74ef44a8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                                                data-id="74ef44a8"
                                                                                                data-element_type="section">
                                                                                                <div
                                                                                                    class="elementor-container elementor-column-gap-no">
                                                                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1afbf90f"
                                                                                                        data-id="1afbf90f"
                                                                                                        data-element_type="column">
                                                                                                        <div
                                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                                            <div class="elementor-element elementor-element-392bae26 menulist-align-left arrow-style-1 elementor-widget elementor-widget-delicioz-menu-list"
                                                                                                                data-id="392bae26"
                                                                                                                data-element_type="widget"
                                                                                                                data-widget_type="delicioz-menu-list.default">
                                                                                                                <div
                                                                                                                    class="elementor-widget-container">
                                                                                                                    <div
                                                                                                                        class="elementor-menu-list-item-wrapper">
                                                                                                                        <div class="row menu-style-2 row"
                                                                                                                            data-elementor-columns-widescreen="1"
                                                                                                                            data-elementor-columns="1"
                                                                                                                            data-elementor-columns-laptop="1"
                                                                                                                            data-elementor-columns-tablet-extra="1"
                                                                                                                            data-elementor-columns-tablet="1"
                                                                                                                            data-elementor-columns-mobile-extra="1"
                                                                                                                            data-elementor-columns-mobile="1">
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_5.jpg"
                                                                                                                                        alt="Lasagne" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Lasagne</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $28.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Ground
                                                                                                                                        meats
                                                                                                                                        and
                                                                                                                                        tomato
                                                                                                                                        sauce,
                                                                                                                                        vegetables,
                                                                                                                                        cheeses
                                                                                                                                        ,
                                                                                                                                        and
                                                                                                                                        seasonings
                                                                                                                                        and
                                                                                                                                        spices
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_6.jpg"
                                                                                                                                        alt="Tokusen Wagyu" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Tokusen
                                                                                                                                                Wagyu</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $24.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Beef
                                                                                                                                        indulges
                                                                                                                                        you
                                                                                                                                        in
                                                                                                                                        the
                                                                                                                                        taste
                                                                                                                                        of
                                                                                                                                        authentic
                                                                                                                                        Japanese
                                                                                                                                        wagyu,
                                                                                                                                        premium
                                                                                                                                        beef
                                                                                                                                        with
                                                                                                                                        maximum
                                                                                                                                        tenderness
                                                                                                                                        and
                                                                                                                                        flavour.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_4.jpg"
                                                                                                                                        alt="Verduras Con Olivada" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Verduras
                                                                                                                                                Con
                                                                                                                                                Olivada</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $17.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Mira
                                                                                                                                        esta
                                                                                                                                        rica
                                                                                                                                        receta
                                                                                                                                        de
                                                                                                                                        Vegetales
                                                                                                                                        multicolor
                                                                                                                                        con
                                                                                                                                        Olivada
                                                                                                                                        para
                                                                                                                                        dipear.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-713eca1c"
                                                                                                        data-id="713eca1c"
                                                                                                        data-element_type="column">
                                                                                                        <div
                                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                                            <div class="elementor-element elementor-element-74dc8ee9 menulist-align-left arrow-style-1 elementor-widget elementor-widget-delicioz-menu-list"
                                                                                                                data-id="74dc8ee9"
                                                                                                                data-element_type="widget"
                                                                                                                data-widget_type="delicioz-menu-list.default">
                                                                                                                <div
                                                                                                                    class="elementor-widget-container">
                                                                                                                    <div
                                                                                                                        class="elementor-menu-list-item-wrapper">
                                                                                                                        <div class="row menu-style-2 row"
                                                                                                                            data-elementor-columns-widescreen="1"
                                                                                                                            data-elementor-columns="1"
                                                                                                                            data-elementor-columns-laptop="1"
                                                                                                                            data-elementor-columns-tablet-extra="1"
                                                                                                                            data-elementor-columns-tablet="1"
                                                                                                                            data-elementor-columns-mobile-extra="1"
                                                                                                                            data-elementor-columns-mobile="1">
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_2.jpg"
                                                                                                                                        alt="Tortilla Espanola" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Tortilla
                                                                                                                                                Espanola</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $22.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Spanish
                                                                                                                                        omelette
                                                                                                                                        made
                                                                                                                                        of
                                                                                                                                        egg,
                                                                                                                                        potato,
                                                                                                                                        and
                                                                                                                                        onion
                                                                                                                                        cooked
                                                                                                                                        in
                                                                                                                                        olive
                                                                                                                                        oil.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_1.jpg"
                                                                                                                                        alt="Greek Salab " />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Greek
                                                                                                                                                Salab
                                                                                                                                            </a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $34.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Sliced
                                                                                                                                        cucumbers,
                                                                                                                                        tomatoes,
                                                                                                                                        green
                                                                                                                                        bell
                                                                                                                                        pepper,
                                                                                                                                        red
                                                                                                                                        onion,
                                                                                                                                        olives,
                                                                                                                                        and
                                                                                                                                        feta
                                                                                                                                        cheese.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_3.jpg"
                                                                                                                                        alt="Olivas Rellenas" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Olivas
                                                                                                                                                Rellenas</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $36.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Crab
                                                                                                                                        Salad
                                                                                                                                        Stuffed
                                                                                                                                        Avocados
                                                                                                                                        With
                                                                                                                                        Crab
                                                                                                                                        Meat,
                                                                                                                                        Red
                                                                                                                                        Onion,
                                                                                                                                        Red
                                                                                                                                        Bell
                                                                                                                                        Pepper,
                                                                                                                                        Green
                                                                                                                                        Bell
                                                                                                                                        Pepper,
                                                                                                                                        Cucumber,
                                                                                                                                        ...
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-tab-title elementor-tab-mobile-title  elementor-repeater-item-eba05f4"
                                                                        data-tab="4" role="tab"
                                                                        aria-controls="elementor-tab-content-1314">
                                                                        <span class="title">Wines</span>
                                                                    </div>
                                                                    <div id="elementor-tab-content-1314"
                                                                        class="elementor-tab-content elementor-clearfix  elementor-repeater-item-eba05f4"
                                                                        data-tab="4" role="tabpanel"
                                                                        aria-labelledby="elementor-tab-title-1314">
                                                                        <div data-elementor-type="section"
                                                                            data-elementor-id="2504"
                                                                            class="elementor elementor-2504">
                                                                            <div class="elementor-section elementor-top-section elementor-element elementor-element-b079760 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                                data-id="b079760" data-element_type="section">
                                                                                <div
                                                                                    class="elementor-container elementor-column-gap-no">
                                                                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1a99ee7"
                                                                                        data-id="1a99ee7"
                                                                                        data-element_type="column">
                                                                                        <div
                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                            <div class="elementor-section elementor-inner-section elementor-element elementor-element-3735654e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                                                data-id="3735654e"
                                                                                                data-element_type="section">
                                                                                                <div
                                                                                                    class="elementor-container elementor-column-gap-no">
                                                                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-57930e9f"
                                                                                                        data-id="57930e9f"
                                                                                                        data-element_type="column">
                                                                                                        <div
                                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                                            <div class="elementor-element elementor-element-5a01cd4b menulist-align-left arrow-style-1 elementor-widget elementor-widget-delicioz-menu-list"
                                                                                                                data-id="5a01cd4b"
                                                                                                                data-element_type="widget"
                                                                                                                data-widget_type="delicioz-menu-list.default">
                                                                                                                <div
                                                                                                                    class="elementor-widget-container">
                                                                                                                    <div
                                                                                                                        class="elementor-menu-list-item-wrapper">
                                                                                                                        <div class="row menu-style-2 row"
                                                                                                                            data-elementor-columns-widescreen="1"
                                                                                                                            data-elementor-columns="1"
                                                                                                                            data-elementor-columns-laptop="1"
                                                                                                                            data-elementor-columns-tablet-extra="1"
                                                                                                                            data-elementor-columns-tablet="1"
                                                                                                                            data-elementor-columns-mobile-extra="1"
                                                                                                                            data-elementor-columns-mobile="1">
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_4.jpg"
                                                                                                                                        alt="Verduras Con Olivada" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Verduras
                                                                                                                                                Con
                                                                                                                                                Olivada</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $17.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Mira
                                                                                                                                        esta
                                                                                                                                        rica
                                                                                                                                        receta
                                                                                                                                        de
                                                                                                                                        Vegetales
                                                                                                                                        multicolor
                                                                                                                                        con
                                                                                                                                        Olivada
                                                                                                                                        para
                                                                                                                                        dipear.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_5.jpg"
                                                                                                                                        alt="Lasagne" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Lasagne</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $28.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Ground
                                                                                                                                        meats
                                                                                                                                        and
                                                                                                                                        tomato
                                                                                                                                        sauce,
                                                                                                                                        vegetables,
                                                                                                                                        cheeses
                                                                                                                                        ,
                                                                                                                                        and
                                                                                                                                        seasonings
                                                                                                                                        and
                                                                                                                                        spices
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_6.jpg"
                                                                                                                                        alt="Tokusen Wagyu" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Tokusen
                                                                                                                                                Wagyu</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $24.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Beef
                                                                                                                                        indulges
                                                                                                                                        you
                                                                                                                                        in
                                                                                                                                        the
                                                                                                                                        taste
                                                                                                                                        of
                                                                                                                                        authentic
                                                                                                                                        Japanese
                                                                                                                                        wagyu,
                                                                                                                                        premium
                                                                                                                                        beef
                                                                                                                                        with
                                                                                                                                        maximum
                                                                                                                                        tenderness
                                                                                                                                        and
                                                                                                                                        flavour.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2b9d4f13"
                                                                                                        data-id="2b9d4f13"
                                                                                                        data-element_type="column">
                                                                                                        <div
                                                                                                            class="elementor-widget-wrap elementor-element-populated">
                                                                                                            <div class="elementor-element elementor-element-47a06c55 menulist-align-left arrow-style-1 elementor-widget elementor-widget-delicioz-menu-list"
                                                                                                                data-id="47a06c55"
                                                                                                                data-element_type="widget"
                                                                                                                data-widget_type="delicioz-menu-list.default">
                                                                                                                <div
                                                                                                                    class="elementor-widget-container">
                                                                                                                    <div
                                                                                                                        class="elementor-menu-list-item-wrapper">
                                                                                                                        <div class="row menu-style-2 row"
                                                                                                                            data-elementor-columns-widescreen="1"
                                                                                                                            data-elementor-columns="1"
                                                                                                                            data-elementor-columns-laptop="1"
                                                                                                                            data-elementor-columns-tablet-extra="1"
                                                                                                                            data-elementor-columns-tablet="1"
                                                                                                                            data-elementor-columns-mobile-extra="1"
                                                                                                                            data-elementor-columns-mobile="1">
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_3.jpg"
                                                                                                                                        alt="Olivas Rellenas" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Olivas
                                                                                                                                                Rellenas</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $36.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Crab
                                                                                                                                        Salad
                                                                                                                                        Stuffed
                                                                                                                                        Avocados
                                                                                                                                        With
                                                                                                                                        Crab
                                                                                                                                        Meat,
                                                                                                                                        Red
                                                                                                                                        Onion,
                                                                                                                                        Red
                                                                                                                                        Bell
                                                                                                                                        Pepper,
                                                                                                                                        Green
                                                                                                                                        Bell
                                                                                                                                        Pepper,
                                                                                                                                        Cucumber,
                                                                                                                                        ...
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_2.jpg"
                                                                                                                                        alt="Tortilla Espanola" />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Tortilla
                                                                                                                                                Espanola</a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $22.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Spanish
                                                                                                                                        omelette
                                                                                                                                        made
                                                                                                                                        of
                                                                                                                                        egg,
                                                                                                                                        potato,
                                                                                                                                        and
                                                                                                                                        onion
                                                                                                                                        cooked
                                                                                                                                        in
                                                                                                                                        olive
                                                                                                                                        oil.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                class="column-item elementor-menu-list-item">
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-image">
                                                                                                                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/starters_menu_1.jpg"
                                                                                                                                        alt="Greek Salab " />
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                    class="elementor-menu-list-text">
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-header">
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-title">
                                                                                                                                            <a
                                                                                                                                                href="#">Greek
                                                                                                                                                Salab
                                                                                                                                            </a>
                                                                                                                                        </div>
                                                                                                                                        <span
                                                                                                                                            class="elementor-menu-list-separator"></span>
                                                                                                                                        <div
                                                                                                                                            class="elementor-menu-list-price">
                                                                                                                                            $34.95
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        class="elementor-menu-list-description">
                                                                                                                                        Sliced
                                                                                                                                        cucumbers,
                                                                                                                                        tomatoes,
                                                                                                                                        green
                                                                                                                                        bell
                                                                                                                                        pepper,
                                                                                                                                        red
                                                                                                                                        onion,
                                                                                                                                        olives,
                                                                                                                                        and
                                                                                                                                        feta
                                                                                                                                        cheese.
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-efd0846 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                        data-id="efd0846" data-element_type="widget"
                                                        data-widget_type="text-editor.default">
                                                        <div class="elementor-widget-container">
                                                            During winter daily from <span
                                                                style={{ color: 'var(--e-global-color-primary)' }}
                                                            >8:30 am</span> to
                                                            <span style={{ color: 'var(--e-global-color-primary)' }}>9:00 pm</span>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-5caf6b2 elementor-align-center elementor-button-outline elementor-widget elementor-widget-button"
                                                        data-id="5caf6b2" data-element_type="widget"
                                                        data-widget_type="button.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-button-wrapper">
                                                                <a href="https://demo2.themelexus.com/delicioz/menu-list-01/"
                                                                    class="elementor-button-link elementor-button elementor-size-md"
                                                                    role="button">
                                                                    <span class="elementor-button-content-wrapper">
                                                                        <span class="elementor-button-text">View our menu</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-section elementor-top-section elementor-element elementor-element-a4a5079 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="a4a5079" data-element_type="section"
                                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-background-overlay"></div>
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-789d309"
                                                data-id="789d309" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-b968acc elementor-widget elementor-widget-heading"
                                                        data-id="b968acc" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h2 class="elementor-heading-title elementor-size-default">Online
                                                                reservation</h2>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-d1595a2 elementor-widget elementor-widget-text-editor"
                                                        data-id="d1595a2" data-element_type="widget"
                                                        data-widget_type="text-editor.default">
                                                        <div class="elementor-widget-container">
                                                            <p>Book your table for lunch or dinner.</p>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-c27b9cf contact-form-special-yes elementor-widget elementor-widget-delicioz-contactform"
                                                        data-id="c27b9cf" data-element_type="widget"
                                                        data-widget_type="delicioz-contactform.default">
                                                        <div class="elementor-widget-container">
                                                            <div role="form" class="wpcf7" id="wpcf7-f550-p20-o1" lang="en-US"
                                                                dir="ltr">
                                                                <div class="screen-reader-response">
                                                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                                    <ul></ul>
                                                                </div>
                                                                <form action="/delicioz/#wpcf7-f550-p20-o1" method="post"
                                                                    class="wpcf7-form init" novalidate="novalidate"
                                                                    data-status="init">
                                                                    <div style={{ display: 'none' }}>
                                                                        <input type="hidden" name="_wpcf7" value="550" />
                                                                        <input type="hidden" name="_wpcf7_version"
                                                                            value="5.6.2" />
                                                                        <input type="hidden" name="_wpcf7_locale"
                                                                            value="en_US" />
                                                                        <input type="hidden" name="_wpcf7_unit_tag"
                                                                            value="wpcf7-f550-p20-o1" />
                                                                        <input type="hidden" name="_wpcf7_container_post"
                                                                            value="20" />
                                                                        <input type="hidden" name="_wpcf7_posted_data_hash"
                                                                            value />
                                                                    </div>
                                                                    <div class="row row-form">
                                                                        <div class="column-tablet-6 column-12">
                                                                            <p><span class="wpcf7-form-control-wrap"
                                                                                data-name="your-name"><input type="text"
                                                                                    name="your-name" value size="40"
                                                                                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                    aria-required="true"
                                                                                    aria-invalid="false"
                                                                                    placeholder="Your Name" /></span></p>
                                                                        </div>
                                                                        <div class="column-tablet-6 column-12">
                                                                            <p><span class="wpcf7-form-control-wrap"
                                                                                data-name="phone-number"><input type="text"
                                                                                    name="phone-number" value size="40"
                                                                                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                    aria-required="true"
                                                                                    aria-invalid="false"
                                                                                    placeholder="Phone Number" /></span></p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row row-form">
                                                                        <div class="column-tablet-4 column-12">
                                                                            <p><span class="wpcf7-form-control-wrap"
                                                                                data-name="menu-498"><select name="menu-498"
                                                                                    class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                                                                                    aria-required="true"
                                                                                    aria-invalid="false">
                                                                                    <option value="1 Person">1 Person
                                                                                    </option>
                                                                                    <option value="2 Person">2 Person
                                                                                    </option>
                                                                                    <option value="3 Person">3 Person
                                                                                    </option>
                                                                                    <option value="4 Person">4 Person
                                                                                    </option>
                                                                                    <option value="5 Person">5 Person
                                                                                    </option>
                                                                                </select></span></p>
                                                                        </div>
                                                                        <div class="column-tablet-4 column-12">
                                                                            <p><span class="wpcf7-form-control-wrap"
                                                                                data-name="date-35"><input type="date"
                                                                                    name="date-35" value="2022-12-01"
                                                                                    class="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date"
                                                                                    aria-required="true"
                                                                                    aria-invalid="false" /></span></p>
                                                                        </div>
                                                                        <div class="column-tablet-4 column-12">
                                                                            <p><span class="wpcf7-form-control-wrap"
                                                                                data-name="menu-498"><select name="menu-498"
                                                                                    class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                                                                                    aria-required="true"
                                                                                    aria-invalid="false">
                                                                                    <option value="07:00 pm">07:00 pm
                                                                                    </option>
                                                                                    <option value="08:00 pm">08:00 pm
                                                                                    </option>
                                                                                    <option value="09:00 pm">09:00 pm
                                                                                    </option>
                                                                                    <option value="10:00 pm">10:00 pm
                                                                                    </option>
                                                                                    <option value="11:00 pm">11:00 pm
                                                                                    </option>
                                                                                </select></span></p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row row-form">
                                                                        <div class="column-12">
                                                                            <p><span class="wpcf7-form-control-wrap"
                                                                                data-name="your-message"><textarea
                                                                                    name="your-message" cols="40" rows="5"
                                                                                    class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                                                    aria-required="true"
                                                                                    aria-invalid="false"
                                                                                    placeholder="Special Requests"></textarea></span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="wpcf7-button wpcf7-button-2"><input
                                                                        type="submit" value="Book A Table"
                                                                        class="wpcf7-form-control has-spinner wpcf7-submit" />
                                                                    </div>
                                                                    <div class="wpcf7-response-output" aria-hidden="true"></div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0d5a6e5"
                                                data-id="0d5a6e5" data-element_type="column"
                                                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-e745f83 elementor-position-top elementor-position-below elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                                        data-id="e745f83" data-element_type="widget"
                                                        data-widget_type="image-box.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-image-box-wrapper">
                                                                <div class="elementor-image-box-content">
                                                                    <div class="icon"><i aria-hidden="true"
                                                                        class="delicioz-icon- delicioz-icon-table-u"></i>
                                                                    </div>
                                                                    <h3 class="elementor-image-box-title"><a href="#">Contact
                                                                        Us</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-937b86f elementor-widget elementor-widget-text-editor"
                                                        data-id="937b86f" data-element_type="widget"
                                                        data-widget_type="text-editor.default">
                                                        <div class="elementor-widget-container">
                                                            <p>Booking request</p>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-e98d0d3 elementor-widget elementor-widget-heading"
                                                        data-id="e98d0d3" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h2 class="elementor-heading-title elementor-size-default">
                                                                +39-055-123456</h2>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-c952996 elementor-widget elementor-widget-heading"
                                                        data-id="c952996" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h2 class="elementor-heading-title elementor-size-default">Location
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-946f316 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                        data-id="946f316" data-element_type="widget"
                                                        data-widget_type="text-editor.default">
                                                        <div class="elementor-widget-container">
                                                            <p>Delicioz Restaurant &amp; Fine dining, 71 Madison Ave, New York,
                                                                USA</p>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-ece4976 elementor-widget elementor-widget-spacer"
                                                        data-id="ece4976" data-element_type="widget"
                                                        data-widget_type="spacer.default">
                                                        <div class="elementor-widget-container">



                                                            <div class="elementor-spacer">
                                                                <div class="elementor-spacer-inner"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-ef04b12 elementor-widget__width-initial elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                        data-id="ef04b12" data-element_type="widget"
                                                        data-widget_type="divider.default">
                                                        <div class="elementor-widget-container">



                                                            <div class="elementor-divider">
                                                                <span class="elementor-divider-separator">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-section elementor-inner-section elementor-element elementor-element-7bc0aaf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                        data-id="7bc0aaf" data-element_type="section">
                                                        <div class="elementor-container elementor-column-gap-no">
                                                            <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-21453ef"
                                                                data-id="21453ef" data-element_type="column">
                                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-6b0e7ee elementor-widget elementor-widget-heading"
                                                                        data-id="6b0e7ee" data-element_type="widget"
                                                                        data-widget_type="heading.default">
                                                                        <div class="elementor-widget-container">
                                                                            <h2
                                                                                class="elementor-heading-title elementor-size-default">
                                                                                Lunch Time</h2>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-element elementor-element-492eb20 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                                        data-id="492eb20" data-element_type="widget"
                                                                        data-widget_type="text-editor.default">
                                                                        <div class="elementor-widget-container">
                                                                            Monday to Sunday<br />
                                                                            10.30 am &#8211; 3.00 pm </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9bcdf57"
                                                                data-id="9bcdf57" data-element_type="column">
                                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-06b2a7a elementor-widget elementor-widget-heading"
                                                                        data-id="06b2a7a" data-element_type="widget"
                                                                        data-widget_type="heading.default">
                                                                        <div class="elementor-widget-container">
                                                                            <h2
                                                                                class="elementor-heading-title elementor-size-default">
                                                                                Dinner Time</h2>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-element elementor-element-f66fb0d elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                                        data-id="f66fb0d" data-element_type="widget"
                                                                        data-widget_type="text-editor.default">
                                                                        <div class="elementor-widget-container">
                                                                            Monday to Sunday<br />
                                                                            5.30 am &#8211; 11.00 pm </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-section elementor-top-section elementor-element elementor-element-b0f6ce9 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="b0f6ce9" data-element_type="section"
                                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-73a9cdf"
                                                data-id="73a9cdf" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-890586a show-icon-deco-yes elementor-position-top elementor-position-below elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                                        data-id="890586a" data-element_type="widget"
                                                        data-widget_type="image-box.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-image-box-wrapper">
                                                                <div class="elementor-image-box-content">
                                                                    <div class="icon"><i aria-hidden="true"
                                                                        class="delicioz-icon- delicioz-icon-event-like"></i>
                                                                    </div>
                                                                    <h3 class="elementor-image-box-title"><a href="#">News &
                                                                        Events</a></h3>
                                                                    <div class="elementor-image-box-sub-title">Today Specials
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-fc856c3 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image"
                                                        data-id="fc856c3" data-element_type="widget"
                                                        data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                                        data-widget_type="image.default">
                                                        <div class="elementor-widget-container">
                                                            <img width="240" height="200"
                                                                src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/h1-bg05.png"
                                                                class="attachment-full size-full" alt loading="lazy" />
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-55f6181 arrow-style-1 elementor-widget elementor-widget-delicioz-post-grid"
                                                        data-id="55f6181" data-element_type="widget"
                                                        data-widget_type="delicioz-post-grid.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-post-wrapper layout-post-style-2">
                                                                <div class=" delicioz-carousel"
                                                                    data-settings="{&quot;centerMode&quot;:false,&quot;variableWidth&quot;:false,&quot;centerPadding&quot;:&quot;50px&quot;,&quot;navigation&quot;:&quot;none&quot;,&quot;autoplayHoverPause&quot;:true,&quot;autoplay&quot;:true,&quot;autoplaySpeed&quot;:5000,&quot;infinite&quot;:true,&quot;items&quot;:3,&quot;$items_widescreen&quot;:3,&quot;items_laptop&quot;:&quot;3&quot;,&quot;items_tablet_extra&quot;:&quot;3&quot;,&quot;items_tablet&quot;:&quot;2&quot;,&quot;items_mobile_extra&quot;:&quot;2&quot;,&quot;items_mobile&quot;:&quot;1&quot;,&quot;centerPadding_laptop&quot;:&quot;50px&quot;,&quot;centerPadding_tablet_extra&quot;:&quot;50px&quot;,&quot;centerPadding_tablet&quot;:&quot;50px&quot;,&quot;centerPadding_mobile_extra&quot;:&quot;50px&quot;,&quot;centerPadding_mobile&quot;:&quot;50px&quot;,&quot;breakpoint_laptop&quot;:1366,&quot;breakpoint_tablet_extra&quot;:1200,&quot;breakpoint_tablet&quot;:1024,&quot;breakpoint_mobile_extra&quot;:880,&quot;breakpoint_mobile&quot;:767}">
                                                                    <div
                                                                        class="column-item post-style-2 post-129 post type-post status-publish format-standard has-post-thumbnail hentry category-decoration category-healthy-food tag-desserts tag-recipes tag-style">
                                                                        <div class="post-inner">
                                                                            <div class="posted-on"><a
                                                                                href="https://demo2.themelexus.com/delicioz/how-to-choose-the-best-type-of-combi-oven/"
                                                                                rel="bookmark">August 22, 2022</a></div>
                                                                            <div class="post-thumbnail"><img loading="lazy"
                                                                                width="820" height="500"
                                                                                src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/blog_1-820x500.jpg"
                                                                                class="attachment-delicioz-post-grid size-delicioz-post-grid wp-post-image"
                                                                                alt /></div>
                                                                            <div class="entry-content">
                                                                                <h3 class="entry-title"><a
                                                                                    href="https://demo2.themelexus.com/delicioz/how-to-choose-the-best-type-of-combi-oven/"
                                                                                    rel="bookmark">How to choose the best
                                                                                    type of combi oven</a></h3>
                                                                                <div class="entry-meta">
                                                                                    <div class="categories-link"><span
                                                                                        class="screen-reader-text">Categories</span><a
                                                                                            href="https://demo2.themelexus.com/delicioz/category/decoration/"
                                                                                            rel="category tag">Decoration</a><span
                                                                                                class="dot">,</span><a
                                                                                                    href="https://demo2.themelexus.com/delicioz/category/healthy-food/"
                                                                                                    rel="category tag">Healthy Food</a>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="excerpt-content">Are you looking for
                                                                                    a solid cloud-based point of sale system?
                                                                                    Does your restaurant offer delivery, and do
                                                                                    you need a way to manage it? If so, Sapaad
                                                                                    may be right for you.</div>
                                                                                <div class="more-link-wrap">
                                                                                    <a class="more-link"
                                                                                        href="https://demo2.themelexus.com/delicioz/how-to-choose-the-best-type-of-combi-oven/">
                                                                                        <span>Read More</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="column-item post-style-2 post-130 post type-post status-publish format-standard has-post-thumbnail hentry category-company-news category-lifestyle tag-menu tag-recipes tag-restaurant">
                                                                        <div class="post-inner">
                                                                            <div class="posted-on"><a
                                                                                href="https://demo2.themelexus.com/delicioz/10-restaurant-patio-decor-ideas-for-summer/"
                                                                                rel="bookmark">August 22, 2022</a></div>
                                                                            <div class="post-thumbnail"><img width="820"
                                                                                height="500"
                                                                                src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/blog_2-820x500.jpg"
                                                                                class="attachment-delicioz-post-grid size-delicioz-post-grid wp-post-image"
                                                                                alt loading="lazy" /></div>
                                                                            <div class="entry-content">
                                                                                <h3 class="entry-title"><a
                                                                                    href="https://demo2.themelexus.com/delicioz/10-restaurant-patio-decor-ideas-for-summer/"
                                                                                    rel="bookmark">10 Restaurant patio decor
                                                                                    ideas for summer</a></h3>
                                                                                <div class="entry-meta">
                                                                                    <div class="categories-link"><span
                                                                                        class="screen-reader-text">Categories</span><a
                                                                                            href="https://demo2.themelexus.com/delicioz/category/company-news/"
                                                                                            rel="category tag">Company
                                                                                            News</a><span class="dot">,</span><a
                                                                                                href="https://demo2.themelexus.com/delicioz/category/lifestyle/"
                                                                                                rel="category tag">Lifestyle</a>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="excerpt-content">A restaurant’s
                                                                                    success is often only seen from the
                                                                                    front-of-house. The delicious food,
                                                                                    extravagant menus, and mood setting decor
                                                                                    all play a role in that success.</div>
                                                                                <div class="more-link-wrap">
                                                                                    <a class="more-link"
                                                                                        href="https://demo2.themelexus.com/delicioz/10-restaurant-patio-decor-ideas-for-summer/">
                                                                                        <span>Read More</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="column-item post-style-2 post-131 post type-post status-publish format-standard has-post-thumbnail hentry category-news category-tips-trick tag-dinning tag-menu tag-restaurant">
                                                                        <div class="post-inner">
                                                                            <div class="posted-on"><a
                                                                                href="https://demo2.themelexus.com/delicioz/8-restaurant-entertainment-ideas-to-generate-buzz/"
                                                                                rel="bookmark">August 22, 2022</a></div>
                                                                            <div class="post-thumbnail"><img width="820"
                                                                                height="500"
                                                                                src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/blog_13-820x500.jpg"
                                                                                class="attachment-delicioz-post-grid size-delicioz-post-grid wp-post-image"
                                                                                alt loading="lazy" /></div>
                                                                            <div class="entry-content">
                                                                                <h3 class="entry-title"><a
                                                                                    href="https://demo2.themelexus.com/delicioz/8-restaurant-entertainment-ideas-to-generate-buzz/"
                                                                                    rel="bookmark">8 Restaurant
                                                                                    entertainment ideas to generate buzz</a>
                                                                                </h3>
                                                                                <div class="entry-meta">
                                                                                    <div class="categories-link"><span
                                                                                        class="screen-reader-text">Categories</span><a
                                                                                            href="https://demo2.themelexus.com/delicioz/category/news/"
                                                                                            rel="category tag">News</a><span
                                                                                                class="dot">,</span><a
                                                                                                    href="https://demo2.themelexus.com/delicioz/category/tips-trick/"
                                                                                                    rel="category tag">Tips &amp;
                                                                                            Trick</a></div>
                                                                                </div>
                                                                                <div class="excerpt-content">Combination ovens
                                                                                    combine three cooking methods in one
                                                                                    appliance. Convection is the circulation of
                                                                                    dry heat and can be used for baking bread or
                                                                                    roasting meats. Steam can be used to
                                                                                    delicately cook fish or rice, or vegetables
                                                                                    to achieve the right texture.</div>
                                                                                <div class="more-link-wrap">
                                                                                    <a class="more-link"
                                                                                        href="https://demo2.themelexus.com/delicioz/8-restaurant-entertainment-ideas-to-generate-buzz/">
                                                                                        <span>Read More</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="column-item post-style-2 post-132 post type-post status-publish format-standard has-post-thumbnail hentry category-decoration category-tips-trick tag-dinning tag-food tag-menu">
                                                                        <div class="post-inner">
                                                                            <div class="posted-on"><a
                                                                                href="https://demo2.themelexus.com/delicioz/why-food-photography-styling-are-importan/"
                                                                                rel="bookmark">August 22, 2022</a></div>
                                                                            <div class="post-thumbnail"><img width="820"
                                                                                height="500"
                                                                                src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/blog_14-820x500.jpg"
                                                                                class="attachment-delicioz-post-grid size-delicioz-post-grid wp-post-image"
                                                                                alt loading="lazy" /></div>
                                                                            <div class="entry-content">
                                                                                <h3 class="entry-title"><a
                                                                                    href="https://demo2.themelexus.com/delicioz/why-food-photography-styling-are-importan/"
                                                                                    rel="bookmark">Why Food Photography
                                                                                    &#038; Styling are importan?</a></h3>
                                                                                <div class="entry-meta">
                                                                                    <div class="categories-link"><span
                                                                                        class="screen-reader-text">Categories</span><a
                                                                                            href="https://demo2.themelexus.com/delicioz/category/decoration/"
                                                                                            rel="category tag">Decoration</a><span
                                                                                                class="dot">,</span><a
                                                                                                    href="https://demo2.themelexus.com/delicioz/category/tips-trick/"
                                                                                                    rel="category tag">Tips &amp;
                                                                                            Trick</a></div>
                                                                                </div>
                                                                                <div class="excerpt-content">Pre-pandemic, your
                                                                                    restaurant’s front-of-house was just what
                                                                                    your guests saw when they visited your
                                                                                    restaurant. It was everything from your
                                                                                    dining room to the hostess booth, employees,
                                                                                    and open kitchen space.</div>
                                                                                <div class="more-link-wrap">
                                                                                    <a class="more-link"
                                                                                        href="https://demo2.themelexus.com/delicioz/why-food-photography-styling-are-importan/">
                                                                                        <span>Read More</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="column-item post-style-2 post-133 post type-post status-publish format-standard has-post-thumbnail hentry category-decoration category-news tag-recipes tag-restaurant tag-style">
                                                                        <div class="post-inner">
                                                                            <div class="posted-on"><a
                                                                                href="https://demo2.themelexus.com/delicioz/celebrate-bastille-day-with-a-classic-croquembouche/"
                                                                                rel="bookmark">July 30, 2022</a></div>
                                                                            <div class="post-thumbnail"><img width="820"
                                                                                height="500"
                                                                                src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/blog_15-820x500.jpg"
                                                                                class="attachment-delicioz-post-grid size-delicioz-post-grid wp-post-image"
                                                                                alt loading="lazy" /></div>
                                                                            <div class="entry-content">
                                                                                <h3 class="entry-title"><a
                                                                                    href="https://demo2.themelexus.com/delicioz/celebrate-bastille-day-with-a-classic-croquembouche/"
                                                                                    rel="bookmark">Celebrate Bastille Day
                                                                                    with a classic croquembouche</a></h3>
                                                                                <div class="entry-meta">
                                                                                    <div class="categories-link"><span
                                                                                        class="screen-reader-text">Categories</span><a
                                                                                            href="https://demo2.themelexus.com/delicioz/category/decoration/"
                                                                                            rel="category tag">Decoration</a><span
                                                                                                class="dot">,</span><a
                                                                                                    href="https://demo2.themelexus.com/delicioz/category/news/"
                                                                                                    rel="category tag">News</a></div>
                                                                                </div>
                                                                                <div class="excerpt-content">Combination ovens
                                                                                    combine three cooking methods in one
                                                                                    appliance. Convection is the circulation of
                                                                                    dry heat and can be used for baking bread or
                                                                                    roasting meats. Steam can be used to
                                                                                    delicately cook fish or rice, or vegetables
                                                                                    to achieve the right texture.</div>
                                                                                <div class="more-link-wrap">
                                                                                    <a class="more-link"
                                                                                        href="https://demo2.themelexus.com/delicioz/celebrate-bastille-day-with-a-classic-croquembouche/">
                                                                                        <span>Read More</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="column-item post-style-2 post-134 post type-post status-publish format-standard has-post-thumbnail hentry category-healthy-food category-tips-trick tag-dinning tag-recipes tag-restaurant">
                                                                        <div class="post-inner">
                                                                            <div class="posted-on"><a
                                                                                href="https://demo2.themelexus.com/delicioz/what-is-the-secret-to-eating-healthily-this-summer/"
                                                                                rel="bookmark">July 30, 2022</a></div>
                                                                            <div class="post-thumbnail"><img width="820"
                                                                                height="500"
                                                                                src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/blog_4-820x500.jpg"
                                                                                class="attachment-delicioz-post-grid size-delicioz-post-grid wp-post-image"
                                                                                alt loading="lazy" /></div>
                                                                            <div class="entry-content">
                                                                                <h3 class="entry-title"><a
                                                                                    href="https://demo2.themelexus.com/delicioz/what-is-the-secret-to-eating-healthily-this-summer/"
                                                                                    rel="bookmark">What is the secret to
                                                                                    eating healthily this summer?</a></h3>
                                                                                <div class="entry-meta">
                                                                                    <div class="categories-link"><span
                                                                                        class="screen-reader-text">Categories</span><a
                                                                                            href="https://demo2.themelexus.com/delicioz/category/healthy-food/"
                                                                                            rel="category tag">Healthy
                                                                                            Food</a><span class="dot">,</span><a
                                                                                                href="https://demo2.themelexus.com/delicioz/category/tips-trick/"
                                                                                                rel="category tag">Tips &amp;
                                                                                            Trick</a></div>
                                                                                </div>
                                                                                <div class="excerpt-content">Combination ovens
                                                                                    combine three cooking methods in one
                                                                                    appliance. Convection is the circulation of
                                                                                    dry heat and can be used for baking bread or
                                                                                    roasting meats. Steam can be used to
                                                                                    delicately cook fish or rice, or vegetables
                                                                                    to achieve the right texture.</div>
                                                                                <div class="more-link-wrap">
                                                                                    <a class="more-link"
                                                                                        href="https://demo2.themelexus.com/delicioz/what-is-the-secret-to-eating-healthily-this-summer/">
                                                                                        <span>Read More</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-c7a4859 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                        data-id="c7a4859" data-element_type="widget"
                                                        data-widget_type="text-editor.default">
                                                        <div class="elementor-widget-container">
                                                            <p>Read the news of our restaurant, recipes for delicious
                                                                fears,<br />tips for your home kitchen in our blog!</p>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-fcd8648 elementor-align-center elementor-button-outline elementor-widget elementor-widget-button"
                                                        data-id="fcd8648" data-element_type="widget"
                                                        data-widget_type="button.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-button-wrapper">
                                                                <a href="https://demo2.themelexus.com/delicioz/blog/"
                                                                    class="elementor-button-link elementor-button elementor-size-md"
                                                                    role="button">
                                                                    <span class="elementor-button-content-wrapper">
                                                                        <span class="elementor-button-text">view our blog</span>
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
                            </main>
                        </div>
                    </div>
                </div>
                <div class="footer-width-fixer">
                    <div data-elementor-type="wp-post" data-elementor-id="98" class="elementor elementor-98">
                        <div class="elementor-section elementor-top-section elementor-element elementor-element-cb25823 elementor-section-content-middle elementor-section-stretched elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="cb25823" data-element_type="section"
                            data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                            <div class="elementor-container elementor-column-gap-no">
                                <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c2b332e"
                                    data-id="c2b332e" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <div class="elementor-element elementor-element-79cef6e elementor-widget elementor-widget-delicioz-search"
                                            data-id="79cef6e" data-element_type="widget"
                                            data-widget_type="delicioz-search.default">
                                            <div class="elementor-widget-container">
                                                <div class="site-header-search">
                                                    <a href="#" class="button-search-popup">
                                                        <i class="delicioz-icon-search"></i>
                                                        <span class="content">Search</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="make-column-clickable-elementor elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-810d48b"
                                    style={{ cursor: 'pointer' }}
                                    data-column-clickable="https://demo2.themelexus.com/radist/my-account/"
                                    data-column-clickable-blank="_self" data-id="810d48b" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <div class="elementor-element elementor-element-689b65e elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                                            data-id="689b65e" data-element_type="widget" data-widget_type="icon-box.default">
                                            <div class="elementor-widget-container">
                                                <link rel="stylesheet"
                                                    href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/custom-widget-icon-box.min.css?ver=1661932589" />
                                                <div class="elementor-icon-box-wrapper">
                                                    <div class="elementor-icon-box-icon">
                                                        <a class="elementor-icon elementor-animation-"
                                                            href="https://demo2.themelexus.com/delicioz/my-account/">
                                                            <i aria-hidden="true"
                                                                class="delicioz-icon- delicioz-icon-account"></i> </a>
                                                    </div>
                                                    <div class="elementor-icon-box-content">
                                                        <h3 class="elementor-icon-box-title">
                                                            <a href="https://demo2.themelexus.com/delicioz/my-account/">
                                                                Account </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a3bae29"
                                    data-id="a3bae29" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <div class="elementor-element elementor-element-08c35d8 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                                            data-id="08c35d8" data-element_type="widget" data-widget_type="icon-box.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-icon-box-wrapper">
                                                    <div class="elementor-icon-box-icon">
                                                        <a class="elementor-icon elementor-animation-"
                                                            href="https://demo2.themelexus.com/delicioz/cart/">
                                                            <i aria-hidden="true"
                                                                class="delicioz-icon- delicioz-icon-cart-2"></i> </a>
                                                    </div>
                                                    <div class="elementor-icon-box-content">
                                                        <h3 class="elementor-icon-box-title">
                                                            <a href="https://demo2.themelexus.com/delicioz/cart/">
                                                                Cart </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">
                    <div class="footer-width-fixer">
                        <div data-elementor-type="wp-post" data-elementor-id="92" class="elementor elementor-92">
                            <div class="elementor-section elementor-top-section elementor-element elementor-element-32b9d2d elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="32b9d2d" data-element_type="section"
                                data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                <div class="elementor-container elementor-column-gap-no">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d9d4eb2"
                                        data-id="d9d4eb2" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-a714f29 elementor-widget__width-auto elementor-widget elementor-widget-site-logo"
                                                data-id="a714f29" data-element_type="widget"
                                                data-widget_type="site-logo.default">
                                                <div class="elementor-widget-container">
                                                    <div class="hfe-site-logo">
                                                        <a data-elementor-open-lightbox class="elementor-clickable"
                                                            href="https://demo2.themelexus.com/delicioz">
                                                            <div class="hfe-site-logo-set">
                                                                <div class="hfe-site-logo-container">
                                                                    <img class="hfe-site-logo-img elementor-animation-"
                                                                        src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/logo.svg"
                                                                        alt />
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-section elementor-inner-section elementor-element elementor-element-4a03cff elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                                data-id="4a03cff" data-element_type="section">
                                                <div class="elementor-container elementor-column-gap-no">
                                                    <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-1a21a13"
                                                        data-id="1a21a13" data-element_type="column">
                                                        <div class="elementor-widget-wrap elementor-element-populated">
                                                            <div class="elementor-element elementor-element-7bf769b elementor-widget elementor-widget-heading"
                                                                data-id="7bf769b" data-element_type="widget"
                                                                data-widget_type="heading.default">
                                                                <div class="elementor-widget-container">
                                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                                        About restaurant</h2>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-13bacbf elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                                data-id="13bacbf" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div class="elementor-widget-container">
                                                                    Be the first to know about new
                                                                    collections, special events, and what’s
                                                                    going on at Our Place. </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-f378fa4 e-grid-align-tablet-left e-grid-align-mobile_extra-left e-grid-align-mobile-center elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons"
                                                                data-id="f378fa4" data-element_type="widget"
                                                                data-widget_type="social-icons.default">
                                                                <div class="elementor-widget-container">



                                                                    <div class="elementor-social-icons-wrapper elementor-grid">
                                                                        <span class="elementor-grid-item">
                                                                            <a class="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-8354e4c"
                                                                                href="https://www.facebook.com/themelexus"
                                                                                target="_blank">
                                                                                <span
                                                                                    class="elementor-screen-only">Facebook-f</span>
                                                                                <i class="fab fa-facebook-f"></i> </a>
                                                                        </span>
                                                                        <span class="elementor-grid-item">
                                                                            <a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-0bf8350"
                                                                                href="https://twitter.com/themelexus"
                                                                                target="_blank">
                                                                                <span
                                                                                    class="elementor-screen-only">Twitter</span>
                                                                                <i class="fab fa-twitter"></i> </a>
                                                                        </span>
                                                                        <span class="elementor-grid-item">
                                                                            <a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-bfea011"
                                                                                href="https://www.instagram.com/themelexus/"
                                                                                target="_blank">
                                                                                <span
                                                                                    class="elementor-screen-only">Instagram</span>
                                                                                <i class="fab fa-instagram"></i> </a>
                                                                        </span>
                                                                        <span class="elementor-grid-item">
                                                                            <a class="elementor-icon elementor-social-icon elementor-social-icon-pinterest elementor-repeater-item-0efd42d"
                                                                                href="https://www.pinterest.com/themelexus/"
                                                                                target="_blank">
                                                                                <span
                                                                                    class="elementor-screen-only">Pinterest</span>
                                                                                <i class="fab fa-pinterest"></i> </a>
                                                                        </span>
                                                                        <span class="elementor-grid-item">
                                                                            <a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-f83786e"
                                                                                href="https://www.youtube.com/themelexus/"
                                                                                target="_blank">
                                                                                <span
                                                                                    class="elementor-screen-only">Youtube</span>
                                                                                <i class="fab fa-youtube"></i> </a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-632e151"
                                                        data-id="632e151" data-element_type="column">
                                                        <div class="elementor-widget-wrap elementor-element-populated">
                                                            <div class="elementor-element elementor-element-1546c8f elementor-widget elementor-widget-heading"
                                                                data-id="1546c8f" data-element_type="widget"
                                                                data-widget_type="heading.default">
                                                                <div class="elementor-widget-container">
                                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                                        get news & ofers</h2>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-0d1148f elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                                data-id="0d1148f" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div class="elementor-widget-container">
                                                                    Subscrible &amp; get <a style={{ fontWeight: 'bold' }}>10%</a>
                                                                    discount. Get E-mail updates about our latest shop and<a
                                                                        style={{ fontWeight: 'bold' }}> special offers.</a> </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-5712562 elementor-widget__width-initial form-mailchimp-style-1 elementor-widget elementor-widget-delicioz-mailchmip"
                                                                data-id="5712562" data-element_type="widget"
                                                                data-widget_type="delicioz-mailchmip.default">
                                                                <div class="elementor-widget-container">
                                                                    <div class="form-style">
                                                                        {/* <script>(function () {
                                                                            window.mc4wp = window.mc4wp || {
                                                                                listeners: [],
                                                                                forms: {
                                                                                    on: function (evt, cb) {
                                                                                        window.mc4wp.listeners.push(
                                                                                            {
                                                                                                event: evt,
                                                                                                callback: cb
                                                                                            }
                                                                                        );
                                                                                    }
                                                                                }
                                                                            }
                                                                        })();
                                                                        </script> */}
                                                                        <form id="mc4wp-form-1"
                                                                            class="mc4wp-form mc4wp-form-244" method="post"
                                                                            data-id="244" data-name>
                                                                            <div class="mc4wp-form-fields">
                                                                                <p class="form-input">
                                                                                    <i aria-hidden="true"
                                                                                        class="delicioz-icon-mail-check-line"></i><input
                                                                                        type="email" name="EMAIL"
                                                                                        placeholder="Your email"
                                                                                        autocomplete="off" required />
                                                                                </p>
                                                                                <p class="form-button">
                                                                                    <button type="submit"
                                                                                        value="Sign up"><span>subscribe</span></button>
                                                                                </p>
                                                                            </div><label style={{ display: 'none', important: 'true' }}>Leave
                                                                                this field empty if you're human: <input
                                                                                    type="text" name="_mc4wp_honeypot" value
                                                                                    tabindex="-1"
                                                                                    autocomplete="off" /></label><input
                                                                                type="hidden" name="_mc4wp_timestamp"
                                                                                value="1720244147" /><input type="hidden"
                                                                                    name="_mc4wp_form_id" value="244" /><input
                                                                                type="hidden" name="_mc4wp_form_element_id"
                                                                                value="mc4wp-form-1" />
                                                                            <div class="mc4wp-response"></div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-cdf327b"
                                                        data-id="cdf327b" data-element_type="column">
                                                        <div class="elementor-widget-wrap elementor-element-populated">
                                                            <div class="elementor-element elementor-element-8bddd94 elementor-widget elementor-widget-heading"
                                                                data-id="8bddd94" data-element_type="widget"
                                                                data-widget_type="heading.default">
                                                                <div class="elementor-widget-container">
                                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                                        contact us</h2>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-04df446 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                                data-id="04df446" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div class="elementor-widget-container">
                                                                    Delicioz Restaurant &amp; Fine dining,
                                                                    71 Madison Ave, New York, USA
                                                                </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-8b0daca elementor-widget-mobile_extra__width-inherit elementor-widget elementor-widget-text-editor"
                                                                data-id="8b0daca" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div class="elementor-widget-container">
                                                                    +39-055-123456,+39-066-666999 </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-b07bab7 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                                data-id="b07bab7" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div class="elementor-widget-container">
                                                                    <a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                                        data-cfemail="a9dbccdaccdbdfc8ddc0c6c7dae9ccd1c8c4d9c5cc87cac6c4">[email&#160;protected]</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-section elementor-inner-section elementor-element elementor-element-c21bf80 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                                data-id="c21bf80" data-element_type="section">
                                                <div class="elementor-container elementor-column-gap-no">
                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3fee095"
                                                        data-id="3fee095" data-element_type="column">
                                                        <div class="elementor-widget-wrap elementor-element-populated">
                                                            <div class="elementor-element elementor-element-109d095 elementor-widget elementor-widget-text-editor"
                                                                data-id="109d095" data-element_type="widget"
                                                                data-widget_type="text-editor.default">
                                                                <div class="elementor-widget-container">
                                                                    Copyright © 2022 <a style={{ fontWeight: 'bold' }}
                                                                        href="https://demo2.themelexus.com/delicioz/">Delicioz</a>.
                                                                    All rights reserved. </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-000c4df"
                                                        data-id="000c4df" data-element_type="column">
                                                        <div class="elementor-widget-wrap elementor-element-populated">
                                                            <div class="elementor-element elementor-element-3d67de8 elementor-icon-list--layout-inline elementor-align-right elementor-mobile-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                                data-id="3d67de8" data-element_type="widget"
                                                                data-widget_type="icon-list.default">
                                                                <div class="elementor-widget-container">
                                                                    <link rel="stylesheet"
                                                                        href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css?ver=1661932589" />
                                                                    <ul
                                                                        class="elementor-icon-list-items elementor-inline-items">
                                                                        <li
                                                                            class="elementor-icon-list-item elementor-inline-item">
                                                                            <span class="elementor-icon-list-text">Privacy &
                                                                                Cookie Policy </span>
                                                                        </li>
                                                                        <li
                                                                            class="elementor-icon-list-item elementor-inline-item">
                                                                            <span class="elementor-icon-list-text"> Terms of
                                                                                Service</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <div class="account-wrap d-none">
                <div class="account-inner ">
                    <div class="login-form-head">
                        <span class="login-form-title">Sign in</span>
                        <span class="pull-right">
                            <a class="register-link" href="https://demo2.themelexus.com/delicioz/my-account/"
                                title="Register">Create an Account</a>
                        </span>
                    </div>
                    <form class="delicioz-login-form-ajax" data-toggle="validator">
                        <p>
                            <label>Username or email <span class="required">*</span></label>
                            <input name="username" type="text" required placeholder="Username" />
                        </p>
                        <p>
                            <label>Password <span class="required">*</span></label>
                            <input name="password" type="password" required placeholder="Password" />
                        </p>
                        <button type="submit" data-button-action class="btn btn-primary btn-block w-100 mt-1">Login</button>
                        <input type="hidden" name="action" value="delicioz_login" />
                        <input type="hidden" id="security-login" name="security-login" value="aeda6d0916" /><input type="hidden"
                            name="_wp_http_referer" value="/delicioz/" />
                    </form>
                    <div class="login-form-bottom">
                        <a href="https://demo2.themelexus.com/delicioz/my-account/lost-password/" class="lostpass-link"
                            title="Lost your password?">Lost your password?</a>
                    </div>
                </div>
            </div>
            <div class="delicioz-mobile-nav">
                <div class="menu-scroll-mobile">
                    <a href="#" class="mobile-nav-close"><i class="delicioz-icon-times"></i></a>
                    <div class="mobile-nav-tabs">
                        <ul>
                            <li class="mobile-tab-title mobile-pages-title active" data-menu="pages">
                                <span>Main menu</span>
                            </li>
                        </ul>
                    </div>
                    <nav class="mobile-menu-tab mobile-navigation mobile-pages-menu active" aria-label="Mobile Navigation">
                        <div class="handheld-navigation">
                            <ul id="menu-main-menu" class="menu">
                                <li
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-20 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-58">
                                    <a href="https://demo2.themelexus.com/delicioz/" aria-current="page">Home</a>
                                    <ul class="sub-menu">
                                        <li id="menu-item-53"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-20 current_page_item menu-item-53">
                                            <a href="https://demo2.themelexus.com/delicioz/" aria-current="page">Home 1</a></li>
                                        <li id="menu-item-54"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54"><a
                                                href="https://demo2.themelexus.com/delicioz/home-2/">Home 2</a></li>
                                        <li id="menu-item-55"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-55"><a
                                                href="https://demo2.themelexus.com/delicioz/home-3/">Home 3</a></li>
                                        <li id="menu-item-56"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-56"><a
                                                href="https://demo2.themelexus.com/delicioz/home-4/">Home 4</a></li>
                                        <li id="menu-item-57"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57"><a
                                                href="https://demo2.themelexus.com/delicioz/home-5/">Home 5</a></li>
                                    </ul>
                                </li>
                                <li
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-66">
                                    <a href="https://demo2.themelexus.com/delicioz/about-us-1/">About</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-67"><a
                                            href="https://demo2.themelexus.com/delicioz/about-us-1/">About us 1</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-65"><a
                                            href="https://demo2.themelexus.com/delicioz/about-us-2/">About us 2</a></li>
                                    </ul>
                                </li>
                                <li
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-64">
                                    <a href="https://demo2.themelexus.com/delicioz/menu-list-01/">Menu</a>
                                    <ul class="sub-menu">
                                        <li id="menu-item-63"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"><a
                                                href="https://demo2.themelexus.com/delicioz/menu-list-01/">Menu List 01</a></li>
                                        <li id="menu-item-62"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"><a
                                                href="https://demo2.themelexus.com/delicioz/menu-list-02/">Menu List 02</a></li>
                                        <li id="menu-item-61"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61"><a
                                                href="https://demo2.themelexus.com/delicioz/menu-grid/">Menu Grid</a></li>
                                        <li id="menu-item-60"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60"><a
                                                href="https://demo2.themelexus.com/delicioz/menu-tab/">Menu Tab</a></li>
                                        <li id="menu-item-59"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-59"><a
                                                href="https://demo2.themelexus.com/delicioz/menu-woocommerce/">Menu
                                                Woocommerce</a></li>
                                    </ul>
                                </li>
                                <li
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-73">
                                    <a href="https://demo2.themelexus.com/delicioz/blog/">Blog</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-222"><a
                                            href="https://demo2.themelexus.com/delicioz/blog/">Blog Standard</a></li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-223"><a
                                            href="https://demo2.themelexus.com/delicioz/blog/?blog_style=style-2&#038;blog_columns=3&#038;blog_sidebar=none">Blog
                                            Grid 01</a></li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-224"><a
                                            href="https://demo2.themelexus.com/delicioz/blog/?blog_style=style-1&#038;blog_columns=3&#038;blog_sidebar=none">Blog
                                            Grid 02</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-225"><a
                                            href="https://demo2.themelexus.com/delicioz/how-to-choose-the-best-type-of-combi-oven/">Single
                                            Post</a></li>
                                    </ul>
                                </li>
                                <li
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74">
                                    <a href="#">Pages</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77"><a
                                            href="https://demo2.themelexus.com/delicioz/reservation/">Reservation (Contact
                                            Form 7)</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"><a
                                            href="https://demo2.themelexus.com/delicioz/reservation-2/">Reservation (Open
                                            Table)</a></li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-79"><a
                                            href="https://demo2.themelexus.com/delicioz/404">404 Error</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82"><a
                                            href="https://demo2.themelexus.com/delicioz/icons/">Icons</a></li>
                                    </ul>
                                </li>
                                <li
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-506">
                                    <a href="https://demo2.themelexus.com/delicioz/shop/">Shop</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-507"><a
                                            href="https://demo2.themelexus.com/delicioz/shop/?woocommerce_archive_sidebar=left">Shop
                                            Sidebar</a></li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-508"><a
                                            href="https://demo2.themelexus.com/delicioz/shop/?woocommerce_archive_layout=canvas&#038;woocommerce_catalog_columns=4">Shop
                                            Fullwidth</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-509"><a
                                            href="https://demo2.themelexus.com/delicioz/product/grilled-salmon/">Single
                                            Product</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75"><a
                                    href="https://demo2.themelexus.com/delicioz/contact-us/">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    <nav class="mobile-menu-tab mobile-navigation-categories mobile-categories-menu"
                        aria-label="Mobile Navigation">
                        <div class="menu">
                            <ul>
                                <li class="current_page_item"><a href="https://demo2.themelexus.com/delicioz/">Home</a></li>
                                <li class="page_item page-item-30"><a
                                    href="https://demo2.themelexus.com/delicioz/about-us-1/">About us 1</a></li>
                                <li class="page_item page-item-32"><a
                                    href="https://demo2.themelexus.com/delicioz/about-us-2/">About us 2</a></li>
                                <li class="page_item page-item-68"><a
                                    href="https://demo2.themelexus.com/delicioz/blog/">Blog</a></li>
                                <li class="page_item page-item-10"><a
                                    href="https://demo2.themelexus.com/delicioz/cart/">Cart</a></li>
                                <li class="page_item page-item-11"><a
                                    href="https://demo2.themelexus.com/delicioz/checkout/">Checkout</a></li>
                                <li class="page_item page-item-34"><a
                                    href="https://demo2.themelexus.com/delicioz/contact-us/">Contact us</a></li>
                                <li class="page_item page-item-22"><a href="https://demo2.themelexus.com/delicioz/home-2/">Home
                                    2</a></li>
                                <li class="page_item page-item-24"><a href="https://demo2.themelexus.com/delicioz/home-3/">Home
                                    3</a></li>
                                <li class="page_item page-item-26"><a href="https://demo2.themelexus.com/delicioz/home-4/">Home
                                    4</a></li>
                                <li class="page_item page-item-28"><a href="https://demo2.themelexus.com/delicioz/home-5/">Home
                                    5</a></li>
                                <li class="page_item page-item-80"><a
                                    href="https://demo2.themelexus.com/delicioz/icons/">Icons</a></li>
                                <li class="page_item page-item-36"><a
                                    href="https://demo2.themelexus.com/delicioz/landing-page/">Landing page</a></li>
                                <li class="page_item page-item-46"><a
                                    href="https://demo2.themelexus.com/delicioz/menu-grid/">Menu Grid</a></li>
                                <li class="page_item page-item-42"><a
                                    href="https://demo2.themelexus.com/delicioz/menu-list-01/">Menu List 01</a></li>
                                <li class="page_item page-item-44"><a
                                    href="https://demo2.themelexus.com/delicioz/menu-list-02/">Menu List 02</a></li>
                                <li class="page_item page-item-49"><a
                                    href="https://demo2.themelexus.com/delicioz/menu-tab/">Menu Tab</a></li>
                                <li class="page_item page-item-51"><a
                                    href="https://demo2.themelexus.com/delicioz/menu-woocommerce/">Menu Woocommerce</a></li>
                                <li class="page_item page-item-12"><a
                                    href="https://demo2.themelexus.com/delicioz/my-account/">My account</a></li>
                                <li class="page_item page-item-38"><a
                                    href="https://demo2.themelexus.com/delicioz/reservation/">Reservation</a></li>
                                <li class="page_item page-item-40"><a
                                    href="https://demo2.themelexus.com/delicioz/reservation-2/">Reservation 2</a></li>
                                <li class="page_item page-item-2"><a
                                    href="https://demo2.themelexus.com/delicioz/sample-page/">Sample Page</a></li>
                                <li class="page_item page-item-9"><a href="https://demo2.themelexus.com/delicioz/shop/">Shop</a>
                                </li>
                                <li class="page_item page-item-14"><a
                                    href="https://demo2.themelexus.com/delicioz/wishlist/">Wishlist</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="delicioz-language-switcher-mobile">
                    <ul class="menu">
                        <li class="item">
                            <div class="language-switcher-head">
                                <img src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/images/language-switcher/en.jpg"
                                    alt="WPML" />
                            </div>
                        </li>
                        <li class="item">
                            <div class="language-switcher-img">
                                <a href="#">
                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/images/language-switcher/de.jpg"
                                        alt="WPML" />
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="language-switcher-img">
                                <a href="#">
                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/images/language-switcher/it.jpg"
                                        alt="WPML" />
                                </a>
                            </div>
                        </li>
                        <li class="item">
                            <div class="language-switcher-img">
                                <a href="#">
                                    <img src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/images/language-switcher/hi.jpg"
                                        alt="WPML" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="delicioz-overlay"></div>
            {/* <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
            <script>
                window.RS_MODULES = window.RS_MODULES || { };
                window.RS_MODULES.modules = window.RS_MODULES.modules || { };
                window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
                window.RS_MODULES.defered = true;
                window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || { };
                window.RS_MODULES.type = 'compiled';
            </script> */}
            <div class="site-search-popup">
                <div class="site-search-popup-wrap">
                    <a href="#" class="site-search-popup-close"><i class="delicioz-icon-times-circle"></i></a>
                    <div class="site-search ajax-search">
                        <div class="widget woocommerce widget_product_search">
                            <div class="ajax-search-result d-none"></div>
                            <form role="search" method="get" class="woocommerce-product-search"
                                action="https://demo2.themelexus.com/delicioz/">
                                <label class="screen-reader-text" for="woocommerce-product-search-field-1">Search for:</label>
                                <input type="search" id="woocommerce-product-search-field-1" class="search-field"
                                    placeholder="Search products&hellip;" autocomplete="off" value name="s" />
                                <button type="submit" value="Search">Search</button>
                                <input type="hidden" name="post_type" value="product" />
                                <div class="search-by-category input-dropdown">
                                    <div class="input-dropdown-inner delicioz-scroll-content">

                                        <a href="#" data-val="0"><span>All category</span></a>
                                        <select name="product_cat" id="product_cat0" class="dropdown_product_cat_ajax">
                                            <option value selected="selected">All category</option>
                                            <option class="level-0" value="accessories">Accessories</option>
                                            <option class="level-0" value="desserts">Desserts</option>
                                            <option class="level-0" value="food">Food</option>
                                            <option class="level-0" value="humburger">Humburger</option>
                                            <option class="level-0" value="recipes">Recipes</option>
                                            <option class="level-0" value="uncategorized">Uncategorized</option>
                                            <option class="level-0" value="whiskey">Whiskey</option>
                                        </select>
                                        <div class="list-wrapper delicioz-scroll">
                                            <ul class="delicioz-scroll-content">
                                                <li class="d-none">
                                                    <a href="#" data-val="0">All category</a>
                                                </li>
                                                <li class="cat-item cat-item-42"><a class="pf-value"
                                                    href="https://demo2.themelexus.com/delicioz/product-category/accessories/"
                                                    data-val="accessories" data-title="Accessories">Accessories</a>
                                                </li>
                                                <li class="cat-item cat-item-35"><a class="pf-value"
                                                    href="https://demo2.themelexus.com/delicioz/product-category/desserts/"
                                                    data-val="desserts" data-title="Desserts">Desserts</a>
                                                </li>
                                                <li class="cat-item cat-item-38"><a class="pf-value"
                                                    href="https://demo2.themelexus.com/delicioz/product-category/food/"
                                                    data-val="food" data-title="Food">Food</a>
                                                </li>
                                                <li class="cat-item cat-item-40"><a class="pf-value"
                                                    href="https://demo2.themelexus.com/delicioz/product-category/humburger/"
                                                    data-val="humburger" data-title="Humburger">Humburger</a>
                                                </li>
                                                <li class="cat-item cat-item-39"><a class="pf-value"
                                                    href="https://demo2.themelexus.com/delicioz/product-category/recipes/"
                                                    data-val="recipes" data-title="Recipes">Recipes</a>
                                                </li>
                                                <li class="cat-item cat-item-15"><a class="pf-value"
                                                    href="https://demo2.themelexus.com/delicioz/product-category/uncategorized/"
                                                    data-val="uncategorized" data-title="Uncategorized">Uncategorized</a>
                                                </li>
                                                <li class="cat-item cat-item-37"><a class="pf-value"
                                                    href="https://demo2.themelexus.com/delicioz/product-category/whiskey/"
                                                    data-val="whiskey" data-title="Whiskey">Whiskey</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-search-popup-overlay"></div>
            <AddHttpPrefix />
            <div class="woosc-popup woosc-search">
                <div class="woosc-popup-inner">
                    <div class="woosc-popup-content">
                        <div class="woosc-popup-content-inner">
                            <div class="woosc-popup-close"></div>
                            <div class="woosc-search-input">
                                <input type="search" id="woosc_search_input" placeholder="Type any keyword to search..." />
                            </div>
                            <div class="woosc-search-result"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="woosc-popup woosc-settings">
                <div class="woosc-popup-inner">
                    <div class="woosc-popup-content">
                        <div class="woosc-popup-content-inner">
                            <div class="woosc-popup-close"></div>
                            <ul class="woosc-settings-tools">
                                <li><label><input type="checkbox" class="woosc-settings-tool" id="woosc_hide_similarities" />
                                    Hide similarities </label></li>
                                <li><label><input type="checkbox" class="woosc-settings-tool"
                                    id="woosc_highlight_differences" /> Highlight differences </label></li>
                            </ul>
                            Select the fields to be shown. Others will be hidden. Drag and drop to rearrange the order. <ul
                                class="woosc-settings-fields">
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="image" checked /><span class="label">Image</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="sku" checked /><span class="label">SKU</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="rating" checked /><span class="label">Rating</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="price" checked /><span class="label">Price</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="stock" checked /><span class="label">Stock</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="availability" checked /><span class="label">Availability</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="add_to_cart" checked /><span class="label">Add to cart</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="description" checked /><span class="label">Description</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="content" checked /><span class="label">Content</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="weight" checked /><span class="label">Weight</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="dimensions" checked /><span class="label">Dimensions</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="additional" checked /><span class="label">Additional information</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="attributes" checked /><span class="label">Attributes</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="custom_attributes" checked /><span class="label">Custom attributes</span></li>
                                <li class="woosc-settings-field-li"><input type="checkbox" class="woosc-settings-field"
                                    value="custom_fields" checked /><span class="label">Custom fields</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="woosc-popup woosc-share">
                <div class="woosc-popup-inner">
                    <div class="woosc-popup-content">
                        <div class="woosc-popup-content-inner">
                            <div class="woosc-popup-close"></div>
                            <div class="woosc-share-content"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="woosc-area"
                class="woosc-area woosc-bar-bottom woosc-bar-right woosc-bar-click-outside-yes woosc-hide-checkout"
                data-bg-color="#292a30" data-btn-color="#00a0d2">
                <div class="woosc-inner">
                    <div class="woosc-table">
                        <div class="woosc-table-inner">
                            <a href="#close" id="woosc-table-close" class="woosc-table-close hint--left"
                                aria-label="Close"><span class="woosc-table-close-icon"></span></a>
                            <div class="woosc-table-items"></div>
                        </div>
                    </div>
                    <div class="woosc-bar">
                        <div class="woosc-bar-notice">
                            Click outside to hide the compare bar </div>
                        <a href="#share" class="woosc-bar-share hint--top" aria-label="Share"></a>
                        <a href="#search" class="woosc-bar-search hint--top" aria-label="Add product"></a>
                        <div class="woosc-bar-items"></div>
                        <div class="woosc-bar-btn woosc-bar-btn-text">
                            <div class="woosc-bar-btn-icon-wrapper">
                                <div class="woosc-bar-btn-icon-inner"><span></span><span></span><span></span>
                                </div>
                            </div>
                            Compare
                        </div>
                    </div>
                    <div class="woosc-sidebar woosc-sidebar-position-right">
                        <div class="woosc-sidebar-top">
                            <span class="woosc-sidebar-heading">Compare</span>
                            <span class="woosc-sidebar-count"></span>
                            <span class="woosc-sidebar-close hint--left" aria-label="Close"> &times; </span>
                        </div>
                        <div class="woosc-sidebar-items"></div>
                        <div class="woosc-sidebar-bot">
                            <span class="woosc-sidebar-btn">Let&#039;s Compare!</span>
                            <span class="woosc-sidebar-continue"><span>Continue shopping</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="woosw_wishlist" class="woosw-popup woosw-popup-center"></div><a href="#" class="scrollup"><span
                class="scrollup-icon delicioz-icon-angle-up"></span><span class="scrollup-label">Top</span></a>
            {/* <script type="text/html" id="tmpl-ajax-live-search-template">
                <div class="product-item-search">
                    <# if(data.url){ # >
                        <a class="product-link" href="{{{data.url}}}" title="{{{data.title}}}">
                            <# } #>
                            <# if(data.img){# >
                <img src="{{{data.img}}}" alt="{{{data.title}}}">
                 <# } #>
                <div class="product-content">
                <h3 class="product-title">{{{data.title}}}</h3>
                <# if(data.price){ #>
                {{{data.price}}}
                 <# } #>
                </div>
                <# if(data.url){ #>
            </a>
            <# } #>
                        </div>
        </script>
            <script
                type="application/ld+json">{"@context":"https:\/\/schema.org\/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"name":"Home Page","@id":"https:\/\/demo2.themelexus.com\/delicioz"}}]}</script>
            <link href="https://fonts.googleapis.com/css?family=Roboto:400%7CManrope:400%2C700&display=swap" rel="stylesheet"
                property="stylesheet" media="all" type="text/css">
                <script type="text/javascript">
                    (function () {
            var c = document.body.className;
                    c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
                    document.body.className = c;
        })();
                </script> */}
            <div class="site-header-cart-side">
                <div class="cart-side-heading">
                    <span class="cart-side-title">Shopping cart</span>
                    <a href="#" class="close-cart-side">close</a>
                </div>
                <div class="widget woocommerce widget_shopping_cart">
                    <div class="widget_shopping_cart_content"></div>
                </div>
            </div>
            <div class="cart-side-overlay"></div>
            {/* <script>
                if (typeof revslider_showDoubleJqueryError === "undefined") {function revslider_showDoubleJqueryError(sliderID) { console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion."); console.log("To fix this, you can:"); console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on"); console.log("2. Find the double jQuery.js inclusion and remove it"); return "Double Included jQuery Library"; }}
            </script> */}
            <link rel="stylesheet" id="elementor-post-671-css"
                href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-671.css?ver=1661932588"
                media="all" />
            <link rel="stylesheet" id="elementor-post-705-css"
                href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-705.css?ver=1661932588"
                media="all" />
            <link rel="stylesheet" id="elementor-post-2483-css"
                href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2483.css?ver=1661932589"
                media="all" />
            <link rel="stylesheet" id="elementor-post-2492-css"
                href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2492.css?ver=1661932589"
                media="all" />
            <link rel="stylesheet" id="elementor-post-2498-css"
                href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2498.css?ver=1661932589"
                media="all" />
            <link rel="stylesheet" id="elementor-post-2504-css"
                href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2504.css?ver=1661932589"
                media="all" />
            <link rel="stylesheet" id="e-animations-css"
                href="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.7.3"
                media="all" />
            <link rel="stylesheet" id="rs-plugin-settings-css"
                href="https://demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/css/rs6.css?ver=6.5.31"
                media="all" />
            {/* <style id="rs-plugin-settings-inline-css"> */}


            <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.9"
                id="regenerator-runtime-js"></script>
            <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0"
                id="wp-polyfill-js"></script>
            {/* <script id="contact-form-7-js-extra">
                var wpcf7 = {"api": {"root": "https:\/\/demo2.themelexus.com\/delicioz\/wp-json\/", "namespace": "contact-form-7\/v1" }, "cached": "1" };
            </script> */}
            <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.6.2"
                id="contact-form-7-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/js/rbtools.min.js?ver=6.5.18"
                defer async id="tp-tools-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/js/rs6.min.js?ver=6.5.31"
                defer async id="revmin-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.6.8.2"
                id="jquery-blockui-js"></script>
            {/* <script id="wc-add-to-cart-js-extra">
                var wc_add_to_cart_params = {"ajax_url": "\/delicioz\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/delicioz\/?wc-ajax=%%endpoint%%", "i18n_view_cart": "", "cart_url": "https:\/\/demo2.themelexus.com\/delicioz\/cart\/", "is_cart": "", "cart_redirect_after_add": "no" };
            </script> */}
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=6.8.2"
                id="wc-add-to-cart-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.6.8.2"
                id="js-cookie-js"></script>
            {/* <script id="woocommerce-js-extra">
                var woocommerce_params = {"ajax_url": "\/delicioz\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/delicioz\/?wc-ajax=%%endpoint%%" };
            </script> */}
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=6.8.2"
                id="woocommerce-js"></script>
            {/* <script id="wc-cart-fragments-js-extra">
                var wc_cart_fragments_params = {"ajax_url": "\/delicioz\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/delicioz\/?wc-ajax=%%endpoint%%", "cart_hash_key": "wc_cart_hash_fb254261fa3641bff9c309f0d976a3b1", "fragment_name": "wc_fragments_fb254261fa3641bff9c309f0d976a3b1", "request_timeout": "5000" };
            </script> */}
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=6.8.2"
                id="wc-cart-fragments-js"></script>
            <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/underscore.min.js?ver=1.13.3"
                id="underscore-js"></script>
            {/* <script id="wp-util-js-extra">
                var _wpUtilSettings = {"ajax": {"url": "\/delicioz\/wp-admin\/admin-ajax.php" } };
            </script> */}
            <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/wp-util.min.js?ver=6.0.2"
                id="wp-util-js"></script>
            {/* <script id="woo-variation-swatches-js-extra">
                var woo_variation_swatches_options = {"show_variation_label": "1", "clear_on_reselect": "", "variation_label_separator": ":", "is_mobile": "", "show_variation_stock": "", "stock_label_threshold": "5", "cart_redirect_after_add": "no", "enable_ajax_add_to_cart": "yes", "cart_url": "https:\/\/demo2.themelexus.com\/delicioz\/cart\/", "is_cart": "" };
            </script> */}
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-variation-swatches/assets/js/frontend.min.js?ver=1660386322"
                id="woo-variation-swatches-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/libs/table-head-fixer/table-head-fixer.js?ver=5.1.5"
                id="table-head-fixer-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js?ver=5.1.5"
                id="perfect-scrollbar-js"></script>
            <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/jquery/ui/core.min.js?ver=1.13.1"
                id="jquery-ui-core-js"></script>
            <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.1"
                id="jquery-ui-mouse-js"></script>
            <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/jquery/ui/sortable.min.js?ver=1.13.1"
                id="jquery-ui-sortable-js"></script>
            {/* <script id="woosc-frontend-js-extra">
                var woosc_vars = {"ajax_url": "https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php", "user_id": "0cdb64fab32a05bd393b20c8c351de9f", "page_url": "#", "open_button": "", "open_button_action": "open_popup", "menu_action": "open_popup", "button_action": "show_table", "sidebar_position": "right", "message_position": "right-top", "message_added": "{name} has been added to Compare list.", "message_removed": "{name} has been removed from the Compare list.", "message_exists": "{name} is already in the Compare list.", "open_bar": "", "bar_bubble": "no", "adding": "prepend", "click_again": "no", "hide_empty": "no", "click_outside": "yes", "freeze_column": "yes", "freeze_row": "yes", "scrollbar": "yes", "limit": "100", "button_text_change": "yes", "remove_all": "Do you want to remove all products from the compare?", "limit_notice": "You can add a maximum of {limit} products to the compare table.", "copied_text": "Share link %s was copied to clipboard!", "button_text": "Compare", "button_text_added": "Compare" };
            </script> */}
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/js/frontend.js?ver=5.1.5"
                id="woosc-frontend-js"></script>
            {/* <script id="wc-add-to-cart-variation-js-extra">
                var wc_add_to_cart_variation_params = {"wc_ajax_url": "\/delicioz\/?wc-ajax=%%endpoint%%", "i18n_no_matching_variations_text": "Sorry, no products matched your selection. Please choose a different combination.", "i18n_make_a_selection_text": "Please select some product options before adding this product to your cart.", "i18n_unavailable_text": "Sorry, this product is unavailable. Please choose a different combination." };
            </script> */}
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart-variation.min.js?ver=6.8.2"
                id="wc-add-to-cart-variation-js"></script>
            <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/slick.min.js?ver=1.0.1"
                id="slick-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/jquery.magnific-popup.min.js?ver=1.0.1"
                id="magnific-popup-js"></script>
            {/* <script id="woosq-frontend-js-extra">
                var woosq_vars = {"ajax_url": "https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php", "view": "popup", "effect": "mfp-3d-unfold", "scrollbar": "yes", "hashchange": "no", "cart_redirect": "no", "cart_url": "https:\/\/demo2.themelexus.com\/delicioz\/cart\/", "close": "Close (Esc)", "next": "Next (Right arrow key)", "prev": "Previous (Left arrow key)", "thumbnails_effect": "no", "related_slick_params": "{\"slidesToShow\":2,\"slidesToScroll\":2,\"dots\":true,\"arrows\":false,\"adaptiveHeight\":true,\"rtl\":false}", "thumbnails_slick_params": "{\"slidesToShow\":1,\"slidesToScroll\":1,\"dots\":true,\"arrows\":true,\"adaptiveHeight\":false,\"rtl\":false}", "thumbnails_zoom_params": "{\"duration\":120,\"magnify\":1}" };
            </script> */}
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-quick-view/assets/js/frontend.js?ver=3.1.2"
                id="woosq-frontend-js"></script>
            {/* <script id="woosw-frontend-js-extra">
                var woosw_vars = {"ajax_url": "https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php", "menu_action": "open_page", "perfect_scrollbar": "yes", "wishlist_url": "https:\/\/demo2.themelexus.com\/delicioz\/wishlist\/", "button_action": "list", "message_position": "right-top", "button_action_added": "popup", "empty_confirm": "This action cannot be undone. Are you sure?", "delete_confirm": "This action cannot be undone. Are you sure?", "copied_text": "Copied the wishlist link:", "menu_text": "Wishlist", "button_text": "Add to wishlist", "button_text_added": "Browse wishlist" };
            </script> */}
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-wishlist/assets/js/frontend.js?ver=4.3.1"
                id="woosw-frontend-js"></script>
            {/* <script id="delicioz-theme-js-extra">
                var deliciozAjax = {"ajaxurl": "https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php" };
            </script> */}
            <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/main.js?ver=1.0.1"
                id="delicioz-theme-js"></script>
            <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/imagesloaded.min.js?ver=4.1.4"
                id="imagesloaded-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/search-popup.js?ver=1.0.1"
                id="delicioz-search-popup-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/text-editor.js?ver=1.0.1"
                id="delicioz-text-editor-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/nav-mobile.js?ver=1.0.1"
                id="delicioz-nav-mobile-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/inc/megamenu/assets/js/frontend.js?ver=1.0.1"
                id="delicioz-megamenu-frontend-js"></script>
            <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/login.js?ver=1.0.1"
                id="delicioz-ajax-login-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/header-cart.min.js?ver=1.0.1"
                id="delicioz-header-cart-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/tooltipster.bundle.js?ver=1.0.1"
                id="tooltipster-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/product-ajax-search.min.js?ver=1.0.1"
                id="delicioz-products-ajax-search-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/main.min.js?ver=1.0.1"
                id="delicioz-products-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/quantity.min.js?ver=1.0.1"
                id="delicioz-input-quantity-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/off-canvas.min.js?ver=1.0.1"
                id="delicioz-off-canvas-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/cart-canvas.min.js?ver=1.0.1"
                id="delicioz-cart-canvas-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.7.3"
                id="elementor-webpack-runtime-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.7.3"
                id="elementor-frontend-modules-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2"
                id="elementor-waypoints-js"></script>
            {/* <script id="elementor-frontend-js-before">
                var elementorFrontendConfig = {"environmentMode": {"edit": false, "wpPreview": false, "isScriptDebug": false }, "i18n": {"shareOnFacebook": "Share on Facebook", "shareOnTwitter": "Share on Twitter", "pinIt": "Pin it", "download": "Download", "downloadImage": "Download image", "fullscreen": "Fullscreen", "zoom": "Zoom", "share": "Share", "playVideo": "Play Video", "previous": "Previous", "next": "Next", "close": "Close" }, "is_rtl": false, "breakpoints": {"xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600 }, "responsive": {"breakpoints": {"mobile": {"label": "Mobile", "value": 767, "default_value": 767, "direction": "max", "is_enabled": true }, "mobile_extra": {"label": "Mobile Extra", "value": 880, "default_value": 880, "direction": "max", "is_enabled": true }, "tablet": {"label": "Tablet", "value": 1024, "default_value": 1024, "direction": "max", "is_enabled": true }, "tablet_extra": {"label": "Tablet Extra", "value": 1200, "default_value": 1200, "direction": "max", "is_enabled": true }, "laptop": {"label": "Laptop", "value": 1366, "default_value": 1366, "direction": "max", "is_enabled": true }, "widescreen": {"label": "Widescreen", "value": 2400, "default_value": 2400, "direction": "min", "is_enabled": false } } }, "version": "3.7.3", "is_static": false, "experimentalFeatures": {"e_dom_optimization": true, "e_optimized_assets_loading": true, "e_optimized_css_loading": true, "a11y_improvements": true, "additional_custom_breakpoints": true, "e_import_export": true, "e_hidden_wordpress_widgets": true, "landing-pages": true, "elements-color-picker": true, "favorite-widgets": true, "admin-top-bar": true }, "urls": {"assets": "https:\/\/demo2.themelexus.com\/delicioz\/wp-content\/plugins\/elementor\/assets\/" }, "settings": {"page": [], "editorPreferences": [] }, "kit": {"active_breakpoints": ["viewport_mobile", "viewport_mobile_extra", "viewport_tablet", "viewport_tablet_extra", "viewport_laptop"], "body_background_background": "classic", "global_image_lightbox": "yes", "lightbox_enable_counter": "yes", "lightbox_enable_fullscreen": "yes", "lightbox_enable_zoom": "yes", "lightbox_enable_share": "yes", "lightbox_title_src": "title", "lightbox_description_src": "description" }, "post": {"id": 20, "title": "Delicioz%20%E2%80%93%20Restaurant%20WordPress%20Theme", "excerpt": "", "featuredImage": false } };
            </script> */}
            <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.7.3"
                id="elementor-frontend-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/elementor/menu-list.js?ver=1.0.1"
                id="delicioz-elementor-menu-list-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/TweenMax.min.js?ver=1.11.1"
                id="tweenmax-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/elementor/testimonial.js?ver=1.0.1"
                id="delicioz-elementor-testimonial-js"></script>
            <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/elementor/tabs.js?ver=1.0.1"
                id="delicioz-elementor-tabs-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/elementor/posts-grid.js?ver=1.0.1"
                id="delicioz-elementor-posts-grid-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/make-column-clickable-elementor/assets/js/make-column-clickable.js?ver=1.4.0"
                id="make-column-clickable-elementor-js"></script>
            <script defer
                src="https://demo2.themelexus.com/delicioz/wp-content/plugins/mailchimp-for-wp/assets/js/forms.js?ver=4.8.8"
                id="mc4wp-forms-api-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/elementor-frontend.js?ver=1.0.1"
                id="delicioz-elementor-frontend-js"></script>
            <script
                src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/jquery.sticky.js?ver=1.0.1"
                id="elementor-sticky-js"></script>
            <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/sticky.js?ver=1.0.1"
                id="delicioz-elementor-sticky-js"></script>
            {/* <script id="rs-initialisation-scripts">
                var tpj = jQuery;

                var revapi1;

                if (window.RS_MODULES === undefined) window.RS_MODULES = { };
                if (RS_MODULES.modules === undefined) RS_MODULES.modules = { };
                RS_MODULES.modules["revslider11"] = {
                    once: RS_MODULES.modules["revslider11"] !== undefined ? RS_MODULES.modules["revslider11"].once : undefined, init: function () {
                    window.revapi1 = window.revapi1 === undefined || window.revapi1 === null || window.revapi1.length === 0 ? document.getElementById("rev_slider_1_1") : window.revapi1;
                if (window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length == 0) {window.revapi1initTry = window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1; if (window.revapi1initTry < 20) requestAnimationFrame(function () {RS_MODULES.modules["revslider11"].init()}); return; }
                window.revapi1 = jQuery(window.revapi1);
                if (window.revapi1.revolution == undefined) {revslider_showDoubleJqueryError("rev_slider_1_1"); return; }
                revapi1.revolutionInit({
                    revapi: "revapi1",
                DPR: "dpr",
                sliderLayout: "fullwidth",
                visibilityLevels: "1240,1024,778,480",
                gridwidth: "1240,1024,778,480",
                gridheight: "900,768,700,650",
                lazyType: "smart",
                perspective: 600,
                perspectiveType: "global",
                keepBPHeight: true,
                editorheight: "900,768,700,650",
                responsiveLevels: "1240,1024,778,480",
                progressBar: {disableProgressBar: true },
                navigation: {
                    wheelCallDelay: 1000,
                onHoverStop: false,
                touch: {
                    touchenabled: true,
                touchOnDesktop: true
                        },
                bullets: {
                    enable: true,
                tmp: "<span class=\"tp-bullet-title\">{{ title }}</span>",
            style: "ares",
            hide_over: "778px",
            space: 10
                        }
                    },
            viewPort: {
                global: true,
            globalDist: "-200px",
            enable: false
                    },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
                    },
                });

            }
        } // End of RevInitScript

            if (window.RS_MODULES.checkMinimal !== undefined) {window.RS_MODULES.checkMinimal(); };
        </script> */}
        </div >
    )
}
