// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
    return new Promise((resolve, reject) => {
        if (time < 5000) {
            setTimeout(resolve(time + 100), 100);
        } else {
            reject(new Error('This time is too much !'));
        }
    });
}

export async function asyncDelay(time) {
    return new Promise((resolve, reject) => {
        if (time < 5000) {
            setTimeout(resolve(time + 100), 100);
        } else {
            reject(new Error('This time is too much !'));
        }
    });
}