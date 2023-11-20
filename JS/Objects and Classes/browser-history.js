function browserHistory(objectBrowser, arrayActions) {
    const actionsDict = {
        'Open': (site, action) => {
            objectBrowser['Open Tabs'].push(site);
            objectBrowser['Browser Logs'].push(action);

        },
        'Close': (site, action) => {
            const openTabs = objectBrowser['Open Tabs']
            if (openTabs.includes(site)) {
                objectBrowser['Open Tabs'].splice(openTabs.indexOf(site), 1);
                objectBrowser['Recently Closed'].push(site);
                objectBrowser['Browser Logs'].push(action);
            }
        },
        'Clear': (x, action) => {
            const arrayObjectBrowser = Object.keys(objectBrowser);
            for (const info of arrayObjectBrowser.slice(1)) {
                objectBrowser[info] = [];
            }
        }
    }

    for (let action of arrayActions) {
        const [actionWord, ...actionInfo] = action.split(' ')

        actionsDict[actionWord](actionInfo.join(' '), action);
    }

    console.log(`${objectBrowser['Browser Name']}
Open Tabs: ${objectBrowser['Open Tabs'].join(', ')}
Recently Closed: ${objectBrowser['Recently Closed'].join(', ')}
Browser Logs: ${objectBrowser['Browser Logs'].join(', ')}`)
}

browserHistory({"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"])