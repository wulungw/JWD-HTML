function cekform(){
    foto = document.getElementById('foto');
    nama = document.getElementById('nama');
    panggilan = document.getElementById('panggilan');
    alamat = document.getElementById('alamat');
    DOB = document.getElementById('DOB');
    kelamin = document.getElementById('kelamin');
    kota = document.getElementById('kota');
    email = document.getElementById('email');
    number = document.getElementById('number');
    medsos = document.getElementById('medsos');
    
    if(foto.value==''){
        alert('Foto belum dipilih');
        foto.focus();
        return false;
    }else if(nama.value==''){
        alert('Nama tidak boleh kosong');
        nama.focus();
        return false;
    }else if(nama.value.length <= 3){
        alert('nama minimal 3 karakter');
        nama.focus();
        return false;
    }else if(panggilan.value==''){
        alert('Nama Panggilan tidak boleh kosong');
        panggilan.focus();
        return false;
    }else if(panggilan.value.length <= 3){
        alert('Nama Panggilan minimal 3 karakter');
        panggilan.focus();
        return false;
    }else if(alamat.value==''){
        alert('Tempat Lahir tidak boleh kosong');
        alamat.focus();
        return false;
    }else if(DOB.value==''){
        alert('Tanggal Lahir tidak boleh kosong');
        DOB.focus();
        return false;
    }else if(kelamin.value==''){
        alert('Kelamin tidak boleh kosong');
        kelamin.focus();
        return false;
    }else if(kota.value==''){
        alert('Kota belum dipilih');
        nama.focus();
        return false;
    }else if(email.value==''){
        alert('Email tidak boleh kosong');
        email.focus();
        return false;
    }else if(number.value==''){
        alert('No HP tidak boleh kosong');
        number.focus();
        return false;
    }else if(number.value.length <= '4'){
        alert('Nomer HP Minimal 4 Karakter');
        number.focus();
        return false;
    }else if(medsos.value==''){
        alert('Media Sosial tidak boleh kosong');
        medsos.focus();
        return false;
    }else{
        alert('Terima Kasih telah mengisi form')
        return true;
    }
}