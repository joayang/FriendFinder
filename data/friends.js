// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    name: "Christie Marchese",
    photo: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fcarriehammer%2Ffiles%2F2018%2F08%2FChristie-Marchese-Aug-2018-1200x857.jpg",
    sex: "female",
    "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    name: "Jackie Chan",
    photo: "https://cdn1.thr.com/sites/default/files/imagecache/portrait_300x450/2012/07/chan_a.jpg",
    sex: "female",
    "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    name: "Emma Watson",
    photo: "https://media.allure.com/photos/5a9dc61596b60513145f3969/1:1/w_727/emma-watson-times-up-tattoo.jpg",
    sex: "female",
    "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
