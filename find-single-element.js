const array = [2, 3, 5, 4, 5, 3, 4];
const n = array.length;

function findSingle(ar, ar_size)
    {
        // Do XOR of all elements and return
        let res = ar[0];
        for (let i = 1; i < ar_size; i++)
            res = res ^ ar[i];
 
        return res;
    }
        console.log("Element occurring once is "
            + findSingle(array, n));