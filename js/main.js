// Tạo 1 biến Global để lưu các giá trị n vào mảng
var mangN = [];

// Nhận giá trị n nhập vào và lưu vào mảng
document.getElementById("btnLuuMang").onclick = function() {
    let soN = document.getElementById("soN").value;

    // Thêm soN vào mangN
    mangN.push(Number(soN));
    
    // In danh sách đã lưu ra màn hình
    let txtResult = document.getElementById('txtResultLuuMang');
    txtResult.innerHTML = `<br /> Danh sách mảng đã lưu : ${mangN}`;
}

/**
 * 1. Tính tổng các số dương trong mangN
 */
 document.getElementById("btnTongSoDuong").onclick = function() {
    let tongSoDuong = tinhTongSoDuong();

    // In ket quả
    let txtResult = document.getElementById('txtResultTongSoDuong');
    txtResult.innerHTML = `<br /> Tổng các số dương là : ${tongSoDuong}`;
}

// Tinh tổng tất cả các số dương có trong mangN
function tinhTongSoDuong()
{
    // Kiểm tra mảng khác rỗng
    if (mangN.length > 0) {
        let tong = 0;    
        for (let i = 0; i < mangN.length; i++) {
            if (mangN[i] > 0) {
                tong += Number(mangN[i]);
            }
        }

        return tong;
    } else {
        // Mảng rỗng return -1
        return -1;
    }
}





/**
 * 2. Đếm có bao nhiêu số dương trong mangN
 */
 document.getElementById("btnDemSoDuong").onclick = function() {
    let demSoDuong = tinhDemSoDuong();

    // In ket quả
    let txtResult = document.getElementById('txtResultDemSoDuong');
    txtResult.innerHTML = `<br /> Có ${demSoDuong} số dương xuất hiện trong mảng`;
}

// Đếm có bao nhiêu số dương có trong mangN
function tinhDemSoDuong()
{
    // Kiểm tra mảng khác rỗng
    if (mangN.length > 0) {
        let count = 0;    
        for (let i = 0; i < mangN.length; i++) {
            if (mangN[i] > 0) {
                count++;
            }
        }

        return count;
    } else {
        // Mảng rỗng return -1
        return -1;
    }
}






/**
 * 3. Tìm số nhỏ nhất trong mangN
 */
 document.getElementById("btnTimSoNhoNhat").onclick = function() {
    let soNhoNhat = timSoNhoNhat();

    // In ket quả
    let txtResult = document.getElementById('txtResultSoNhoNhat');
    txtResult.innerHTML = `<br /> Số nhỏ nhất trong mảng là số  ${soNhoNhat}`;
}

// Tìm số nhỏ nhất trong mangN
function timSoNhoNhat()
{
    // Kiểm tra mảng khác rỗng
    if (mangN.length > 0) {
        let soNhoNhat = '';    
        for (let i = 0; i < mangN.length; i++) {
            if (i == 0) {
                soNhoNhat = mangN[i];
            } else if (mangN[i] < soNhoNhat) {
                soNhoNhat = mangN[i];
            }
        }

        return soNhoNhat;
    } else {
        // Mảng rỗng return ''
        return '';
    }
}






/**
 * 4. Tìm số dương nhỏ nhất trong mangN
 */
 document.getElementById("btnTimSoDuongNhoNhat").onclick = function() {
    let soDuongNhoNhat = timSoDuongNhoNhat();

    // In ket quả
    let txtResult = document.getElementById('txtResultSoDuongNhoNhat');
    if (soDuongNhoNhat === '') {
        txtResult.innerHTML = `<br /> Không tìm thấy số dương nhỏ nhất trong mảng`;
    } else {
        txtResult.innerHTML = `<br /> Số dương nhỏ nhất trong mảng là số  ${soDuongNhoNhat}`;
    }
    
}

// Tìm số dương nhỏ nhất trong mangN
function timSoDuongNhoNhat()
{
    // Kiểm tra mảng khác rỗng
    if (mangN.length > 0) {
        let soDuongNhoNhat = '';    
        for (let i = 0; i < mangN.length; i++) {
            if (mangN[i] > 0) {
                if (soDuongNhoNhat === '') {
                    soDuongNhoNhat = mangN[i];
                } else if (mangN[i] < soDuongNhoNhat) {
                    soDuongNhoNhat = mangN[i];
                }
            }
        }

        return soDuongNhoNhat;
    } else {
        // Mảng rỗng return ''
        return '';
    }
}