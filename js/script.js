const input = document.querySelectorAll('input');
const jumlah = document.getElementById('jumlah');
let click = 0;
document.addEventListener('input', (e) => {
    jumlah.innerHTML = "";
let num = 0;
for (let i in input) {
    switch (input[i].className) {
        case 'ppkn':
            switch (input[i].name) {
                case "s1":
                    if(input[0].value !== ""){
                        num += parseFloat(input[0].value);
                    }
                    break;
                case "s2":
                    if(input[1].value !== ""){
                        num += parseFloat(input[1].value);
                    }
                    break;
                case "s3":
                    if(input[2].value !== ""){
                        num += parseFloat(input[2].value);
                    }
                    break;
                case "s4":
                    if(input[3].value !== ""){
                        num += parseFloat(input[3].value);
                    }
                    break;
                case "s5":
                    if(input[4].value !== ""){
                        num += parseFloat(input[4].value);
                    }
                    break;
            }
            break;
        case 'agama':
            switch (input[i].name) {
                case "s1":
                    if(input[5].value !== ""){
                        num += parseFloat(input[5].value);
                    }
                    break;
                case "s2":
                    if(input[6].value !== ""){
                        num += parseFloat(input[6].value);
                    }
                    break;
                case "s3":
                    if(input[7].value !== ""){
                        num += parseFloat(input[7].value);
                    }
                    break;
                case "s4":
                    if(input[8].value !== ""){
                        num += parseFloat(input[8].value);
                    }
                    break;
                case "s5":
                    if(input[9].value !== ""){
                        num += parseFloat(input[9].value);
                    }
                    break;
            }
            break;
        case 'mtk':
            switch (input[i].name) {
                case "s1":
                    if(input[10].value !== ""){
                        num += parseFloat(input[10].value);
                    }
                    break;
                case "s2":
                    if(input[11].value !== ""){
                        num += parseFloat(input[11].value);
                    }
                    break;
                case "s3":
                    if(input[12].value !== ""){
                        num += parseFloat(input[12].value);
                    }
                    break;
                case "s4":
                    if(input[13].value !== ""){
                        num += parseFloat(input[13].value);
                    }
                    break;
                case "s5":
                    if(input[14].value !== ""){
                        num += parseFloat(input[14].value);
                    }
                    break;
            }
            break;
        case 'ipa':
            switch (input[i].name) {
                case "s1":
                    if(input[15].value !== ""){
                        num += parseFloat(input[15].value);
                    }
                    break;
                case "s2":
                    if(input[16].value !== ""){
                        num += parseFloat(input[16].value);
                    }
                    break;
                case "s3":
                    if(input[17].value !== ""){
                        num += parseFloat(input[17].value);
                    }
                    break;
                case "s4":
                    if(input[18].value !== ""){
                        num += parseFloat(input[18].value);
                    }
                    break;
                case "s5":
                    if(input[19].value !== ""){
                        num += parseFloat(input[19].value);
                    }
                    break;
            }
            break;
        case 'ips':
            switch (input[i].name) {
                case "s1":
                    if(input[20].value !== ""){
                        num += parseFloat(input[20].value);
                    }
                    break;
                case "s2":
                    if(input[21].value !== ""){
                        num += parseFloat(input[21].value);
                    }
                    break;
                case "s3":
                    if(input[22].value !== ""){
                        num += parseFloat(input[22].value);
                    }
                    break;
                case "s4":
                    if(input[23].value !== ""){
                        num += parseFloat(input[23].value);
                    }
                    break;
                case "s5":
                    if(input[24].value !== ""){
                        num += parseFloat(input[24].value);
                    }
                    break;
            }
            break;
        case 'inggris':
            switch (input[i].name) {
                case "s1":
                    if(input[25].value !== ""){
                        num += parseFloat(input[25].value);
                    }
                    break;
                case "s2":
                    if(input[26].value !== ""){
                        num += parseFloat(input[26].value);
                    }
                    break;
                case "s3":
                    if(input[27].value !== ""){
                        num += parseFloat(input[27].value);
                    }
                    break;
                case "s4":
                    if(input[28].value !== ""){
                        num += parseFloat(input[28].value);
                    }
                    break;
                case "s5":
                    if(input[29].value !== ""){
                        num += parseFloat(input[29].value);
                    }
                    break;
            }
            break;
        case 'pjok':
            switch (input[i].name) {
                case "s1":
                    if(input[30].value !== ""){
                        num += parseFloat(input[30].value);
                    }
                    break;
                case "s2":
                    if(input[31].value !== ""){
                        num += parseFloat(input[31].value);
                    }
                    break;
                case "s3":
                    if(input[32].value !== ""){
                        num += parseFloat(input[32].value);
                    }
                    break;
                case "s4":
                    if(input[33].value !== ""){
                        num += parseFloat(input[33].value);
                    }
                    break;
                case "s5":
                    if(input[34].value !== ""){
                        num += parseFloat(input[34].value);
                    }
                    break;
            }
            break;
        case 'sbk':
            switch (input[i].name) {
                case "s1":
                    if(input[35].value !== ""){
                        num += parseFloat(input[35].value);
                    }
                    break;
                case "s2":
                    if(input[36].value !== ""){
                        num += parseFloat(input[36].value);
                    }
                    break;
                case "s3":
                    if(input[37].value !== ""){
                        num += parseFloat(input[37].value);
                    }
                    break;
                case "s4":
                    if(input[38].value !== ""){
                        num += parseFloat(input[38].value);
                    }
                    break;
                case "s5":
                    if(input[39].value !== ""){
                        num += parseFloat(input[39].value);
                    }
                    break;
            }
            break;
            case 'indo':
            switch (input[i].name) {
                case "s1":
                    if(input[40].value !== ""){
                        num += parseFloat(input[40].value);
                    }
                    break;
                case "s2":
                    if(input[41].value !== ""){
                        num += parseFloat(input[41].value);
                    }
                    break;
                case "s3":
                    if(input[42].value !== ""){
                        num += parseFloat(input[42].value);
                    }
                    break;
                case "s4":
                    if(input[43].value !== ""){
                        num += parseFloat(input[43].value);
                    }
                    break;
                case "s5":
                    if(input[44].value !== ""){
                        num += parseFloat(input[44].value);
                    }
                    break;
            }
            break;
    }
    
}
jumlah.innerHTML += num/45;
})