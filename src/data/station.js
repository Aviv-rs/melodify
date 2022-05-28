// Guidlines:
// *. currently no better API than youtube...
// *. no need for song store, it is part of the station

// Pages, Cmps:
// HomePage render 2 stations => link StationDetails
// Add station
// AppPlayer (initially rendered at StationDetails, later in footer)
//   Smart component - connected to store:
//   -. stationModule.currentlyPlayingUrl
//   -. stationModule.dispatch(nextSong)
// Filtering
// StationList, StationPreview
// StationDetails - Make it amazing
// D & D Later....


// server.js


// STATIONS
// TODO :LIKED SONGS USER TO CHANGE FOLLOWING NEW USERS CREATED 

const station1 = {
  "_id": "5cksxjas89xjsa8xjsa8jxs09",
  "name": "Best Workout Mix",
  "coverUrl": "https://i.scdn.co/image/ab67706c0000bebbb3c5c979973dadd9e7ef516d",
  "tags": [
    "Motivating",
    "Workout"
  ],
  "createdAt": 1541652422,
  "createdBy": {
    "_id": "6283d13fb9a7e752c1c0fdcb",
    "username": "kyle_s",
    "fullName": "Kyle Smith"
  },
  "likedByUsers": [
    {
      "_id": "628a6e62b1f6f147074b1ff5",
      "username": "leila.P",
      "fullName": "Leila Parks"
    },

    {
      "_id": "628a71b2b1f6f147074b1ff6",
      "username": "summerz",
      "fullName": "Sam Marks"
    }
  ],
  "songs": [
    {
      "id": "Obim8BYGnOE",
      "title": "'Eminem - Til I collapse",
      "url": "https://www.youtube.com/watch?v=Obim8BYGnOE",
      "imgUrl": "https://i.ytimg.com/vi/Obim8BYGnOE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA68kovT2nZYzUWEI8nYr_MFMF8aQ",
      "addedBy": {
        "_id": "628a71b2b1f6f147074b1ff6",
        "username": "summerz",
        "fullName": "Sam Marks"
      },
      "addedAt": 162521765262,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },

        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    },

    {
      "id": "VDvr08sCPOc",
      "title": "Fort Minor - Remember the name",
      "url": "https://www.youtube.com/watch?v=VDvr08sCPOc",
      "imgUrl": "	https://i.ytimg.com/vi/VDvr08sCPOc/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzIpVuDtabT7NmQNSK5X1fDnh95g",
      "addedBy": {
        "_id": "6283d13fb9a7e752c1c0fdcb",
        "username": "kyle_s",
        "fullName": "Kyle Smith"
      },
      "addedAt": 162521765262,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },
        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    }
  ]
}



const station2 = {
  "_id": "5cksxjas89xjsa8xjsa8jxs10",
  "name": "Meditation and Healing Sounds ",
  "coverUrl": "https://i.scdn.co/image/6373b28c2946da5ceffd79e8295e57ec7a8b8ddf",
  "tags": [
    "Relax",
    "Meditation"
  ],
  "createdAt": 1621119918991,
  "createdBy": {
    "_id": "6283d13fb9a7e752c1c0fbrt",
    "username": "raheem_s",
    "fullName": "Raheem Sterling"
  },
  "likedByUsers": [
    {
      "_id": "628a6e62b1f6f147074b1ff5",
      "username": "leila.P",
      "fullName": "Leila Parks"
    },

    {
      "_id": "628a71b2b1f6f147074b1ff6",
      "username": "summerz",
      "fullName": "Sam Marks"
    }
  ],
  "songs": [
    {
      "id": "ZfQLaKS8yJY",
      "title": "'Les Choristes - Vois sur ton chemin",
      "url": "https://www.youtube.com/watch?v=ZfQLaKS8yJY",
      "imgUrl": "https://i.ytimg.com/vi/ZfQLaKS8yJY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA68kovT2nZYzUWEI8nYr_MFMF8aQ",
      "addedBy": {
        "_id": "628a71b2b1f6f147074b1ff6",
        "username": "summerz",
        "fullName": "Sam Marks"
      },
      "addedAt": 1631119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },

        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    },

    {
      "id": "4s3uheDMRl0",
      "title": "Danit - Guacamayo",
      "url": "https://www.youtube.com/watch?v=4s3uheDMRl0",
      "imgUrl": "	https://i.ytimg.com/vi/4s3uheDMRl0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzIpVuDtabT7NmQNSK5X1fDnh95g",
      "addedBy": {
        "_id": "6283d13fb9a7e752c1c0fdcb",
        "username": "kyle_s",
        "fullName": "Kyle Smith"
      },
      "addedAt": 162521765262,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },
        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    }
  ]
}


