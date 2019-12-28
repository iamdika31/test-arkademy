function biodata(name, umur){
    var biodata = { 
        nama : "Arya Agung Andika",
        umur: 20,
        address: "Jalan gunung andakasa perum penamparan indah III Blok B no 11 A, Denpasar,Bali",
        hobbies: ["nonton film", "main tenis meja"],
        is_married: false,
        list_school: {
            sd: { 
                name : "SDN 1 Padang sambian",
                year_in : "2004",
                year_out : "2010"
            },
            smp: {
                name : "SMPN 5 Denpasar",
                year_in : "2010",
                year_out: "2013"
            },
            sma: {
                name : "SMAN 5 Denpasar",
                year_in : "2013",
                year_out : "2016"
            },
            universitas: {
                name : "Universitas Brawijaya",
                year_in : "2016",
                year_out : "soon",
                major : "Komputasi Cerdas"
            } 
        },
        skills: {
            pemograman: 
            {
                python : 'rata - rata',
                php : 'rata - rata',
                java : 'rata - rata',
                javacript: 'pemula'
            }
        },
        interest_in_coding: true
    }

    console.log(biodata);
};

biodata('arya',19);
