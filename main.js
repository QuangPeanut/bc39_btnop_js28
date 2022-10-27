var btn = document.getElementById("btn");
var ketqua = document.getElementById("ketqua");

btn.onclick = function () {
    var diem_toan = +document.getElementById("diem_toan").value;
    var diem_ly = +document.getElementById("diem_ly").value;
    var diem_hoa = +document.getElementById("diem_hoa").value;
    var doituong = +document.getElementById("doituong").value;
    var khuvuc = document.getElementById("khuvuc").value;


    var tb = (diem_hoa + diem_ly + diem_toan);

    function kv(value) {
        switch (value) {
            case "a":
                return 2;
                break;

            case "b":
                return 1;
                break;
            case "c":
                return 0.5;
                break;

            default:
                return 0;
        }
    }


    function dt(value) {
        switch (value) {
            case 1:
                return 2.5;
                break;
            case 2:
                return 1.5;
                break;
            case 3:
                return 1;
                break;

            default:
                return 0;
        }
    }
    ketqua.innerHTML = (`Tổng điểm:  ${tb + kv(khuvuc) + dt(doituong)}`);

    if (tb + kv(khuvuc) + dt(doituong) >= 20) {
        ketqua.innerHTML = `Điểm chuẩn của trường là: 20 điểm <br> Thí sinh đạt:  ${(tb + kv(khuvuc) + dt(doituong))}`;
    } else {
        ketqua.innerHTML = `Điểm chuẩn của trường là: 20 điểm <br> Thí sinh rớt:  ${(tb + kv(khuvuc) + dt(doituong))}`;
    }
}


// BÀI TẬP 2
var btn_kw = document.getElementById("btn_kw");
var ketqua_kw = document.getElementById("ketqua_kw");


btn_kw.onclick = function () {
    var kw = +document.getElementById("kw").value;
    var a = kw;
    total = 0;
    kw50 = 50 * 500;
    a = a - 50;
    if (a === 0) {
        return ketqua_kw.innerHTML += `Thành tiền: ${total = kw50}`
    }
    kw50den100 = 50 * 650;
    a = a - 50;
    if (a === 0) {
        return ketqua_kw.innerHTML += `Thành tiền: ${total = kw50 + kw50den100}`
    }
    kw100den150 = 50 * 850;
    a = a - 50;
    if (a === 0) {
        return ketqua_kw.innerHTML += `Thành tiền: ${total = kw50 + kw50den100 + kw100den150}`
    }
    kw150den200 = 50 * 110;
    a = a - 50;
    if (a === 0) {
        return ketqua_kw.innerHTML += `Thành tiền: ${total = kw50 + kw50den100 + kw100den150 + kw150den200}`
    }
    kwconlai = a * 1300;
    return ketqua_kw.innerHTML += `Thành tiền: ${total = kw50 + kw50den100 + kw100den150 + kwconlai}`


}