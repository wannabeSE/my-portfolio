export const slideFromTop = {
    initial: {
        y: -100,
        opacity: 0,
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            stiffness: 60,
        }
    }
};
export const slideFromLeft = {

    initial: {
        x: -100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 500
        }
    },

}
export const slideFromRight = {
    initial: {
        x: 100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 800,
            duration: 500
        }
    }
}
export const slideFromRightWithVisible = {
    initial: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 400,
            duration: 600
        }
    }
};
export const slideFromLeftWithVisible = {
    initial: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 300,
            duration: 600
        }
    }
}