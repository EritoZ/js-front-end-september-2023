function loadingBar(number) {
    const load = Math.floor(number / 10);
    const loadLeft = 10 - load;

    if (loadLeft) {
        console.log(`${number}% [${'%'.repeat(load) + '.'.repeat(loadLeft)}]`);
        console.log('Still loading...');
        return
    }

    console.log('100% Complete!');
    console.log('[%%%%%%%%%%]');
}

loadingBar(0)