const station3 = {
  "_id": "5cksxjas89xjsa8xjsa8jxs989",
  "name": "Summer and Cocktails 🏝️🍹",
  "coverUrl": "https://mosaic.scdn.co/640/ab67616d0000b273063fc4921a6d7fbac76e9bbaab67616d0000b273582f703c73240fe327aa05d6ab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b273985bf5ede2fe4a048ee85f28",
  "tags": [
    "Summer",
    "Sunny",
    "Tropical"
  ],
  "createdAt": 1431119918991,
  "createdBy": {
    "_id": "6283d13fb9a7e752c1c0fdcb",
    "username": "kyle_s",
    "fullName": "Kyle Smith"
  },
  "likedByUsers": [
    {
      "_id": "628a6e62b1f6f147074b1ff5",
      "username": "leila.P",
      "fullName": "Leila Parks"
    },

    {
      "_id": "628a71b2b1f6f147074b1ff6",
      "username": "summerz",
      "fullName": "Sam Marks"
    }
  ],
  "songs": [
    {
      "id": "McEoTIqoRKk",
      "title": "Calvin Harris - Summer",
      "url": "https://www.youtube.com/watch?v=McEoTIqoRKk",
      "imgUrl": "https://i.ytimg.com/vi/McEoTIqoRKk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA68kovT2nZYzUWEI8nYr_MFMF8aQ",
      "addedBy": {
        "_id": "628a71b2b1f6f147074b1ff6",
        "username": "summerz",
        "fullName": "Sam Marks"
      },
      "addedAt": 1431119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },

        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    },

    {
      "id": "CwZ_bmNbdAw",
      "title": "Simple Plan - Summer paradise",
      "url": "https://www.youtube.com/watch?v=CwZ_bmNbdAw",
      "imgUrl": "https://i.ytimg.com/vi/qjHlgrGsLWQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA68kovT2nZYzUWEI8nYr_MFMF8aQ",
      "addedBy": {
        "_id": "6283d13fb9a7e752c1c0fdcb",
        "username": "kyle_s",
        "fullName": "Kyle Smith"
      },
      "addedAt": 162521765262,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },
        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    }
  ]
}

const station4 = {
  "_id": "5cksxjas89xjsa8xjsa8jxs249",
  "name": "Throwback To Summertime 🍦",
  "coverUrl": "https://i.scdn.co/image/ab67706f00000003858e9388631d9f3f5eaa5fca",
  "tags": [
    "Throwback",
    "Summer"
  ],
  "createdAt": 1411119918991,
  "createdBy": {
    "_id": "6283d13fb9a7e752c1c0fdcb",
    "username": "kyle_s",
    "fullName": "Kyle Smith"
  },
  "likedByUsers": [
    {
      "_id": "628a6e62b1f6f147074b1ff5",
      "username": "leila.P",
      "fullName": "Leila Parks"
    },

    {
      "_id": "628a71b2b1f6f147074b1ff6",
      "username": "summerz",
      "fullName": "Sam Marks"
    }
  ],
  "songs": [
    {
      "id": "ZmzjH6OjjIA",
      "title": "'Madonna - La isla bonita",
      "url": "https://www.youtube.com/watch?v=ZmzjH6OjjIA",
      "imgUrl": "https://i.ytimg.com/vi/ZmzjH6OjjIA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA68kovT2nZYzUWEI8nYr_MFMF8aQ",
      "addedBy": {
        "_id": "628a71b2b1f6f147074b1ff6",
        "username": "summerz",
        "fullName": "Sam Marks"
      },
      "addedAt": 1421119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },

        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    },

    {
      "id": "ghGiv7YLC7Q",
      "title": "Boney M - Sunny",
      "url": "https://www.youtube.com/watch?v=ghGiv7YLC7Q",
      "imgUrl": "	https://i.ytimg.com/vi/ghGiv7YLC7Q/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzIpVuDtabT7NmQNSK5X1fDnh95g",
      "addedBy": {
        "_id": "6283d13fb9a7e752c1c0fdcb",
        "username": "kyle_s",
        "fullName": "Kyle Smith"
      },
      "addedAt": 162521765262,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },
        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    }
  ]
}

