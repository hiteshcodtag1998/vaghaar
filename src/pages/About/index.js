import React from 'react'

export default function About() {
    const scriptContent = `
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//s.w.org">
    <link rel="dns-prefetch" href="//demo2.themelexus.com" />
    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    <link rel="dns-prefetch" href="//s.w.org" />
    <link rel="alternate" type="application/rss+xml" title="Delicioz &raquo; Feed"
        href="https://demo2.themelexus.com/delicioz/feed/" />
    <link rel="alternate" type="application/rss+xml" title="Delicioz &raquo; Comments Feed"
        href="https://demo2.themelexus.com/delicioz/comments/feed/" />
    <script>
        window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/demo2.themelexus.com\/delicioz\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.0.2" } };
        /*! This file is auto-generated */
        !function (e, a, t) { var n, r, o, i = a.createElement("canvas"), p = i.getContext && i.getContext("2d"); function s(e, t) { var a = String.fromCharCode, e = (p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, e), 0, 0), i.toDataURL()); return p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, t), 0, 0), e === i.toDataURL() } function c(e) { var t = a.createElement("script"); t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t) } for (o = Array("flag", "emoji"), t.supports = { everything: !0, everythingExceptFlag: !0 }, r = 0; r < o.length; r++)t.supports[o[r]] = function (e) { if (!p || !p.fillText) return !1; switch (p.textBaseline = "top", p.font = "600 32px Arial", e) { case "flag": return s([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) ? !1 : !s([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !s([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]); case "emoji": return !s([129777, 127995, 8205, 129778, 127999], [129777, 127995, 8203, 129778, 127999]) }return !1 }(o[r]), t.supports.everything = t.supports.everything && t.supports[o[r]], "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]); t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function () { t.DOMReady = !0 }, t.supports.everything || (n = function () { t.readyCallback() }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function () { "complete" === a.readyState && t.readyCallback() })), (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji), c(e.wpemoji))) }(window, document, window._wpemojiSettings);
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
    <link rel="stylesheet" id="wp-block-library-css"
        href="https://demo2.themelexus.com/delicioz/wp-includes/css/dist/block-library/style.min.css?ver=6.0.2"
        media="all" />
    <style id="wp-block-library-theme-inline-css">
        .wp-block-audio figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-audio figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-code {
            border: 1px solid #ccc;
            border-radius: 4px;
            font-family: Menlo, Consolas, monaco, monospace;
            padding: .8em 1em
        }

        .wp-block-embed figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-embed figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .blocks-gallery-caption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .blocks-gallery-caption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-image figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-image figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-pullquote {
            border-top: 4px solid;
            border-bottom: 4px solid;
            margin-bottom: 1.75em;
            color: currentColor
        }

        .wp-block-pullquote__citation,
        .wp-block-pullquote cite,
        .wp-block-pullquote footer {
            color: currentColor;
            text-transform: uppercase;
            font-size: .8125em;
            font-style: normal
        }

        .wp-block-quote {
            border-left: .25em solid;
            margin: 0 0 1.75em;
            padding-left: 1em
        }

        .wp-block-quote cite,
        .wp-block-quote footer {
            color: currentColor;
            font-size: .8125em;
            position: relative;
            font-style: normal
        }

        .wp-block-quote.has-text-align-right {
            border-left: none;
            border-right: .25em solid;
            padding-left: 0;
            padding-right: 1em
        }

        .wp-block-quote.has-text-align-center {
            border: none;
            padding-left: 0
        }

        .wp-block-quote.is-large,
        .wp-block-quote.is-style-large,
        .wp-block-quote.is-style-plain {
            border: none
        }

        .wp-block-search .wp-block-search__label {
            font-weight: 700
        }

        :where(.wp-block-group.has-background) {
            padding: 1.25em 2.375em
        }

        .wp-block-separator.has-css-opacity {
            opacity: .4
        }

        .wp-block-separator {
            border: none;
            border-bottom: 2px solid;
            margin-left: auto;
            margin-right: auto
        }

        .wp-block-separator.has-alpha-channel-opacity {
            opacity: 1
        }

        .wp-block-separator:not(.is-style-wide):not(.is-style-dots) {
            width: 100px
        }

        .wp-block-separator.has-background:not(.is-style-dots) {
            border-bottom: none;
            height: 1px
        }

        .wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots) {
            height: 2px
        }

        .wp-block-table thead {
            border-bottom: 3px solid
        }

        .wp-block-table tfoot {
            border-top: 3px solid
        }

        .wp-block-table td,
        .wp-block-table th {
            padding: .5em;
            border: 1px solid;
            word-break: normal
        }

        .wp-block-table figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-table figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-video figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-video figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-template-part.has-background {
            padding: 1.25em 2.375em;
            margin-top: 0;
            margin-bottom: 0
        }
    </style>
    <link rel="stylesheet" id="wc-blocks-vendors-style-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-vendors-style.css?ver=8.0.0"
        media="all" />
    <link rel="stylesheet" id="wc-blocks-style-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-style.css?ver=8.0.0"
        media="all" />
    <link rel="stylesheet" id="delicioz-gutenberg-blocks-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/base/gutenberg-blocks.css?ver=1.0.1"
        media="all" />
    <style id="global-styles-inline-css">
        body {
            --wp--preset--color--black: #000000;
            --wp--preset--color--cyan-bluish-gray: #abb8c3;
            --wp--preset--color--white: #ffffff;
            --wp--preset--color--pale-pink: #f78da7;
            --wp--preset--color--vivid-red: #cf2e2e;
            --wp--preset--color--luminous-vivid-orange: #ff6900;
            --wp--preset--color--luminous-vivid-amber: #fcb900;
            --wp--preset--color--light-green-cyan: #7bdcb5;
            --wp--preset--color--vivid-green-cyan: #00d084;
            --wp--preset--color--pale-cyan-blue: #8ed1fc;
            --wp--preset--color--vivid-cyan-blue: #0693e3;
            --wp--preset--color--vivid-purple: #9b51e0;
            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
            --wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');
            --wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');
            --wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');
            --wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');
            --wp--preset--duotone--midnight: url('#wp-duotone-midnight');
            --wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');
            --wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');
            --wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');
            --wp--preset--font-size--small: 14px;
            --wp--preset--font-size--medium: 23px;
            --wp--preset--font-size--large: 26px;
            --wp--preset--font-size--x-large: 42px;
            --wp--preset--font-size--normal: 16px;
            --wp--preset--font-size--huge: 37px;
        }

        .has-black-color {
            color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-color {
            color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-color {
            color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-color {
            color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-color {
            color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-color {
            color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-color {
            color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-color {
            color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-color {
            color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-color {
            color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-color {
            color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-color {
            color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-background-color {
            background-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-background-color {
            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-background-color {
            background-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-background-color {
            background-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-background-color {
            background-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-background-color {
            background-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-background-color {
            background-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-background-color {
            background-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-background-color {
            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-background-color {
            background-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-border-color {
            border-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-border-color {
            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-border-color {
            border-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-border-color {
            border-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-border-color {
            border-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-border-color {
            border-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-border-color {
            border-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-border-color {
            border-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-border-color {
            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-border-color {
            border-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
        }

        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
        }

        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-orange-to-vivid-red-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
        }

        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
        }

        .has-cool-to-warm-spectrum-gradient-background {
            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
        }

        .has-blush-light-purple-gradient-background {
            background: var(--wp--preset--gradient--blush-light-purple) !important;
        }

        .has-blush-bordeaux-gradient-background {
            background: var(--wp--preset--gradient--blush-bordeaux) !important;
        }

        .has-luminous-dusk-gradient-background {
            background: var(--wp--preset--gradient--luminous-dusk) !important;
        }

        .has-pale-ocean-gradient-background {
            background: var(--wp--preset--gradient--pale-ocean) !important;
        }

        .has-electric-grass-gradient-background {
            background: var(--wp--preset--gradient--electric-grass) !important;
        }

        .has-midnight-gradient-background {
            background: var(--wp--preset--gradient--midnight) !important;
        }

        .has-small-font-size {
            font-size: var(--wp--preset--font-size--small) !important;
        }

        .has-medium-font-size {
            font-size: var(--wp--preset--font-size--medium) !important;
        }

        .has-large-font-size {
            font-size: var(--wp--preset--font-size--large) !important;
        }

        .has-x-large-font-size {
            font-size: var(--wp--preset--font-size--x-large) !important;
        }
    </style>
    <link rel="stylesheet" id="contact-form-7-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.6.2"
        media="all" />
    <link rel="stylesheet" id="-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/opal-demo/style.css?ver=6.0.2" media="all" />
    <style id="woocommerce-inline-inline-css">
        .woocommerce form .form-row .required {
            visibility: visible;
        }
    </style>
    <link rel="stylesheet" id="hfe-style-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/header-footer-elementor/assets/css/header-footer-elementor.css?ver=1.6.13"
        media="all" />
    <link rel="stylesheet" id="elementor-icons-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.16.0"
        media="all" />
    <link rel="stylesheet" id="elementor-frontend-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/custom-frontend-lite.min.css?ver=1661932570"
        media="all" />
    <link rel="stylesheet" id="elementor-post-7-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-7.css?ver=1661932570"
        media="all" />
    <link rel="stylesheet" id="elementor-global-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/global.css?ver=1661932571"
        media="all" />
    <link rel="stylesheet" id="elementor-post-30-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-30.css?ver=1661939715"
        media="all" />
    <link rel="stylesheet" id="hfe-widgets-style-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/header-footer-elementor/inc/widgets-css/frontend.css?ver=1.6.13"
        media="all" />
    <link rel="stylesheet" id="elementor-post-84-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-84.css?ver=1661932571"
        media="all" />
    <link rel="stylesheet" id="elementor-post-92-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-92.css?ver=1661932571"
        media="all" />
    <link rel="stylesheet" id="elementor-post-98-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-98.css?ver=1661932571"
        media="all" />
    <link rel="stylesheet" id="woo-variation-swatches-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-variation-swatches/assets/css/frontend.min.css?ver=1660386322"
        media="all" />
    <style id="woo-variation-swatches-inline-css">
        :root {
            --wvs-tick: url("data:image/svg+xml;utf8,%3Csvg filter='drop-shadow(0px 0px 2px rgb(0 0 0 / .8))' xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 30 30'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='4' d='M4 16L11 23 27 7'/%3E%3C/svg%3E");

            --wvs-cross: url("data:image/svg+xml;utf8,%3Csvg filter='drop-shadow(0px 0px 5px rgb(255 255 255 / .6))' xmlns='http://www.w3.org/2000/svg' width='72px' height='72px' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23ff0000' stroke-linecap='round' stroke-width='0.6' d='M5 5L19 19M19 5L5 19'/%3E%3C/svg%3E");
            --wvs-single-product-item-width: 30px;
            --wvs-single-product-item-height: 30px;
            --wvs-single-product-item-font-size: 16px
        }
    </style>
    <link rel="stylesheet" id="hint-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/libs/hint/hint.min.css?ver=6.0.2"
        media="all" />
    <link rel="stylesheet" id="perfect-scrollbar-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/perfect-scrollbar.min.css?ver=6.0.2"
        media="all" />
    <link rel="stylesheet" id="perfect-scrollbar-wpc-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/libs/perfect-scrollbar/css/custom-theme.css?ver=6.0.2"
        media="all" />
    <link rel="stylesheet" id="woosc-frontend-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/css/frontend.css?ver=5.1.5"
        media="all" />
    <link rel="stylesheet" id="slick-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-quick-view/assets/libs/slick/slick.css?ver=6.0.2"
        media="all" />
    <link rel="stylesheet" id="magnific-popup-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/libs/magnific-popup.css?ver=1.0.1"
        media="all" />
    <link rel="stylesheet" id="woosq-feather-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-quick-view/assets/libs/feather/feather.css?ver=6.0.2"
        media="all" />
    <link rel="stylesheet" id="woosq-frontend-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-quick-view/assets/css/frontend.css?ver=3.1.2"
        media="all" />
    <link rel="stylesheet" id="woosw-feather-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-wishlist/assets/libs/feather/feather.css?ver=6.0.2"
        media="all" />
    <link rel="stylesheet" id="woosw-frontend-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-wishlist/assets/css/frontend.css?ver=4.3.1"
        media="all" />
    <style id="woosw-frontend-inline-css">
        .woosw-popup .woosw-popup-inner .woosw-popup-content .woosw-popup-content-bot .woosw-notice {
            background-color: #5fbd74;
        }

        .woosw-popup .woosw-popup-inner .woosw-popup-content .woosw-popup-content-bot .woosw-popup-content-bot-inner a:hover {
            color: #5fbd74;
            border-color: #5fbd74;
        }
    </style>
    <link rel="stylesheet" id="delicioz-fonts-css"
        href="//fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&#038;subset=latin%2Clatin-ext&#038;display=swap"
        media="all" />
    <link rel="stylesheet" id="delicioz-style-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/style.css?ver=1.0.1" media="all" />
    <style id="delicioz-style-inline-css">
        .col-full {
            max-width: 1290px
        }

        @media(max-width:1366px) {
            body.theme-delicioz [data-elementor-columns-laptop="1"] .column-item {
                flex: 0 0 100%;
                max-width: 100%;
            }

            .woocommerce.columns-laptop-1 ul.products li.product {
                flex: 0 0 100%;
                max-width: 100%;
            }

            body.theme-delicioz [data-elementor-columns-laptop="2"] .column-item {
                flex: 0 0 50%;
                max-width: 50%;
            }

            .woocommerce.columns-laptop-2 ul.products li.product {
                flex: 0 0 50%;
                max-width: 50%;
            }

            body.theme-delicioz [data-elementor-columns-laptop="3"] .column-item {
                flex: 0 0 33.3333333333%;
                max-width: 33.3333333333%;
            }

            .woocommerce.columns-laptop-3 ul.products li.product {
                flex: 0 0 33.3333333333%;
                max-width: 33.3333333333%;
            }

            body.theme-delicioz [data-elementor-columns-laptop="4"] .column-item {
                flex: 0 0 25%;
                max-width: 25%;
            }

            .woocommerce.columns-laptop-4 ul.products li.product {
                flex: 0 0 25%;
                max-width: 25%;
            }

            body.theme-delicioz [data-elementor-columns-laptop="5"] .column-item {
                flex: 0 0 20%;
                max-width: 20%;
            }

            .woocommerce.columns-laptop-5 ul.products li.product {
                flex: 0 0 20%;
                max-width: 20%;
            }

            body.theme-delicioz [data-elementor-columns-laptop="6"] .column-item {
                flex: 0 0 16.6666666667%;
                max-width: 16.6666666667%;
            }

            .woocommerce.columns-laptop-6 ul.products li.product {
                flex: 0 0 16.6666666667%;
                max-width: 16.6666666667%;
            }

            body.theme-delicioz [data-elementor-columns-laptop="7"] .column-item {
                flex: 0 0 14.2857142857%;
                max-width: 14.2857142857%;
            }

            .woocommerce.columns-laptop-7 ul.products li.product {
                flex: 0 0 14.2857142857%;
                max-width: 14.2857142857%;
            }

            body.theme-delicioz [data-elementor-columns-laptop="8"] .column-item {
                flex: 0 0 12.5%;
                max-width: 12.5%;
            }

            .woocommerce.columns-laptop-8 ul.products li.product {
                flex: 0 0 12.5%;
                max-width: 12.5%;
            }
        }

        @media(max-width:1200px) {
            body.theme-delicioz [data-elementor-columns-tablet-extra="1"] .column-item {
                flex: 0 0 100%;
                max-width: 100%;
            }

            .woocommerce.columns-tablet-extra-1 ul.products li.product {
                flex: 0 0 100%;
                max-width: 100%;
            }

            body.theme-delicioz [data-elementor-columns-tablet-extra="2"] .column-item {
                flex: 0 0 50%;
                max-width: 50%;
            }

            .woocommerce.columns-tablet-extra-2 ul.products li.product {
                flex: 0 0 50%;
                max-width: 50%;
            }

            body.theme-delicioz [data-elementor-columns-tablet-extra="3"] .column-item {
                flex: 0 0 33.3333333333%;
                max-width: 33.3333333333%;
            }

            .woocommerce.columns-tablet-extra-3 ul.products li.product {
                flex: 0 0 33.3333333333%;
                max-width: 33.3333333333%;
            }

            body.theme-delicioz [data-elementor-columns-tablet-extra="4"] .column-item {
                flex: 0 0 25%;
                max-width: 25%;
            }

            .woocommerce.columns-tablet-extra-4 ul.products li.product {
                flex: 0 0 25%;
                max-width: 25%;
            }

            body.theme-delicioz [data-elementor-columns-tablet-extra="5"] .column-item {
                flex: 0 0 20%;
                max-width: 20%;
            }

            .woocommerce.columns-tablet-extra-5 ul.products li.product {
                flex: 0 0 20%;
                max-width: 20%;
            }

            body.theme-delicioz [data-elementor-columns-tablet-extra="6"] .column-item {
                flex: 0 0 16.6666666667%;
                max-width: 16.6666666667%;
            }

            .woocommerce.columns-tablet-extra-6 ul.products li.product {
                flex: 0 0 16.6666666667%;
                max-width: 16.6666666667%;
            }

            body.theme-delicioz [data-elementor-columns-tablet-extra="7"] .column-item {
                flex: 0 0 14.2857142857%;
                max-width: 14.2857142857%;
            }

            .woocommerce.columns-tablet-extra-7 ul.products li.product {
                flex: 0 0 14.2857142857%;
                max-width: 14.2857142857%;
            }

            body.theme-delicioz [data-elementor-columns-tablet-extra="8"] .column-item {
                flex: 0 0 12.5%;
                max-width: 12.5%;
            }

            .woocommerce.columns-tablet-extra-8 ul.products li.product {
                flex: 0 0 12.5%;
                max-width: 12.5%;
            }
        }

        @media(max-width:1024px) {
            body.theme-delicioz [data-elementor-columns-tablet="1"] .column-item {
                flex: 0 0 100%;
                max-width: 100%;
            }

            .woocommerce.columns-tablet-1 ul.products li.product {
                flex: 0 0 100%;
                max-width: 100%;
            }

            body.theme-delicioz [data-elementor-columns-tablet="2"] .column-item {
                flex: 0 0 50%;
                max-width: 50%;
            }

            .woocommerce.columns-tablet-2 ul.products li.product {
                flex: 0 0 50%;
                max-width: 50%;
            }

            body.theme-delicioz [data-elementor-columns-tablet="3"] .column-item {
                flex: 0 0 33.3333333333%;
                max-width: 33.3333333333%;
            }

            .woocommerce.columns-tablet-3 ul.products li.product {
                flex: 0 0 33.3333333333%;
                max-width: 33.3333333333%;
            }

            body.theme-delicioz [data-elementor-columns-tablet="4"] .column-item {
                flex: 0 0 25%;
                max-width: 25%;
            }

            .woocommerce.columns-tablet-4 ul.products li.product {
                flex: 0 0 25%;
                max-width: 25%;
            }

            body.theme-delicioz [data-elementor-columns-tablet="5"] .column-item {
                flex: 0 0 20%;
                max-width: 20%;
            }

            .woocommerce.columns-tablet-5 ul.products li.product {
                flex: 0 0 20%;
                max-width: 20%;
            }

            body.theme-delicioz [data-elementor-columns-tablet="6"] .column-item {
                flex: 0 0 16.6666666667%;
                max-width: 16.6666666667%;
            }

            .woocommerce.columns-tablet-6 ul.products li.product {
                flex: 0 0 16.6666666667%;
                max-width: 16.6666666667%;
            }

            body.theme-delicioz [data-elementor-columns-tablet="7"] .column-item {
                flex: 0 0 14.2857142857%;
                max-width: 14.2857142857%;
            }

            .woocommerce.columns-tablet-7 ul.products li.product {
                flex: 0 0 14.2857142857%;
                max-width: 14.2857142857%;
            }

            body.theme-delicioz [data-elementor-columns-tablet="8"] .column-item {
                flex: 0 0 12.5%;
                max-width: 12.5%;
            }

            .woocommerce.columns-tablet-8 ul.products li.product {
                flex: 0 0 12.5%;
                max-width: 12.5%;
            }
        }

        @media(max-width:880px) {
            body.theme-delicioz [data-elementor-columns-mobile-extra="1"] .column-item {
                flex: 0 0 100%;
                max-width: 100%;
            }

            .woocommerce.columns-mobile-extra-1 ul.products li.product {
                flex: 0 0 100%;
                max-width: 100%;
            }

            body.theme-delicioz [data-elementor-columns-mobile-extra="2"] .column-item {
                flex: 0 0 50%;
                max-width: 50%;
            }

            .woocommerce.columns-mobile-extra-2 ul.products li.product {
                flex: 0 0 50%;
                max-width: 50%;
            }

            body.theme-delicioz [data-elementor-columns-mobile-extra="3"] .column-item {
                flex: 0 0 33.3333333333%;
                max-width: 33.3333333333%;
            }

            .woocommerce.columns-mobile-extra-3 ul.products li.product {
                flex: 0 0 33.3333333333%;
                max-width: 33.3333333333%;
            }

            body.theme-delicioz [data-elementor-columns-mobile-extra="4"] .column-item {
                flex: 0 0 25%;
                max-width: 25%;
            }

            .woocommerce.columns-mobile-extra-4 ul.products li.product {
                flex: 0 0 25%;
                max-width: 25%;
            }

            body.theme-delicioz [data-elementor-columns-mobile-extra="5"] .column-item {
                flex: 0 0 20%;
                max-width: 20%;
            }

            .woocommerce.columns-mobile-extra-5 ul.products li.product {
                flex: 0 0 20%;
                max-width: 20%;
            }

            body.theme-delicioz [data-elementor-columns-mobile-extra="6"] .column-item {
                flex: 0 0 16.6666666667%;
                max-width: 16.6666666667%;
            }

            .woocommerce.columns-mobile-extra-6 ul.products li.product {
                flex: 0 0 16.6666666667%;
                max-width: 16.6666666667%;
            }

            body.theme-delicioz [data-elementor-columns-mobile-extra="7"] .column-item {
                flex: 0 0 14.2857142857%;
                max-width: 14.2857142857%;
            }

            .woocommerce.columns-mobile-extra-7 ul.products li.product {
                flex: 0 0 14.2857142857%;
                max-width: 14.2857142857%;
            }

            body.theme-delicioz [data-elementor-columns-mobile-extra="8"] .column-item {
                flex: 0 0 12.5%;
                max-width: 12.5%;
            }

            .woocommerce.columns-mobile-extra-8 ul.products li.product {
                flex: 0 0 12.5%;
                max-width: 12.5%;
            }
        }

        @media(max-width:767px) {
            body.theme-delicioz [data-elementor-columns-mobile="1"] .column-item {
                flex: 0 0 100%;
                max-width: 100%;
            }

            .woocommerce.columns-mobile-1 ul.products li.product {
                flex: 0 0 100%;
                max-width: 100%;
            }

            body.theme-delicioz [data-elementor-columns-mobile="2"] .column-item {
                flex: 0 0 50%;
                max-width: 50%;
            }

            .woocommerce.columns-mobile-2 ul.products li.product {
                flex: 0 0 50%;
                max-width: 50%;
            }

            body.theme-delicioz [data-elementor-columns-mobile="3"] .column-item {
                flex: 0 0 33.3333333333%;
                max-width: 33.3333333333%;
            }

            .woocommerce.columns-mobile-3 ul.products li.product {
                flex: 0 0 33.3333333333%;
                max-width: 33.3333333333%;
            }

            body.theme-delicioz [data-elementor-columns-mobile="4"] .column-item {
                flex: 0 0 25%;
                max-width: 25%;
            }

            .woocommerce.columns-mobile-4 ul.products li.product {
                flex: 0 0 25%;
                max-width: 25%;
            }

            body.theme-delicioz [data-elementor-columns-mobile="5"] .column-item {
                flex: 0 0 20%;
                max-width: 20%;
            }

            .woocommerce.columns-mobile-5 ul.products li.product {
                flex: 0 0 20%;
                max-width: 20%;
            }

            body.theme-delicioz [data-elementor-columns-mobile="6"] .column-item {
                flex: 0 0 16.6666666667%;
                max-width: 16.6666666667%;
            }

            .woocommerce.columns-mobile-6 ul.products li.product {
                flex: 0 0 16.6666666667%;
                max-width: 16.6666666667%;
            }

            body.theme-delicioz [data-elementor-columns-mobile="7"] .column-item {
                flex: 0 0 14.2857142857%;
                max-width: 14.2857142857%;
            }

            .woocommerce.columns-mobile-7 ul.products li.product {
                flex: 0 0 14.2857142857%;
                max-width: 14.2857142857%;
            }

            body.theme-delicioz [data-elementor-columns-mobile="8"] .column-item {
                flex: 0 0 12.5%;
                max-width: 12.5%;
            }

            .woocommerce.columns-mobile-8 ul.products li.product {
                flex: 0 0 12.5%;
                max-width: 12.5%;
            }
        }
    </style>
    <link rel="stylesheet" id="delicioz-slick-style-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/base/slick.css?ver=1.0.1"
        media="all" />
    <link rel="stylesheet" id="delicioz-slick-theme-style-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/base/slick-theme.css?ver=1.0.1"
        media="all" />
    <link rel="stylesheet" id="elementor-post-4560-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-4560.css?ver=1661939715"
        media="all" />
    <link rel="stylesheet" id="delicioz-elementor-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/base/elementor.css?ver=1.0.1"
        media="all" />
    <link rel="stylesheet" id="delicioz-woocommerce-style-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/css/woocommerce/woocommerce.css?ver=1.0.1"
        media="all" />
    <link rel="stylesheet" id="delicioz-child-style-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/themes/demo-child/style.css?ver=1.0.0" media="all" />
    <link rel="stylesheet" id="google-fonts-1-css"
        href="https://fonts.googleapis.com/css?family=Manrope%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRajdhani%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=auto&#038;ver=6.0.2"
        media="all" />
    <link rel="stylesheet" id="elementor-icons-shared-0-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3"
        media="all" />
    <link rel="stylesheet" id="elementor-icons-fa-brands-css"
        href="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3"
        media="all" />
    <script type="text/template" id="tmpl-variation-template">
	<div class="woocommerce-variation-description">{{{ data.variation.variation_description }}}</div>
	<div class="woocommerce-variation-price">{{{ data.variation.price_html }}}</div>
	<div class="woocommerce-variation-availability">{{{ data.variation.availability_html }}}</div>
</script>
    <script type="text/template" id="tmpl-unavailable-variation-template">
	<p>Sorry, this product is unavailable. Please choose a different combination.</p>
</script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/jquery/jquery.min.js?ver=3.6.0"
        id="jquery-core-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2"
        id="jquery-migrate-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/jarallax.js?ver=6.0.2"
        id="jarallax-js"></script>
    <link rel="https://api.w.org/" href="https://demo2.themelexus.com/delicioz/wp-json/" />
    <link rel="alternate" type="application/json" href="https://demo2.themelexus.com/delicioz/wp-json/wp/v2/pages/30" />
    <link rel="EditURI" type="application/rsd+xml" title="RSD"
        href="https://demo2.themelexus.com/delicioz/xmlrpc.php?rsd" />
    <link rel="wlwmanifest" type="application/wlwmanifest+xml"
        href="https://demo2.themelexus.com/delicioz/wp-includes/wlwmanifest.xml" />
    <meta name="generator" content="WordPress 6.0.2" />
    <meta name="generator" content="WooCommerce 6.8.2" />
    <link rel="canonical" href="https://demo2.themelexus.com/delicioz/about-us-1/" />
    <link rel="shortlink" href="https://demo2.themelexus.com/delicioz/?p=30" />
    <link rel="alternate" type="application/json+oembed"
        href="https://demo2.themelexus.com/delicioz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdemo2.themelexus.com%2Fdelicioz%2Fabout-us-1%2F" />
    <link rel="alternate" type="text/xml+oembed"
        href="https://demo2.themelexus.com/delicioz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdemo2.themelexus.com%2Fdelicioz%2Fabout-us-1%2F&#038;format=xml" />
    <noscript>
        <style>
            .woocommerce-product-gallery {
                opacity: 1 !important;
            }
        </style>
    </noscript>
    <meta name="generator"
        content="Powered by Slider Revolution 6.5.31 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />
    <script>function setREVStartSize(e) {
            //window.requestAnimationFrame(function() {
            window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
            window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
            try {
                var pw = document.getElementById(e.c).parentNode.offsetWidth,
                    newh;
                pw = pw === 0 || isNaN(pw) || (e.l == "fullwidth" || e.layout == "fullwidth") ? window.RSIW : pw;
                e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
                e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
                e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
                e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
                e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
                e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
                e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
                if (e.layout === "fullscreen" || e.l === "fullscreen")
                    newh = Math.max(e.mh, window.RSIH);
                else {
                    e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
                    for (var i in e.rl) if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
                    e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
                    e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
                    for (var i in e.rl) if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

                    var nl = new Array(e.rl.length),
                        ix = 0,
                        sl;
                    e.tabw = e.tabhide >= pw ? 0 : e.tabw;
                    e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
                    e.tabh = e.tabhide >= pw ? 0 : e.tabh;
                    e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
                    for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
                    sl = nl[0];
                    for (var i in nl) if (sl > nl[i] && nl[i] > 0) { sl = nl[i]; ix = i; }
                    var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);
                    newh = (e.gh[ix] * m) + (e.tabh + e.thumbh);
                }
                var el = document.getElementById(e.c);
                if (el !== null && el) el.style.height = newh + "px";
                el = document.getElementById(e.c + "_wrapper");
                if (el !== null && el) {
                    el.style.height = newh + "px";
                    el.style.display = "block";
                }
            } catch (e) {
                console.log("Failure at Presize of Slider:" + e)
            }
            //});
        };</script>
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
    <script>
        window.RS_MODULES = window.RS_MODULES || {};
        window.RS_MODULES.modules = window.RS_MODULES.modules || {};
        window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
        window.RS_MODULES.defered = true;
        window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
        window.RS_MODULES.type = 'compiled';
    </script>
    <script type="text/html" id="tmpl-ajax-live-search-template">
        <div class="product-item-search">
            <# if(data.url){ #>
            <a class="product-link" href="{{{data.url}}}" title="{{{data.title}}}">
            <# } #>
                <# if(data.img){#>
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
    <script type="text/javascript">
        (function () {
            var c = document.body.className;
            c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
            document.body.className = c;
        })();
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.9"
        id="regenerator-runtime-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0"
        id="wp-polyfill-js"></script>
    <script id="contact-form-7-js-extra">
        var wpcf7 = { "api": { "root": "https:\/\/demo2.themelexus.com\/delicioz\/wp-json\/", "namespace": "contact-form-7\/v1" }, "cached": "1" };
    </script>
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
    <script id="wc-add-to-cart-js-extra">
        var wc_add_to_cart_params = { "ajax_url": "\/delicioz\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/delicioz\/?wc-ajax=%%endpoint%%", "i18n_view_cart": "", "cart_url": "https:\/\/demo2.themelexus.com\/delicioz\/cart\/", "is_cart": "", "cart_redirect_after_add": "no" };
    </script>
    <script
        src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=6.8.2"
        id="wc-add-to-cart-js"></script>
    <script
        src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.6.8.2"
        id="js-cookie-js"></script>
    <script id="woocommerce-js-extra">
        var woocommerce_params = { "ajax_url": "\/delicioz\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/delicioz\/?wc-ajax=%%endpoint%%" };
    </script>
    <script
        src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=6.8.2"
        id="woocommerce-js"></script>
    <script id="wc-cart-fragments-js-extra">
        var wc_cart_fragments_params = { "ajax_url": "\/delicioz\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/delicioz\/?wc-ajax=%%endpoint%%", "cart_hash_key": "wc_cart_hash_fb254261fa3641bff9c309f0d976a3b1", "fragment_name": "wc_fragments_fb254261fa3641bff9c309f0d976a3b1", "request_timeout": "5000" };
    </script>
    <script
        src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=6.8.2"
        id="wc-cart-fragments-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/underscore.min.js?ver=1.13.3"
        id="underscore-js"></script>
    <script id="wp-util-js-extra">
        var _wpUtilSettings = { "ajax": { "url": "\/delicioz\/wp-admin\/admin-ajax.php" } };
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-includes/js/wp-util.min.js?ver=6.0.2"
        id="wp-util-js"></script>
    <script id="woo-variation-swatches-js-extra">
        var woo_variation_swatches_options = { "show_variation_label": "1", "clear_on_reselect": "", "variation_label_separator": ":", "is_mobile": "", "show_variation_stock": "", "stock_label_threshold": "5", "cart_redirect_after_add": "no", "enable_ajax_add_to_cart": "yes", "cart_url": "https:\/\/demo2.themelexus.com\/delicioz\/cart\/", "is_cart": "" };
    </script>
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
    <script id="woosc-frontend-js-extra">
        var woosc_vars = { "ajax_url": "https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php", "user_id": "0cdb64fab32a05bd393b20c8c351de9f", "page_url": "#", "open_button": "", "open_button_action": "open_popup", "menu_action": "open_popup", "button_action": "show_table", "sidebar_position": "right", "message_position": "right-top", "message_added": "{name} has been added to Compare list.", "message_removed": "{name} has been removed from the Compare list.", "message_exists": "{name} is already in the Compare list.", "open_bar": "", "bar_bubble": "no", "adding": "prepend", "click_again": "no", "hide_empty": "no", "click_outside": "yes", "freeze_column": "yes", "freeze_row": "yes", "scrollbar": "yes", "limit": "100", "button_text_change": "yes", "remove_all": "Do you want to remove all products from the compare?", "limit_notice": "You can add a maximum of {limit} products to the compare table.", "copied_text": "Share link %s was copied to clipboard!", "button_text": "Compare", "button_text_added": "Compare" };
    </script>
    <script
        src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-compare/assets/js/frontend.js?ver=5.1.5"
        id="woosc-frontend-js"></script>
    <script id="wc-add-to-cart-variation-js-extra">
        var wc_add_to_cart_variation_params = { "wc_ajax_url": "\/delicioz\/?wc-ajax=%%endpoint%%", "i18n_no_matching_variations_text": "Sorry, no products matched your selection. Please choose a different combination.", "i18n_make_a_selection_text": "Please select some product options before adding this product to your cart.", "i18n_unavailable_text": "Sorry, this product is unavailable. Please choose a different combination." };
    </script>
    <script
        src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart-variation.min.js?ver=6.8.2"
        id="wc-add-to-cart-variation-js"></script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/slick.min.js?ver=1.0.1"
        id="slick-js"></script>
    <script
        src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/libs/jquery.magnific-popup.min.js?ver=1.0.1"
        id="magnific-popup-js"></script>
    <script id="woosq-frontend-js-extra">
        var woosq_vars = { "ajax_url": "https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php", "view": "popup", "effect": "mfp-3d-unfold", "scrollbar": "yes", "hashchange": "no", "cart_redirect": "no", "cart_url": "https:\/\/demo2.themelexus.com\/delicioz\/cart\/", "close": "Close (Esc)", "next": "Next (Right arrow key)", "prev": "Previous (Left arrow key)", "thumbnails_effect": "no", "related_slick_params": "{\"slidesToShow\":2,\"slidesToScroll\":2,\"dots\":true,\"arrows\":false,\"adaptiveHeight\":true,\"rtl\":false}", "thumbnails_slick_params": "{\"slidesToShow\":1,\"slidesToScroll\":1,\"dots\":true,\"arrows\":true,\"adaptiveHeight\":false,\"rtl\":false}", "thumbnails_zoom_params": "{\"duration\":120,\"magnify\":1}" };
    </script>
    <script
        src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-quick-view/assets/js/frontend.js?ver=3.1.2"
        id="woosq-frontend-js"></script>
    <script id="woosw-frontend-js-extra">
        var woosw_vars = { "ajax_url": "https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php", "menu_action": "open_page", "perfect_scrollbar": "yes", "wishlist_url": "https:\/\/demo2.themelexus.com\/delicioz\/wishlist\/", "button_action": "list", "message_position": "right-top", "button_action_added": "popup", "empty_confirm": "This action cannot be undone. Are you sure?", "delete_confirm": "This action cannot be undone. Are you sure?", "copied_text": "Copied the wishlist link:", "menu_text": "Wishlist", "button_text": "Add to wishlist", "button_text_added": "Browse wishlist" };
    </script>
    <script
        src="https://demo2.themelexus.com/delicioz/wp-content/plugins/woo-smart-wishlist/assets/js/frontend.js?ver=4.3.1"
        id="woosw-frontend-js"></script>
    <script id="delicioz-theme-js-extra">
        var deliciozAjax = { "ajaxurl": "https:\/\/demo2.themelexus.com\/delicioz\/wp-admin\/admin-ajax.php" };
    </script>
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
    <script id="elementor-frontend-js-before">
        var elementorFrontendConfig = { "environmentMode": { "edit": false, "wpPreview": false, "isScriptDebug": false }, "i18n": { "shareOnFacebook": "Share on Facebook", "shareOnTwitter": "Share on Twitter", "pinIt": "Pin it", "download": "Download", "downloadImage": "Download image", "fullscreen": "Fullscreen", "zoom": "Zoom", "share": "Share", "playVideo": "Play Video", "previous": "Previous", "next": "Next", "close": "Close" }, "is_rtl": false, "breakpoints": { "xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600 }, "responsive": { "breakpoints": { "mobile": { "label": "Mobile", "value": 767, "default_value": 767, "direction": "max", "is_enabled": true }, "mobile_extra": { "label": "Mobile Extra", "value": 880, "default_value": 880, "direction": "max", "is_enabled": true }, "tablet": { "label": "Tablet", "value": 1024, "default_value": 1024, "direction": "max", "is_enabled": true }, "tablet_extra": { "label": "Tablet Extra", "value": 1200, "default_value": 1200, "direction": "max", "is_enabled": true }, "laptop": { "label": "Laptop", "value": 1366, "default_value": 1366, "direction": "max", "is_enabled": true }, "widescreen": { "label": "Widescreen", "value": 2400, "default_value": 2400, "direction": "min", "is_enabled": false } } }, "version": "3.7.3", "is_static": false, "experimentalFeatures": { "e_dom_optimization": true, "e_optimized_assets_loading": true, "e_optimized_css_loading": true, "a11y_improvements": true, "additional_custom_breakpoints": true, "e_import_export": true, "e_hidden_wordpress_widgets": true, "landing-pages": true, "elements-color-picker": true, "favorite-widgets": true, "admin-top-bar": true }, "urls": { "assets": "https:\/\/demo2.themelexus.com\/delicioz\/wp-content\/plugins\/elementor\/assets\/" }, "settings": { "page": [], "editorPreferences": [] }, "kit": { "active_breakpoints": ["viewport_mobile", "viewport_mobile_extra", "viewport_tablet", "viewport_tablet_extra", "viewport_laptop"], "body_background_background": "classic", "global_image_lightbox": "yes", "lightbox_enable_counter": "yes", "lightbox_enable_fullscreen": "yes", "lightbox_enable_zoom": "yes", "lightbox_enable_share": "yes", "lightbox_title_src": "title", "lightbox_description_src": "description" }, "post": { "id": 30, "title": "About%20us%201%20%E2%80%93%20Delicioz", "excerpt": "", "featuredImage": false } };
    </script>
    <script src="https://demo2.themelexus.com/delicioz/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.7.3"
        id="elementor-frontend-js"></script>
    <script
        src="https://demo2.themelexus.com/delicioz/wp-content/themes/delicioz/assets/js/elementor/testimonial.js?ver=1.0.1"
        id="delicioz-elementor-testimonial-js"></script>
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
        `;
    return (
        <div>
            <div class="breadcrumb-wrap">
                <div data-elementor-type="wp-post" data-elementor-id="4560" class="elementor elementor-4560">
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-5ded1cd elementor-section-stretched elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="5ded1cd" data-element_type="section"
                        data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-background-overlay"></div>
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cd439eb"
                                data-id="cd439eb" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-5804839 elementor-widget elementor-widget-heading"
                                        data-id="5804839" data-element_type="widget" data-widget_type="heading.default">
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
                                            <h2 class="elementor-heading-title elementor-size-default">At Delicioz
                                                restaurant we offer a
                                                varied menu of appetisers, lunches
                                                and dinner, available every day.</h2>
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
                            <div data-elementor-type="wp-page" data-elementor-id="30" class="elementor elementor-30">
                                <div class="elementor-section elementor-top-section elementor-element elementor-element-22e2865 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="22e2865" data-element_type="section"
                                    data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div class="elementor-background-overlay"></div>
                                    <div class="elementor-container elementor-column-gap-no">
                                        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-63b1492"
                                            data-id="63b1492" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-c5dbea8 show-icon-deco-yes show-button-link-yes elementor-position-top elementor-position-below elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                                    data-id="c5dbea8" data-element_type="widget"
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
                                                                    class="delicioz-icon- delicioz-icon-cloche"></i>
                                                                </div>
                                                                <h3 class="elementor-image-box-title"><a href="#">Seasonal &
                                                                    Delicious Food Menus</a></h3>
                                                                <div class="elementor-image-box-sub-title">Enjoy an
                                                                    Exceptional</div>
                                                                <p class="elementor-image-box-description">Seasonal foods
                                                                    bring a variety of fruits, vegetables and meats to the
                                                                    table. Warm up this winter with a mug of hot apple cider
                                                                    and discover
                                                                    everything from terrific fall foods to refreshing summer
                                                                    recipes with
                                                                    the help of these seasonal menus.</p>
                                                                <div class="elementor-image-box-button-wrapper"><a href="#"
                                                                    class="elementor-image-box-button"><span
                                                                        class="elementor-image-box-button-text">
                                                                        discover now</span></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5ee24cf"
                                            data-id="5ee24cf" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-3be7f74 elementor-widget elementor-widget-image"
                                                    data-id="3be7f74" data-element_type="widget"
                                                    data-widget_type="image.default">
                                                    <div class="elementor-widget-container">
                                                        <img width="410" height="600"
                                                            src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_01.jpg"
                                                            class="attachment-full size-full" alt loading="lazy"
                                                            srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_01.jpg 410w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_01-205x300.jpg 205w"
                                                            sizes="(max-width: 410px) 100vw, 410px" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-41170e4"
                                            data-id="41170e4" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-section elementor-inner-section elementor-element elementor-element-7d31e60 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id="7d31e60" data-element_type="section">
                                                    <div class="elementor-container elementor-column-gap-no">
                                                        <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-8626bd7"
                                                            data-id="8626bd7" data-element_type="column">
                                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                                <div class="elementor-element elementor-element-df4fac4 elementor-widget elementor-widget-heading"
                                                                    data-id="df4fac4" data-element_type="widget"
                                                                    data-widget_type="heading.default">
                                                                    <div class="elementor-widget-container">
                                                                        <h2
                                                                            class="elementor-heading-title elementor-size-default">
                                                                            HOURS
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-6ed6666 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                                    data-id="6ed6666" data-element_type="widget"
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
                                                                        </style> Mon – Sat: 5a.m &#8211; 11p.m
                                                                        Sun: 7a.m – 11p.m
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-section elementor-inner-section elementor-element elementor-element-1d8a335 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id="1d8a335" data-element_type="section">
                                                    <div class="elementor-container elementor-column-gap-no">
                                                        <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f475770"
                                                            data-id="f475770" data-element_type="column">
                                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                                <div class="elementor-element elementor-element-510bc17 elementor-widget elementor-widget-heading"
                                                                    data-id="510bc17" data-element_type="widget"
                                                                    data-widget_type="heading.default">
                                                                    <div class="elementor-widget-container">
                                                                        <h2
                                                                            class="elementor-heading-title elementor-size-default">
                                                                            LOCATION
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-73ef43a elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                                    data-id="73ef43a" data-element_type="widget"
                                                                    data-widget_type="text-editor.default">
                                                                    <div class="elementor-widget-container">
                                                                        Delicioz Restaurant &#038; Fine dining,
                                                                        71 Madison Ave, New York, USA
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-section elementor-inner-section elementor-element elementor-element-c04681c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id="c04681c" data-element_type="section">
                                                    <div class="elementor-container elementor-column-gap-no">
                                                        <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-798b9d9"
                                                            data-id="798b9d9" data-element_type="column">
                                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                                <div class="elementor-element elementor-element-3bdacd0 elementor-widget elementor-widget-heading"
                                                                    data-id="3bdacd0" data-element_type="widget"
                                                                    data-widget_type="heading.default">
                                                                    <div class="elementor-widget-container">
                                                                        <h2
                                                                            class="elementor-heading-title elementor-size-default">
                                                                            CONTACT
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-57278e2 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                                                    data-id="57278e2" data-element_type="widget"
                                                                    data-widget_type="text-editor.default">
                                                                    <div class="elementor-widget-container">
                                                                        +39-055-123456<br />
                                                                        +39-066-666999
                                                                        <a href="/cdn-cgi/l/email-protection"
                                                                            class="__cf_email__"
                                                                            data-cfemail="5c2e392f392e2a3d283533322f1c39243d312c3039723f3331">[email&#160;protected]</a>
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
                                <div class="elementor-section elementor-top-section elementor-element elementor-element-65e8926 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                                    data-id="65e8926" data-element_type="section"
                                    data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                                    <div class="elementor-container elementor-column-gap-no">
                                        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d42a022"
                                            data-id="d42a022" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-286a7f3 elementor-effects-content-yes elementor-cta--valign-bottom elementor-position-below elementor-type-button-default elementor-widget elementor-widget-delicioz-banner"
                                                    data-id="286a7f3" data-element_type="widget"
                                                    data-widget_type="delicioz-banner.default">
                                                    <div class="elementor-widget-container">
                                                        <div
                                                            class="elementor-cta--skin-cover elementor-cta elementor-delicioz-banner">
                                                            <div class="elementor-cta__bg-wrapper">
                                                                <div class="elementor-cta__bg-overlay"></div>
                                                                <div class="elementor-cta__bg elementor-bg"
                                                                    style={{ backgroundImage: 'url(https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_04.jpg)' }}
                                                                >
                                                                </div>
                                                            </div>
                                                            <div class="elementor-cta__content">
                                                                <div class="elementor-cta__content_inner">
                                                                    <h3
                                                                        class="elementor-cta__title elementor-cta__content-item elementor-content-item">
                                                                        Special Event. </h3>
                                                                    <div
                                                                        class="elementor-cta__description elementor-cta__content-item elementor-content-item">
                                                                        Perfect for all kinds of meetings including business
                                                                        sessions,
                                                                        strategy days and team bonding activities for up to
                                                                        14. Available
                                                                        in combination with dining packages or on it's own
                                                                        with pastries,
                                                                        coffees and cold drinks to keep the team fueled.
                                                                    </div>
                                                                    <div
                                                                        class="elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item ">
                                                                        <a class="elementor-cta__button elementor-button"
                                                                            href="#">
                                                                            <span class="elementor-button-content-wrapper">
                                                                                <span class="elementor-button-text">discover
                                                                                    now</span>
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
                                        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1b3ac9c"
                                            data-id="1b3ac9c" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-c9399ff elementor-effects-content-yes elementor-cta--valign-bottom elementor-position-below elementor-type-button-default elementor-widget elementor-widget-delicioz-banner"
                                                    data-id="c9399ff" data-element_type="widget"
                                                    data-widget_type="delicioz-banner.default">
                                                    <div class="elementor-widget-container">
                                                        <div
                                                            class="elementor-cta--skin-cover elementor-cta elementor-delicioz-banner">
                                                            <div class="elementor-cta__bg-wrapper">
                                                                <div class="elementor-cta__bg-overlay"></div>
                                                                <div class="elementor-cta__bg elementor-bg"
                                                                    style={{ backgroundImage: 'url(https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_03.jpg)' }}>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-cta__content">
                                                                <div class="elementor-cta__content_inner">
                                                                    <h3
                                                                        class="elementor-cta__title elementor-cta__content-item elementor-content-item">
                                                                        discover now </h3>
                                                                    <div
                                                                        class="elementor-cta__description elementor-cta__content-item elementor-content-item">
                                                                        The smallest of our private rooms is a perfect get
                                                                        together
                                                                        space for groups of up to 8. Our service is discreet
                                                                        to allow for
                                                                        uninterrupted business discussions or dining
                                                                        experiences.
                                                                        Available in combination with dining packages or on
                                                                        it's own
                                                                        with pastries, coffees and cold drinks to keep the
                                                                        team fueled. </div>
                                                                    <div
                                                                        class="elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item ">
                                                                        <a class="elementor-cta__button elementor-button"
                                                                            href="#">
                                                                            <span class="elementor-button-content-wrapper">
                                                                                <span class="elementor-button-text">discover
                                                                                    now</span>
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
                                        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-bb9b74d"
                                            data-id="bb9b74d" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-a09311a elementor-effects-content-yes elementor-cta--valign-bottom elementor-position-below elementor-type-button-default elementor-widget elementor-widget-delicioz-banner"
                                                    data-id="a09311a" data-element_type="widget"
                                                    data-widget_type="delicioz-banner.default">
                                                    <div class="elementor-widget-container">
                                                        <div
                                                            class="elementor-cta--skin-cover elementor-cta elementor-delicioz-banner">
                                                            <div class="elementor-cta__bg-wrapper">
                                                                <div class="elementor-cta__bg-overlay"></div>
                                                                <div class="elementor-cta__bg elementor-bg"
                                                                    style={{ backgroundImage: 'url(https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_04.jpg)' }}
                                                                >
                                                                </div>
                                                            </div>
                                                            <div class="elementor-cta__content">
                                                                <div class="elementor-cta__content_inner">
                                                                    <h3
                                                                        class="elementor-cta__title elementor-cta__content-item elementor-content-item">
                                                                        Group Booking. </h3>
                                                                    <div
                                                                        class="elementor-cta__description elementor-cta__content-item elementor-content-item">
                                                                        With a capacity for 24 seated guests this option
                                                                        will suit larger
                                                                        gatherings. Smaller parties will benefit from the
                                                                        additional
                                                                        space if drinks reception area is required.
                                                                        Available in
                                                                        combination with dining packages or on its own with
                                                                        pastries, coffees and cold drinks to keep the team
                                                                        fueled. </div>
                                                                    <div
                                                                        class="elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item ">
                                                                        <a class="elementor-cta__button elementor-button"
                                                                            href="#">
                                                                            <span class="elementor-button-content-wrapper">
                                                                                <span class="elementor-button-text">discover
                                                                                    now</span>
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
                                    </div>
                                </div>
                                <div class="elementor-section elementor-top-section elementor-element elementor-element-1025283 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="1025283" data-element_type="section"
                                    data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                                    <div class="elementor-container elementor-column-gap-no">
                                        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1e6dbf3"
                                            data-id="1e6dbf3" data-element_type="column"
                                            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-4f9c49f elementor-widget elementor-widget-spacer"
                                                    data-id="4f9c49f" data-element_type="widget"
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
                                            </div>
                                        </div>
                                        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-7c4a93d"
                                            data-id="7c4a93d" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-436bac7 show-icon-deco-yes elementor-position-top elementor-position-below elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                                    data-id="436bac7" data-element_type="widget"
                                                    data-widget_type="image-box.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-image-box-wrapper">
                                                            <div class="elementor-image-box-content">
                                                                <div class="icon"><i aria-hidden="true"
                                                                    class="delicioz-icon- delicioz-icon-chef"></i></div>
                                                                <h3 class="elementor-image-box-title"><a href="#">Chef
                                                                    Dieter <br />Delicioz</a></h3>
                                                                <div class="elementor-image-box-sub-title">30 YEARS OF
                                                                    INSPIRATION</div>
                                                                <p class="elementor-image-box-description">Everyday Chef
                                                                    Delicioz sets himself the challenge
                                                                    to start from scratch – his tools: ingenuity, curiosity,
                                                                    enthusiasm,
                                                                    unparalleled talent and the highest craftsmanship.</p>
                                                                <div class="elementor-image-box-button-wrapper"><a href="#"
                                                                    class="elementor-image-box-button"><span
                                                                        class="elementor-image-box-button-text"> meat
                                                                        our team</span></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-39270fd"
                                            data-id="39270fd" data-element_type="column"
                                            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-750d0a9 elementor-widget elementor-widget-spacer"
                                                    data-id="750d0a9" data-element_type="widget"
                                                    data-widget_type="spacer.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-spacer">
                                                            <div class="elementor-spacer-inner"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="elementor-section elementor-top-section elementor-element elementor-element-cf242a9 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="cf242a9" data-element_type="section"
                                    data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div class="elementor-container elementor-column-gap-no">
                                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ada2ef8"
                                            data-id="ada2ef8" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-0103dec arrow-style-1 dots-style-1 elementor-widget elementor-widget-delicioz-testimonials"
                                                    data-id="0103dec" data-element_type="widget"
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
                                                                                delicious dishes, beautiful presentation,
                                                                                wide wine list and wonderful dessert.
                                                                                I recommend to everyone! I would like to
                                                                                come back here again and again.</div>
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
                                                                                pastor tacos and it works really well and
                                                                                was delicious and made very rapidly per my
                                                                                request.</div>
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
                                <div class="elementor-section elementor-top-section elementor-element elementor-element-1d971ae elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="1d971ae" data-element_type="section"
                                    data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                                    <div class="elementor-container elementor-column-gap-no">
                                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-035cf78"
                                            data-id="035cf78" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-85d4db9 show-icon-deco-yes elementor-position-top elementor-position-below elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                                                    data-id="85d4db9" data-element_type="widget"
                                                    data-widget_type="image-box.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-image-box-wrapper">
                                                            <div class="elementor-image-box-content">
                                                                <div class="icon"><i aria-hidden="true"
                                                                    class="delicioz-icon- delicioz-icon-chef"></i></div>
                                                                <h3 class="elementor-image-box-title"><a href="#">Meet Our
                                                                    Chef</a></h3>
                                                                <div class="elementor-image-box-sub-title">amazing team
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-section elementor-inner-section elementor-element elementor-element-b1e4470 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id="b1e4470" data-element_type="section">
                                                    <div class="elementor-container elementor-column-gap-no">
                                                        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7fc4646"
                                                            data-id="7fc4646" data-element_type="column">
                                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                                <div class="elementor-element elementor-element-1e00a2e elementor-widget elementor-widget-delicioz-team-box"
                                                                    data-id="1e00a2e" data-element_type="widget"
                                                                    data-widget_type="delicioz-team-box.default">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="elementor-teams-wrapper">
                                                                            <div class="team-image">
                                                                                <img width="390" height="300"
                                                                                    src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_ourchef_01.jpg"
                                                                                    class="attachment-full size-full" alt
                                                                                    loading="lazy"
                                                                                    srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_ourchef_01.jpg 390w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_ourchef_01-300x231.jpg 300w"
                                                                                    sizes="(max-width: 390px) 100vw, 390px" />
                                                                            </div>
                                                                            <div class="team-caption">
                                                                                <div class="team-name">Lorenzo Morelli</div>
                                                                                <div class="team-job"> CEO &amp; FOUNDER
                                                                                </div>
                                                                                <div class="description-text">Aenean commodo
                                                                                    ligula eget dolor. Aenean massa. Cum
                                                                                    sociis natoque penatibus et magnis dis
                                                                                </div>
                                                                                <div class="team-icon-socials">
                                                                                    <ul>
                                                                                        <li class="social">
                                                                                            <a
                                                                                                href="https://www.facebook.com">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-facebook-f"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="social">
                                                                                            <a href="https://twitter.com">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-twitter"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="social">
                                                                                            <a
                                                                                                href="https://www.instagram.com">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-instagram"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="social">
                                                                                            <a
                                                                                                href="https://www.youtube.com/">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-youtube"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-9f6af77"
                                                            data-id="9f6af77" data-element_type="column">
                                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                                <div class="elementor-element elementor-element-ed39bac elementor-widget elementor-widget-delicioz-team-box"
                                                                    data-id="ed39bac" data-element_type="widget"
                                                                    data-widget_type="delicioz-team-box.default">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="elementor-teams-wrapper">
                                                                            <div class="team-image">
                                                                                <img width="390" height="480"
                                                                                    src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_ourchef_02.jpg"
                                                                                    class="attachment-full size-full" alt
                                                                                    loading="lazy"
                                                                                    srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_ourchef_02.jpg 390w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_ourchef_02-244x300.jpg 244w"
                                                                                    sizes="(max-width: 390px) 100vw, 390px" />
                                                                            </div>
                                                                            <div class="team-caption">
                                                                                <div class="team-name">Wesley Brewer</div>
                                                                                <div class="team-job">MASTER CHEF</div>
                                                                                <div class="description-text">Lorem ipsum
                                                                                    dolor sit amet, consectetuer adipiscing
                                                                                    elit.
                                                                                    Aenean commodo ligula eget dolor. </div>
                                                                                <div class="team-icon-socials">
                                                                                    <ul>
                                                                                        <li class="social">
                                                                                            <a
                                                                                                href="https://www.facebook.com">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-facebook-f"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="social">
                                                                                            <a href="https://twitter.com">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-twitter"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="social">
                                                                                            <a
                                                                                                href="https://www.instagram.com">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-instagram"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="social">
                                                                                            <a
                                                                                                href="https://www.youtube.com/">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-youtube"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-23b90fd"
                                                            data-id="23b90fd" data-element_type="column">
                                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                                <div class="elementor-element elementor-element-306635b elementor-widget elementor-widget-delicioz-team-box"
                                                                    data-id="306635b" data-element_type="widget"
                                                                    data-widget_type="delicioz-team-box.default">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="elementor-teams-wrapper">
                                                                            <div class="team-image">
                                                                                <img width="390" height="300"
                                                                                    src="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_ourchef_03.jpg"
                                                                                    class="attachment-full size-full" alt
                                                                                    loading="lazy"
                                                                                    srcset="https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_ourchef_03.jpg 390w, https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/08/About_ourchef_03-300x231.jpg 300w"
                                                                                    sizes="(max-width: 390px) 100vw, 390px" />
                                                                            </div>
                                                                            <div class="team-caption">
                                                                                <div class="team-name">Aaliyah Williams
                                                                                </div>
                                                                                <div class="team-job">PASTRY CHEF</div>
                                                                                <div class="description-text">Donec pede
                                                                                    justo, fringilla vel, aliquet nec,
                                                                                    vulputate eget.
                                                                                    In enim justo, rhoncus ut, imperdiet a,
                                                                                    venenatis vitae</div>
                                                                                <div class="team-icon-socials">
                                                                                    <ul>
                                                                                        <li class="social">
                                                                                            <a
                                                                                                href="https://www.facebook.com">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-facebook-f"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="social">
                                                                                            <a href="https://twitter.com">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-twitter"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="social">
                                                                                            <a
                                                                                                href="https://www.instagram.com">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-instagram"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li class="social">
                                                                                            <a
                                                                                                href="https://www.youtube.com/">
                                                                                                <i aria-hidden="true"
                                                                                                    class="fab fa-youtube"></i>
                                                                                            </a>
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
                                </div>
                            </div>
                        </main>
                    </div>
                </div >
            </div >
            <div class="cart-side-overlay"></div>
            <link rel="stylesheet" id="elementor-post-671-css"
                href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-671.css?ver=1661932588"
                media="all" />
            <link rel="stylesheet" id="elementor-post-705-css"
                href="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/css/post-705.css?ver=1661932588"
                media="all" />
            <link rel="stylesheet" id="rs-plugin-settings-css"
                href="https://demo2.themelexus.com/delicioz/wp-content/plugins/revslider/public/assets/css/rs6.css?ver=6.5.31"
                media="all" />
            <style id="rs-plugin-settings-inline-css">
                {`#rs-demo-id { }`}
            </style>
            <div dangerouslySetInnerHTML={{ __html: scriptContent }} />
        </div >
    )
}
