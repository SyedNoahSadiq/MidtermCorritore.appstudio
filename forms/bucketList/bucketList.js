var bucketList = []
let enterBucket = true

while (enterBucket == true) {
    bucketL = prompt("Add to bucket list here: (type 'stop' when done)")
    bucketL = bucketL.toString()
    if (bucketL == 'stop') {
    enterBucket = false
} else {
    bucketList.push(bucketL)
    }
}
    
var i = 0 
while (bucketList[i]) {
    console.log(bucketList[i])
    i++
    }