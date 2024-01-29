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
        // Mảng rỗng | hoặc không có số dương trong mảng , return -1
        return -1;
    }
}