const station5 = {
  "_id": "5cksxjas89xjsa8xjsa8jxs459",
  "name": "French Classic Hits",
  "coverUrl": "https://i.scdn.co/image/ab67706c0000bebb740a579d239ead3b5b60356d",
  "tags": [
    "French",
    "Hits"
  ],
  "createdAt": 1415119918991,
  "createdBy": {
    "_id": "6283d13fb9a7e752c1c0fdcb",
    "username": "kyle_s",
    "fullName": "Kyle Smith"
  },
  "likedByUsers": [
    {
      "_id": "628a6e62b1f6f147074b1ff5",
      "username": "leila.P",
      "fullName": "Leila Parks"
    },

    {
      "_id": "628a71b2b1f6f147074b1ff6",
      "username": "summerz",
      "fullName": "Sam Marks"
    }
  ],
  "songs": [
    {
      "id": "Zt7y8y1Axcs",
      "title": "Edith Piaf - La vie en rose",
      "url": "https://www.youtube.com/watch?v=Zt7y8y1Axcs",
      "imgUrl": "https://i.ytimg.com/vi/r3Ge6kOEUtI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA68kovT2nZYzUWEI8nYr_MFMF8aQ",
      "addedBy": {
        "_id": "628a71b2b1f6f147074b1ff6",
        "username": "summerz",
        "fullName": "Sam Marks"
      },
      "addedAt": 1415119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },

        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    },

    {
      "id": "2u8ezUvd5o4",
      "title": "Charles Trenet - Douce France",
      "url": "https://www.youtube.com/watch?v=2u8ezUvd5o4",
      "imgUrl": "	https://i.ytimg.com/vi/2u8ezUvd5o4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzIpVuDtabT7NmQNSK5X1fDnh95g",
      "addedBy": {
        "_id": "6283d13fb9a7e752c1c0fdcb",
        "username": "kyle_s",
        "fullName": "Kyle Smith"
      },
      "addedAt": 162521765262,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },
        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    }
  ]
}

const station6 = {
  "_id": "5cksxjas89xjsa8xjsa8jxs7009",
  "name": "Best Of Drake",
  "coverUrl": "https://i.scdn.co/image/ab67616d00001e02adfb5909ec66db5fbb4d06c8",
  "tags": [
    "Drake",
    "Hip Hop"
  ],
  "createdAt": 1416119918991,
  "createdBy": {
    "_id": "6283d13fb9a7e752c1c0fdcb",
    "username": "kyle_s",
    "fullName": "Kyle Smith"
  },
  "likedByUsers": [
    {
      "_id": "628a6e62b1f6f147074b1ff5",
      "username": "leila.P",
      "fullName": "Leila Parks"
    },

    {
      "_id": "628a71b2b1f6f147074b1ff6",
      "username": "summerz",
      "fullName": "Sam Marks"
    }
  ],
  "songs": [
    {
      "id": "b8M6N0FTpNc",
      "title": "Drake - Girls want girls (ft Lil Baby)",
      "url": "https://www.youtube.com/watch?v=b8M6N0FTpNc&list=PL-FVH5VWgRPE_91MmVotuEmBWYED6Gph6&index=3",
      "imgUrl": "https://i.ytimg.com/vi/b8M6N0FTpNc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA68kovT2nZYzUWEI8nYr_MFMF8aQ",
      "addedBy": {
        "_id": "628a71b2b1f6f147074b1ff6",
        "username": "summerz",
        "fullName": "Sam Marks"
      },
      "addedAt": 1516119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },

        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    },

    {
      "id": "zbWpjizpJfI",
      "title": "Drake - Laugh Now Cry Later",
      "url": "https://www.youtube.com/watch?v=zbWpjizpJfI",
      "imgUrl": "	https://i.ytimg.com/vi/zbWpjizpJfI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzIpVuDtabT7NmQNSK5X1fDnh95g",
      "addedBy": {
        "_id": "6283d13fb9a7e752c1c0fdcb",
        "username": "kyle_s",
        "fullName": "Kyle Smith"
      },
      "addedAt": 1516119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },
        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    }
  ]
}


