const mempelai = {
  nama: {
    lengkap: "adi subagja",
    panggilan: "adi",
  },
  ayah: "bapak adi",
  ibu: "ibu adi",
  urutanAnak: "pertama",
  fb: "facebook/adi",
  ig: "@adi",
  pasangan: [
    {
      nama: {
        lengkap: "adiba putri syakila",
        panggilan: "adiba",
      },
      ayah: "bapak adiba",
      ibu: "ibu adiba",
      urutanAnak: "pertama",
      fb: "facebook/adiba",
      ig: "@adiba",
    },
  ],
};

const acaraAkad = {
  id: users.id,
  jadwal: {
    tgl: "Sabtu, 10 november 2023",
    pukul: "10:00 wib",
  },
  lokasi: "rumah bapak",
  alamat: "desa sanghiang",
};

const acaraResepsi = {
  id: mempelaiP.id + mempelaiW.id,
  jadwal: {
    tgl: "Sabtu, 10 november 2023",
    pukul: "10:00 wib",
  },
  lokasi: "rumah bapak",
  alamat: "desa sanghiang",
};

const amplop = {
  id: mempelaiP.id + mempelaiW.id,
  mandiri: "08121211",
  gopay: "00992929",
};

// update user
const users = {
  undangan: mempelaiP.id + mempelaiW.id,
};
