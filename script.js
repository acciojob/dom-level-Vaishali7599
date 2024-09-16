//your JS code here. If required.
//your JS code here. If required.
let change_color = document.getElementById("change_button")
let reset = document.getElementById("reset_button");

change_color.addEventListener("click", (e) => {
    e.preventDefault()
    var blockId = document.getElementById("block_id").value;
    console.log(blockId);
    var color = document.getElementById("colour_id").value;
    console.log(color);

    var cell = document.getElementById(blockId);

    cell.style.backgroundColor = color;
})

reset.addEventListener("click", (e) => {
    e.preventDefault();

    var gridClas = document.querySelectorAll(".grid-item");

    gridClas.forEach(t => {
        t.style.backgroundColor = 'transparent'
    })
})


