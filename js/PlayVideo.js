//Modal
    document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("videoModal");
    const closeBtn = modal.querySelector(".close");
    const videoWrapper = modal.querySelector(".modal-video-wrapper");

    window.playVideo = function (btn) {
        const videoId = btn.getAttribute("data-video-id");
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        videoWrapper.innerHTML = "";
        videoWrapper.appendChild(iframe);
        modal.style.display = "flex";
    };

    // Close on button click
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        videoWrapper.innerHTML = "";
    });

    // Close on background click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
        modal.style.display = "none";
        videoWrapper.innerHTML = "";
        }
    });
    });

// Replace Image
function replaceWithVideo(button) {
  const container = button.closest('.game-card').querySelector('.video-thumbnail');
  const videoId = container.getAttribute('data-video-id');

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.frameBorder = "0";

  container.innerHTML = ''; // Hapus img
  container.appendChild(iframe);
}
