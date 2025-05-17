const videoList = [
    "https://www.youtube.com/embed/YOUR_VIDEO_ID1",
    "https://www.youtube.com/embed/YOUR_VIDEO_ID2",
    "https://www.youtube.com/embed/YOUR_VIDEO_ID3"
];

let currentVideo = 0;

function changeVideo() {
    currentVideo = (currentVideo + 1) % videoList.length;
    document.getElementById("yt-video").src = videoList[currentVideo];
}