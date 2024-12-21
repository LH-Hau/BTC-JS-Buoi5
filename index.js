// bài 1

document.getElementById("btnQLTS").onclick = function () {
  console.log("yes");
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

// let tinhDiem3Mon = () => {
//   let diem1 = document.getElementById("diemMon1").value * 1;
//   let diem2 = document.getElementById("diemMon2").value * 1;
//   let diem3 = document.getElementById("diemMon3").value * 1;
//   let kqTS = 0;

//   kqTS = diem1 + diem2 + diem3;
//   return kqTS;
//   //   document.getElementById("outPutQLTS").innerHTML = kqTS;
// };

// let diemOptionKV = () => {
//   const optionsKV = document.getElementById("optionsKV");
//   const opKV = optionsKV ? optionsKV.value : null;

//   const pointMap = {
//     optionsKV0: 0,
//     optionsKV1: 2,
//     optionsKV2: 1,
//     optionsKV3: 0.5,
//   };

//   const diemKV = pointMap[opKV];
//   //   document.getElementById("outPutQLTS").innerHTML = point;
//   return diemKV;
// };
// let diemOptionDT = () => {
//   const optionsDT = document.getElementById("optionsDT");
//   const opDT = optionsDT ? optionsDT.value : null;

//   const pointMap = {
//     optionsDT0: 0,
//     optionsDT1: 2.5,
//     optionsDT2: 1.5,
//     optionsDT3: 1,
//   };

//   const diemDT = pointMap[opDT];
//   //   document.getElementById("outPutQLTS").innerHTML = point;
//   return diemDT;
// };

// end bài 1
