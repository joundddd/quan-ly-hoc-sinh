let mylophoc = new Lophoc('lop hoc cua vuong')


function thongtinlop() {
    let list = mylophoc.listthongtin;
    document.getElementById('main').innerHTML = `
<h1>DANH SÁCH HỌC SINH LỚP 9.1</h1>
<h2>tổng số học sinh của lớp 9.1 là: ${list.length}</h2>
      <table border="1">
        <tr>
            <th>số thứ tự</th>
            <th>ảnh</th>
            <th>tên</th>
            <th>lớp</th>
            <th>điểm</th>
            <th>học lực</th>
            <th colspan="2" >chỉnh sửa</th>
        </tr>
        <tbody id="listthongtin">

        </tbody>
    </table>
    `;
    let html = '';
    for (let i = 0; i < list.length; i++) {
        html += `
         <tr>
            <td>${list[i].id}</td>
            <td><img class="anh2-89" src="${list[i].anh}" alt=""></td>
            <td>${list[i].name}</td>
            <td>${list[i].lop}</td>
            <td>${list[i].diem}</td>
            <td>${list[i].hocluc}</td>
            <td><button onclick="xoa(${i})">xóa thông tin học sinh</button> </td>
            <td><button onclick="chinhsua(${i})">chỉnh sửa thông tin học sinh</button></td>
        </tr>
        `;
    }
    document.getElementById('listthongtin').innerHTML = html;
}
function themthongtin() {
    document.getElementById('main').innerHTML = `
    <input id="id" placeholder="số thứ tự">
    <input id="anh" placeholder="ảnh">
    <input id="name" placeholder="tên">
    <input id="lop" placeholder="lớp">
    <input id="diem" placeholder="điểm">
    <input id="hocluc" placeholder="học lực">
    <button onclick="luu()">lưu thông tin học sinh</button>
    `;
}
function luu() {
     let id = document.getElementById('id').value;
    let anh = document.getElementById('anh').value;
    let name = document.getElementById('name').value;
    let lop = document.getElementById('lop').value;
    let diem = document.getElementById('diem').value;
    let hocluc = document.getElementById('hocluc').value;
    let newthongtin = new Thongtin(id, anh, name, lop, diem, hocluc);
mylophoc.luu(newthongtin);
thongtinlop();
}
function xoa(index) {
let isConfirm = confirm('bn chac chua')
    if(isConfirm){
        mylophoc.xoa(index);
        thongtinlop();
    }
}
function chinhsua(index) {
      let list = mylophoc.listthongtin;
      let oldthongtin = list[index];
      document.getElementById('main').innerHTML = `
     <input id="id" value="${oldthongtin.id}">
     <input id="anh" value="${oldthongtin.anh}">
     <input id="name" value="${oldthongtin.name}">
     <input id="lop" value="${oldthongtin.lop}">
     <input id="diem" value="${oldthongtin.diem}">
     <input id="hocluc" value="${oldthongtin.hocluc}">
    
     <button onclick="xong(${index})">luutinlop</button>
      `;
}
function xong(index) {
    let newid = document.getElementById('id').value;
    let anh = document.getElementById('anh').value;
    let name = document.getElementById('name').value;
    let lop = document.getElementById('lop').value;
    let diem = document.getElementById('diem').value;
    let hocluc = document.getElementById('hocluc').value;
    let newthongtin = new Thongtin(newid, anh, name, lop, diem, hocluc);
    mylophoc.xong(index, newthongtin);
    thongtinlop();
}
function timkiem() {
    document.getElementById('main').innerHTML = `
    <input id="searname" placeholder="nhap ten hoc sinh">
    <button onclick="timkiemthongtin()">tìm thông tin học sinh</button>
    `;
}
function timkiemthongtin() {
   let key = document.getElementById('searname').value;
   let list = mylophoc.listthongtin;
   for (let i = 0; i < list.length; i++) {
       if(list[i].name ===  key){
           document.getElementById('main').innerHTML = `

           <table border="1">
           <thead>
           <tr>
           <td>id</td>
           <td>anh</td>
           <td>name</td>
           <td>lop</td>
           <td>diem</td>
           <td>hoc luc</td>
           </tr>
           </thead> 
           <tbody>
           <tr>
           <td>${list[i].id}</td>
           <td><img class="anh2-89" src="${list[i].anh}" alt=""></td>
           <td>${list[i].name}</td>
           <td>${list[i].lop}</td>
           <td>${list[i].diem}</td>
           <td>${list[i].hocluc}</td>
           </tr>  
           </tbody>   
           
           </table>
           `;
       }
    }
}


