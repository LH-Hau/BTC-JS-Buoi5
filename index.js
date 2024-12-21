// bài 1
document.getElementById("btnQLTS").onclick = function () {
  let diemChuan = document.getElementById("diemChuan").value * 1;

  //tính điểm 3 môn
  let diem1 = document.getElementById("diemMon1").value * 1;
  let diem2 = document.getElementById("diemMon2").value * 1;
  let diem3 = document.getElementById("diemMon3").value * 1;
  let kqTS = 0;
  kqTS = diem1 + diem2 + diem3;

  //set điểm khu vực
  const optionsKV = document.getElementById("optionsKV");
  const opKV = optionsKV ? optionsKV.value : null;
  const pointKVMap = {
    optionsKV0: 0,
    optionsKV1: 2,
    optionsKV2: 1,
    optionsKV3: 0.5,
  };
  const diemKV = pointKVMap[opKV];

  //set điểm đối tượng
  const optionsDT = document.getElementById("optionsDT");
  const opDT = optionsDT ? optionsDT.value : null;
  const pointDTMap = {
    optionsDT0: 0,
    optionsDT1: 2.5,
    optionsDT2: 1.5,
    optionsDT3: 1,
  };
  const diemDT = pointDTMap[opDT];

  //điểm tổng
  let tongDiem = kqTS + diemKV + diemDT;

  //kết quả
  if (diemChuan <= tongDiem && diem1 > 0 && diem2 > 0 && diem3 > 0) {
    document.getElementById(
      "outPutQLTS"
    ).innerHTML = `Chúc mừng bạn đã đậu. Tổng điểm: ${tongDiem * 1}`;
  } else {
    document.getElementById(
      "outPutQLTS"
    ).innerHTML = `Xin lỗi bạn đã rớt. Tổng điểm: ${tongDiem * 1}`;
  }
};
// end bài 1

//Bài 2
document.getElementById("btnTTD").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;
  let soKw = document.getElementById("soKw").value * 1;

  if (!hoTen) {
    document.getElementById("outPutTTD").innerHTML = "Vui lòng nhập họ tên.";
    return;
  }

  let tienDien = 0;
  const soKwDau = 50;
  const kwDau = 500;

  const soKw50Ke = 50;
  const kw50Ke = 650;

  const soKw100Ke = 100;
  const kw100Ke = 850;

  const soKw150Ke = 150;
  const kw150Ke = 1100;

  const kwTren350 = 1300;

  if (!soKw || isNaN(soKw) || soKw < 0) {
    document.getElementById("outPutTTD").innerHTML =
      "Số Kw không hợp lệ. Vui lòng nhập lại.";
    return;
  } else if (soKw > 0 && soKw <= 50) {
    tienDien = soKw * kwDau;
  } else if (soKw <= 100) {
    tienDien = soKwDau * kwDau + (soKw - soKwDau) * kw50Ke;
  } else if (soKw <= 200) {
    tienDien =
      soKwDau * kwDau +
      soKw50Ke * kw50Ke +
      (soKw - (soKwDau + soKw50Ke)) * kw100Ke;
  } else if (soKw <= 350) {
    tienDien =
      soKwDau * kwDau +
      soKw50Ke * kw50Ke +
      soKw100Ke * kw100Ke +
      (soKw - (soKwDau + soKw50Ke + soKw100Ke)) * kw150Ke;
  } else {
    tienDien =
      soKwDau * kwDau +
      soKw50Ke * kw50Ke +
      soKw100Ke * kw100Ke +
      soKw150Ke * kw150Ke +
      (soKw - (soKwDau + soKw50Ke + soKw100Ke + soKw150Ke)) * kwTren350;
  }
  document.getElementById(
    "outPutTTD"
  ).innerHTML = `Họ Tên: ${hoTen}. Tiền điện: ${tienDien.toLocaleString()} đ`;
};
//End bài 2

//Bài 3
document.getElementById("btnTTT").onclick = function () {
  let hoTenTT = document.getElementById("hoTenTT").value;
  let thuNhapNam = document.getElementById("thuNhapNam").value * 1;
  let soNguoiPT = document.getElementById("soNguoiPT").value * 1;

  if (!hoTenTT) {
    document.getElementById("outPutTTT").innerHTML = "Vui lòng nhập họ tên.";
    return;
  }

  let thueCaNhan = 0;
  const phiNguoiPT = 1600000;
  const phiGiamChoBanThan = 4000000;
  let thueXuat = null;

  // const thueXuat1 = 0.05;
  const thuNhapChiuThue1 = 60000000;

  // const thueXuat2 = 0.1;
  const thuNhapChiuThue2 = 120000000;

  // const thueXuat3 = 0.15;
  const thuNhapChiuThue3 = 210000000;

  // const thueXuat4 = 0.2;
  const thuNhapChiuThue4 = 384000000;

  // const thueXuat5 = 0.25
  const thuNhapChiuThue5 = 624000000;

  // const thueXuat6 = 0.3
  const thuNhapChiuThue6 = 960000000;

  if (!thuNhapNam || isNaN(thuNhapNam) || thuNhapNam < 0) {
    document.getElementById("outPutTTT").innerHTML =
      "Số thu nhập không hợp lệ. Vui lòng nhập lại.";
    return;
  } else if (thuNhapNam > 0 && thuNhapNam <= thuNhapChiuThue1) {
    thueXuat = 0.05;
    thueCaNhan =
      (thuNhapNam - phiGiamChoBanThan - soNguoiPT * phiNguoiPT) * thueXuat;
  } else if (thuNhapNam <= thuNhapChiuThue2) {
    thueXuat = 0.1;
    thueCaNhan =
      (thuNhapNam - phiGiamChoBanThan - soNguoiPT * phiNguoiPT) * thueXuat;
  } else if (thuNhapNam <= thuNhapChiuThue3) {
    thueXuat = 0.15;
    thueCaNhan =
      (thuNhapNam - phiGiamChoBanThan - soNguoiPT * phiNguoiPT) * thueXuat;
  } else if (thuNhapNam <= thuNhapChiuThue4) {
    thueXuat = 0.2;
    thueCaNhan =
      (thuNhapNam - phiGiamChoBanThan - soNguoiPT * phiNguoiPT) * thueXuat;
  } else if (thuNhapNam <= thuNhapChiuThue5) {
    thueXuat = 0.25;
    thueCaNhan =
      (thuNhapNam - phiGiamChoBanThan - soNguoiPT * phiNguoiPT) * thueXuat;
  } else if (thuNhapNam <= thuNhapChiuThue6) {
    thueXuat = 0.3;
    thueCaNhan =
      (thuNhapNam - phiGiamChoBanThan - soNguoiPT * phiNguoiPT) * thueXuat;
  } else {
    thueXuat = 0.35;
    thueCaNhan =
      (thuNhapNam - phiGiamChoBanThan - soNguoiPT * phiNguoiPT) * thueXuat;
  }

  if (soNguoiPT < 0) {
    document.getElementById("outPutTTT").innerHTML =
      "Vui lòng nhập đúng số người phụ thuộc.";
    return;
  }

  document.getElementById(
    "outPutTTT"
  ).innerHTML = `Họ tên: ${hoTenTT}. Tiền thuế: ${thueCaNhan.toLocaleString()}`;
};
//End bài 3

//Bài 4

//End bài 4
