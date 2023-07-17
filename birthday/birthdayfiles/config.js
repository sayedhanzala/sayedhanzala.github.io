var config = {
    // The length of the sentence can be arbitrary, you can write ten sentences, twenty sentences are fine
    // Try not to exceed 15 characters per sentence, otherwise the display effect may not be very good
    texts: [
        'Congratulations on your day, dear friend.',
        'May this birthday be tremendous,',
        'and may all your dreams come true',
        'I hope all your wishes come true today,',
        'May your personal new year bring an abundance of blessings!',
        'Happy birthday to my beautiful friend!',
        'Enjoy your special day to the fullest, bestie!'
    ],
    /**
     * imgs can be left blank, but if you want to fill in, you must follow the format below
     * "Corresponding to the above text, it must be exactly the same" : "The image address, you can put the image in the imgs folder"
     * For example
     * "Beloved little cutie": "./imgs/xiaokeai.jpg"
     *
     * If you don't want pictures, just write two slash comments at the beginning of each line, for example, the picture "Today is your birthday" below will not be displayed :)
     * Tip: It is better to use a square or close to a square for the picture, it looks better
     */
    imgs: {
        "Dear little cutie": "birthdayfiles/imgs/xiaokeai.png",
        // "Today is your birthday": "birthdayfiles/imgs/birthday.jpg",
    },
    // button text description, the following is the default button text, in English, you can change it to your favorite text
    desc: {
        turn_on: "Start",
        play: "Music",
        banner_coming: "Color",
        balloons_flying: "Looks like something is missing",
        cake_fadein: "Cake?",
        light_candle: "Candle?",
        wish_message: "Happy Birthday",
        story: "A MESSAGE FOR YOU",
        lst_greet:"Happy Birthday!",
    }
};
