function search(arr) {
        let obj = {};
        let result = null;
        let key = null;
        arr.forEach(function(a) {
            if (obj[a]) {
                obj[a] = 2;
            } else {
                obj[a] = 1;
            }
        })
        for ( key in obj) {
            if (obj[key] === 1) {
                result = key;
            }
        }
        return result;
}