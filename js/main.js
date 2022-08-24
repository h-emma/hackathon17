const canvas = document.querySelector("#unity-canvas");

const buildUrl = "Build";
const loaderUrl = buildUrl + "/Test2.loader.js";
const config = {
  dataUrl: buildUrl + "/Test2.data.unityweb",
  frameworkUrl: buildUrl + "/Test2.framework.js.unityweb",
  codeUrl: buildUrl + "/Test2.wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "New Unity Project",
  productVersion: "0.1",
};

const mobileWarning = document.querySelector("#unity-mobile-warning");

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  config.devicePixelRatio = 1;
  mobileWarning.style.display = "block";
  setTimeout(() => {
    mobileWarning.style.display = "none";
  }, 5000);
}

const loadingBar = document.querySelector("#unity-loading-bar");
const progressBarFull = document.querySelector("#unity-progress-bar-full");
loadingBar.style.display = "block";

const script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
  createUnityInstance(canvas, config, (progress) => {
    progressBarFull.style.width = 100 * progress + "%";
  })
    .then((unityInstance) => {
      loadingBar.style.display = "none";
      // fullscreenButton.onclick = () => {
      //   unityInstance.SetFullscreen(1);
      // };
    })
    .catch((message) => {
      alert(message);
    });
};
document.body.appendChild(script);
