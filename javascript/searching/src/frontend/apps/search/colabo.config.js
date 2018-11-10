var variables = {
    ANGULAR_PACKAGES_FOLDER: './',
    ANGULAR_BUILD_PACKAGES_FOLDER: './'
};

var puzzles = {
    name: "f-demos-f-search",
    description: "This is a frontend aspect of the PlaySound system",
    sudo: {
        "offer": false,
        "install": false,
        "build": false,
        "symlinks": false
    },
    dependencies: {
        "@colabo-knalledge/f-core": {},
        "@colabo-knalledge/f-store_core": {},
        "@colabo-puzzles/f-core": {},
        "@colabo-rima/f-core": {},
        "@colabo-rima/f-aaa": {},
        "@colabo-utils/i-config": {},
        "@colabo-utils/i-pub-sub": {},
        "@colabo-topichat/f-core": {},
        "@colabo-topichat/f-talk": {},
        "@audio-commons/mediator-search": {},
        "@audio-commons/play-player": {}
    },
    offers: {}
};

var symlinks = [];

exports.variables = variables;
exports.puzzles = puzzles;
exports.symlinks = symlinks;