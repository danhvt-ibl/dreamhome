if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var originalAddEventListener = EventTarget.prototype.addEventListener,
        oldWidth                 = window.innerWidth;
    EventTarget.prototype.addEventListener = function (eventName, eventHandler, useCapture) {
        if (eventName === "resize") {
            originalAddEventListener.call(this, eventName, function (event) {
                if (oldWidth === window.innerWidth) {
                    return;
                }
                else if (oldWidth !== window.innerWidth) {
                    oldWidth = window.innerWidth;
                }
                if (eventHandler.handleEvent) {
                    eventHandler.handleEvent.call(this, event);
                }
                else {
                    eventHandler.call(this, event);
                }
            }, useCapture);
        }
        else {
            originalAddEventListener.call(this, eventName, eventHandler, useCapture);
        }
    }
}
/*=================================================================================*/
window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.4\/72x72\/",
    "ext"    : ".png",
    "svgUrl" : "https:\/\/s.w.org\/images\/core\/emoji\/2.4\/svg\/",
    "svgExt" : ".svg",
    "source" : {"concatemoji": "\/assets\/js\/wp-emoji-release.min.js"}
};
!function (a, b, c) {
    function d(a, b) {
        var c = String.fromCharCode;
        l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, a), 0, 0);
        var d = k.toDataURL();
        l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, b), 0, 0);
        var e = k.toDataURL();
        return d === e
    }
    function e(a) {
        var b;
        if (!l || !l.fillText) return !1;
        switch (l.textBaseline = "top", l.font = "600 32px Arial", a) {
            case"flag":
                return !(b = d([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819])) && (b = d([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]), !b);
            case"emoji":
                return b = d([55357, 56692, 8205, 9792, 65039], [55357, 56692, 8203, 9792, 65039]), !b
        }
        return !1
    }
    function f(a) {
        var c = b.createElement("script");
        c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
    }
    var g,
        h,
        i,
        j,
        k = b.createElement("canvas"),
        l = k.getContext && k.getContext("2d");
    for (j = Array("flag", "emoji"), c.supports = {
        everything          : !0,
        everythingExceptFlag: !0
    }, i = 0; i < j.length; i++) c.supports[j[i]] = e(j[i]), c.supports.everything = c.supports.everything && c.supports[j[i]], "flag" !== j[i] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[j[i]]);
    c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function () {
        c.DOMReady = !0
    }, c.supports.everything || (h = function () {
        c.readyCallback()
    }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1)) : (a.attachEvent("onload", h), b.attachEvent("onreadystatechange", function () {
        "complete" === b.readyState && c.readyCallback()
    })), g = c.source || {}, g.concatemoji ? f(g.concatemoji) : g.wpemoji && g.twemoji && (f(g.twemoji), f(g.wpemoji)))
}(window, document, window._wpemojiSettings);
/*=================================================================================*/
"function" == typeof jQuery && jQuery(document).ready(function (a) {
    a("body").on("post-load", function () {
        window.a2a && a2a.init_all("page")
    })
});
/*=================================================================================*/
var ssb_ui_data = {"z_index": "10"};
/*=================================================================================*/
/*SSB UI jQuery*/
jQuery(function ($) {
    /*Animation Slide*/
    var ssb_panel          = $('[id^="ssb-container"]'),
        ssb_panel_w        = ssb_panel.width(),
        sbb_display_margin = 50,
        window_width       = jQuery(window).width();
    ssb_panel.css('z-index', ssb_ui_data.z_index);
    if (ssb_panel.hasClass('ssb-btns-left') && (ssb_panel.hasClass('ssb-anim-slide') || ssb_panel.hasClass('ssb-anim-icons'))) {
        ssb_panel.css('left', '-' + (ssb_panel_w - sbb_display_margin) + 'px');
    } else if (ssb_panel.hasClass('ssb-btns-right') && (ssb_panel.hasClass('ssb-anim-slide') || ssb_panel.hasClass('ssb-anim-icons'))) {
        ssb_panel.css('right', '-' + (ssb_panel_w - sbb_display_margin) + 'px');
    }
    /*Slide when hover*/
    if (window_width >= 768) {
        ssb_panel.hover(function () {
            if (ssb_panel.hasClass('ssb-btns-left') && ssb_panel.hasClass('ssb-anim-slide')) {
                ssb_panel.stop().animate({'left': 0}, 300);
            } else if (ssb_panel.hasClass('ssb-btns-right') && ssb_panel.hasClass('ssb-anim-slide')) {
                ssb_panel.stop().animate({'right': 0}, 300);
            }
        }, function () {
            if (ssb_panel.hasClass('ssb-btns-left') && ssb_panel.hasClass('ssb-anim-slide')) {
                ssb_panel.animate({'left': '-' + (ssb_panel_w - sbb_display_margin) + 'px'}, 300);
            } else if (ssb_panel.hasClass('ssb-btns-right') && ssb_panel.hasClass('ssb-anim-slide')) {
                ssb_panel.animate({'right': '-' + (ssb_panel_w - sbb_display_margin) + 'px'}, 300);
            }
        });
    } else {
        ssb_panel.click(function (e) {
            if (jQuery(this).hasClass('ssb-open')) {
                jQuery(this).removeClass('ssb-open');
                if (ssb_panel.hasClass('ssb-btns-left') && ssb_panel.hasClass('ssb-anim-slide')) {
                    ssb_panel.animate({'left': '-' + (ssb_panel_w - sbb_display_margin) + 'px'}, 300);
                } else if (ssb_panel.hasClass('ssb-btns-right') && ssb_panel.hasClass('ssb-anim-slide')) {
                    ssb_panel.animate({'right': '-' + (ssb_panel_w - sbb_display_margin) + 'px'}, 300);
                }
            } else {
                e.preventDefault();
                jQuery(this).addClass('ssb-open');
                if (ssb_panel.hasClass('ssb-btns-left') && ssb_panel.hasClass('ssb-anim-slide')) {
                    ssb_panel.stop().animate({'left': 0}, 300);
                } else if (ssb_panel.hasClass('ssb-btns-right') && ssb_panel.hasClass('ssb-anim-slide')) {
                    ssb_panel.stop().animate({'right': 0}, 300);
                }
            }
        });
    }
});
/*=================================================================================*/

