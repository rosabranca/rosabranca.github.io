let count = 1
document.getElementById('radio1').checked = true

setInterval(function () {
  nextImage()
}, 7000)

function nextImage() {
  count++
  if (count > 5) {
    count = 1
  }
  document.getElementById('radio' + count).checked = true
}

function verMaisEsportes() {
  if (document.getElementById('ulEsportes').style.display == 'block') {
    document.getElementById('ulEsportes').style.display = 'none'
    document.getElementById('verMaisEsportes').innerHTML = 'Ver mais'
  } else {
    document.getElementById('ulEsportes').style.display = 'block'
    document.getElementById('verMaisEsportes').innerHTML = 'Ver menos'
  }
}
function verMaisSocial() {
  if (document.getElementById('ulSocial').style.display == 'block') {
    document.getElementById('ulSocial').style.display = 'none'
    document.getElementById('verMaisSocial').innerHTML = 'Ver mais'
  } else {
    document.getElementById('ulSocial').style.display = 'block'
    document.getElementById('verMaisSocial').innerHTML = 'Ver menos'
  }
}
function verMaisCultura() {
  if (document.getElementById('ulCultura').style.display == 'block') {
    document.getElementById('ulCultura').style.display = 'none'
    document.getElementById('verMaisCultura').innerHTML = 'Ver mais'
  } else {
    document.getElementById('ulCultura').style.display = 'block'
    document.getElementById('verMaisCultura').innerHTML = 'Ver menos'
  }
}
function verMaisRel() {
  if (document.getElementById('ulRelEstud').style.display == 'block') {
    document.getElementById('ulRelEstud').style.display = 'none'
    document.getElementById('verMaisRel').innerHTML = 'Ver mais'
  } else {
    document.getElementById('ulRelEstud').style.display = 'block'
    document.getElementById('verMaisRel').innerHTML = 'Ver menos'
  }
}
function verMaisSaude() {
  if (document.getElementById('ulSaude').style.display == 'block') {
    document.getElementById('ulSaude').style.display = 'none'
    document.getElementById('verMaisSaude').innerHTML = 'Ver mais'
  } else {
    document.getElementById('ulSaude').style.display = 'block'
    document.getElementById('verMaisSaude').innerHTML = 'Ver menos'
  }
}
function verMaisImprensa() {
  if (document.getElementById('ulImprensa').style.display == 'block') {
    document.getElementById('ulImprensa').style.display = 'none'
    document.getElementById('verMaisImprensa').innerHTML = 'Ver mais'
  } else {
    document.getElementById('ulImprensa').style.display = 'block'
    document.getElementById('verMaisImprensa').innerHTML = 'Ver menos'
  }
}
function verMaisFinanceiro() {
  if (document.getElementById('ulFinanceiro').style.display == 'block') {
    document.getElementById('ulFinanceiro').style.display = 'none'
    document.getElementById('verMaisFinanceiro').innerHTML = 'Ver mais'
  } else {
    document.getElementById('ulFinanceiro').style.display = 'block'
    document.getElementById('verMaisFinanceiro').innerHTML = 'Ver menos'
  }
}
