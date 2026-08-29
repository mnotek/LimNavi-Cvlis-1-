var APP_DATA = {
  "scenes": [
      {
      "id": "1-main",
      "name": "MAIN GATE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": -0.212,
        "yaw": 0.076,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [{
          "yaw": 0.027,
          "pitch":  0.2,
          "rotation": 0,
          "target": "0-gate-2"
        }],
      "infoHotspots": []
    },
    {
      "id": "2-room-2",
      "name": "ICT ROOM (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
           {
           "yaw": -0.886  ,
          "pitch": 0.009,
          "rotation": 0,
          "target": "3-2nd-hallway"
          }
          ],
      "infoHotspots": []
    },
    {
      "id": "3-2nd-hallway",
      "name": "2nd Floor Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0.081,
        "yaw": 1.633,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
          {
           "yaw": -1.592  ,
          "pitch": 0.500,
          "rotation": 0,
          "target": "4-steel-2"
          },
          {
           "yaw":  1.621 ,
          "pitch": 0.178,
          "rotation": 0,
          "target": "13-hall-2nd"
          },
          {
           "yaw":  0.605 ,
          "pitch": 0.000,
          "rotation": 0,
          "target": "2-room-2"
          }
          ],
      "infoHotspots": []
    },
    {
      "id": "4-steel-2",
      "name": "STEEL STAIR (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": -0.109,
        "yaw": -0.183 ,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
          {
           "yaw": 0.126 ,
          "pitch":  0.490,
          "rotation": 0,
          "target": "5-steel-1"
          },
          {
           "yaw":  -0.183 ,
          "pitch":   -0.109,
          "rotation": 0,
          "target": "8-steel-2nd"
          },
           {
           "yaw":  1.611,
          "pitch":  0.400,
          "rotation": 0,
          "target": "3-2nd-hallway"
          }
          
          ],
      "infoHotspots": []
    },
    {
      "id": "5-steel-1",
      "name": "STEEL STAIR (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
          {
           "yaw": 0.110,
          "pitch": 0.70,
          "rotation": 0,
          "target": "18-ict"
          },
          {
           "yaw": -0.203,
          "pitch": -0.083,
          "rotation": 0,
          "target": "4-steel-2"
          }
          ],
      "infoHotspots": []
    },
    {
      "id": "0-gate",
      "name": "NEAR EIM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": -0.029,
        "yaw": 1.557,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5256526296552968,
          "pitch": 0.1990006586188624,
          "rotation": 0,
          "target": "1-eim"
        },
        {
          "yaw": 0.03358245582361974,
          "pitch": 0.17297701835256163,
          "rotation": 0,
          "target": "18-ict"
        },
        {
          "yaw": -1.5994270616067965,
          "pitch": 0.15068116186025549,
          "rotation": 0,
          "target": "0-gate-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-eim",
      "name": "EIM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0.078,
        "yaw": 2.400,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7907001954059751,
          "pitch": 0.21879421227566986,
          "rotation": 0,
          "target": "0-gate"
        },
        {
          "yaw": 2.340309088533398,
          "pitch": 0.2382237362602968,
          "rotation": 0,
          "target": "2-near-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-near-parking",
      "name": "NEAR PARKING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1124653315015838,
          "pitch": 0.2984978651260324,
          "rotation": 19.63495408493622,
          "target": "1-eim"
        },
        {
          "yaw": -0.20928060007121374,
          "pitch": 0.25117251694256026,
          "rotation": 0,
          "target": "3-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-parking",
      "name": "PARKING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0.048,
        "yaw": -2.608,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08316422469227902,
          "pitch": 0.28089355406983607,
          "rotation": 0,
          "target": "2-near-parking"
        },
        {
          "yaw": -2.639975094439418,
          "pitch": 0.2199762770809457,
          "rotation": 0,
          "target": "4-near-acad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-near-acad",
      "name": "NEAR ACAD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.916549098453004,
          "pitch": 0.21355406909582797,
          "rotation": 0,
          "target": "3-parking"
        },
        {
          "yaw": -0.038479672490783656,
          "pitch": 0.1956092501582969,
          "rotation": 0,
          "target": "5-acad-building"
        },
        {
          "yaw": -0.5321667912766941,
          "pitch": 0.2019495683953938,
          "rotation": 5.497787143782138,
          "target": "17-grade-10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-acad-building",
      "name": "ACAD BUILDING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch":  0.080,
        "yaw": 3.135,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1805159776112717,
          "pitch": 0.21672891934345273,
          "rotation": 0,
          "target": "4-near-acad"
        },
        {
          "yaw": -3.135437687849702,
          "pitch": 0.16629325716514387,
          "rotation": 0,
          "target": "6-near-registrar"
        },
        {
          "yaw": 0.6800677898751459,
          "pitch": 0.4086787025484586,
          "rotation": 0.7853981633974483,
          "target": "17-grade-10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-near-registrar",
      "name": "NEAR REGISTRAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9797230368982355,
          "pitch": 0.16015187965921562,
          "rotation": 0,
          "target": "5-acad-building"
        },
        {
          "yaw": 0.07903500012709941,
          "pitch": 0.24553127135338748,
          "rotation": 4.71238898038469,
          "target": "7-registrar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-registrar",
      "name": "REGISTRAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.070987208046807,
          "pitch": 0.15445503384481185,
          "rotation": 1.5707963267948966,
          "target": "6-near-registrar"
        },
         {
          "yaw":  2.496 ,
          "pitch": 0.075,
          "rotation": 1.5707963267948966,
          "target": "5-off-4"
        },
          {
             "yaw": 0.572,
          "pitch":  0.100,
          "rotation": 1.5707963267948966,
          "target": "7-guid-1"
          
        },
        {
          "yaw": -0.07519815256408613,
          "pitch": 0.2403084077511224,
          "rotation": 0,
          "target": "8-guidance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-guidance",
      "name": "GUIDANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0678094511860365,
          "pitch": 0.2827339214389113,
          "rotation": 0,
          "target": "7-registrar"
        },
        {
          "yaw": -0.059551219421319246,
          "pitch": 0.18138730070408116,
          "rotation": 0,
          "target": "9-stem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-stem",
      "name": "STEM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1253993539963716,
          "pitch": 0.12924480870062105,
          "rotation": 0,
          "target": "8-guidance"
        },
        {
          "yaw": 0.017858180639029442,
          "pitch": 0.18988606907766403,
          "rotation": 0,
          "target": "10-science-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-science-lab",
      "name": "SCIENCE LAB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.087555696614416,
          "pitch": 0.16908591731907663,
          "rotation": 0,
          "target": "9-stem"
        },
         {
          "yaw": 1.219,
          "pitch":-0.008,
          "rotation": 0,
          "target": "1-sci-out"
        },
        {
          "yaw": 0.01032995382217905,
          "pitch": 0.19380235143210456,
          "rotation": 0,
          "target": "11-near-sci-lab"
        },
      ],
      "infoHotspots": []
    },
    {
      "id": "11-near-sci-lab",
      "name": "NEAR SCI LAB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch":0.182,
        "yaw":3.045 ,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.051605777730079794,
          "pitch": 0.11639272497132325,
          "rotation": 0,
          "target": "10-science-lab"
        },
        {
          "yaw": 3.0240483762469186,
          "pitch": 0.2568649656120101,
          "rotation": 4.71238898038469,
          "target": "12-grade-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-grade-9",
      "name": "GRADE 9 (NEAR G-7)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0.098,
        "yaw": -2.974 ,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06190291497557254,
          "pitch": 0.2683181265232939,
          "rotation": 0,
          "target": "11-near-sci-lab"
        },
        {
          "yaw": -2.963566892234587,
          "pitch": 0.23681653314857698,
          "rotation": 0,
          "target": "13-grade-8"
        },
        {
          "yaw": 1.6455965729400805,
          "pitch": 0.31241634930286466,
          "rotation": 0,
          "target": "40-grade-9-hallway-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-grade-8",
      "name": "GRADE 8 (NEAR INTRAMUROS)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": -0.012,
        "yaw": -3.078,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.017215607310408387,
          "pitch": 0.23974690166165757,
          "rotation": 0,
          "target": "12-grade-9"
        },
        {
          "yaw": 1.3945955653866804,
          "pitch": 0.1706860973382689,
          "rotation": 5.497787143782138,
          "target": "14-near-intra"
        },
        {
          "yaw": 1.5288389814151806,
          "pitch": 0.29394343045591853,
          "rotation": 0,
          "target": "24-grade-8-first-floor"
        },
        {
          "yaw": -3.0789245184647687,
          "pitch": 0.20048772572717155,
          "rotation": 0,
          "target": "25-garden-entrance-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-near-intra",
      "name": "NEAR INTRAMUROS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7388140416840585,
          "pitch": 0.311858885614253,
          "rotation": 0.7853981633974483,
          "target": "13-grade-8"
        },
        {
          "yaw": 0.03142476878487699,
          "pitch": 0.3461031061984592,
          "rotation": 5.497787143782138,
          "target": "15-intramuros"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-intramuros",
      "name": "INTRAMUROS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8235286660254353,
          "pitch": 0.1897039263171738,
          "rotation": 0,
          "target": "14-near-intra"
        },
        {
          "yaw": 0.03098111485411792,
          "pitch": 0.177098349960362,
          "rotation": 0.7853981633974483,
          "target": "16-grade-10"
        },
        {
          "yaw": 1.7573753067062476,
          "pitch": 0.29542078635427416,
          "rotation": 0.7853981633974483,
          "target": "26-grade-8-first-floor-near-steel-stairs"
        },
        {
          "yaw": -1.9871456936436722,
          "pitch": 0.24491512101582025,
          "rotation": 4.71238898038469,
          "target": "39-grade-9-hallway-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-grade-10",
      "name": "GRADE 10 (NEAR INTRAMUROS)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.40225484889741736,
          "pitch": 0.3871891152745093,
          "rotation": 0,
          "target": "15-intramuros"
        },
        {
          "yaw": -3.12049030364566,
          "pitch": 0.330445875864255,
          "rotation": 0,
          "target": "17-grade-10"
        },
        {
          "yaw": 1.443604235136565,
          "pitch": 0.6386897470157962,
          "rotation": 0,
          "target": "38-grade-9-hallway-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-grade-10",
      "name": "GRADE 10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5918456643668808,
          "pitch": 0.20033648271966698,
          "rotation": 0,
          "target": "16-grade-10"
        },
        {
          "yaw": 1.6990038303643207,
          "pitch": 0.11240438706013833,
          "rotation": 0.7853981633974483,
          "target": "4-near-acad"
        },
        {
          "yaw": -0.053,
          "pitch": 0.036,
          "rotation": 0.7853981633974483,
          "target": "14-g9-10"
        },
        {
          "yaw": 1.5534683231445925,
          "pitch": 0.1665038632515028,
          "rotation": 11.780972450961727,
          "target": "5-acad-building"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-ict",
      "name": "FRONT OF ICT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": -0.019,
        "yaw": 1.468,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6435232803457005,
          "pitch": 0.19026780376853303,
          "rotation": 0,
          "target": "0-gate"
        },
        {
          "yaw": -1.054,
          "pitch": 0.20,
          "rotation": 0,
          "target": "5-steel-1"
        },
        
        {
          "yaw": 1.4694087646483416,
          "pitch": 0.22442713299240147,
          "rotation": 0,
          "target": "19-near-court"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-near-court",
      "name": "NEAR COURT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": -0.108,
        "yaw": 3.048,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.004626991269111258,
          "pitch": 0.2258913640463991,
          "rotation": 0,
          "target": "18-ict"
        },
        {
          "yaw": 3.0927049457666698,
          "pitch": 0.2184537384537748,
          "rotation": 0,
          "target": "20-front-of-old-stage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-front-of-old-stage",
      "name": "Front of old stage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": -0.091,
        "yaw": -3.136,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.013772878647230868,
          "pitch": 0.19710787927039064,
          "rotation": 0,
          "target": "19-near-court"
        },
        {
          "yaw": -3.1100987022966216,
          "pitch": 0.2119236690503179,
          "rotation": 0,
          "target": "21-canteen-entrance-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-canteen-entrance-",
      "name": "CANTEEN ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch":  -0.153,
        "yaw": -3.047,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04473492167956472,
          "pitch": 0.14685503825828583,
          "rotation": 0,
          "target": "20-front-of-old-stage"
        },
         {
          "yaw":-2.975,
          "pitch": 0.140,
          "rotation": 0,
          "target": "1-g7can"
        },
        {
          "yaw": 1.962454137320539,
          "pitch": 0.34356458097941456,
          "rotation": 0,
          "target": "22-canteen-inside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-canteen-inside",
      "name": "CANTEEN INSIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2877891276914042,
          "pitch": 0.31651374836062907,
          "rotation": 5.497787143782138,
          "target": "21-canteen-entrance-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-grade-8-first-floor",
      "name": "Grade 8 first floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.506086800579805,
          "pitch": 0.19940509585604005,
          "rotation": 0,
          "target": "13-grade-8"
        },
        {
          "yaw": 1.4938856697652998,
          "pitch": 0.2161194831008615,
          "rotation": 0,
          "target": "26-grade-8-first-floor-near-steel-stairs"
        },
        {
          "yaw": 0.9497258631697285,
          "pitch": 0.2798673064173194,
          "rotation": 0,
          "target": "15-intramuros"
        },
        {
          "yaw": -1.6603592226981512,
          "pitch": 0.22161788206703292,
          "rotation": 5.497787143782138,
          "target": "31-grade-8-second-floor-stone-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-garden-entrance-",
      "name": "Garden entrance ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": -0.013,
        "yaw": 1.675 ,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7250597609685165,
          "pitch": 0.25427612938750066,
          "rotation": 0,
          "target": "13-grade-8"
        },
        {
          "yaw": 1.5783823032282385,
          "pitch": 0.2622492211010261,
          "rotation": 0,
          "target": "41-near-stage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-grade-8-first-floor-near-steel-stairs",
      "name": "Grade 8 first floor near steel stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1061637286000607,
          "pitch": 0.30273875955362683,
          "rotation": 0,
          "target": "24-grade-8-first-floor"
        },
        {
          "yaw": -0.20459452547311585,
          "pitch": 0.42041748717715066,
          "rotation": 10.995574287564278,
          "target": "15-intramuros"
        },
        {
          "yaw": 0.27838431185991297,
          "pitch": 0.3286525744286486,
          "rotation": 0.7853981633974483,
          "target": "27-grade-8-second-floor-steel-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-grade-8-second-floor-steel-stairs",
      "name": "Grade 8 second floor steel stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05099886581025537,
          "pitch": -0.04377576903112157,
          "rotation": 0,
          "target": "30-grade-8-second-floor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-grade-8-second-floor-1",
      "name": "Grade 8 second floor (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6083716049713352,
          "pitch": 0.20098033249607994,
          "rotation": 0,
          "target": "29-grade-8-second-floor"
        },
        {
          "yaw": -0.6094920227926472,
          "pitch": 0.4506791188021051,
          "rotation": 0.7853981633974483,
          "target": "31-grade-8-second-floor-stone-stairs"
        },
        {
          "yaw": 0.41773071685602403,
          "pitch": -0.02536639874919544,
          "rotation": 5.497787143782138,
          "target": "32-grade-8-third-floor-stone-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-grade-8-second-floor",
      "name": "Grade 8 second floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4970102814131359,
          "pitch": 0.21546272338211914,
          "rotation": 0,
          "target": "30-grade-8-second-floor-2"
        },
        {
          "yaw": -1.557587174445274,
          "pitch": 0.2776348219170863,
          "rotation": 0,
          "target": "28-grade-8-second-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-grade-8-second-floor-2",
      "name": "Grade 8 second floor (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0065033041159124,
          "pitch": 0.7424480472409964,
          "rotation": 5.497787143782138,
          "target": "27-grade-8-second-floor-steel-stairs"
        },
        {
          "yaw": -3.1413209342557824,
          "pitch": 0.28103018953991743,
          "rotation": 0,
          "target": "29-grade-8-second-floor"
        },
        {
          "yaw": 1.462224059227779,
          "pitch": -0.09161497427620269,
          "rotation": 0,
          "target": "36-grade-8-third-floor-steel-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-grade-8-second-floor-stone-stairs",
      "name": "Grade 8 second floor stone stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8637728647999428,
          "pitch": 0.6351179767682673,
          "rotation": 0.7853981633974483,
          "target": "24-grade-8-first-floor"
        },
        {
          "yaw": 0.4034886938589288,
          "pitch": 0.26556249718328573,
          "rotation": 5.497787143782138,
          "target": "28-grade-8-second-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-grade-8-third-floor-stone-stairs",
      "name": "Grade 8 third floor stone stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8565110067617727,
          "pitch": 0.6283180184489865,
          "rotation": 0.7853981633974483,
          "target": "31-grade-8-second-floor-stone-stairs"
        },
        {
          "yaw": 0.08934153006473977,
          "pitch": 0.2548702960138449,
          "rotation": 0,
          "target": "33-grade-8-third-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-grade-8-third-floor",
      "name": "Grade 8 third floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.010824657292877404,
          "pitch": 0.3615460540322015,
          "rotation": 0,
          "target": "34-grade-8-third-floor-2"
        },
        {
          "yaw": 0.9771328531149202,
          "pitch": 0.48788262505350843,
          "rotation": 0.7853981633974483,
          "target": "31-grade-8-second-floor-stone-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-grade-8-third-floor-2",
      "name": "Grade 8 third floor (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.118602959785761,
          "pitch": 0.3011008523074761,
          "rotation": 0,
          "target": "33-grade-8-third-floor"
        },
        {
          "yaw": 0.033860397336848536,
          "pitch": 0.32520043620355565,
          "rotation": 0,
          "target": "35-grade-8-third-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-grade-8-third-floor-1",
      "name": "Grade 8 third floor (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7152000357932984,
          "pitch": 0.38244070264643426,
          "rotation": 0,
          "target": "34-grade-8-third-floor-2"
        },
        {
          "yaw": -0.003224601769026947,
          "pitch": 0.9371816598864449,
          "rotation": 0,
          "target": "36-grade-8-third-floor-steel-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-grade-8-third-floor-steel-stairs",
      "name": "Grade 8 Third floor steel stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.044806658055982496,
          "pitch": 0.9553054874404392,
          "rotation": 0,
          "target": "30-grade-8-second-floor-2"
        },
        {
          "yaw": -0.5450915816589479,
          "pitch": 0.19567272520771972,
          "rotation": 0.7853981633974483,
          "target": "35-grade-8-third-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-grade-9-hallway",
      "name": "Grade 9 hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.023334611610366096,
          "pitch": 0.2774838021633155,
          "rotation": 7.853981633974483,
          "target": "38-grade-9-hallway-1"
        },
         {
          "yaw":-0.021,
          "pitch":-0.119,
          "rotation": 7.853981633974483,
          "target": "14-g9-10"
        },
        {
          "yaw": 3.127103662745106,
          "pitch": 0.4298484489271619,
          "rotation": 0,
          "target": "39-grade-9-hallway-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-grade-9-hallway-1",
      "name": "Grade 9 hallway (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4914985145625757,
          "pitch": 0.40081206686571313,
          "rotation": 4.71238898038469,
          "target": "16-grade-10"
        },
        {
          "yaw": 1.5715153592314417,
          "pitch": 0.20427722479552202,
          "rotation": 4.71238898038469,
          "target": "37-grade-9-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-grade-9-hallway-2",
      "name": "Grade 9 hallway (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03517640151727264,
          "pitch": 0.27670032486379625,
          "rotation": 0,
          "target": "37-grade-9-hallway"
        },
        {
          "yaw": 2.9358017453573657,
          "pitch": 0.33876758776079896,
          "rotation": 0,
          "target": "40-grade-9-hallway-"
        },
        {
          "yaw": 0.5243977339910657,
          "pitch": 0.45349414187887227,
          "rotation": 1.5707963267948966,
          "target": "15-intramuros"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-grade-9-hallway-",
      "name": "Grade 9 hallway ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0175597553718525,
          "pitch": 0.27397596502468957,
          "rotation": 0,
          "target": "39-grade-9-hallway-2"
        },
        {
          "yaw": 0.03785976212359188,
          "pitch": 0.2654231369244755,
          "rotation": 0,
          "target": "12-grade-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-near-stage",
      "name": "Near stage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0.023,
        "yaw":  -1.298,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2434116492076974,
          "pitch": 0.1692686037233937,
          "rotation": 5.497787143782138,
          "target": "25-garden-entrance-"
        },
        {
          "yaw": 1.790,
          "pitch": 0.073,
          "rotation": 5.497787143782138,
          "target": "0-g7b--court"
        }
      ],
      "infoHotspots": []
    },
  {
      "id": "0-gate-2",
      "name": "FRONT OF GATE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": -0.097,
        "yaw": 3.125 ,
        "fov": 1.5707963267948966
      },
       "linkHotspots": [
        {
        "yaw": -3.135437687849702,
          "pitch": 0.16629325716514387,
          "rotation": 0,
          "target": "0-gate"
        },
        {
        "yaw": -0.058,
          "pitch":  0.40,
          "rotation": 0,
          "target": "1-main"
        }
        ],
      "infoHotspots": []
    },
     {
      "id": "0-scie-ins",
      "name": "SCIENCE LABORATORY (INSIDE)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6616102279025426,
          "pitch": 0.3399050862558397,
          "rotation": 0,
          "target": "1-sci-out"
        },
         
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sci-out",
      "name": "SCIENCE LABORATORY (OUTSIDE)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5141267037741013,
          "pitch": 0.11629238619456927,
          "rotation": 0,
          "target": "0-scie-ins"
        },
        {
          "yaw":  0.966 ,
          "pitch":0.102,
          "rotation": 0,
          "target": "10-science-lab"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-off-1",
      "name": "OFFICE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.016491874776292548,
          "pitch": 0.3110584974185713,
          "rotation": 0,
          "target": "3-off-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-off-2",
      "name": "OFFICE (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.129379383364176,
          "pitch": 0.298768430247792,
          "rotation": 0,
          "target": "2-off-1"
        },
        {
          "yaw": 0.025792505763899243,
          "pitch": 0.42229228591122236,
          "rotation": 0,
          "target": "5-off-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-off3",
      "name": "OFFICE (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05954377662171595,
          "pitch": 0.3497666023948298,
          "rotation": 0,
          "target": "5-off-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-off-4",
      "name": "OFFICE (3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4281353929382696,
          "pitch": 0.3005823520862698,
          "rotation": 0,
          "target": "3-off-2"
        },
         {
          "yaw": 2.595,
          "pitch":  0.290,
          "rotation": 0,
          "target": "7-registrar"
        },
        {
          "yaw": 0.012541167776324968,
          "pitch": 0.31573795122337955,
          "rotation": 0,
          "target": "4-off3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-off",
      "name": "OFFICE (4)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.009373574066547263,
          "pitch": 0.4013666011030139,
          "rotation": 0,
          "target": "7-guid-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-guid-1",
      "name": "FRONT OF GUIDANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-1.761,
          "pitch": 0.200,
          "rotation": 0,
          "target": "7-registrar"
          
        },
        {
        "yaw": 0.723,
          "pitch": 0.200,
          "rotation": 0,
          "target": "6-off"
    }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-g9",
      "name": "GRADE 9 (2ND FLOOR)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0651310337960922,
          "pitch": 0.3071831723746783,
          "rotation": 0,
          "target": "9-g9-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-g9-1",
      "name": "GRADE 9 (2ND FLOOR 1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.992245690150545,
          "pitch": 0.38841208607147415,
          "rotation": 0,
          "target": "10-g9-2"
        },
        {
          "yaw": 0.004652969296753184,
          "pitch": 0.450605410863961,
          "rotation": 0,
          "target": "8-g9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-g9-2",
      "name": "GRADE 9 (2ND FLOOR 2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04473492167956472,
          "pitch": 0.3647539027605564,
          "rotation": 4.71238898038469,
          "target": "11-g9f"
        },
        {
          "yaw": -2.962170459598404,
          "pitch": 0.33207538215636845,
          "rotation": 0,
          "target": "9-g9-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-g9f",
      "name": "GRADE 9 (2ND FLOOR 3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.29756959851384934,
          "pitch": 0.6670230760698317,
          "rotation": 0,
          "target": "12-g9-9"
        },
        {
          "yaw": 1.489114277927949,
          "pitch": 0.4397601038522403,
          "rotation": 0.7853981633974483,
          "target": "10-g9-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-g9-9",
      "name": "GRADE 9 (2ND FLOOR 4)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14109218363172893,
          "pitch": 0.6706591729319307,
          "rotation": 0,
          "target": "15-g9"
        },
        {
          "yaw": -0.3670099724615561,
          "pitch": -0.18470283800845877,
          "rotation": 0,
          "target": "11-g9f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-g9hall",
      "name": "GRADE 9 (2ND FLOOR HALLWAY)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6877541832263505,
          "pitch": 0.3447553557802152,
          "rotation": 6.283185307179586,
          "target": "12-g9-9"
        }
      ],
      "infoHotspots": []
    },
    
    {
      "id": "0-g7b--court",
      "name": "Grade 7 Back of Court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.082570682007601,
          "pitch": 0.2708664537768666,
          "rotation": 0,
          "target": "1-g7can"
        },
         {
          "yaw": 0.042 ,
          "pitch": -0.005,
          "rotation": 0,
          "target": "41-near-stage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-g7can",
      "name": "Grade 7 Near Canteen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0.134,
        "yaw": -1.828,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8730947309996857,
          "pitch": 0.3505580399320305,
          "rotation": 0,
          "target": "0-g7b--court"
        },
         {
          "yaw": -0.024,
          "pitch": 0.140,
          "rotation": 0,
          "target": "21-canteen-entrance-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ict-ground",
      "name": "ICT Ground Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08011081749529048,
          "pitch": -0.17687231630665678,
          "rotation": 0,
          "target": "3-ict-1st"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ict-1st",
      "name": "ICT 1ST FLOOR (STAIR)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.235901035789448,
          "pitch": 0.605125284679918,
          "rotation": 0,
          "target": "2-ict-ground"
        },
        {
          "yaw": 0.10201098041137868,
          "pitch": -0.0624582086420844,
          "rotation": 0,
          "target": "13-hall-2nd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ict-4th",
      "name": "ICT 4TH FLOOR (STAIR)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12434770399715056,
          "pitch": 0.6351480727465777,
          "rotation": 0,
          "target": "11-hall-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-steel-4th-ict",
      "name": "ICT 4TH FLOOR (STEEL STAIR)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6263261168120309,
          "pitch": 0.6051547882227162,
          "rotation": 0,
          "target": "6-steel-4th-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-steel-4th-1",
      "name": "ICT (STEEL STAIR TO 4TH FLOOR )",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12440462926736728,
          "pitch": 0.6125241850940633,
          "rotation": 0,
          "target": "7-steel-3rd-"
        },
        {
          "yaw": -0.19003001433887334,
          "pitch": -0.09628535446094588,
          "rotation": 0,
          "target": "5-steel-4th-ict"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-steel-3rd-",
      "name": "ICT (STEEL STAIR TO 4TH FLOOR 1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0100317800209195,
          "pitch": 0.4810867633236384,
          "rotation": 0.7853981633974483,
          "target": "10-hall-1"
        },
        {
          "yaw": 1.7204224160809884,
          "pitch": 0.4884168954842423,
          "rotation": 4.71238898038469,
          "target": "9-hall-3rd"
        },
        {
          "yaw": 0.1947404440129219,
          "pitch": 0.6130601805232416,
          "rotation": 0,
          "target": "8-steel-2nd"
        },
        {
          "yaw": -0.11839690082651622,
          "pitch": -0.18900323583127587,
          "rotation": 0,
          "target": "6-steel-4th-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-steel-2nd",
      "name": "ICT (STEEL STAIR TO 3RD FLOOR )",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0.315,
        "yaw":  2.996,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.953447342454039,
          "pitch": -0.05127145006799694,
          "rotation": 0,
          "target": "7-steel-3rd-"
        },
        {
          "yaw": -3.042,
          "pitch": 0.500,
          "rotation": 0,
          "target": "4-steel-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hall-3rd",
      "name": "3rd Floor Hallway to Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": -0.021,
        "yaw": -3.109,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8189189948597004,
          "pitch": 0.37030819604088094,
          "rotation": 0,
          "target": "7-steel-3rd-"
        },
        {
          "yaw": -3.016  ,
          "pitch": 0.170,
          "rotation": 0,
          "target": "10-hall-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-hall-1",
      "name": "3rd Floor Hallway to Room 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.090116099567151,
          "pitch": 0.37105469460717266,
          "rotation": 0,
          "target": "11-hall-2"
        },
        {
          "yaw": 0.004124458023566646,
          "pitch": 0.3695540814311489,
          "rotation": 0,
          "target": "9-hall-3rd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-hall-2",
      "name": "3rd Floor Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch":  0.055,
        "yaw":-1.750,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0034435136573645053,
          "pitch": 0.46308441715102155,
          "rotation": 0,
          "target": "12-str-2nd"
        },
       
        {
          "yaw": -1.6950827273694369,
          "pitch": 0.3181355070122063,
          "rotation": 0,
          "target": "10-hall-1"
        },
        {
          "yaw": 0.364289051926157,
          "pitch": -0.21339844522758433,
          "rotation": 0,
          "target": "4-ict-4th"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-str-2nd",
      "name": "2ND Floor Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16120441780096328,
          "pitch": 0.5970440421198333,
          "rotation": 0,
          "target": "13-hall-2nd"
        },
        {
          "yaw": 0.16868064868269883,
          "pitch": -0.13368964556731733,
          "rotation": 0,
          "target": "11-hall-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-hall-2nd",
      "name": "2nd Floor Hallway 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.00959122591399364,
          "pitch": 0.5382397078059711,
          "rotation": 0,
          "target": "3-ict-1st"
        },
         {
          "yaw":-1.530 ,
          "pitch": 0.111,
          "rotation": 0,
          "target": "3-2nd-hallway"
        },
        {
          "yaw": 0.2983523297671553,
          "pitch": -0.1442745922713211,
          "rotation": 0,
          "target": "12-str-2nd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-g9-10",
      "name": "WAY TO GUIDANCE FROM GRADE (9-10)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
           {
          "yaw": 0.012 ,
          "pitch":0.051,
          "rotation": 0,
          "target": "17-grade-10"
        },
          ],
      "infoHotspots": []
    },
    {
      "id": "15-g9",
      "name": "Grade 9 To Intramuros",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
          {
          "yaw":2.921 ,
          "pitch": 0.226,
          "rotation": 0,
          "target": "14-near-intra"
        },
        {
          "yaw":-0.015 ,
          "pitch": 0.063,
          "rotation": 0,
          "target": "13-g9hall"
        },
          ],
      "infoHotspots": []
    },
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
