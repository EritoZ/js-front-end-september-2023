function songs(data) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songs = data.slice(1, data.length - 1);
    const typeListSearch = data.pop();

    for (const song of songs) {
        const [typeList, songName, time] = song.split('_');

        if (typeListSearch === 'all' || typeListSearch === typeList) {
            console.log(songName);
        }
    }
}

songs([2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']);