// ================= POPUP VIDEO AUTO PLAY =================

// Lấy modal và container chứa iframe
const modal = document.getElementById('videoModal');
const container = document.getElementById('videoContainer');

// Khi mở modal → load video
modal.addEventListener('show.bs.modal', function () {
    container.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1"
            allow="autoplay; encrypted-media"
            frameborder="0"
            allowfullscreen>
        </iframe>
    `;
});

// Khi đóng modal → xoá iframe (để tắt video)
modal.addEventListener('hidden.bs.modal', function () {
    container.innerHTML = "";
});
