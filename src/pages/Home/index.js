import React, { useEffect } from 'react'
// import './home.css'

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

export default function Home() {

    const scriptContent = `
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//s.w.org">
    <link rel="dns-prefetch" href="//demo2.themelexus.com" />
    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    <link rel="dns-prefetch" href="//s.w.org" />
    <link rel="alternate" type="application/rss+xml" title="Delicioz &raquo; Feed" href="https://demo2.themelexus.com/delicioz/feed/" />
    <link rel="alternate" type="application/rss+xml" title="Delicioz &raquo; Comments Feed" href="https://demo2.themelexus.com/delicioz/comments/feed/" />
    <script>
    window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/demo2.themelexus.com\/delicioz\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.0.2"}};
    /*! This file is auto-generated */
    !function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode,e=(p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0),i.toDataURL());return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([129777,127995,8205,129778,127999],[129777,127995,8203,129778,127999])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);
    </script>
    <style>
    img.wp-smiley,
    img.emoji {
        display: inline !important;
        border: none !important;
        box-shadow: none !important;
        height: 1em !important;
        width: 1em !important;
        margin: 0 0.07em !important;
        vertical-align: -0.1em !important;
        background: none !important;
        padding: 0 !important;
    }
    </style>
    <link rel="stylesheet" id="wp-block-library-css" href="https://demo2.themelexus.com/delicioz/wp-includes/css/dist/block-library/style.min.css?ver=6.0.2" media="all" />
    <style id="wp-block-library-theme-inline-css">
    .wp-block-audio figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-audio figcaption{color:hsla(0,0%,100%,.65)}.wp-block-code{border:1px solid #ccc;border-radius:4px;font-family:Menlo,Consolas,monaco,monospace;padding:.8em 1em}.wp-block-embed figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-embed figcaption{color:hsla(0,0%,100%,.65)}.blocks-gallery-caption{color:#555;font-size:13px;text-align:center}.is-dark-theme .blocks-gallery-caption{color:hsla(0,0%,100%,.65)}.wp-block-image figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-image figcaption{color:hsla(0,0%,100%,.65)}.wp-block-pullquote{border-top:4px solid;border-bottom:4px solid;margin-bottom:1.75em;color:currentColor}.wp-block-pullquote__citation,.wp-block-pullquote cite,.wp-block-pullquote footer{color:currentColor;text-transform:uppercase;font-size:.8125em;font-style:normal}.wp-block-quote{border-left:.25em solid;margin:0 0 1.75em;padding-left:1em}.wp-block-quote cite,.wp-block-quote footer{color:currentColor;font-size:.8125em;position:relative;font-style:normal}.wp-block-quote.has-text-align-right{border-left:none;border-right:.25em solid;padding-left:0;padding-right:1em}.wp-block-quote.has-text-align-center{border:none;padding-left:0}.wp-block-quote.is-large,.wp-block-quote.is-style-large,.wp-block-quote.is-style-plain{border:none}.wp-block-search .wp-block-search__label{font-weight:700}:where(.wp-block-group.has-background){padding:1.25em 2.375em}.wp-block-separator.has-css-opacity{opacity:.4}.wp-block-separator{border:none;border-bottom:2px solid;margin-left:auto;margin-right:auto}.wp-block-separator.has-alpha-channel-opacity{opacity:1}.wp-block-separator:not(.is-style-wide):not(.is-style-dots){width:100px}.wp-block-separator.has-background:not(.is-style-dots){border-bottom:none;height:1px}.wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots){height:2px}.wp-block-table thead{border-bottom:3px solid}.wp-block-table tfoot{border-top:3px solid}.wp-block-table td,.wp-block-table th{padding:.5em;border:1px solid;word-break:normal}.wp-block-table figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-table figcaption{color:hsla(0,0%,100%,.65)}.wp-block-video figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-video figcaption{color:hsla(0,0%,100%,.65)}.wp-block-template-part.has-background{padding:1.25em 2.375em;margin-top:0;margin-bottom:0}
    </style>
    <link rel="stylesheet" id="wc-blocks-vendors-style-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-vendors-style.css?ver=8.0.0" media="all" />
    <link rel="stylesheet" id="wc-blocks-style-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-style.css?ver=8.0.0" media="all" />
    <link rel="stylesheet" id="delicioz-gutenberg-blocks-css" href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/base/gutenberg-blocks.css?ver=1.0.1" media="all" />
    <style id="global-styles-inline-css">
    body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 14px;--wp--preset--font-size--medium: 23px;--wp--preset--font-size--large: 26px;--wp--preset--font-size--x-large: 42px;--wp--preset--font-size--normal: 16px;--wp--preset--font-size--huge: 37px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
    </style>
    <link rel="stylesheet" id="contact-form-7-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.6.2" media="all" />
    <link rel="stylesheet" id="-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/opal-demo/style.css?ver=6.0.2" media="all" />
    <style id="woocommerce-inline-inline-css">
    .woocommerce form .form-row .required { visibility: visible; }
    </style>
    <link rel="stylesheet" id="hfe-style-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/header-footer-elementor/assets/css/header-footer-elementor.css?ver=1.6.13" media="all" />
    <link rel="stylesheet" id="elementor-icons-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.16.0" media="all" />
    <link rel="stylesheet" id="elementor-frontend-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/custom-frontend-lite.min.css?ver=1661932570" media="all" />
    <link rel="stylesheet" id="elementor-post-7-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-7.css?ver=1661932570" media="all" />
    <link rel="stylesheet" id="elementor-global-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/global.css?ver=1661932571" media="all" />
    <link rel="stylesheet" id="elementor-post-20-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-20.css?ver=1661932588" media="all" />
    <link rel="stylesheet" id="hfe-widgets-style-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/header-footer-elementor/inc/widgets-css/frontend.css?ver=1.6.13" media="all" />
    <link rel="stylesheet" id="elementor-post-84-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-84.css?ver=1661932571" media="all" />
    <link rel="stylesheet" id="elementor-post-92-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-92.css?ver=1661932571" media="all" />
    <link rel="stylesheet" id="elementor-post-98-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-98.css?ver=1661932571" media="all" />
    <link rel="stylesheet" id="woo-variation-swatches-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-variation-swatches/assets/css/frontend.min.css?ver=1660386322" media="all" />
    <style id="woo-variation-swatches-inline-css">
    :root {
    --wvs-tick:url("data:image/svg+xml;utf8,%3Csvg filter='drop-shadow(0px 0px 2px rgb(0 0 0 / .8))' xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 30 30'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='4' d='M4 16L11 23 27 7'/%3E%3C/svg%3E");

    --wvs-cross:url("data:image/svg+xml;utf8,%3Csvg filter='drop-shadow(0px 0px 5px rgb(255 255 255 / .6))' xmlns='http://www.w3.org/2000/svg' width='72px' height='72px' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23ff0000' stroke-linecap='round' stroke-width='0.6' d='M5 5L19 19M19 5L5 19'/%3E%3C/svg%3E");
    --wvs-single-product-item-width:30px;
    --wvs-single-product-item-height:30px;
    --wvs-single-product-item-font-size:16px}
    </style>
    <link rel="stylesheet" id="hint-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/libs/hint/hint.min.css?ver=6.0.2" media="all" />
    <link rel="stylesheet" id="perfect-scrollbar-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/perfect-scrollbar.min.css?ver=6.0.2" media="all" />
    <link rel="stylesheet" id="perfect-scrollbar-wpc-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/custom-theme.css?ver=6.0.2" media="all" />
    <link rel="stylesheet" id="woosc-frontend-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/css/frontend.css?ver=5.1.5" media="all" />
    <link rel="stylesheet" id="slick-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-quick-view/assets/libs/slick/slick.css?ver=6.0.2" media="all" />
    <link rel="stylesheet" id="magnific-popup-css" href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/libs/magnific-popup.css?ver=1.0.1" media="all" />
    <link rel="stylesheet" id="woosq-feather-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-quick-view/assets/libs/feather/feather.css?ver=6.0.2" media="all" />
    <link rel="stylesheet" id="woosq-frontend-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-quick-view/assets/css/frontend.css?ver=3.1.2" media="all" />
    <link rel="stylesheet" id="woosw-feather-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-wishlist/assets/libs/feather/feather.css?ver=6.0.2" media="all" />
    <link rel="stylesheet" id="woosw-frontend-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-wishlist/assets/css/frontend.css?ver=4.3.1" media="all" />
    <style id="woosw-frontend-inline-css">
    .woosw-popup .woosw-popup-inner .woosw-popup-content .woosw-popup-content-bot .woosw-notice { background-color: #5fbd74; } .woosw-popup .woosw-popup-inner .woosw-popup-content .woosw-popup-content-bot .woosw-popup-content-bot-inner a:hover { color: #5fbd74; border-color: #5fbd74; }
    </style>
    <link rel="stylesheet" id="delicioz-fonts-css" href="//fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&#038;subset=latin%2Clatin-ext&#038;display=swap" media="all" />
    <link rel="stylesheet" id="delicioz-style-css" href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/style.css?ver=1.0.1" media="all" />
    <style id="delicioz-style-inline-css">
    .col-full{max-width:1290px}@media(max-width:1366px){body.theme-delicioz [data-elementor-columns-laptop="1"] .column-item{flex: 0 0 100%; max-width: 100%;}.woocommerce.columns-laptop-1 ul.products li.product{flex: 0 0 100%; max-width: 100%;}body.theme-delicioz [data-elementor-columns-laptop="2"] .column-item{flex: 0 0 50%; max-width: 50%;}.woocommerce.columns-laptop-2 ul.products li.product{flex: 0 0 50%; max-width: 50%;}body.theme-delicioz [data-elementor-columns-laptop="3"] .column-item{flex: 0 0 33.3333333333%; max-width: 33.3333333333%;}.woocommerce.columns-laptop-3 ul.products li.product{flex: 0 0 33.3333333333%; max-width: 33.3333333333%;}body.theme-delicioz [data-elementor-columns-laptop="4"] .column-item{flex: 0 0 25%; max-width: 25%;}.woocommerce.columns-laptop-4 ul.products li.product{flex: 0 0 25%; max-width: 25%;}body.theme-delicioz [data-elementor-columns-laptop="5"] .column-item{flex: 0 0 20%; max-width: 20%;}.woocommerce.columns-laptop-5 ul.products li.product{flex: 0 0 20%; max-width: 20%;}body.theme-delicioz [data-elementor-columns-laptop="6"] .column-item{flex: 0 0 16.6666666667%; max-width: 16.6666666667%;}.woocommerce.columns-laptop-6 ul.products li.product{flex: 0 0 16.6666666667%; max-width: 16.6666666667%;}body.theme-delicioz [data-elementor-columns-laptop="7"] .column-item{flex: 0 0 14.2857142857%; max-width: 14.2857142857%;}.woocommerce.columns-laptop-7 ul.products li.product{flex: 0 0 14.2857142857%; max-width: 14.2857142857%;}body.theme-delicioz [data-elementor-columns-laptop="8"] .column-item{flex: 0 0 12.5%; max-width: 12.5%;}.woocommerce.columns-laptop-8 ul.products li.product{flex: 0 0 12.5%; max-width: 12.5%;}}@media(max-width:1200px){body.theme-delicioz [data-elementor-columns-tablet-extra="1"] .column-item{flex: 0 0 100%; max-width: 100%;}.woocommerce.columns-tablet-extra-1 ul.products li.product{flex: 0 0 100%; max-width: 100%;}body.theme-delicioz [data-elementor-columns-tablet-extra="2"] .column-item{flex: 0 0 50%; max-width: 50%;}.woocommerce.columns-tablet-extra-2 ul.products li.product{flex: 0 0 50%; max-width: 50%;}body.theme-delicioz [data-elementor-columns-tablet-extra="3"] .column-item{flex: 0 0 33.3333333333%; max-width: 33.3333333333%;}.woocommerce.columns-tablet-extra-3 ul.products li.product{flex: 0 0 33.3333333333%; max-width: 33.3333333333%;}body.theme-delicioz [data-elementor-columns-tablet-extra="4"] .column-item{flex: 0 0 25%; max-width: 25%;}.woocommerce.columns-tablet-extra-4 ul.products li.product{flex: 0 0 25%; max-width: 25%;}body.theme-delicioz [data-elementor-columns-tablet-extra="5"] .column-item{flex: 0 0 20%; max-width: 20%;}.woocommerce.columns-tablet-extra-5 ul.products li.product{flex: 0 0 20%; max-width: 20%;}body.theme-delicioz [data-elementor-columns-tablet-extra="6"] .column-item{flex: 0 0 16.6666666667%; max-width: 16.6666666667%;}.woocommerce.columns-tablet-extra-6 ul.products li.product{flex: 0 0 16.6666666667%; max-width: 16.6666666667%;}body.theme-delicioz [data-elementor-columns-tablet-extra="7"] .column-item{flex: 0 0 14.2857142857%; max-width: 14.2857142857%;}.woocommerce.columns-tablet-extra-7 ul.products li.product{flex: 0 0 14.2857142857%; max-width: 14.2857142857%;}body.theme-delicioz [data-elementor-columns-tablet-extra="8"] .column-item{flex: 0 0 12.5%; max-width: 12.5%;}.woocommerce.columns-tablet-extra-8 ul.products li.product{flex: 0 0 12.5%; max-width: 12.5%;}}@media(max-width:1024px){body.theme-delicioz [data-elementor-columns-tablet="1"] .column-item{flex: 0 0 100%; max-width: 100%;}.woocommerce.columns-tablet-1 ul.products li.product{flex: 0 0 100%; max-width: 100%;}body.theme-delicioz [data-elementor-columns-tablet="2"] .column-item{flex: 0 0 50%; max-width: 50%;}.woocommerce.columns-tablet-2 ul.products li.product{flex: 0 0 50%; max-width: 50%;}body.theme-delicioz [data-elementor-columns-tablet="3"] .column-item{flex: 0 0 33.3333333333%; max-width: 33.3333333333%;}.woocommerce.columns-tablet-3 ul.products li.product{flex: 0 0 33.3333333333%; max-width: 33.3333333333%;}body.theme-delicioz [data-elementor-columns-tablet="4"] .column-item{flex: 0 0 25%; max-width: 25%;}.woocommerce.columns-tablet-4 ul.products li.product{flex: 0 0 25%; max-width: 25%;}body.theme-delicioz [data-elementor-columns-tablet="5"] .column-item{flex: 0 0 20%; max-width: 20%;}.woocommerce.columns-tablet-5 ul.products li.product{flex: 0 0 20%; max-width: 20%;}body.theme-delicioz [data-elementor-columns-tablet="6"] .column-item{flex: 0 0 16.6666666667%; max-width: 16.6666666667%;}.woocommerce.columns-tablet-6 ul.products li.product{flex: 0 0 16.6666666667%; max-width: 16.6666666667%;}body.theme-delicioz [data-elementor-columns-tablet="7"] .column-item{flex: 0 0 14.2857142857%; max-width: 14.2857142857%;}.woocommerce.columns-tablet-7 ul.products li.product{flex: 0 0 14.2857142857%; max-width: 14.2857142857%;}body.theme-delicioz [data-elementor-columns-tablet="8"] .column-item{flex: 0 0 12.5%; max-width: 12.5%;}.woocommerce.columns-tablet-8 ul.products li.product{flex: 0 0 12.5%; max-width: 12.5%;}}@media(max-width:880px){body.theme-delicioz [data-elementor-columns-mobile-extra="1"] .column-item{flex: 0 0 100%; max-width: 100%;}.woocommerce.columns-mobile-extra-1 ul.products li.product{flex: 0 0 100%; max-width: 100%;}body.theme-delicioz [data-elementor-columns-mobile-extra="2"] .column-item{flex: 0 0 50%; max-width: 50%;}.woocommerce.columns-mobile-extra-2 ul.products li.product{flex: 0 0 50%; max-width: 50%;}body.theme-delicioz [data-elementor-columns-mobile-extra="3"] .column-item{flex: 0 0 33.3333333333%; max-width: 33.3333333333%;}.woocommerce.columns-mobile-extra-3 ul.products li.product{flex: 0 0 33.3333333333%; max-width: 33.3333333333%;}body.theme-delicioz [data-elementor-columns-mobile-extra="4"] .column-item{flex: 0 0 25%; max-width: 25%;}.woocommerce.columns-mobile-extra-4 ul.products li.product{flex: 0 0 25%; max-width: 25%;}body.theme-delicioz [data-elementor-columns-mobile-extra="5"] .column-item{flex: 0 0 20%; max-width: 20%;}.woocommerce.columns-mobile-extra-5 ul.products li.product{flex: 0 0 20%; max-width: 20%;}body.theme-delicioz [data-elementor-columns-mobile-extra="6"] .column-item{flex: 0 0 16.6666666667%; max-width: 16.6666666667%;}.woocommerce.columns-mobile-extra-6 ul.products li.product{flex: 0 0 16.6666666667%; max-width: 16.6666666667%;}body.theme-delicioz [data-elementor-columns-mobile-extra="7"] .column-item{flex: 0 0 14.2857142857%; max-width: 14.2857142857%;}.woocommerce.columns-mobile-extra-7 ul.products li.product{flex: 0 0 14.2857142857%; max-width: 14.2857142857%;}body.theme-delicioz [data-elementor-columns-mobile-extra="8"] .column-item{flex: 0 0 12.5%; max-width: 12.5%;}.woocommerce.columns-mobile-extra-8 ul.products li.product{flex: 0 0 12.5%; max-width: 12.5%;}}@media(max-width:767px){body.theme-delicioz [data-elementor-columns-mobile="1"] .column-item{flex: 0 0 100%; max-width: 100%;}.woocommerce.columns-mobile-1 ul.products li.product{flex: 0 0 100%; max-width: 100%;}body.theme-delicioz [data-elementor-columns-mobile="2"] .column-item{flex: 0 0 50%; max-width: 50%;}.woocommerce.columns-mobile-2 ul.products li.product{flex: 0 0 50%; max-width: 50%;}body.theme-delicioz [data-elementor-columns-mobile="3"] .column-item{flex: 0 0 33.3333333333%; max-width: 33.3333333333%;}.woocommerce.columns-mobile-3 ul.products li.product{flex: 0 0 33.3333333333%; max-width: 33.3333333333%;}body.theme-delicioz [data-elementor-columns-mobile="4"] .column-item{flex: 0 0 25%; max-width: 25%;}.woocommerce.columns-mobile-4 ul.products li.product{flex: 0 0 25%; max-width: 25%;}body.theme-delicioz [data-elementor-columns-mobile="5"] .column-item{flex: 0 0 20%; max-width: 20%;}.woocommerce.columns-mobile-5 ul.products li.product{flex: 0 0 20%; max-width: 20%;}body.theme-delicioz [data-elementor-columns-mobile="6"] .column-item{flex: 0 0 16.6666666667%; max-width: 16.6666666667%;}.woocommerce.columns-mobile-6 ul.products li.product{flex: 0 0 16.6666666667%; max-width: 16.6666666667%;}body.theme-delicioz [data-elementor-columns-mobile="7"] .column-item{flex: 0 0 14.2857142857%; max-width: 14.2857142857%;}.woocommerce.columns-mobile-7 ul.products li.product{flex: 0 0 14.2857142857%; max-width: 14.2857142857%;}body.theme-delicioz [data-elementor-columns-mobile="8"] .column-item{flex: 0 0 12.5%; max-width: 12.5%;}.woocommerce.columns-mobile-8 ul.products li.product{flex: 0 0 12.5%; max-width: 12.5%;}}
    </style>
    <link rel="stylesheet" id="delicioz-slick-style-css" href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/base/slick.css?ver=1.0.1" media="all" />
    <link rel="stylesheet" id="delicioz-slick-theme-style-css" href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/base/slick-theme.css?ver=1.0.1" media="all" />
    <link rel="stylesheet" id="elementor-post-101-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-101.css?ver=1661932571" media="all" />
    <link rel="stylesheet" id="delicioz-elementor-css" href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/base/elementor.css?ver=1.0.1" media="all" />
    <link rel="stylesheet" id="delicioz-woocommerce-style-css" href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/woocommerce/woocommerce.css?ver=1.0.1" media="all" />
    <link rel="stylesheet" id="delicioz-child-style-css" href="https://demo2.themelexus.com/delicioz/wp-content/themes/demo-child/style.css?ver=1.0.0" media="all" />
    <link rel="stylesheet" id="google-fonts-1-css" href="https://fonts.googleapis.com/css?family=Manrope%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRajdhani%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=auto&#038;ver=6.0.2" media="all" />
    <link rel="stylesheet" id="elementor-icons-shared-0-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3" media="all" />
    <link rel="stylesheet" id="elementor-icons-fa-brands-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3" media="all" />
    <script type="text/template" id="tmpl-variation-template">
        <div class="woocommerce-variation-description">{{{ data.variation.variation_description }}}</div>
        <div class="woocommerce-variation-price">{{{ data.variation.price_html }}}</div>
        <div class="woocommerce-variation-availability">{{{ data.variation.availability_html }}}</div>
    </script>
    <script type="text/template" id="tmpl-unavailable-variation-template">
        <p>Sorry, this product is unavailable. Please choose a different combination.</p>
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/jquery/jquery.min.js?ver=3.6.0" id="jquery-core-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2" id="jquery-migrate-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/jarallax.js?ver=6.0.2" id="jarallax-js"></script>
    <link rel="https://api.w.org/" href="https://demo2.themelexus.com/delicioz/wp-json/" /><link rel="alternate" type="application/json" href="https://demo2.themelexus.com/delicioz/wp-json/wp/v2/pages/20" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://demo2.themelexus.com/delicioz/xmlrpc.php?rsd" />
    <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://demo2.themelexus.com/delicioz/wp-includes/wlwmanifest.xml" />
    <meta name="generator" content="WordPress 6.0.2" />
    <meta name="generator" content="WooCommerce 6.8.2" />
    <link rel="canonical" href="https://demo2.themelexus.com/delicioz/" />
    <link rel="shortlink" href="https://demo2.themelexus.com/delicioz/" />
    <link rel="alternate" type="application/json+oembed" href="https://demo2.themelexus.com/delicioz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdemo2.themelexus.com%2Fdelicioz%2F" />
    <link rel="alternate" type="text/xml+oembed" href="https://demo2.themelexus.com/delicioz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdemo2.themelexus.com%2Fdelicioz%2F&#038;format=xml" />
    <noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
    <meta name="generator" content="Powered by Slider Revolution 6.5.31 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />
    <script>function setREVStartSize(e){
                //window.requestAnimationFrame(function() {
                    window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;
                    window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;
                    try {
                        var pw = document.getElementById(e.c).parentNode.offsetWidth,
                            newh;
                        pw = pw===0 || isNaN(pw) || (e.l=="fullwidth" || e.layout=="fullwidth") ? window.RSIW : pw;
                        e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
                        e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
                        e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
                        e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
                        e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
                        e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
                        e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);
                        if(e.layout==="fullscreen" || e.l==="fullscreen")
                            newh = Math.max(e.mh,window.RSIH);
                        else{
                            e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
                            for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];
                            e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
                            e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
                            for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];

                            var nl = new Array(e.rl.length),
                                ix = 0,
                                sl;
                            e.tabw = e.tabhide>=pw ? 0 : e.tabw;
                            e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
                            e.tabh = e.tabhide>=pw ? 0 : e.tabh;
                            e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;
                            for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
                            sl = nl[0];
                            for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}
                            var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);
                            newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
                        }
                        var el = document.getElementById(e.c);
                        if (el!==null && el) el.style.height = newh+"px";
                        el = document.getElementById(e.c+"_wrapper");
                        if (el!==null && el) {
                            el.style.height = newh+"px";
                            el.style.display = "block";
                        }
                    } catch(e){
                        console.log("Failure at Presize of Slider:" + e)
                    }
                //});
              };</script>
 <script>
            if(typeof revslider_showDoubleJqueryError === "undefined") {function revslider_showDoubleJqueryError(sliderID) {console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion.");console.log("To fix this, you can:");console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on");console.log("2. Find the double jQuery.js inclusion and remove it");return "Double Included jQuery Library";}}
    </script>
    <link rel="stylesheet" id="elementor-post-671-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-671.css?ver=1661932588" media="all" />
    <link rel="stylesheet" id="elementor-post-705-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-705.css?ver=1661932588" media="all" />
    <link rel="stylesheet" id="elementor-post-2483-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2483.css?ver=1661932589" media="all" />
    <link rel="stylesheet" id="elementor-post-2492-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2492.css?ver=1661932589" media="all" />
    <link rel="stylesheet" id="elementor-post-2498-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2498.css?ver=1661932589" media="all" />
    <link rel="stylesheet" id="elementor-post-2504-css" href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-2504.css?ver=1661932589" media="all" />
    <link rel="stylesheet" id="e-animations-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.7.3" media="all" />
    <link rel="stylesheet" id="rs-plugin-settings-css" href="https://demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/css/rs6.css?ver=6.5.31" media="all" />
    <style id="rs-plugin-settings-inline-css">
            #rev_slider_1_1_wrapper .ares.tp-bullets{}#rev_slider_1_1_wrapper .ares.tp-bullets:before{content:' ';position:absolute;width:100%;height:100%;background:transparent;padding:10px;margin-left:-10px;margin-top:-10px;box-sizing:content-box}#rev_slider_1_1_wrapper .ares .tp-bullet{width:10px;height:10px;position:absolute;background:#c7c7cc;border-radius:50%;cursor:pointer;box-sizing:content-box}#rev_slider_1_1_wrapper .ares .tp-bullet.rs-touchhover,#rev_slider_1_1_wrapper .ares .tp-bullet.selected{background:#ffcc00}#rev_slider_1_1_wrapper .ares .tp-bullet-title{position:absolute; color:#888888; font-size:12px; padding:0px 10px; font-weight:600; right:27px; top:-4px;  background:rgba(255,255,255,0.75); visibility:hidden; transform:translatex(-20px); -webkit-transform:translatex(-20px); transition:transform 0.3s; -webkit-transition:transform 0.3s; line-height:20px; white-space:nowrap}#rev_slider_1_1_wrapper .ares .tp-bullet-title:after{width:0px;height:0px;border-style:solid;border-width:10px 0 10px 10px;border-color:transparent transparent transparent rgba(255,255,255,0.75);content:' ';  position:absolute;  right:-10px;top:0px}#rev_slider_1_1_wrapper .ares .tp-bullet.rs-touchhover .tp-bullet-title{visibility:visible;  transform:translatex(0px); -webkit-transform:translatex(0px)}#rev_slider_1_1_wrapper .ares .tp-bullet.selected.rs-touchhover .tp-bullet-title{background:#ffcc00}#rev_slider_1_1_wrapper .ares .tp-bullet.selected.rs-touchhover .tp-bullet-title:after{border-color:transparent transparent transparent #ffcc00}#rev_slider_1_1_wrapper .ares.tp-bullets.rs-touchhover .tp-bullet-title{visibility:hidden}#rev_slider_1_1_wrapper .ares.tp-bullets.rs-touchhover .tp-bullet.rs-touchhover .tp-bullet-title{visibility:visible;  transform:translateX(0px) translatey(0px); -webkit-transform:translateX(0px) translatey(0px)}#rev_slider_1_1_wrapper .ares.nav-dir-vertical.nav-pos-hor-left .tp-bullet-title{right:auto; left:27px; transform:translatex(20px); -webkit-transform:translatex(20px)}#rev_slider_1_1_wrapper .ares.nav-dir-vertical.nav-pos-hor-left .tp-bullet-title:after{border-width:10px 10px 10px 0 !important; border-color:transparent rgba(255,255,255,0.75) transparent transparent; right:auto !important; left:-10px !important}#rev_slider_1_1_wrapper .ares.nav-dir-vertical.nav-pos-hor-left .tp-bullet.selected.rs-touchhover .tp-bullet-title:after{border-color:transparent #ffcc00 transparent transparent !important}#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-center .tp-bullet-title,#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-bottom .tp-bullet-title{top:-35px; left:50%; right:auto; transform:translateX(-50%) translateY(-10px);-webkit-transform:translateX(-50%) translateY(-10px)}#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-center .tp-bullet-title:after,#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-bottom .tp-bullet-title:after{border-width:10px 10px 0px 10px; border-color:rgba(255,255,255,0.75) transparent transparent transparent; right:auto; left:50%; margin-left:-10px; top:auto; bottom:-10px}#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-center .tp-bullet.selected.rs-touchhover .tp-bullet-title:after,#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-bottom .tp-bullet.selected.rs-touchhover .tp-bullet-title:after{border-color:#ffcc00 transparent transparent transparent}#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-center .tp-bullet.rs-touchhover .tp-bullet-title,#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-bottom .tp-bullet.rs-touchhover .tp-bullet-title{transform:translateX(-50%) translatey(0px); -webkit-transform:translateX(-50%) translatey(0px)}#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-top .tp-bullet-title{top:25px; left:50%; right:auto; transform:translateX(-50%) translateY(10px);-webkit-transform:translateX(-50%) translateY(10px)}#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-top .tp-bullet-title:after{border-width:0 10px 10px 10px; border-color:transparent transparent rgba(255,255,255,0.75) transparent; right:auto; left:50%; margin-left:-10px; bottom:auto; top:-10px}#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-top .tp-bullet.selected.rs-touchhover .tp-bullet-title:after{border-color:transparent transparent #ffcc00 transparent}#rev_slider_1_1_wrapper .ares.nav-dir-horizontal.nav-pos-ver-top .tp-bullet.rs-touchhover .tp-bullet-title{transform:translateX(-50%) translatey(0px); -webkit-transform:translateX(-50%) translatey(0px)}
            @font-face{font-family:'Material Icons'; font-style:normal; font-weight:400;  src:url(//fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2')}rs-module .material-icons{font-family:'Material Icons'; font-weight:normal; font-style:normal;font-size:inherit; display:inline-block;  text-transform:none; letter-spacing:normal; word-wrap:normal; white-space:nowrap; direction:ltr; vertical-align:top; line-height:inherit;  font-feature-settings:'liga'; -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility; -moz-osx-font-smoothing:grayscale}
    </style>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.9" id="regenerator-runtime-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0" id="wp-polyfill-js"></script>
    <script id="contact-form-7-js-extra">
    var wpcf7 = {"api":{"root":"https:\/\/demo2.themelexus.com\/delicioz\/wp-json\/","namespace":"contact-form-7\/v1"},"cached":"1"};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.6.2" id="contact-form-7-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/js/rbtools.min.js?ver=6.5.18" defer async id="tp-tools-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/js/rs6.min.js?ver=6.5.31" defer async id="revmin-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.6.8.2" id="jquery-blockui-js"></script>
    <script id="wc-add-to-cart-js-extra">
    var wc_add_to_cart_params = {"ajax_url":"\/delicioz\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/delicioz\/?wc-ajax=%%endpoint%%","i18n_view_cart":"","cart_url":"https:\/\/demo2.themelexus.com\/delicioz\/cart\/","is_cart":"","cart_redirect_after_add":"no"};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=6.8.2" id="wc-add-to-cart-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.6.8.2" id="js-cookie-js"></script>
    <script id="woocommerce-js-extra">
    var woocommerce_params = {"ajax_url":"\/delicioz\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/delicioz\/?wc-ajax=%%endpoint%%"};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=6.8.2" id="woocommerce-js"></script>
    <script id="wc-cart-fragments-js-extra">
    var wc_cart_fragments_params = {"ajax_url":"\/delicioz\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/delicioz\/?wc-ajax=%%endpoint%%","cart_hash_key":"wc_cart_hash_fb254261fa3641bff9c309f0d976a3b1","fragment_name":"wc_fragments_fb254261fa3641bff9c309f0d976a3b1","request_timeout":"5000"};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=6.8.2" id="wc-cart-fragments-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/underscore.min.js?ver=1.13.3" id="underscore-js"></script>
    <script id="wp-util-js-extra">
    var _wpUtilSettings = {"ajax":{"url":"\/delicioz\/wp-admin\/admin-ajax.php"}};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/wp-util.min.js?ver=6.0.2" id="wp-util-js"></script>
    <script id="woo-variation-swatches-js-extra">
    var woo_variation_swatches_options = {"show_variation_label":"1","clear_on_reselect":"","variation_label_separator":":","is_mobile":"","show_variation_stock":"","stock_label_threshold":"5","cart_redirect_after_add":"no","enable_ajax_add_to_cart":"yes","cart_url":"https:\/\/demo2.themelexus.com\/delicioz\/cart\/","is_cart":""};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-variation-swatches/assets/js/frontend.min.js?ver=1660386322" id="woo-variation-swatches-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/libs/table-head-fixer/table-head-fixer.js?ver=5.1.5" id="table-head-fixer-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js?ver=5.1.5" id="perfect-scrollbar-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/jquery/ui/core.min.js?ver=1.13.1" id="jquery-ui-core-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.1" id="jquery-ui-mouse-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/jquery/ui/sortable.min.js?ver=1.13.1" id="jquery-ui-sortable-js"></script>
    <script id="woosc-frontend-js-extra">
    var woosc_vars = {"ajax_url":"https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php","user_id":"0cdb64fab32a05bd393b20c8c351de9f","page_url":"#","open_button":"","open_button_action":"open_popup","menu_action":"open_popup","button_action":"show_table","sidebar_position":"right","message_position":"right-top","message_added":"{name} has been added to Compare list.","message_removed":"{name} has been removed from the Compare list.","message_exists":"{name} is already in the Compare list.","open_bar":"","bar_bubble":"no","adding":"prepend","click_again":"no","hide_empty":"no","click_outside":"yes","freeze_column":"yes","freeze_row":"yes","scrollbar":"yes","limit":"100","button_text_change":"yes","remove_all":"Do you want to remove all products from the compare?","limit_notice":"You can add a maximum of {limit} products to the compare table.","copied_text":"Share link %s was copied to clipboard!","button_text":"Compare","button_text_added":"Compare"};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/js/frontend.js?ver=5.1.5" id="woosc-frontend-js"></script>
    <script id="wc-add-to-cart-variation-js-extra">
    var wc_add_to_cart_variation_params = {"wc_ajax_url":"\/delicioz\/?wc-ajax=%%endpoint%%","i18n_no_matching_variations_text":"Sorry, no products matched your selection. Please choose a different combination.","i18n_make_a_selection_text":"Please select some product options before adding this product to your cart.","i18n_unavailable_text":"Sorry, this product is unavailable. Please choose a different combination."};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart-variation.min.js?ver=6.8.2" id="wc-add-to-cart-variation-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/slick.min.js?ver=1.0.1" id="slick-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/jquery.magnific-popup.min.js?ver=1.0.1" id="magnific-popup-js"></script>
    <script id="woosq-frontend-js-extra">
    var woosq_vars = {"ajax_url":"https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php","view":"popup","effect":"mfp-3d-unfold","scrollbar":"yes","hashchange":"no","cart_redirect":"no","cart_url":"https:\/\/demo2.themelexus.com\/delicioz\/cart\/","close":"Close (Esc)","next":"Next (Right arrow key)","prev":"Previous (Left arrow key)","thumbnails_effect":"no","related_slick_params":"{\"slidesToShow\":2,\"slidesToScroll\":2,\"dots\":true,\"arrows\":false,\"adaptiveHeight\":true,\"rtl\":false}","thumbnails_slick_params":"{\"slidesToShow\":1,\"slidesToScroll\":1,\"dots\":true,\"arrows\":true,\"adaptiveHeight\":false,\"rtl\":false}","thumbnails_zoom_params":"{\"duration\":120,\"magnify\":1}"};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-quick-view/assets/js/frontend.js?ver=3.1.2" id="woosq-frontend-js"></script>
    <script id="woosw-frontend-js-extra">
    var woosw_vars = {"ajax_url":"https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php","menu_action":"open_page","perfect_scrollbar":"yes","wishlist_url":"https:\/\/demo2.themelexus.com\/delicioz\/wishlist\/","button_action":"list","message_position":"right-top","button_action_added":"popup","empty_confirm":"This action cannot be undone. Are you sure?","delete_confirm":"This action cannot be undone. Are you sure?","copied_text":"Copied the wishlist link:","menu_text":"Wishlist","button_text":"Add to wishlist","button_text_added":"Browse wishlist"};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-wishlist/assets/js/frontend.js?ver=4.3.1" id="woosw-frontend-js"></script>
    <script id="delicioz-theme-js-extra">
    var deliciozAjax = {"ajaxurl":"https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php"};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/main.js?ver=1.0.1" id="delicioz-theme-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/imagesloaded.min.js?ver=4.1.4" id="imagesloaded-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/search-popup.js?ver=1.0.1" id="delicioz-search-popup-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/text-editor.js?ver=1.0.1" id="delicioz-text-editor-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/nav-mobile.js?ver=1.0.1" id="delicioz-nav-mobile-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/inc/megamenu/assets/js/frontend.js?ver=1.0.1" id="delicioz-megamenu-frontend-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/login.js?ver=1.0.1" id="delicioz-ajax-login-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/header-cart.min.js?ver=1.0.1" id="delicioz-header-cart-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/tooltipster.bundle.js?ver=1.0.1" id="tooltipster-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/product-ajax-search.min.js?ver=1.0.1" id="delicioz-products-ajax-search-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/main.min.js?ver=1.0.1" id="delicioz-products-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/quantity.min.js?ver=1.0.1" id="delicioz-input-quantity-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/off-canvas.min.js?ver=1.0.1" id="delicioz-off-canvas-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/woocommerce/cart-canvas.min.js?ver=1.0.1" id="delicioz-cart-canvas-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.7.3" id="elementor-webpack-runtime-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.7.3" id="elementor-frontend-modules-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2" id="elementor-waypoints-js"></script>
    <script id="elementor-frontend-js-before">
    var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Extra","value":880,"default_value":880,"direction":"max","is_enabled":true},"tablet":{"label":"Tablet","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Extra","value":1200,"default_value":1200,"direction":"max","is_enabled":true},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":true},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.7.3","is_static":false,"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"a11y_improvements":true,"additional_custom_breakpoints":true,"e_import_export":true,"e_hidden_wordpress_widgets":true,"landing-pages":true,"elements-color-picker":true,"favorite-widgets":true,"admin-top-bar":true},"urls":{"assets":"https:\/\/demo2.themelexus.com\/delicioz\/wp-content\/plugins\/elementor\/assets\/"},"settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_mobile_extra","viewport_tablet","viewport_tablet_extra","viewport_laptop"],"body_background_background":"classic","global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":20,"title":"Delicioz%20%E2%80%93%20Restaurant%20WordPress%20Theme","excerpt":"","featuredImage":false}};
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.7.3" id="elementor-frontend-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/elementor/menu-list.js?ver=1.0.1" id="delicioz-elementor-menu-list-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/TweenMax.min.js?ver=1.11.1" id="tweenmax-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/elementor/testimonial.js?ver=1.0.1" id="delicioz-elementor-testimonial-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/elementor/tabs.js?ver=1.0.1" id="delicioz-elementor-tabs-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/elementor/posts-grid.js?ver=1.0.1" id="delicioz-elementor-posts-grid-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/make-column-clickable-elementor/assets/js/make-column-clickable.js?ver=1.4.0" id="make-column-clickable-elementor-js"></script>
    <script defer src="https://demo2.themelexus.com/delicioz/wp-content/plugins/mailchimp-for-wp/assets/js/forms.js?ver=4.8.8" id="mc4wp-forms-api-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/elementor-frontend.js?ver=1.0.1" id="delicioz-elementor-frontend-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/frontend/jquery.sticky.js?ver=1.0.1" id="elementor-sticky-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/sticky.js?ver=1.0.1" id="delicioz-elementor-sticky-js"></script>
    <script id="rs-initialisation-scripts">
            var	tpj = jQuery;

            var	revapi1;

            if(window.RS_MODULES === undefined) window.RS_MODULES = {};
            if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
            RS_MODULES.modules["revslider11"] = {once: RS_MODULES.modules["revslider11"]!==undefined ? RS_MODULES.modules["revslider11"].once : undefined, init:function() {
                window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
                if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
                window.revapi1 = jQuery(window.revapi1);
                if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
                revapi1.revolutionInit({
                        revapi:"revapi1",
                        DPR:"dpr",
                        sliderLayout:"fullwidth",
                        visibilityLevels:"1240,1024,778,480",
                        gridwidth:"1240,1024,778,480",
                        gridheight:"900,768,700,650",
                        lazyType:"smart",
                        perspective:600,
                        perspectiveType:"global",
                        keepBPHeight:true,
                        editorheight:"900,768,700,650",
                        responsiveLevels:"1240,1024,778,480",
                        progressBar:{disableProgressBar:true},
                        navigation: {
                            wheelCallDelay:1000,
                            onHoverStop:false,
                            touch: {
                                touchenabled:true,
                                touchOnDesktop:true
                            },
                            bullets: {
                                enable:true,
                                tmp:"<span class=\"tp-bullet-title\">{{title}}</span>",
                                style:"ares",
                                hide_over:"778px",
                                space:10
                            }
                        },
                        viewPort: {
                            global:true,
                            globalDist:"-200px",
                            enable:false
                        },
                        fallbacks: {
                            allowHTML5AutoPlayOnAndroid:true
                        },
                });

            }} // End of RevInitScript

            if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
        </script>
    `;

    return (
        <div >
            <div dangerouslySetInnerHTML={{ __html: scriptContent }} />
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
                                                        <style>
                                                            {`.elementor-widget-image-box .elementor-image-box-content {
                                                                width: 100%
                                                        }

                                                            @media (min-width:768px) {

                                                            .elementor - widget - image - box.elementor - position - left.elementor - image - box - wrapper,
                                                            .elementor - widget - image - box.elementor - position - right.elementor - image - box - wrapper {
                                                                display: -webkit-box;
                                                            display: -ms-flexbox;
                                                            display: flex
                                                            }

                                                            .elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper {
                                                                text - align: right;
                                                            -webkit-box-orient: horizontal;
                                                            -webkit-box-direction: reverse;
                                                            -ms-flex-direction: row-reverse;
                                                            flex-direction: row-reverse
                                                            }

                                                            .elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper {
                                                                text - align: left;
                                                            -webkit-box-orient: horizontal;
                                                            -webkit-box-direction: normal;
                                                            -ms-flex-direction: row;
                                                            flex-direction: row
                                                            }

                                                            .elementor-widget-image-box.elementor-position-top .elementor-image-box-img {
                                                                margin: auto
                                                            }

                                                            .elementor-widget-image-box.elementor-vertical-align-top .elementor-image-box-wrapper {
                                                                -webkit - box - align: start;
                                                            -ms-flex-align: start;
                                                            align-items: flex-start
                                                            }

                                                            .elementor-widget-image-box.elementor-vertical-align-middle .elementor-image-box-wrapper {
                                                                -webkit - box - align: center;
                                                            -ms-flex-align: center;
                                                            align-items: center
                                                            }

                                                            .elementor-widget-image-box.elementor-vertical-align-bottom .elementor-image-box-wrapper {
                                                                -webkit - box - align: end;
                                                            -ms-flex-align: end;
                                                            align-items: flex-end
                                                            }
                                                        }

                                                            @media (max-width:767px) {
                                                            .elementor - widget - image - box.elementor - image - box - img {
                                                                margin - left: auto !important;
                                                            margin-right: auto !important;
                                                            margin-bottom: 15px
                                                            }
                                                        }

                                                            .elementor-widget-image-box .elementor-image-box-img {
                                                                display: inline-block
                                                        }

                                                            .elementor-widget-image-box .elementor-image-box-title a {
                                                                color: inherit
                                                        }

                                                            .elementor-widget-image-box .elementor-image-box-wrapper {
                                                                text - align: center
                                                        }

                                                            .elementor-widget-image-box .elementor-image-box-description {
                                                                margin: 0
                                                        }`}
                                                        </style>
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
                                                                        <style>
                                                                            {`/*! elementor - v3.7.3 - 29-08-2022 */
                                                                            .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {
                                                                                background - color: #818a91;
                                                                            color: #fff
                                                                        }

                                                                            .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {
                                                                                color: #818a91;
                                                                            border: 3px solid;
                                                                            background-color: transparent
                                                                        }

                                                                            .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {
                                                                                margin - top: 8px
                                                                        }

                                                                            .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {
                                                                                width: 1em;
                                                                            height: 1em
                                                                        }

                                                                            .elementor-widget-text-editor .elementor-drop-cap {
                                                                                float: left;
                                                                            text-align: center;
                                                                            line-height: 1;
                                                                            font-size: 50px
                                                                        }

                                                                            .elementor-widget-text-editor .elementor-drop-cap-letter {
                                                                                display: inline-block
                                                                        }`}
                                                                        </style>
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
                                                                        <style>
                                                                            {`/*! elementor - v3.7.3 - 29-08-2022 */
                                                                            .elementor-heading-title {
                                                                                padding: 0;
                                                                            margin: 0;
                                                                            line-height: 1
                                                                        }

                                                                        .elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {
                                                                                color: inherit;
                                                                            font-size: inherit;
                                                                            line-height: inherit
                                                                        }

                                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-small {
                                                                                font - size: 15px
                                                                        }

                                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-medium {
                                                                                font - size: 19px
                                                                        }

                                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-large {
                                                                                font - size: 29px
                                                                        }

                                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-xl {
                                                                                font - size: 39px
                                                                        }

                                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-xxl {
                                                                                font - size: 59px
                                                                        }`}
                                                                        </style>
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
                                                        <style>
                                                            {`.elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tabs-wrapper {
                                                                width: 25%;
                                                            -ms-flex-negative: 0;
                                                            flex-shrink: 0
                                                        }

                                                            .elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tab-desktop-title.elementor-active {
                                                                border - right - style: none
                                                        }

                                                            .elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tab-desktop-title.elementor-active:after,
                                                            .elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tab-desktop-title.elementor-active:before {
                                                                height: 999em;
                                                            width: 0;
                                                            right: 0;
                                                            border-right-style: solid
                                                        }

                                                            .elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tab-desktop-title.elementor-active:before {
                                                                top: 0;
                                                            -webkit-transform: translateY(-100%);
                                                            -ms-transform: translateY(-100%);
                                                            transform: translateY(-100%)
                                                        }

                                                            .elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tab-desktop-title.elementor-active:after {
                                                                top: 100%
                                                        }

                                                            .elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title {
                                                                display: table-cell
                                                        }

                                                            .elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title.elementor-active {
                                                                border - bottom - style: none
                                                        }

                                                            .elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title.elementor-active:after,
                                                            .elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title.elementor-active:before {
                                                                bottom: 0;
                                                            height: 0;
                                                            width: 999em;
                                                            border-bottom-style: solid
                                                        }

                                                            .elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title.elementor-active:before {
                                                                right: 100%
                                                        }

                                                            .elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-desktop-title.elementor-active:after {
                                                                left: 100%
                                                        }

                                                            .elementor-widget-tabs .elementor-tab-content,
                                                            .elementor-widget-tabs .elementor-tab-title,
                                                            .elementor-widget-tabs .elementor-tab-title:after,
                                                            .elementor-widget-tabs .elementor-tab-title:before,
                                                            .elementor-widget-tabs .elementor-tabs-content-wrapper {
                                                                border: 1px #d4d4d4
                                                        }

                                                            .elementor-widget-tabs .elementor-tabs {
                                                                text - align: left
                                                        }

                                                            .elementor-widget-tabs .elementor-tabs-wrapper {
                                                                overflow: hidden
                                                        }

                                                            .elementor-widget-tabs .elementor-tab-title {
                                                                cursor: pointer;
                                                            outline: var(--focus-outline, none)
                                                        }

                                                            .elementor-widget-tabs .elementor-tab-desktop-title {
                                                                position: relative;
                                                            padding: 20px 25px;
                                                            font-weight: 700;
                                                            line-height: 1;
                                                            border: solid transparent
                                                        }

                                                            .elementor-widget-tabs .elementor-tab-desktop-title.elementor-active {
                                                                border - color: #d4d4d4
                                                        }

                                                            .elementor-widget-tabs .elementor-tab-desktop-title.elementor-active:after,
                                                            .elementor-widget-tabs .elementor-tab-desktop-title.elementor-active:before {
                                                                display: block;
                                                            content: "";
                                                            position: absolute
                                                        }

                                                            .elementor-widget-tabs .elementor-tab-desktop-title:focus-visible {
                                                                border: 1px solid #000
                                                        }

                                                            .elementor-widget-tabs .elementor-tab-mobile-title {
                                                                padding: 10px;
                                                            cursor: pointer
                                                        }

                                                            .elementor-widget-tabs .elementor-tab-content {
                                                                padding: 20px;
                                                            display: none
                                                        }

                                                            @media (max-width:767px) {

                                                            .elementor - tabs.elementor - tab - content,
                                                            .elementor - tabs.elementor - tab - title {
                                                                border - style: solid solid none
                                                            }

                                                            .elementor-tabs .elementor-tabs-wrapper {
                                                                display: none
                                                            }

                                                            .elementor-tabs .elementor-tabs-content-wrapper {
                                                                border - bottom - style: solid
                                                            }

                                                            .elementor-tabs .elementor-tab-content {
                                                                padding: 10px
                                                            }
                                                        }

                                                            @media (min-width:768px) {
                                                            .elementor - widget - tabs.elementor - tabs - view - vertical.elementor - tabs {
                                                                display: -webkit-box;
                                                            display: -ms-flexbox;
                                                            display: flex
                                                            }

                                                            .elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tabs-wrapper {
                                                                -webkit - box - orient: vertical;
                                                            -webkit-box-direction: normal;
                                                            -ms-flex-direction: column;
                                                            flex-direction: column
                                                            }

                                                            .elementor-widget-tabs.elementor-tabs-view-vertical .elementor-tabs-content-wrapper {
                                                                -webkit - box - flex: 1;
                                                            -ms-flex-positive: 1;
                                                            flex-grow: 1;
                                                            border-style: solid solid solid none
                                                            }

                                                            .elementor-widget-tabs.elementor-tabs-view-horizontal .elementor-tab-content {
                                                                border - style: none solid solid
                                                            }

                                                            .elementor-widget-tabs.elementor-tabs-alignment-center .elementor-tabs-wrapper,
                                                            .elementor-widget-tabs.elementor-tabs-alignment-end .elementor-tabs-wrapper,
                                                            .elementor-widget-tabs.elementor-tabs-alignment-stretch .elementor-tabs-wrapper {
                                                                display: -webkit-box;
                                                            display: -ms-flexbox;
                                                            display: flex
                                                            }

                                                            .elementor-widget-tabs.elementor-tabs-alignment-center .elementor-tabs-wrapper {
                                                                -webkit - box - pack: center;
                                                            -ms-flex-pack: center;
                                                            justify-content: center
                                                            }

                                                            .elementor-widget-tabs.elementor-tabs-alignment-end .elementor-tabs-wrapper {
                                                                -webkit - box - pack: end;
                                                            -ms-flex-pack: end;
                                                            justify-content: flex-end
                                                            }

                                                            .elementor-widget-tabs.elementor-tabs-alignment-stretch.elementor-tabs-view-horizontal .elementor-tab-title {
                                                                width: 100%
                                                            }

                                                            .elementor-widget-tabs.elementor-tabs-alignment-stretch.elementor-tabs-view-vertical .elementor-tab-title {
                                                                height: 100%
                                                            }

                                                            .elementor-tabs .elementor-tab-mobile-title {
                                                                display: none
                                                            }
                                                        }`}
                                                        </style>
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
                                                            style={{ color: 'var(--e-global-color-primary)' }}>8:30 am</span> to
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
                                                        <style>
                                                            {`/*! elementor - v3.7.3 - 29-08-2022 */
                                                            .elementor-column .elementor-spacer-inner {
                                                                height: var(--spacer-size)
                                                        }

                                                            .e-container {
                                                                --container - widget - width: 100%
                                                        }

                                                        .e-container>.elementor-widget-spacer {
                                                                width: var(--container-widget-width, var(--spacer-size));
                                                            -ms-flex-item-align: stretch;
                                                            align-self: stretch;
                                                            -ms-flex-negative: 0;
                                                            flex-shrink: 0
                                                        }

                                                        .e-container>.elementor-widget-spacer>.elementor-widget-container,
                                                        .e-container>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer {
                                                                height: 100%
                                                        }

                                                        .e-container>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner {
                                                                height: var(--container-widget-height, var(--spacer-size))
                                                        }`}
                                                        </style>
                                                        <div class="elementor-spacer">
                                                            <div class="elementor-spacer-inner"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-ef04b12 elementor-widget__width-initial elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                    data-id="ef04b12" data-element_type="widget"
                                                    data-widget_type="divider.default">
                                                    <div class="elementor-widget-container">
                                                        <style>
                                                            {`/*! elementor - v3.7.3 - 29-08-2022 */
                                                            .elementor-widget-divider {
                                                                --divider - border - style: none;
                                                            --divider-border-width: 1px;
                                                            --divider-color: #2c2c2c;
                                                            --divider-icon-size: 20px;
                                                            --divider-element-spacing: 10px;
                                                            --divider-pattern-height: 24px;
                                                            --divider-pattern-size: 20px;
                                                            --divider-pattern-url: none;
                                                            --divider-pattern-repeat: repeat-x
                                                        }

                                                            .elementor-widget-divider .elementor-divider {
                                                                display: -webkit-box;
                                                            display: -ms-flexbox;
                                                            display: flex
                                                        }

                                                            .elementor-widget-divider .elementor-divider__text {
                                                                font - size: 15px;
                                                            line-height: 1;
                                                            max-width: 95%
                                                        }

                                                            .elementor-widget-divider .elementor-divider__element {
                                                                margin: 0 var(--divider-element-spacing);
                                                            -ms-flex-negative: 0;
                                                            flex-shrink: 0
                                                        }

                                                            .elementor-widget-divider .elementor-icon {
                                                                font - size: var(--divider-icon-size)
                                                        }

                                                            .elementor-widget-divider .elementor-divider-separator {
                                                                display: -webkit-box;
                                                            display: -ms-flexbox;
                                                            display: flex;
                                                            margin: 0;
                                                            direction: ltr
                                                        }

                                                            .elementor-widget-divider--view-line_icon .elementor-divider-separator,
                                                            .elementor-widget-divider--view-line_text .elementor-divider-separator {
                                                                -webkit - box - align: center;
                                                            -ms-flex-align: center;
                                                            align-items: center
                                                        }

                                                            .elementor-widget-divider--view-line_icon .elementor-divider-separator:after,
                                                            .elementor-widget-divider--view-line_icon .elementor-divider-separator:before,
                                                            .elementor-widget-divider--view-line_text .elementor-divider-separator:after,
                                                            .elementor-widget-divider--view-line_text .elementor-divider-separator:before {
                                                                display: block;
                                                            content: "";
                                                            border-bottom: 0;
                                                            -webkit-box-flex: 1;
                                                            -ms-flex-positive: 1;
                                                            flex-grow: 1;
                                                            border-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)
                                                        }

                                                        .elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type {
                                                                -webkit - box - flex: 0;
                                                            -ms-flex-positive: 0;
                                                            flex-grow: 0;
                                                            -ms-flex-negative: 100;
                                                            flex-shrink: 100
                                                        }

                                                            .elementor-widget-divider--element-align-left .elementor-divider-separator:before {
                                                                content: none
                                                        }

                                                            .elementor-widget-divider--element-align-left .elementor-divider__element {
                                                                margin - left: 0
                                                        }

                                                        .elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type {
                                                                -webkit - box - flex: 0;
                                                            -ms-flex-positive: 0;
                                                            flex-grow: 0;
                                                            -ms-flex-negative: 100;
                                                            flex-shrink: 100
                                                        }

                                                            .elementor-widget-divider--element-align-right .elementor-divider-separator:after {
                                                                content: none
                                                        }

                                                            .elementor-widget-divider--element-align-right .elementor-divider__element {
                                                                margin - right: 0
                                                        }

                                                            .elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator {
                                                                border - top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)
                                                        }

                                                            .elementor-widget-divider--separator-type-pattern {
                                                                --divider - border - style: none
                                                        }

                                                            .elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,
                                                            .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,
                                                            .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,
                                                            .elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator {
                                                                width: 100%;
                                                            min-height: var(--divider-pattern-height);
                                                            -webkit-mask-size: var(--divider-pattern-size) 100%;
                                                            mask-size: var(--divider-pattern-size) 100%;
                                                            -webkit-mask-repeat: var(--divider-pattern-repeat);
                                                            mask-repeat: var(--divider-pattern-repeat);
                                                            background-color: var(--divider-color);
                                                            -webkit-mask-image: var(--divider-pattern-url);
                                                            mask-image: var(--divider-pattern-url)
                                                        }

                                                            .elementor-widget-divider--no-spacing {
                                                                --divider - pattern - size: auto
                                                        }

                                                            .elementor-widget-divider--bg-round {
                                                                --divider - pattern - repeat: round
                                                        }

                                                            .rtl .elementor-widget-divider .elementor-divider__text {
                                                                direction: rtl
                                                        }

                                                        .e-container>.elementor-widget-divider {
                                                                width: var(--container-widget-width, 100%);
                                                            --flex-grow: var(--container-widget-flex-grow, 0)
                                                        }`}
                                                        </style>
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
        </div >
    )
}