const station7 = {
  "_id": "5cksxjas89xjsa8xjsa8jxs23009",
  "name": "Good Old Rock Days",
  "coverUrl": "https://i.scdn.co/image/ab67616d00001e02c86998f987b7ba2a1c4e50f0",
  "tags": [
    "Rock",
    "Throwback"
  ],
  "createdAt": 1516119918991,
  "createdBy": {
    "_id": "6283d13fb9a7e752c1c0fdcb",
    "username": "kyle_s",
    "fullName": "Kyle Smith"
  },
  "likedByUsers": [
    {
      "_id": "628a6e62b1f6f147074b1ff5",
      "username": "leila.P",
      "fullName": "Leila Parks"
    },

    {
      "_id": "628a71b2b1f6f147074b1ff6",
      "username": "summerz",
      "fullName": "Sam Marks"
    }
  ],
  "songs": [
    {
      "id": "abA0UlsphpM",
      "title": "Guns N' Roses - Sweet child O' mine ",
      "url": "https://www.youtube.com/watch?v=abA0UlsphpM",
      "imgUrl": "https://i.ytimg.com/vi/abA0UlsphpM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA68kovT2nZYzUWEI8nYr_MFMF8aQ",
      "addedBy": {
        "_id": "628a71b2b1f6f147074b1ff6",
        "username": "summerz",
        "fullName": "Sam Marks"
      },
      "addedAt": 1536119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },

        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    },

    {
      "id": "SgLy-6yj1Ws",
      "title": "AC/DC - Highway to hell",
      "url": "https://www.youtube.com/watch?v=SgLy-6yj1Ws",
      "imgUrl": "	https://i.ytimg.com/vi/ksqTQ33ohWM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzIpVuDtabT7NmQNSK5X1fDnh95g",
      "addedBy": {
        "_id": "6283d13fb9a7e752c1c0fdcb",
        "username": "kyle_s",
        "fullName": "Kyle Smith"
      },
      "addedAt": 1546119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },
        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    }
  ]
}


const station8 = {
  "_id": "5cksxjas89xjsa8xjsb8jxwe7009",
  "name": "Love Songs 💜",
  "coverUrl": "https://i.scdn.co/image/ab67706c0000bebb078583c4cca4f9c7b6d75941",
  "tags": [
    "Love",
    "Relax"
  ],
  "createdAt": 1216119918991,
  "createdBy": {
    "_id": "6283d13fb9a7e752c1c0fdcb",
    "username": "kyle_s",
    "fullName": "Kyle Smith"
  },
  "likedByUsers": [
    {
      "_id": "628a6e62b1f6f147074b1ff5",
      "username": "leila.P",
      "fullName": "Leila Parks"
    },

    {
      "_id": "628a71b2b1f6f147074b1ff6",
      "username": "summerz",
      "fullName": "Sam Marks"
    }
  ],
  "songs": [
    {
      "id": "nLQFBq9ykjI",
      "title": "Sam Smith - Stay with me ",
      "url": "https://www.youtube.com/watch?v=nLQFBq9ykjI",
      "imgUrl": "https://i.ytimg.com/vi/nLQFBq9ykjI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA68kovT2nZYzUWEI8nYr_MFMF8aQ",
      "addedBy": {
        "_id": "628a71b2b1f6f147074b1ff6",
        "username": "summerz",
        "fullName": "Sam Marks"
      },
      "addedAt": 1556119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },

        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    },

    {
      "id": "lQMHoAs6PdY",
      "title": "Adele - Easy on me",
      "url": "https://www.youtube.com/watch?v=lQMHoAs6PdY",
      "imgUrl": "	https://i.ytimg.com/vi/lQMHoAs6PdY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzIpVuDtabT7NmQNSK5X1fDnh95g",
      "addedBy": {
        "_id": "6283d13fb9a7e752c1c0fdcb",
        "username": "kyle_s",
        "fullName": "Kyle Smith"
      },
      "addedAt": 1566119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },
        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    }
  ]
}



