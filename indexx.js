document.querySelector(".btn-warning").onclick = function () {
  let luong1Ngay = document.getElementById("luong1Ngay").value;
  console.log(luong1Ngay);
  let soNgayLam = document.getElementById("soNgayLam").value;
  console.log(soNgayLam);
  let luongNhanDuoc = luong1Ngay * soNgayLam;
  document.getElementById(
    "ketQua"
  ).innerHTML = `Lương Nhận Được: ${luongNhanDuoc.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })}`;
};

document.querySelector(".btn-outline-success").onclick = function () {
  let soThuNhat = document.getElementById("soThuNhat").value * 1;
  console.log(soThuNhat);
  // document.getElementById("soThuNhat").value = "";
  let soThuHai = document.getElementById("soThuHai").value * 1;
  console.log(soThuHai);
  //document.getElementById("soThuHai").value = "";
  let soThuBa = document.getElementById("soThuBa").value * 1;
  console.log(soThuBa);
  //document.getElementById("soThuBa").value = "";
  let soThuTu = document.getElementById("soThuTu").value * 1;
  console.log(soThuTu);
  // document.getElementById("soThuTu").value = "";
  let diemTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu) / 4;
  console.log(diemTrungBinh);
  document.getElementById("ketQua2").innerHTML += ` ${diemTrungBinh}`;
};

// bài 3
document.querySelector(".btn-outline-danger").onclick = function () {
  let soUSD = document.getElementById("soUSD").value * 1;
  console.log(soUSD);
  const dongUSd = 23500;
  let soVND = soUSD * dongUSd;
  console.log(soVND);

  document.getElementById("soUSD").value = "";
  document.getElementById(
    "ketQua3"
  ).innerHTML = ` Số tiền nhận được: ${soVND.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })} `;
};

// BÀI 4
document.querySelector(".btn-outline-secondary").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  console.log(chieuDai);
  let chieuRong = document.getElementById("chieuRong").value * 1;
  console.log(chieuRong);
  let chuViHCN = (chieuDai + chieuRong) / 2;
  console.log(chuViHCN);
  let dienTichHCN = chieuDai * chieuRong;
  console.log(dienTichHCN);
  document.getElementById("chieuDai").value = "";
  document.getElementById("chieuRong").value = "";
  document.getElementById(
    "ketQua4"
  ).innerHTML = `Diện tích HCN là: ${dienTichHCN}  Chu vi HCN là: ${chuViHCN}`;
};

// Bài 5
document.querySelector(".btn-outline-primary").onclick = function () {
  let soNgauNhien = document.getElementById("soNgauNhien").value * 1;
  console.log(soNgauNhien);
  let soThuNhat = Math.floor(soNgauNhien / 100);
  console.log(soThuNhat);
  let soThuHai = Math.floor((soNgauNhien % 100) / 10);
  console.log(soThuHai);
  let soThuBa = Math.floor(soNgauNhien % 10);
  console.log(soThuBa);
  let tinhTong = soThuNhat + soThuHai + soThuBa;
  console.log(tinhTong);
  document.getElementById(
    "ketQua5"
  ).innerHTML = `Kết quả tổng của 3 chữ số (${soNgauNhien}) là: ${tinhTong}`;
};
