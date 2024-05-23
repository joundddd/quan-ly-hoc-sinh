class Lophoc {
    listthongtin;
    name;
    constructor(name) {
        this.name = name;

        this.listthongtin = [
            {
                id: 1,
                anh: "https://cdn.tuoitre.vn/thumb_w/480/2019/4/2/img3288-1554167712373426332952-1554167744717309258379-1554199988684557173348.png",
                name: 'ngô bá khá',
                lop: 9.1,
                diem: 3.5,
                hocluc: 'yếu',
            },

            {
                id: 2,
                anh: "https://giadinh.mediacdn.vn/2020/8/9/phu-le-15969368972421380800.jpg",
                name: 'phú lê',
                lop: 9.1,
                diem: 5,
                hocluc: 'trung bình',
            },
            {
                id: 3,
                anh: "https://nld.mediacdn.vn/2017/1-1477106121871-1492588580499.jpg",
                name: 'dương minh tuyền',
                lop: 9.1,
                diem: 1,
                hocluc: 'kém',
            },
        ];
        localStorage.setItem('lop cua vuong', JSON.stringify(this.listthongtin));
        localStorage.getItem('lop cua vuong');
    }
luu(newthongtin) {
        this.listthongtin.push(newthongtin);
}
xoa(index){
        this.listthongtin.splice(index, 1);
}
xong(index, newthongtin){
this.listthongtin[index] = newthongtin;
}

}
