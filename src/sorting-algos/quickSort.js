

export default async function quickSort(n, r, left, right) {
    var index;
    if (n.length > 1) {
        index = await partition(n, r, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            await quickSort(n, r, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            await quickSort(n, r, index, right);
        }
    }

    console.log(n)
}

async function partition(n, r, left, right) {
    var pivot = n[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (n[i] < pivot) {
            i++;
        }
        while (n[j] > pivot) {
            j--;
        }
        if (i <= j) {
            var t1 = n[i]

            r[i].current.changeColor(40)
            r[i].current.onVisited(n[j])
            n[i] = n[j]

            r[j].current.changeColor(80)
            r[j].current.onVisited(t1)
            n[j] = t1
            i++;
            j--;


        }

        await sleep(50)
    }
    return i;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}