import AnimateByScroll, { AnimationGroup, AnimationTimeline, AnimationMediaQuery } from "./modules/animateByScroll.src.js"

new AnimateByScroll(
	{ repeatingAnimations: false, activeAnimationClass: 'active' },

	// new AnimationGroup({
	// 	selectors: '.animation_by_scroll__item',
	// 	animateStartCoeff: [0.5, 0.5],
	// 	timeoutBeforeStart: 500,
	// }, new AnimationMediaQuery(768, [0.8, 0.8], 300)),

	// new AnimationTimeline({
	// 	selectors: '.block',
	// 	animatedProperties: {
	// 		background: ['#383838', '#727272']
	// 	},
	// 	animateSettings: {
	// 		// timeline: new ViewTimeline({
	// 		// 	subject: document.querySelector('.container'),
	// 		// }),
	// 		// |animationType| |scrollElementToStartAnimation| |scrollElementToEndAnimation|
	// 		// timeRange: 'cover 0% 100%',
	// 		timeline: new ScrollTimeline({
	// 			orientation: 'block',
	// 			scrollOffsets: [CSS.percent(0), CSS.percent(100)],
	// 		})
	// 	}
	// }),
	new AnimationTimeline({
		selectors: '.header',
		animatedProperties: {
			transform: ['scale(1)', 'scale(0.1)'],
			opacity: ['1', '0'],
		},
		animateSettings: {
			timeline: new ViewTimeline({
				subject: document.querySelector('.header'),
			}),
			timeRange: 'cover 50% 100%',
		}
	}),
	new AnimationTimeline({
		selectors: '.works__title',
		animatedProperties: {
			transform: ['translate(-100px, 0px)', 'translate(0px, 0px)'],
			opacity: ['0', '1'],
		},
		animateSettings: {
			timeline: new ViewTimeline({
				subject: document.querySelector('.works'),
			}),
			timeRange: 'cover 0% 40%'
		}
	}),
	new AnimationTimeline({
		selectors: '.works-slider',
		animatedProperties: {
			transform: ['translate(0, 200px)', 'translate(0, 0px)'],
			opacity: ['0', '1'],
		},
		animateSettings: {
			timeline: new ViewTimeline({
				subject: document.querySelector('.works'),
			}),
			timeRange: 'cover 0% 50%'
		}
	}),
	new AnimationTimeline({
		selectors: '.reviews__title',
		animatedProperties: {
			transform: ['translate(100px, 0px)', 'translate(0px, 0px)'],
			opacity: ['0', '1'],
		},
		animateSettings: {
			timeline: new ViewTimeline({
				subject: document.querySelector('.reviews'),
			}),
			timeRange: 'cover 0% 40%',
		}
	}),
	new AnimationTimeline({
		selectors: '.reviews-slider',
		animatedProperties: {
			transform: ['translate(0, 200px)', 'translate(0, 0px)'],
			opacity: ['0', '1'],
		},
		animateSettings: {
			timeline: new ViewTimeline({
				subject: document.querySelector('.reviews'),
			}),
			timeRange: 'cover 0% 50%',
		}
	}),
)