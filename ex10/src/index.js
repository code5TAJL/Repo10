function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            relase_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Eminem",
            title: "The Marshall Mathers LP",
            release_year: 2000,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },

             // Add a record here
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;