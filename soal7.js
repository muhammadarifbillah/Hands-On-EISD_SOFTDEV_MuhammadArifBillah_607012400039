// Filter active dan nilai >=80 lalu mapping

const data=[
{nama:"Alya",status:"active",nilai:85},
{nama:"Bima",status:"inactive",nilai:90},
{nama:"Citra",status:"active",nilai:70},
{nama:"Doni",status:"active",nilai:95},
{nama:"Eka",status:"inactive",nilai:60}
];

const hasil=data
.filter(d=>d.status==="active" && d.nilai>=80)
.map(d=>({nama:d.nama,nilai:d.nilai}));

console.log(hasil);
