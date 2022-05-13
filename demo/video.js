document.querySelector("input[type=file]").addEventListener("change", e => {
  /**
   * 添加视频
   */
  const video = e.target.files[0];
  readVideoAlbum({
    video: video,
  }).then(img => document.querySelector("img").src = img);
});


/**
 * 
 * @param {{video: File}} params 
 */
function readVideoAlbum(params) {
  return new Promise((resolve, reject) => {
    const eleVideo = document.createElement("video");
    eleVideo.style.display = "none";
    eleVideo.controls = true;
    eleVideo.autoplay = false;
    eleVideo.muted = true;
    eleVideo.playsInline = true;
    eleVideo.style.height = "auto";
    eleVideo.style.width = "auto";
    const source = document.createElement("source");
    source.src = URL.createObjectURL(params.video);
    source.type = params.video.type;
    eleVideo.appendChild(source);
    document.body.append(eleVideo);
    let canvas;
    eleVideo.play()
      .then(() => {
        canvas = document.createElement("canvas");
        canvas.width = eleVideo.videoWidth;
        canvas.height = eleVideo.videoHeight;
        canvas.style.display = "none";
        document.body.append(canvas);
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          throw new Error("canvas.getContext 异常");
        }
        ctx.drawImage(eleVideo, 0, 0, eleVideo.videoWidth, eleVideo.videoHeight);
        const base64 = canvas.toDataURL();
        resolve(base64);
        eleVideo.pause();
      })
      .catch(err => reject(err))
      .then(() => {
        setTimeout(() => {
          /**
           * 销毁创建的元素
           */
          canvas && document.body.removeChild(canvas);
          document.body.removeChild(eleVideo);
        }, 500);
      });
  });
}