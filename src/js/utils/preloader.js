import { gsap } from 'gsap'

const timeline = gsap.timeline();
const prelaoder = document.querySelector('.preloader');

if (prelaoder) {
    timeline
        .to('.clip-50', {
            height: 'calc(100% / 3)',
            delay: 1,
            duration: 1
        })
        .to('.preloader__marque', {
            top: '50%',
            duration: 1
        })
        .to('.preloader__marque', {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            onComplete: () => {
                gsap.to(prelaoder, {
                    opacity: 0,
                    duration: 1,
                })

                gsap.to('.clip-top', {
                    clipPath: 'inset(0 0 100% 0)',
                    duration: 1,
                })

                gsap.to('.clip-bottom', {
                    clipPath: 'inset(100% 0 0 0)',
                    duration: 1,
                    onComplete: () => prelaoder.remove()
                })
            }
        })

    gsap.to('.clip-50 .preloader__marque', {
        left: '0',
        duration: 2,
        delay: 2
    })

    gsap.to('.clip-center .preloader__marque', {
        left: '100%',
        duration: 2,
        delay: 2
    })
}
