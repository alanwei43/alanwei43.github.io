document.querySelector("input[type=file]").addEventListener("change", e => {
  /**
   * 添加视频
   */
  const video = e.target.files[0];

  const ele = document.createElement("video");
  ele.controls = true;
  ele.style.height = "200px";
  ele.style.width = "200px";
  const source = document.createElement("source");
  source.src = URL.createObjectURL(video);
  source.type = video.type;
  ele.appendChild(source);

  document.body.append(ele);
});

document.querySelector("button").addEventListener("click", () => {
  /**
   * 截图
   */
  const video = document.querySelector("video");
  const canvas = document.getElementById("screenshot");
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, 200, 200);
  const imgData = canvas.toDataURL();
  document.querySelector("img").src = imgData;
});