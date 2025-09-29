<<<<<<< HEAD
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
=======
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
>>>>>>> e32ae59773cbf5e83ecec4d12c05b5e62241242c
