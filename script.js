function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Preencha os dados')
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido')
        }
        if (i < f) {
        for(let c = i; c <= f; c += p){
            res.innerHTML+= ` ${c}  \u{27A1} `
        }
        } else{
            for(let c = i; c >= f; c -= p){
            res.innerHTML+= ` ${c}  \u{27A1} `
        }}

        res.innerHTML += `\u{1F519}`
    }
}