const station9 = {
  "_id": "5cksxjas8xjsa8xjsa8xfxs7009",
  "name": "DeepHouse x Chill ",
  "coverUrl": "https://i.scdn.co/image/ab67706c0000bebb3f32c24a06b455c86f2c447e",
  "tags": [
    "Chill",
    "Summer"
  ],
  "createdAt": 1566119918991,
  "createdBy": {
    "_id": "6283d13fb9a7e752c1c0fdcb",
    "username": "kyle_s",
    "fullName": "Kyle Smith"
  },
  "likedByUsers": [
    {
      "_id": "628a6e62b1f6f147074b1ff5",
      "username": "leila.P",
      "fullName": "Leila Parks"
    },

    {
      "_id": "628a71b2b1f6f147074b1ff6",
      "username": "summerz",
      "fullName": "Sam Marks"
    }
  ],
  "songs": [
    {
      "id": "MDt1Ed_Qwlo",
      "title": "Tez Cadey - Seve",
      "url": "https://www.youtube.com/watch?v=MDt1Ed_Qwlo",
      "imgUrl": "https://i.ytimg.com/vi/wGP3jsvlAyI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA68kovT2nZYzUWEI8nYr_MFMF8aQ",
      "addedBy": {
        "_id": "628a71b2b1f6f147074b1ff6",
        "username": "summerz",
        "fullName": "Sam Marks"
      },
      "addedAt": 1567119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },

        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    },

    {
      "id": "BgfcToAjfdc",
      "title": "Kygo - Stole the show",
      "url": "https://www.youtube.com/watch?v=BgfcToAjfdc",
      "imgUrl": "	https://i.ytimg.com/vi/VQ1a4SuXIiw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzIpVuDtabT7NmQNSK5X1fDnh95g",
      "addedBy": {
        "_id": "6283d13fb9a7e752c1c0fdcb",
        "username": "kyle_s",
        "fullName": "Kyle Smith"
      },
      "addedAt": 1568119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },
        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    }
  ]
}



const station10 = {
  "_id": "5cksxjas89xjsa8xjsa8jxs7009",
  "name": "Coding Focus",
  "coverUrl": "https://i.scdn.co/image/ab67706c0000bebbc2b080eb3eef0417b61950ed",
  "tags": [
    "Focus",
    "Studying"
  ],
  "createdAt": 1578119918991,
  "createdBy": {
    "_id": "6283d13fb9a7e752c1c0fdcb",
    "username": "kyle_s",
    "fullName": "Kyle Smith"
  },
  "likedByUsers": [
    {
      "_id": "628a6e62b1f6f147074b1ff5",
      "username": "leila.P",
      "fullName": "Leila Parks"
    },

    {
      "_id": "628a71b2b1f6f147074b1ff6",
      "username": "summerz",
      "fullName": "Sam Marks"
    }
  ],
  "songs": [
    {
      "id": "xyY4IZ3JDFE",
      "title": "Ludovico Einaudi - Nuvole Bianche",
      "url": "https://www.youtube.com/watch?v=xyY4IZ3JDFE",
      "imgUrl": "https://i.ytimg.com/vi/hN_q-_nGv4U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA68kovT2nZYzUWEI8nYr_MFMF8aQ",
      "addedBy": {
        "_id": "628a71b2b1f6f147074b1ff6",
        "username": "summerz",
        "fullName": "Sam Marks"
      },
      "addedAt": 1578119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },

        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    },

    {
      "id": "zwJQE0HkYZw",
      "title": "Yiruma - Rivers flow in you",
      "url": "https://www.youtube.com/watch?v=zwJQE0HkYZw",
      "imgUrl": "	https://i.ytimg.com/vi/zwJQE0HkYZw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzIpVuDtabT7NmQNSK5X1fDnh95g",
      "addedBy": {
        "_id": "6283d13fb9a7e752c1c0fdcb",
        "username": "kyle_s",
        "fullName": "Kyle Smith"
      },
      "addedAt": 1588119918991,
      "likedByUsers": [
        {
          "_id": "628a6e62b1f6f147074b1ff5",
          "username": "leila.P",
          "fullName": "Leila Parks"
        },
        {
          "_id": "628a71b2b1f6f147074b1ff6",
          "username": "summerz",
          "fullName": "Sam Marks"
        }
      ],
    }
  ]
}











