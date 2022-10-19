import React, {Component} from "react";
import axios from "axios";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [
                {
                    "id": 1029213,
                    "pageURL": "https://pixabay.com/photos/globe-algeria-niger-mali-africa-1029213/",
                    "type": "photo",
                    "tags": "globe, algeria, niger",
                    "previewURL": "https://cdn.pixabay.com/photo/2015/11/06/15/50/globe-1029213_150.jpg",
                    "previewWidth": 150,
                    "previewHeight": 99,
                    "webformatURL": "https://pixabay.com/get/ge7922c67b3d9066bc0662c160217238178dc064168cda403c7479e212b7e575d4a8047b9758cb7c202d5e6adea8a7e58_640.jpg",
                    "webformatWidth": 640,
                    "webformatHeight": 426,
                    "largeImageURL": "https://pixabay.com/get/gdff8eb7c18d5c20434c7363a853d558ce9fd8b33ddea3eef1b4ae42f5002ca39b2e6566571371805d1e19b749967b825f8843b73c4400f1e6f07af06f157ff7b_1280.jpg",
                    "imageWidth": 3072,
                    "imageHeight": 2048,
                    "imageSize": 1284579,
                    "views": 12751,
                    "downloads": 6429,
                    "collections": 174,
                    "likes": 26,
                    "comments": 4,
                    "user_id": 1553824,
                    "user": "Peggy_Marco",
                    "userImageURL": "https://cdn.pixabay.com/user/2020/01/07/15-43-03-893_250x250.jpg"
                },
                {
                    "id": 162353,
                    "pageURL": "https://pixabay.com/vectors/mali-flag-national-flag-nation-162353/",
                    "type": "vector/svg",
                    "tags": "mali, flag, national flag",
                    "previewURL": "https://cdn.pixabay.com/photo/2013/07/13/14/16/mali-162353_150.png",
                    "previewWidth": 150,
                    "previewHeight": 99,
                    "webformatURL": "https://pixabay.com/get/g54b77b46fc1941653af0dbaef2aadad76fb5e8857c4a2289029d51d1ada23e5f91e5f5d88ac5a26d733a20cd3ba00452_640.png",
                    "webformatWidth": 640,
                    "webformatHeight": 426,
                    "largeImageURL": "https://pixabay.com/get/g7455443367b2db6669bea992d859d90a09dc7ba76fcaee918bf4a9ff7160d2eec7adc9a856cd1afc7ddc1824cdc62ead_1280.png",
                    "imageWidth": 1920,
                    "imageHeight": 1280,
                    "imageSize": 12575,
                    "views": 4518,
                    "downloads": 2151,
                    "collections": 154,
                    "likes": 17,
                    "comments": 2,
                    "user_id": 30363,
                    "user": "OpenClipart-Vectors",
                    "userImageURL": "https://cdn.pixabay.com/user/2013/08/21/16-02-05-675_250x250.png"
                },
                {
                    "id": 1758962,
                    "pageURL": "https://pixabay.com/vectors/mali-flag-map-geography-outline-1758962/",
                    "type": "vector/svg",
                    "tags": "mali, flag, map",
                    "previewURL": "https://cdn.pixabay.com/photo/2016/10/21/19/31/mali-1758962_150.png",
                    "previewWidth": 150,
                    "previewHeight": 142,
                    "webformatURL": "https://pixabay.com/get/g1dcbb0890136b598470d7f1a46f239587cbdaa7a92b921f8ed801fa87b501f7f0018ceebd2117aebfd0cfa8f543112cc_640.png",
                    "webformatWidth": 640,
                    "webformatHeight": 606,
                    "largeImageURL": "https://pixabay.com/get/gda9dc098a3094cbe1214ba758bac215446552da6283c7d5315153f9b0c30ec40ef8fa4cc6a27a970ec0c8218dfeb8cce5aed409c54a239f66ec6f5492341d8f3_1280.png",
                    "imageWidth": 1920,
                    "imageHeight": 1819,
                    "imageSize": 67139,
                    "views": 6145,
                    "downloads": 2431,
                    "collections": 111,
                    "likes": 18,
                    "comments": 10,
                    "user_id": 1086657,
                    "user": "GDJ",
                    "userImageURL": "https://cdn.pixabay.com/user/2015/12/02/23-35-18-266_250x250.png"
                },
                {
                    "id": 1974671,
                    "pageURL": "https://pixabay.com/illustrations/africa-continent-multicoloured-1974671/",
                    "type": "illustration",
                    "tags": "africa, continent, multicoloured",
                    "previewURL": "https://cdn.pixabay.com/photo/2017/01/12/13/08/africa-1974671_150.png",
                    "previewWidth": 138,
                    "previewHeight": 150,
                    "webformatURL": "https://pixabay.com/get/g60f65954abfe73e928c6ee27c1b360205a75da28c53e1a5491d57229955c41107b29929b351d2b6a190f7055d8001821_640.png",
                    "webformatWidth": 587,
                    "webformatHeight": 640,
                    "largeImageURL": "https://pixabay.com/get/g6b130990a555c243690b191789eaaa22ee3aeed6bdf9742e0a8defda673590196a7921abcc4a17ef81dc51d2ada6bc3926e063e2d5851955686a3318aed18743_1280.png",
                    "imageWidth": 2400,
                    "imageHeight": 2616,
                    "imageSize": 5569961,
                    "views": 21203,
                    "downloads": 10988,
                    "collections": 367,
                    "likes": 86,
                    "comments": 19,
                    "user_id": 199315,
                    "user": "Pfüderi",
                    "userImageURL": "https://cdn.pixabay.com/user/2022/03/01/14-54-45-332_250x250.jpg"
                },
                {
                    "id": 80855,
                    "pageURL": "https://pixabay.com/photos/mali-boats-good-produce-town-80855/",
                    "type": "photo",
                    "tags": "mali, boats, good",
                    "previewURL": "https://cdn.pixabay.com/photo/2013/02/12/20/05/mali-80855_150.jpg",
                    "previewWidth": 150,
                    "previewHeight": 112,
                    "webformatURL": "https://pixabay.com/get/g4fd4900355977269be5ff7b2d238ca28df55e0090dee1ef0fdee1743fa66499e5e2737fe769d5dc93d021e1e4e818b70_640.jpg",
                    "webformatWidth": 640,
                    "webformatHeight": 480,
                    "largeImageURL": "https://pixabay.com/get/g75a797aab712debb6bfb3ddd0f8bd364b998a3068d4546c0ac088f1b1cd8b19eac4e9e4f32407a3b4e2d50aeb344a3e5_1280.jpg",
                    "imageWidth": 1800,
                    "imageHeight": 1350,
                    "imageSize": 820192,
                    "views": 3004,
                    "downloads": 1295,
                    "collections": 49,
                    "likes": 10,
                    "comments": 3,
                    "user_id": 12019,
                    "user": "12019",
                    "userImageURL": ""
                },
                {
                    "id": 654129,
                    "pageURL": "https://pixabay.com/illustrations/mali-flag-fingerprint-country-654129/",
                    "type": "illustration",
                    "tags": "mali, flag, fingerprint",
                    "previewURL": "https://cdn.pixabay.com/photo/2015/03/01/00/18/mali-654129_150.png",
                    "previewWidth": 94,
                    "previewHeight": 150,
                    "webformatURL": "https://pixabay.com/get/g6f244733a73285c8d46a350eb789ac48fb0627e97c0d827297cabe3873f7dd91ecca2c2f5d3080792d0eab3674e295d1_640.png",
                    "webformatWidth": 404,
                    "webformatHeight": 640,
                    "largeImageURL": "https://pixabay.com/get/gcbe4d2a584745592e396fd119f297613a758e3e2085c4e723e0dae71d63068cf15cbc269b012974475f511fe6406db77_1280.png",
                    "imageWidth": 1573,
                    "imageHeight": 2488,
                    "imageSize": 711515,
                    "views": 4547,
                    "downloads": 2325,
                    "collections": 46,
                    "likes": 9,
                    "comments": 1,
                    "user_id": 679098,
                    "user": "Kurious",
                    "userImageURL": "https://cdn.pixabay.com/user/2015/02/09/01-28-02-642_250x250.jpg"
                },
                {
                    "id": 156308,
                    "pageURL": "https://pixabay.com/vectors/mali-flag-country-nationality-156308/",
                    "type": "vector/svg",
                    "tags": "mali, flag, country",
                    "previewURL": "https://cdn.pixabay.com/photo/2013/07/13/09/55/mali-156308_150.png",
                    "previewWidth": 150,
                    "previewHeight": 150,
                    "webformatURL": "https://pixabay.com/get/g63dc0a276c5fa139094aed7c87cdd7518ae7557f1dc6ac3eb83d3139c849de5af84ac731c218072d80d0f37085ccf9a7_640.png",
                    "webformatWidth": 640,
                    "webformatHeight": 640,
                    "largeImageURL": "https://pixabay.com/get/g3a3b34acca0291d5e506bc77a4102fb91e16e506ff706f57ff6304a242e609dd8de21841a52752c3e0b98ea6e4872c59_1280.png",
                    "imageWidth": 1920,
                    "imageHeight": 1920,
                    "imageSize": 199378,
                    "views": 1827,
                    "downloads": 618,
                    "collections": 23,
                    "likes": 4,
                    "comments": 0,
                    "user_id": 30363,
                    "user": "OpenClipart-Vectors",
                    "userImageURL": "https://cdn.pixabay.com/user/2013/08/21/16-02-05-675_250x250.png"
                },
                {
                    "id": 2702716,
                    "pageURL": "https://pixabay.com/photos/mali-flag-banner-west-africa-mali-2702716/",
                    "type": "photo",
                    "tags": "mali, flag, banner",
                    "previewURL": "https://cdn.pixabay.com/photo/2017/09/01/00/24/mali-2702716_150.jpg",
                    "previewWidth": 150,
                    "previewHeight": 99,
                    "webformatURL": "https://pixabay.com/get/g467c30a18bc9dca503c0d59921ec3be98873de92ccacc8c2ed167b6155c378691c479abec9c3812fd75bd525cc985b0e_640.jpg",
                    "webformatWidth": 640,
                    "webformatHeight": 426,
                    "largeImageURL": "https://pixabay.com/get/gfc62aa671924511f10133a1883a35933eb8512b9492a20a800b36b0f0cd2f33c47dd1bfb18326ae4f680af1d39912a4394a794005c342798b2b3dedd3ece6cfa_1280.jpg",
                    "imageWidth": 2490,
                    "imageHeight": 1660,
                    "imageSize": 740853,
                    "views": 1929,
                    "downloads": 1334,
                    "collections": 23,
                    "likes": 3,
                    "comments": 0,
                    "user_id": 2137215,
                    "user": "Kaufdex",
                    "userImageURL": "https://cdn.pixabay.com/user/2018/06/10/13-09-23-532_250x250.png"
                },
                {
                    "id": 2097329,
                    "pageURL": "https://pixabay.com/photos/africa-african-landscape-mali-mali-2097329/",
                    "type": "photo",
                    "tags": "africa, african landscape, mali",
                    "previewURL": "https://cdn.pixabay.com/photo/2017/02/25/09/53/africa-2097329_150.jpg",
                    "previewWidth": 150,
                    "previewHeight": 112,
                    "webformatURL": "https://pixabay.com/get/gcc2526f329321dbf8ab044557d41c6d0a6d66d2691efbb2719240662d8cba78f59290557425e7e2df6a298d57319f906_640.jpg",
                    "webformatWidth": 640,
                    "webformatHeight": 480,
                    "largeImageURL": "https://pixabay.com/get/g657e661c5309c55e32f23190a78a920805dcd624aaba1fdf008e0602d85c6155a5fa5ad7556aa49e8745d4307918e87a89027d6d769145dd0f646c8626245926_1280.jpg",
                    "imageWidth": 2592,
                    "imageHeight": 1944,
                    "imageSize": 1840916,
                    "views": 1901,
                    "downloads": 803,
                    "collections": 17,
                    "likes": 7,
                    "comments": 0,
                    "user_id": 4661679,
                    "user": "alajillo",
                    "userImageURL": ""
                },
                {
                    "id": 4918753,
                    "pageURL": "https://pixabay.com/photos/architecture-clay-building-old-4918753/",
                    "type": "photo",
                    "tags": "architecture, clay, building",
                    "previewURL": "https://cdn.pixabay.com/photo/2020/03/10/11/55/architecture-4918753_150.jpg",
                    "previewWidth": 150,
                    "previewHeight": 142,
                    "webformatURL": "https://pixabay.com/get/g56b9a217018ef13ff7cc100c5833a4ae7f9827cab9e4fd2f399b2245065fd68ef159278f47487a4623855ed6d8171e11_640.jpg",
                    "webformatWidth": 640,
                    "webformatHeight": 606,
                    "largeImageURL": "https://pixabay.com/get/g876e630cf054ccb5b885f966caec6342182e10eddac2336e9220d07d24907cb7e3c54a2f8e5c59258685208d7a1bf2443d94f3f938b96fb88aae8665b7c3f4d5_1280.jpg",
                    "imageWidth": 3648,
                    "imageHeight": 3456,
                    "imageSize": 2944711,
                    "views": 2357,
                    "downloads": 1710,
                    "collections": 5,
                    "likes": 11,
                    "comments": 2,
                    "user_id": 15409797,
                    "user": "mel_88",
                    "userImageURL": "https://cdn.pixabay.com/user/2020/04/13/17-54-12-356_250x250.jpg"
                },
                {
                    "id": 994016,
                    "pageURL": "https://pixabay.com/photos/flower-sea-beach-by-the-sea-summer-994016/",
                    "type": "photo",
                    "tags": "flower, sea, beach",
                    "previewURL": "https://cdn.pixabay.com/photo/2015/10/18/09/39/flower-994016_150.jpg",
                    "previewWidth": 150,
                    "previewHeight": 111,
                    "webformatURL": "https://pixabay.com/get/g697a205db5ea1e7f180db910ec42944077f60b2e648edf2b5438e1bab59b43dc54d9f217f73a330d8646d4134b2bc0e8_640.jpg",
                    "webformatWidth": 640,
                    "webformatHeight": 477,
                    "largeImageURL": "https://pixabay.com/get/gc84f565bc9467ba7d5e1eaba009790f09e1b7832cfc46842914b1a83690ae55c3e408a9eebbfd41ae98e0adc39a3be78_1280.jpg",
                    "imageWidth": 2576,
                    "imageHeight": 1920,
                    "imageSize": 1213492,
                    "views": 2555,
                    "downloads": 772,
                    "collections": 14,
                    "likes": 6,
                    "comments": 0,
                    "user_id": 1531070,
                    "user": "Allmann",
                    "userImageURL": "https://cdn.pixabay.com/user/2022/09/28/08-42-58-848_250x250.jpg"
                },
                {
                    "id": 2024833,
                    "pageURL": "https://pixabay.com/vectors/banner-decoration-flag-mali-sign-2024833/",
                    "type": "vector/svg",
                    "tags": "banner, decoration, flag",
                    "previewURL": "https://cdn.pixabay.com/photo/2017/01/31/15/01/banner-2024833_150.png",
                    "previewWidth": 150,
                    "previewHeight": 99,
                    "webformatURL": "https://pixabay.com/get/gcd5bc78b52b72be73ed37548838aa3708cfc9070dd58c9607b548c6eb7fad8d58ad25016a3f3dd7609258088f9cf315c_640.png",
                    "webformatWidth": 640,
                    "webformatHeight": 426,
                    "largeImageURL": "https://pixabay.com/get/g942a62c9a432d535ba58dcb7c08ba70ee4d95280604cc879438b3341d3fb9fa7f8231baff808d40bb5889595bd5498aa61f9b8947801688d787394f64b6c1b1c_1280.png",
                    "imageWidth": 1920,
                    "imageHeight": 1280,
                    "imageSize": 90942,
                    "views": 745,
                    "downloads": 445,
                    "collections": 10,
                    "likes": 2,
                    "comments": 0,
                    "user_id": 30363,
                    "user": "OpenClipart-Vectors",
                    "userImageURL": "https://cdn.pixabay.com/user/2013/08/21/16-02-05-675_250x250.png"
                },
                {
                    "id": 674912,
                    "pageURL": "https://pixabay.com/illustrations/mali-flag-hand-national-fingers-674912/",
                    "type": "illustration",
                    "tags": "mali, flag, hand",
                    "previewURL": "https://cdn.pixabay.com/photo/2015/03/15/19/28/mali-674912_150.png",
                    "previewWidth": 150,
                    "previewHeight": 97,
                    "webformatURL": "https://pixabay.com/get/g4415278d66bd70d7731b1059e71f9dd9fb25145ff9ef2231e1a3d6e897fed950563a3fd3ca4f27c7fc5c31a8d6239eec_640.png",
                    "webformatWidth": 640,
                    "webformatHeight": 418,
                    "largeImageURL": "https://pixabay.com/get/g33a76799278e842603c7dc4cb998a416bb5de886d939411641ed72917b1a9c3399f5d6d95f693e243637780d706b653b_1280.png",
                    "imageWidth": 2940,
                    "imageHeight": 1923,
                    "imageSize": 4952336,
                    "views": 3808,
                    "downloads": 1432,
                    "collections": 8,
                    "likes": 4,
                    "comments": 1,
                    "user_id": 679098,
                    "user": "Kurious",
                    "userImageURL": "https://cdn.pixabay.com/user/2015/02/09/01-28-02-642_250x250.jpg"
                },
                {
                    "id": 2097320,
                    "pageURL": "https://pixabay.com/photos/africa-african-landscape-mali-mali-2097320/",
                    "type": "photo",
                    "tags": "africa, african landscape, mali",
                    "previewURL": "https://cdn.pixabay.com/photo/2017/02/25/09/49/africa-2097320_150.jpg",
                    "previewWidth": 150,
                    "previewHeight": 112,
                    "webformatURL": "https://pixabay.com/get/g2301b17b7e839ce954f2a33b30abcaa34a80bfb05e245e873f9b6a8c560842fc364d4fde3c1f29b308d480804cd0dd51_640.jpg",
                    "webformatWidth": 640,
                    "webformatHeight": 480,
                    "largeImageURL": "https://pixabay.com/get/g73b3885570466515c1ed60567a24cb0178459e4fcce48058fe5e2e06b8e5dab7f09abf939533379a9e82520fb82ba91ae090c3d4229c4cdf811da7924963982b_1280.jpg",
                    "imageWidth": 2592,
                    "imageHeight": 1944,
                    "imageSize": 2282115,
                    "views": 1406,
                    "downloads": 608,
                    "collections": 4,
                    "likes": 7,
                    "comments": 0,
                    "user_id": 4661679,
                    "user": "alajillo",
                    "userImageURL": ""
                },
                {
                    "id": 2528899,
                    "pageURL": "https://pixabay.com/photos/flag-banner-nation-emblem-country-2528899/",
                    "type": "photo",
                    "tags": "flag, banner, nation",
                    "previewURL": "https://cdn.pixabay.com/photo/2017/07/22/15/09/flag-2528899_150.jpg",
                    "previewWidth": 150,
                    "previewHeight": 112,
                    "webformatURL": "https://pixabay.com/get/gca45c789db7db3b14eea6c357c3560bf9a304a27d9d6962f21540267b3fbf7caec2a6d7cbf1f5934ef427734ca9e9172_640.jpg",
                    "webformatWidth": 640,
                    "webformatHeight": 480,
                    "largeImageURL": "https://pixabay.com/get/g3cf8b8f31e90a8ff5f9959704f5487a6c516b6db00c077682ae6c98399ce59cc02222ad1e066fdb86863d72190f439399448a6c2aa71bc999e462969e95dbfb7_1280.jpg",
                    "imageWidth": 4032,
                    "imageHeight": 3024,
                    "imageSize": 4849398,
                    "views": 1953,
                    "downloads": 1636,
                    "collections": 9,
                    "likes": 2,
                    "comments": 0,
                    "user_id": 4745048,
                    "user": "David_Peterson",
                    "userImageURL": "https://cdn.pixabay.com/user/2020/05/10/10-50-46-490_250x250.jpg"
                },
                {
                    "id": 2131288,
                    "pageURL": "https://pixabay.com/photos/mali-peace-hand-nation-background-2131288/",
                    "type": "photo",
                    "tags": "mali, peace, hand",
                    "previewURL": "https://cdn.pixabay.com/photo/2017/03/10/00/09/mali-2131288_150.jpg",
                    "previewWidth": 150,
                    "previewHeight": 112,
                    "webformatURL": "https://pixabay.com/get/g7784e7b5d2e586f896fe69c3e5a23d060377741324d538531946c744dec89f6b1d7e405dc22ab7170cba8efae45a11a6_640.jpg",
                    "webformatWidth": 640,
                    "webformatHeight": 480,
                    "largeImageURL": "https://pixabay.com/get/gede7f90555db5a7dd6f65ec5588143fd2d339c7ae01f8988c5b518104ace87a60a94420ba84ed78de16cbec128df1d25368cf84f1b4af38497b7a9aa6bca1eb1_1280.jpg",
                    "imageWidth": 4032,
                    "imageHeight": 3024,
                    "imageSize": 1271565,
                    "views": 1356,
                    "downloads": 757,
                    "collections": 11,
                    "likes": 1,
                    "comments": 0,
                    "user_id": 4745048,
                    "user": "David_Peterson",
                    "userImageURL": "https://cdn.pixabay.com/user/2020/05/10/10-50-46-490_250x250.jpg"
                },
                {
                    "id": 166359,
                    "pageURL": "https://pixabay.com/photos/croatia-mali-losinj-bay-166359/",
                    "type": "photo",
                    "tags": "croatia, mali losinj, bay",
                    "previewURL": "https://cdn.pixabay.com/photo/2013/07/23/19/07/croatia-166359_150.jpg",
                    "previewWidth": 150,
                    "previewHeight": 112,
                    "webformatURL": "https://pixabay.com/get/gdb9cd87f39f79f43ac816609b9293c6c74facde9d3da5f1517348d8209b6427847db62259c52539a73c06558d4e91351_640.jpg",
                    "webformatWidth": 640,
                    "webformatHeight": 478,
                    "largeImageURL": "https://pixabay.com/get/g2bc1a1308afe3aba2b1b3a1236b5a85c937ef53c789188aceb86d00c22dc47fc1a417d0476b56873412d82f79bbcd860_1280.jpg",
                    "imageWidth": 2288,
                    "imageHeight": 1712,
                    "imageSize": 1041585,
                    "views": 1544,
                    "downloads": 596,
                    "collections": 10,
                    "likes": 2,
                    "comments": 0,
                    "user_id": 44776,
                    "user": "gojkokomazec",
                    "userImageURL": "https://cdn.pixabay.com/user/2013/07/23/17-54-35-21_250x250.jpg"
                },
                {
                    "id": 5795069,
                    "pageURL": "https://pixabay.com/photos/kid-child-fun-smile-laugh-wet-5795069/",
                    "type": "photo",
                    "tags": "kid, child, fun",
                    "previewURL": "https://cdn.pixabay.com/photo/2020/12/01/17/45/kid-5795069_150.jpg",
                    "previewWidth": 100,
                    "previewHeight": 150,
                    "webformatURL": "https://pixabay.com/get/g280ca14f1c14214b887bb1280de094b3165c5ccc1529e297d781c75270f4dcd43d08867de2260c6b5aa3d78edd84396b_640.jpg",
                    "webformatWidth": 427,
                    "webformatHeight": 640,
                    "largeImageURL": "https://pixabay.com/get/ga32c0e2113f660afada6f6ca48a6ba20e92e6acb36b78d52981dadfcca299d1442df4449ad93a867de6bb7583674e473a6c28665d9f5b86adcf3e53669be4be7_1280.jpg",
                    "imageWidth": 3456,
                    "imageHeight": 5184,
                    "imageSize": 2904636,
                    "views": 1393,
                    "downloads": 1255,
                    "collections": 2,
                    "likes": 4,
                    "comments": 0,
                    "user_id": 19053561,
                    "user": "Stefanoeko",
                    "userImageURL": "https://cdn.pixabay.com/user/2020/11/10/09-29-15-458_250x250.jpg"
                },
                {
                    "id": 674913,
                    "pageURL": "https://pixabay.com/illustrations/mali-flag-hand-national-fingers-674913/",
                    "type": "illustration",
                    "tags": "mali, flag, hand",
                    "previewURL": "https://cdn.pixabay.com/photo/2015/03/15/19/28/mali-674913_150.png",
                    "previewWidth": 111,
                    "previewHeight": 150,
                    "webformatURL": "https://pixabay.com/get/g23f2b8c127e00f60b43d487fce4ed876bb6b9f3652bea54152e270ca6777b5a12247b7a9757454e8b980f2f85fd24273_640.png",
                    "webformatWidth": 473,
                    "webformatHeight": 640,
                    "largeImageURL": "https://pixabay.com/get/g6b45c756a9fb1ed5e63940e1442ecb2c74afe81e891d4b9970a2e9796fe0f23093a9526d042b197e9a290d8a4e5d108d_1280.png",
                    "imageWidth": 2209,
                    "imageHeight": 2987,
                    "imageSize": 3694499,
                    "views": 2381,
                    "downloads": 1357,
                    "collections": 8,
                    "likes": 1,
                    "comments": 0,
                    "user_id": 679098,
                    "user": "Kurious",
                    "userImageURL": "https://cdn.pixabay.com/user/2015/02/09/01-28-02-642_250x250.jpg"
                },
                {
                    "id": 1444222,
                    "pageURL": "https://pixabay.com/photos/ring-caterpillar-ring-follower-mask-1444222/",
                    "type": "photo",
                    "tags": "ring, caterpillar ring, follower",
                    "previewURL": "https://cdn.pixabay.com/photo/2016/06/08/18/07/ring-1444222_150.jpg",
                    "previewWidth": 150,
                    "previewHeight": 99,
                    "webformatURL": "https://pixabay.com/get/g0efc5a2211adbfcf4a03af965977ba5ca919dd6bc7327a370ad7dbeede35aa5f1a11ce72d64ead624bdfe135a5564d7a_640.jpg",
                    "webformatWidth": 640,
                    "webformatHeight": 426,
                    "largeImageURL": "https://pixabay.com/get/g871aa8b728b8ad14bf628a781650341885a9ea67b45cf9c157fcbb4d113c705df0967340f939fad30e899712abd60696df9a97c9a9569758566dd342a799127f_1280.jpg",
                    "imageWidth": 4752,
                    "imageHeight": 3168,
                    "imageSize": 2272800,
                    "views": 1160,
                    "downloads": 506,
                    "collections": 4,
                    "likes": 3,
                    "comments": 2,
                    "user_id": 12364,
                    "user": "stux",
                    "userImageURL": "https://cdn.pixabay.com/user/2022/08/31/19-31-28-454_250x250.jpg"
                }
            ],
            currentPage: 1,
            pageSize: 10,
            currentKeyword: 'mali'
        }
    }

    // componentDidMount() {
    //     this.getHits();
    // }

    getHits() {
        let url = "https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q=" + this.state.currentKeyword;
        axios.get(url).then((resp) => {
            console.log(resp);
            this.setState({
                hits: resp.data.hits
            });
        }).catch((err => {
            console.log(err);
        }))
    }

    setKeyword = (event) => {
        this.setState({
            currentKeyword: event.target.value
        });
    }

    search = (event) => {
        event.preventDefault();
        this.getHits();
    } 

    render() {
        return (
            <div>
                <form onSubmit={this.search}>
                    <div className="row m-1 p-1">
                        {//<div>{this.state.currentKeyword}</div>
                        }
                        <div className="col">
                            <input type="text" 
                                value={this.state.currentKeyword}
                                onChange={this.setKeyword}
                                className="form-control" />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-success" type="submit">Chercher</button>
                        </div>
                    </div>
                </form>
                <div className="row">
                    {
                        this.state.hits.map(hit =>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        {hit.tags} | {hit.webformatWidth} x {hit.webformatHeight}
                                    </div>
                                    <div className="card-body">
                                        <img className="card-img"  height={200} src={hit.webformatURL} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Gallery;