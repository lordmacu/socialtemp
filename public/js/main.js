var theme = {};
(function($) {
    'use strict';
    var _window = $(window),
        _document = $(document),
        _body = $('body'),
        swiper_object = {},
        _skill_item = $('.skills-item'),
        _fixed_sidebar = $('.fixed-sidebar');
    
    theme['equalHeight'] = function() {
        $('.js-equal-child')['find']('.theme-module')['matchHeight']({
            property: 'min-height'
        })
    };
    theme['equalHeight'] = function() {
        $('.js-equal-child')['find']('.theme-module')['matchHeight']({
            property: 'min-height'
        })
    };
    theme['TopSearch'] = function() {
        $('.js-user-search')['selectize']({
            persist: false,
            maxItems: 2,
            valueField: 'name',
            labelField: 'name',
            searchField: ['name'],
            options: [{
                image: 'img/avatar30-sm.jpg',
                name: 'Marie Claire Stevens',
                message: '12 Friends in Common',
                icon: 'olymp-happy-face-icon'
            }, {
                image: 'img/avatar54-sm.jpg',
                name: 'Marie Davidson',
                message: '4 Friends in Common',
                icon: 'olymp-happy-face-icon'
            }, {
                image: 'img/avatar49-sm.jpg',
                name: 'Marina Polson',
                message: 'Mutual Friend: Mathilda Brinker',
                icon: 'olymp-happy-face-icon'
            }, {
                image: 'img/avatar36-sm.jpg',
                name: 'Ann Marie Gibson',
                message: 'New York, NY',
                icon: 'olymp-happy-face-icon'
            }, {
                image: 'img/avatar22-sm.jpg',
                name: 'Dave Marinara',
                message: '8 Friends in Common',
                icon: 'olymp-happy-face-icon'
            }, {
                image: 'img/avatar41-sm.jpg',
                name: 'The Marina Bar',
                message: 'Restaurant / Bar',
                icon: 'olymp-star-icon'
            }],
            render: {
                option: function(item, escape) {
                    return '<div class="inline-items">' + (item['image'] ? '<div class="author-thumb"><img src="' + escape(item['image']) + '" alt="avatar"></div>' : '') + '<div class="notification-event">' + (item['name'] ? '<span class="h6 notification-friend"></a>' + escape(item['name']) + '</span>' : '') + (item['message'] ? '<span class="chat-message-item">' + escape(item['message']) + '</span>' : '') + '</div>' + (item['icon'] ? '<span class="notification-icon"><svg class="' + escape(item['icon']) + '"><use xlink:href="img/icons#' + escape(item['icon']) + '"></use></svg></span>' : '') + '</div>'
                },
                item: function(item, escape) {
                    var _0xcee0xb = item['name'];
                    return '<div>' + '<span class="label">' + escape(_0xcee0xb) + '</span>' + '</div>'
                }
            }
        })
    };
    theme['Materialize'] = function() {
        $['material']['init']();
        $('.checkbox > label')['on']('click', function() {
            $(this)['closest']('.checkbox')['addClass']('clicked')
        })
    };
    theme['Bootstrap'] = function() {
        $('[data-toggle="tooltip"], [rel="tooltip"]')['tooltip']();
        $('[data-toggle="popover"]')['popover']();
        $('.selectpicker')['selectpicker']();
        var _picker = $('input[name="datetimepicker"]');
        if (_picker['length']) {
            var days = moment()['subtract'](29, 'days');
            _picker['daterangepicker']({
                startDate: days,
                autoUpdateInput: false,
                singleDatePicker: true,
                showDropdowns: true,
                locale: {
                    format: 'DD/MM/YYYY'
                }
            });
            _picker['on']('focus', function() {
                $(this)['closest']('.form-group')['addClass']('is-focused')
            });
            _picker['on']('apply.daterangepicker', function(_0xcee0xe, _0xcee0xf) {
                $(this)['val'](_0xcee0xf['startDate']['format']('DD/MM/YYYY'));
                $(this)['closest']('.form-group')['addClass']('is-focused')
            });
            _picker['on']('hide.daterangepicker', function() {
                if ('' === $(this)['val']()) {
                    $(this)['closest']('.form-group')['removeClass']('is-focused')
                }
            })
        }
    };
    theme['mediaPopups'] = function() {
        $('.play-video')['magnificPopup']({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        $('.js-zoom-image')['magnificPopup']({
            type: 'image',
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this['st']['image']['markup'] = this['st']['image']['markup']['replace']('mfp-figure', 'mfp-figure mfp-with-anim');
                    this['st']['mainClass'] = 'mfp-zoom-in'
                }
            },
            closeOnContentClick: true,
            midClick: true
        });
        $('.js-zoom-gallery')['each'](function() {
            $(this)['magnificPopup']({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function() {
                        this['st']['image']['markup'] = this['st']['image']['markup']['replace']('mfp-figure', 'mfp-figure mfp-with-anim');
                        this['st']['mainClass'] = 'mfp-zoom-in'
                    }
                },
                closeOnContentClick: true,
                midClick: true
            })
        })
    };
    theme['initSwiper'] = function() {
        var counter = 0;
        var orientation = false;
        $('.swiper-container')['each'](function() {
            var _this = $(this);
            var swipe_unique_id = 'swiper-unique-id-' + counter;
            _this['addClass']('swiper-' + swipe_unique_id + ' initialized')['attr']('id', swipe_unique_id);
            _this['find']('.swiper-pagination')['addClass']('pagination-' + swipe_unique_id);
            var effect = (_this['data']('effect')) ? _this['data']('effect') : 'slide',
                crossfade = (_this['data']('crossfade')) ? _this['data']('crossfade') : true,
                loop = (_this['data']('loop') == false) ? _this['data']('loop') : true,
                show_items = (_this['data']('show-items')) ? _this['data']('show-items') : 1,
                scroll_items = (_this['data']('scroll-items')) ? _this['data']('scroll-items') : 1,
                direction = (_this['data']('direction')) ? _this['data']('direction') : 'horizontal',
                mouse_scroll = (_this['data']('mouse-scroll')) ? _this['data']('mouse-scroll') : false,
                autoplay = (_this['data']('autoplay')) ? parseInt(_this['data']('autoplay'), 10) : 0,
                auto_height = (_this['hasClass']('auto-height')) ? true : false,
                _show_items = (show_items > 1) ? 20 : 0;
            if (show_items > 1) {
                orientation = {
                    480: {
                        slidesPerView: 1,
                        slidesPerGroup: 1
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    }
                }
            };
            swiper_object['swiper-' + swipe_unique_id] = new Swiper('.swiper-' + swipe_unique_id, {
                pagination: '.pagination-' + swipe_unique_id,
                paginationClickable: true,
                direction: direction,
                mousewheelControl: mouse_scroll,
                mousewheelReleaseOnEdges: mouse_scroll,
                slidesPerView: show_items,
                slidesPerGroup: scroll_items,
                spaceBetween: _show_items,
                keyboardControl: true,
                setWrapperSize: true,
                preloadImages: true,
                updateOnImagesReady: true,
                autoplay: autoplay,
                autoHeight: auto_height,
                loop: loop,
                breakpoints: orientation,
                effect: effect,
                fade: {
                    crossFade: crossfade
                },
                parallax: true,
                onSlideChangeStart: function(_0xcee0x1e) {
                    var _0xcee0x1f = _this['siblings']('.slider-slides');
                    if (_0xcee0x1f['length']) {
                        _0xcee0x1f['find']('.slide-active')['removeClass']('slide-active');
                        var $0 = _0xcee0x1e['slides']['eq'](_0xcee0x1e['activeIndex'])['attr']('data-swiper-slide-index');
                        _0xcee0x1f['find']('.slides-item')['eq']($0)['addClass']('slide-active')
                    }
                }
            });
            counter++
        });
        $('.btn-prev')['on']('click', function() {
            var $1 = $(this)['closest']('.slider-slides')['siblings']('.swiper-container')['attr']('id');
            swiper_object['swiper-' + $1]['slidePrev']()
        });
        $('.btn-next')['on']('click', function() {
            var $1 = $(this)['closest']('.slider-slides')['siblings']('.swiper-container')['attr']('id');
            swiper_object['swiper-' + $1]['slideNext']()
        });
        $('.btn-prev-without')['on']('click', function() {
            var $1 = $(this)['closest']('.swiper-container')['attr']('id');
            swiper_object['swiper-' + $1]['slidePrev']()
        });
        $('.btn-next-without')['on']('click', function() {
            var $1 = $(this)['closest']('.swiper-container')['attr']('id');
            swiper_object['swiper-' + $1]['slideNext']()
        });
        $('.slider-slides .slides-item')['on']('click', function() {
            if ($(this)['hasClass']('slide-active')) {
                return false
            };
            var $2 = $(this)['parent']()['find']('.slides-item')['index'](this);
            var $1 = $(this)['closest']('.slider-slides')['siblings']('.swiper-container')['attr']('id');
            swiper_object['swiper-' + $1]['slideTo']($2 + 1);
            $(this)['parent']()['find']('.slide-active')['removeClass']('slide-active');
            $(this)['addClass']('slide-active');
            return false
        })
    };
    theme['progresBars'] = function() {
        _skill_item['appear']({
            force_process: true
        });
        _skill_item['on']('appear', function() {
            var $3 = $(this);
            if (!$3['data']('inited')) {
                $3['find']('.skills-item-meter-active')['fadeTo'](300, 1)['addClass']('skills-animate');
                $3['data']('inited', true)
            }
        })
    };
    theme['IsotopeSort'] = function() {
        var $4 = $('.sorting-container');
        $4['each'](function() {
            var $5 = $(this);
            var $6 = ($5['data']('layout')['length']) ? $5['data']('layout') : 'masonry';
            $5['isotope']({
                itemSelector: '.sorting-item',
                layoutMode: $6,
                percentPosition: true
            });
            $5['imagesLoaded']()['progress'](function() {
                $5['isotope']('layout')
            });
            var $7 = $5['siblings']('.sorting-menu')['find']('li');
            $7['on']('click', function() {
                if ($(this)['hasClass']('active')) {
                    return false
                };
                $(this)['parent']()['find']('.active')['removeClass']('active');
                $(this)['addClass']('active');
                var $8 = $(this)['data']('filter');
                if (typeof $8 != 'undefined') {
                    $5['isotope']({
                        filter: $8
                    });
                    return false
                }
            })
        })
    };
    $('a[data-toggle="tab"]')['on']('shown.bs.tab', function($9) {
        var $a = $($9['target'])['attr']('href');
        if ('#events' === $a) {
            $('.fc-state-active')['click']()
        }
    });
    $('.js-sidebar-open')['on']('click', function() {
        $(this)['toggleClass']('active');
        $(this)['closest'](_fixed_sidebar)['toggleClass']('open');
        return false
    });
    _window['keydown'](function($b) {
        if ($b['which'] == 27 && _fixed_sidebar['is'](':visible')) {
            _fixed_sidebar['removeClass']('open')
        }
    });
    _document['on']('click', function($c) {
        if (!$($c['target'])['closest'](_fixed_sidebar)['length'] && _fixed_sidebar['is'](':visible')) {
            _fixed_sidebar['removeClass']('open')
        }
    });
    var $d = $('.window-popup');
    $('.js-open-popup')['on']('click', function($c) {
        var $e = $(this)['data']('popup-target');
        var $f = $d['filter']($e);
        var _window0 = $(this)['offset']();
        $f['addClass']('open');
        $f['css']('top', (_window0['top'] - ($f['innerHeight']() / 2)));
        _body['addClass']('overlay-enable');
        return false
    });
    _window['keydown'](function($b) {
        if ($b['which'] == 27) {
            $d['removeClass']('open');
            _body['removeClass']('overlay-enable');
            $('.profile-menu')['removeClass']('expanded-menu');
            $('.popup-chat-responsive')['removeClass']('open-chat');
            $('.profile-settings-responsive')['removeClass']('open');
            $('.header-menu')['removeClass']('open')
        }
    });
    _document['on']('click', function($c) {
        if (!$($c['target'])['closest']($d)['length']) {
            $d['removeClass']('open');
            _body['removeClass']('overlay-enable');
            $('.profile-menu')['removeClass']('expanded-menu');
            $('.header-menu')['removeClass']('open')
        }
    });
    $('[data-toggle=tab]')['on']('click', function() {
        _body['toggleClass']('body--fixed');
        if ($(this)['hasClass']('active') && $(this)['closest']('ul')['hasClass']('mobile-app-tabs')) {
            $($(this)['attr']('href'))['toggleClass']('active');
            $(this)['removeClass']('active');
            return false
        }
    });
    $('.js-close-popup')['on']('click', function() {
        $(this)['closest']($d)['removeClass']('open');
        _body['removeClass']('overlay-enable');
        return false
    });
    $('.profile-settings-open')['on']('click', function() {
        $('.profile-settings-responsive')['toggleClass']('open');
        return false
    });
    $('.js-expanded-menu')['on']('click', function() {
        $('.profile-menu')['toggleClass']('expanded-menu');
        return false
    });
    $('.js-chat-open')['on']('click', function() {
        $('.popup-chat-responsive')['toggleClass']('open-chat');
        return false
    });
    $('.js-chat-close')['on']('click', function() {
        $('.popup-chat-responsive')['removeClass']('open-chat');
        return false
    });
    $('.js-open-responsive-menu')['on']('click', function() {
        $('.header-menu')['toggleClass']('open');
        return false
    });
    $('.js-close-responsive-menu')['on']('click', function() {
        $('.header-menu')['removeClass']('open');
        return false
    });
    _document['ready'](function() {
        theme.Bootstrap();
        theme.Materialize();
        theme['initSwiper']();
        theme['progresBars']();
        theme.IsotopeSort();

        if (typeof $['fn']['selectize'] !== 'undefined') {
            theme.TopSearch()
        };
        if (typeof $['fn']['matchHeight'] !== 'undefined') {
            theme['equalHeight']()
        };
        if (typeof $['fn']['magnificPopup'] !== 'undefined') {
            theme['mediaPopups']()
        };
        if (typeof $['fn']['gifplayer'] !== 'undefined') {
            $('.gif-play-image')['gifplayer']()
        };
        if (typeof $['fn']['mediaelementplayer'] !== 'undefined') {
            $('#mediaplayer')['mediaelementplayer']({
                "features": ['prevtrack', 'playpause', 'nexttrack', 'loop', 'shuffle', 'current', 'progress', 'duration', 'volume']
            })
        };
        $('.mCustomScrollbar')['perfectScrollbar']({
            wheelPropagation: false
        })
    })
})(jQuery)