// USERS


const user = {
  "_id": "628a6e62b1f6f147074b1ff5",
  "username": "leila.P",
  "password": "avocados4life",
  "fullName": "Leila Parks",
  "avatar": "https://thumbs.dreamstime.com/z/illustration-cute-gentlemen-avocado-gentleman-vector-84825371.jpg",
  "likedSongs": [{
    "id": "VDvr08sCPOc",
    "title": "Remember the name",
    "url": "https://www.youtube.com/watch?v=VDvr08sCPOc",
    "imgUrl": "	https://i.ytimg.com/vi/VDvr08sCPOc/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzIpVuDtabT7NmQNSK5X1fDnh95g"
  }
  ],
  "likedStations": [{
    "_id": "5cksxjas89xjsa8xjsa8jxs09",
    "name": "Best workout mix"
  }]
}




const activities = {
  "activities": [
    {
      id: 'a101',
      doneBy: {
        "_id": "6283d13fb9a7e752c1c0fdcb",
        "username": "kyle_s",
        "fullName": "Kyle Smith"
      },
      action: 'addSong',
      doneAt: 17258891775
    }
  ]
}




export const genres = [
  {
      name: 'Cities',
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdmbcD7QrUPYG7W-7wFDxOxBXDhWGKSb4Hg&usqp=CAU",
      color: "#80433b"
  },
  {
      name: 'All',
      imgUrl: "https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg",
      color: "#ffc864"
  },
  {
      name: 'Hits',
      imgUrl: 'https://i.ytimg.com/vi/kffacxfA7G4/mqdefault.jpg',
      color: "#779dc3",
  },
  {
      name: 'Happy',
      imgUrl: "https://i.ytimg.com/vi/XaCrQL_8eMY/mqdefault.jpg",
      color: "#e8115b"
  },
  {
      name: 'Pop',
      imgUrl: "https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952",
      color: "#1e3264"
  },
  {
      name: 'Hip Hop',
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdmbcD7QrUPYG7W-7wFDxOxBXDhWGKSb4Hg&usqp=CAU",
      color: "#80433b"
  },
  {
      name: 'Emotions',
      imgUrl: "https://more-music-videos.icu/images/bruno-mars-when-i-was-your-man_jcx9pyjy/29.jpg",
      color: "#e13300"
  },
  {
      name: 'Rock',
      imgUrl: "data:image/jpeg;base64,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",
      color: "#1bd57f"
  },
  {
      name: 'Chill',
      imgUrl: "data:image/jpeg;base64,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",
      color: "#eec1c9"
  },
  {
      name: 'Party',
      imgUrl: "data:image/jpeg;base64,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",
      color: "#046fbc"
  },
  {
      name: 'Metal',
      imgUrl: "data:image/jpeg;base64,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",
      color: "#b4b4b4"
  },
  {
      name: 'Jazz',
      imgUrl: "data:image/jpeg;base64,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",
      color: "#ffc864",
  },
  {
      name: 'Folk',
      imgUrl: "data:image/jpeg;base64,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",
      color: "#96eadc"
  },
  {
      name: 'Alternative',
      imgUrl: "data:image/jpeg;base64,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",
      color: "#8d67ab"
  },
  {
      name: 'Latin',
      imgUrl: 'data:image/jpeg;base64,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',
      color: "#e8115b",
  },
  {
      name: 'Electronic',
      imgUrl: "data:image/jpeg;base64,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",
      color: "#B4F8C8"
  },
  {
      name: 'Soul',
      imgUrl: 'data:image/png;base64,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',
      color: "#80433b",
  },
  {
      name: 'Classical',
      imgUrl: "data:image/jpeg;base64,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",
      color: "#8d67ab",
  },
  {
      name: 'Raggae',
      imgUrl: "data:image/jpeg;base64,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",
      color: "#1bd57f",
  },
]