const listaSpesa = [`Pane`, `Succo`,`Uova`,`Carne`, `Patate`];
const itemSpesaEl= document.getElementById(`item-spesa`);
let i = 0;
while(i < listaSpesa.length) {
    const pEl = document.createElement(`p`);
    pEl.innerHTML = listaSpesa[i];
    itemSpesaEl.append(pEl)
    i++
}