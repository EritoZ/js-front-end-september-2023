function substring(string, index, elCount) {
    let substring = string.substring(index, elCount + index);

    console.log(substring)
}

substring('SkipWord', 4, 7)