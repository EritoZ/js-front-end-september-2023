function comments(arrayStrings) {
    const users = [];
    let postsDict = {};
    const requestDict = {
        'user': (username, articleName, commentTitle, comment) => {
            users.push(username);
        },
        'article': (username, articleName, commentTitle, comment) => {
            postsDict[articleName] = {};
        },
        'post': (username, articleName, commentTitle, comment) => {
            if (!users.includes(username)) {
                return;
            }

            if (!postsDict.hasOwnProperty(articleName)) {
                return;
            }

            postsDict[articleName][commentTitle] = [username, comment];
        }
    };

    for (const httpRequest of arrayStrings) {
        let username = undefined;
        let articleName = undefined;
        let commentTitle = undefined;
        let comment = undefined;
        let request = undefined;

        if (httpRequest.includes('user')) {
            [request, username] = httpRequest.split(' ');
        } else if (httpRequest.includes('article')) {
            [request, articleName] = httpRequest.split(' ');
        } else {
            request = 'post';
            let articleAction = httpRequest.split(' posts on ');
            username = articleAction[0];
            articleAction = articleAction[1].replace(':', ',');
            [articleName, commentTitle, comment] = articleAction.split(', ');
        }

        requestDict[request](username, articleName, commentTitle, comment);
    }

    postsDict = Object.entries(postsDict)
        .sort((a, b) => Object.values(b[1]).length - Object.values(a[1]).length);

    for (let [post, comments] of postsDict) {
        comments = Object.entries(comments).sort((a, b) => a[1][0].localeCompare(b[1][0]));

        console.log(`Comments on ${post}`);
        comments.forEach(comment => {
            console.log(`--- From user ${comment[1][0]}: ${comment[0]} - ${comment[1][1]}`);
        })
    }
}

comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])