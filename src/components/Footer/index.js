import React, { useEffect } from 'react'
import './Footer.css'

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

export default function Footer() {

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

    const scriptContent = `
      <script>(function () {
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
                                                                    </script>`;
    return (
        <div>
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
                                                                <style>
                                                                    {`
                                                                /*! elementor - v3.7.3 - 29-08-2022 */
                                                                    .elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,
                                                                    .elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,
                                                                    .elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container {
                                                                        line - height: 1;
                                                                    font-size: 0
                                                                }

                                                                    .elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid {
                                                                        display: inline-grid
                                                                }

                                                                    .elementor-widget-social-icons .elementor-grid {
                                                                        grid - column - gap: var(--grid-column-gap, 5px);
                                                                    grid-row-gap: var(--grid-row-gap, 5px);
                                                                    grid-template-columns: var(--grid-template-columns);
                                                                    -webkit-box-pack: var(--justify-content, center);
                                                                    -ms-flex-pack: var(--justify-content, center);
                                                                    justify-content: var(--justify-content, center);
                                                                    justify-items: var(--justify-content, center)
                                                                }

                                                                    .elementor-icon.elementor-social-icon {
                                                                        font - size: var(--icon-size, 25px);
                                                                    line-height: var(--icon-size, 25px);
                                                                    width: calc(var(--icon-size, 25px) + (2 * var(--icon-padding, .5em)));
                                                                    height: calc(var(--icon-size, 25px) + (2 * var(--icon-padding, .5em)))
                                                                }

                                                                    .elementor-social-icon {
                                                                        --e - social - icon - icon - color: #fff;
                                                                    display: -webkit-inline-box;
                                                                    display: -ms-inline-flexbox;
                                                                    display: inline-flex;
                                                                    background-color: #818a91;
                                                                    -webkit-box-align: center;
                                                                    -ms-flex-align: center;
                                                                    align-items: center;
                                                                    -webkit-box-pack: center;
                                                                    -ms-flex-pack: center;
                                                                    justify-content: center;
                                                                    text-align: center;
                                                                    cursor: pointer
                                                                }

                                                                    .elementor-social-icon i {
                                                                        color: var(--e-social-icon-icon-color)
                                                                }

                                                                    .elementor-social-icon svg {
                                                                        fill: var(--e-social-icon-icon-color)
                                                                }

                                                                    .elementor-social-icon:last-child {
                                                                        margin: 0
                                                                }

                                                                    .elementor-social-icon:hover {
                                                                        opacity: .9;
                                                                    color: #fff
                                                                }

                                                                    .elementor-social-icon-android {
                                                                        background - color: #a4c639
                                                                }

                                                                    .elementor-social-icon-apple {
                                                                        background - color: #999
                                                                }

                                                                    .elementor-social-icon-behance {
                                                                        background - color: #1769ff
                                                                }

                                                                    .elementor-social-icon-bitbucket {
                                                                        background - color: #205081
                                                                }

                                                                    .elementor-social-icon-codepen {
                                                                        background - color: #000
                                                                }

                                                                    .elementor-social-icon-delicious {
                                                                        background - color: #39f
                                                                }

                                                                    .elementor-social-icon-deviantart {
                                                                        background - color: #05cc47
                                                                }

                                                                    .elementor-social-icon-digg {
                                                                        background - color: #005be2
                                                                }

                                                                    .elementor-social-icon-dribbble {
                                                                        background - color: #ea4c89
                                                                }

                                                                    .elementor-social-icon-elementor {
                                                                        background - color: #d30c5c
                                                                }

                                                                    .elementor-social-icon-envelope {
                                                                        background - color: #ea4335
                                                                }

                                                                    .elementor-social-icon-facebook,
                                                                    .elementor-social-icon-facebook-f {
                                                                        background - color: #3b5998
                                                                }

                                                                    .elementor-social-icon-flickr {
                                                                        background - color: #0063dc
                                                                }

                                                                    .elementor-social-icon-foursquare {
                                                                        background - color: #2d5be3
                                                                }

                                                                    .elementor-social-icon-free-code-camp,
                                                                    .elementor-social-icon-freecodecamp {
                                                                        background - color: #006400
                                                                }

                                                                    .elementor-social-icon-github {
                                                                        background - color: #333
                                                                }

                                                                    .elementor-social-icon-gitlab {
                                                                        background - color: #e24329
                                                                }

                                                                    .elementor-social-icon-globe {
                                                                        background - color: #818a91
                                                                }

                                                                    .elementor-social-icon-google-plus,
                                                                    .elementor-social-icon-google-plus-g {
                                                                        background - color: #dd4b39
                                                                }

                                                                    .elementor-social-icon-houzz {
                                                                        background - color: #7ac142
                                                                }

                                                                    .elementor-social-icon-instagram {
                                                                        background - color: #262626
                                                                }

                                                                    .elementor-social-icon-jsfiddle {
                                                                        background - color: #487aa2
                                                                }

                                                                    .elementor-social-icon-link {
                                                                        background - color: #818a91
                                                                }

                                                                    .elementor-social-icon-linkedin,
                                                                    .elementor-social-icon-linkedin-in {
                                                                        background - color: #0077b5
                                                                }

                                                                    .elementor-social-icon-medium {
                                                                        background - color: #00ab6b
                                                                }

                                                                    .elementor-social-icon-meetup {
                                                                        background - color: #ec1c40
                                                                }

                                                                    .elementor-social-icon-mixcloud {
                                                                        background - color: #273a4b
                                                                }

                                                                    .elementor-social-icon-odnoklassniki {
                                                                        background - color: #f4731c
                                                                }

                                                                    .elementor-social-icon-pinterest {
                                                                        background - color: #bd081c
                                                                }

                                                                    .elementor-social-icon-product-hunt {
                                                                        background - color: #da552f
                                                                }

                                                                    .elementor-social-icon-reddit {
                                                                        background - color: #ff4500
                                                                }

                                                                    .elementor-social-icon-rss {
                                                                        background - color: #f26522
                                                                }

                                                                    .elementor-social-icon-shopping-cart {
                                                                        background - color: #4caf50
                                                                }

                                                                    .elementor-social-icon-skype {
                                                                        background - color: #00aff0
                                                                }

                                                                    .elementor-social-icon-slideshare {
                                                                        background - color: #0077b5
                                                                }

                                                                    .elementor-social-icon-snapchat {
                                                                        background - color: #fffc00
                                                                }

                                                                    .elementor-social-icon-soundcloud {
                                                                        background - color: #f80
                                                                }

                                                                    .elementor-social-icon-spotify {
                                                                        background - color: #2ebd59
                                                                }

                                                                    .elementor-social-icon-stack-overflow {
                                                                        background - color: #fe7a15
                                                                }

                                                                    .elementor-social-icon-steam {
                                                                        background - color: #00adee
                                                                }

                                                                    .elementor-social-icon-stumbleupon {
                                                                        background - color: #eb4924
                                                                }

                                                                    .elementor-social-icon-telegram {
                                                                        background - color: #2ca5e0
                                                                }

                                                                    .elementor-social-icon-thumb-tack {
                                                                        background - color: #1aa1d8
                                                                }

                                                                    .elementor-social-icon-tripadvisor {
                                                                        background - color: #589442
                                                                }

                                                                    .elementor-social-icon-tumblr {
                                                                        background - color: #35465c
                                                                }

                                                                    .elementor-social-icon-twitch {
                                                                        background - color: #6441a5
                                                                }

                                                                    .elementor-social-icon-twitter {
                                                                        background - color: #1da1f2
                                                                }

                                                                    .elementor-social-icon-viber {
                                                                        background - color: #665cac
                                                                }

                                                                    .elementor-social-icon-vimeo {
                                                                        background - color: #1ab7ea
                                                                }

                                                                    .elementor-social-icon-vk {
                                                                        background - color: #45668e
                                                                }

                                                                    .elementor-social-icon-weibo {
                                                                        background - color: #dd2430
                                                                }

                                                                    .elementor-social-icon-weixin {
                                                                        background - color: #31a918
                                                                }

                                                                    .elementor-social-icon-whatsapp {
                                                                        background - color: #25d366
                                                                }

                                                                    .elementor-social-icon-wordpress {
                                                                        background - color: #21759b
                                                                }

                                                                    .elementor-social-icon-xing {
                                                                        background - color: #026466
                                                                }

                                                                    .elementor-social-icon-yelp {
                                                                        background - color: #af0606
                                                                }

                                                                    .elementor-social-icon-youtube {
                                                                        background - color: #cd201f
                                                                }

                                                                    .elementor-social-icon-500px {
                                                                        background - color: #0099e5
                                                                }

                                                                    .elementor-shape-rounded .elementor-icon.elementor-social-icon {
                                                                        border - radius: 10%
                                                                }

                                                                    .elementor-shape-circle .elementor-icon.elementor-social-icon {
                                                                        border - radius: 50%
                                                                }`}
                                                                </style>
                                                                {/* <div class="elementor-social-icons-wrapper elementor-grid">
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
                                                                </div> */}
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
                                                                    <div dangerouslySetInnerHTML={{ __html: scriptContent }} />
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
                                                                        </div>
                                                                        {/* <label style={{ display: "none !important;" }}>Leave
                                                                            this field empty if you're human: <input
                                                                                type="text" name="_mc4wp_honeypot" value
                                                                                tabindex="-1"
                                                                                autocomplete="off" /></label><input
                                                                            type="hidden" name="_mc4wp_timestamp"
                                                                            value="1720262597" /><input type="hidden"
                                                                                name="_mc4wp_form_id" value="244" /><input
                                                                            type="hidden" name="_mc4wp_form_element_id"
                                                                            value="mc4wp-form-1" />
                                                                        <div class="mc4wp-response"></div> */}
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
                                                                    data-cfemail="1260776177606473667b7d7c6152776a737f627e773c717d7f">[email&#160;protected]</a>
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
        </div>
    )
}
