document.getElementById('contactBtn').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.textContent = 'Ẩn thông tin';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Hiển thị thêm thông tin';
    }
});
