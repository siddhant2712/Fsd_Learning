function getData(dataID, getNextData) {
    setTimeout(() => {
        console.log(`Data: ${dataID}`);
        if (getNextData) {
            getNextData();
        }
    }, 1500);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5, () => {
                    console.log('All Data Received ✅');
                });
            });
        });
    });
});
