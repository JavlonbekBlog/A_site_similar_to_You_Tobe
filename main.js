let currentIndex
let currentCartons = []
let lastAddedItemIndex

let allCartons = [
    {
        video: "https://www.youtube.com/embed/_2qEC0xyM6I",
        title: "Kungfu panda 1 Uzbek tilida",
        width: "500",
        height: "300",
    },
    {
        video: "https://www.youtube.com/embed/VhHufgN-Jq8",
        title: "Kunfu panda 2 uzbek tilida",
        width: "500",
        height: "300",
    },
    {
        video: "https://www.youtube.com/embed/kLkqPqAInmw",
        title: "Kunfu panda 3 uzbek tilida",
        width: "500",
        height: "300",
    },
    {
        video: "https://www.youtube.com/embed/cN1EqMSvvDo",
        title: "Kunfu panda 4 uzbek tilida",
        width: "500",
        height: "300",
    },
    {
        video: "https://www.youtube.com/embed/PjWuZxd0VKA",
        title: "Kunfu panda 5 uzbek tilida",
        width: "500",
        height: "300",
    },
    {
        video: "https://www.youtube.com/embed/1oqnq8_J5nk",
        title: "Kunfu panda 6 uzbek tilida",
        width: "500",
        height: "300",
    },
    {
        video: "https://www.youtube.com/embed/Jy2_J5WCzDY",
        title: "Kunfu panda 7 uzbek tilida",
        width: "500",
        height: "300",
    },
    {
        video: "https://www.youtube.com/embed/Oa-8hNfELm8",
        title: "Kunfu panda 8 uzbek tilida",
        width: "500",
        height: "300",
    },
    {
        video: "https://www.youtube.com/embed/AhbCYVILusc",
        title: "Kunfu panda 9 uzbek tilida",
        width: "500",
        height: "300",
    },
    {
        video: "https://www.youtube.com/embed/QotYvPy0zoQ",
        title: "Kunfu panda 10 uzbek tilida",
        width: "500",
        height: "300",
    },
    {
        video: "https://www.youtube.com/embed/vgTolbbjiPU",
        title: "Kunfu panda 11 uzbek tilida",
        width: "500",
        height: "300",
    },
    {
        video: "https://www.youtube.com/embed/wBC8Cnv_R5w",
        title: "Kunfu panda 12 uzbek tilida",
        width: "500",
        height: "300",
    },
]
let cartonsSection = document.querySelector(".cartons")

function addCarton() {
    let title = document.querySelector(".title").value
    let video = document.querySelector(".video").value

    allCartons.unshift({
        title: title,
        video: video
    })

    render(allCartons)
    document.querySelector(".title").value = ""
    document.querySelector(".video").value = ""
}
render(allCartons)
function render(allCartons) {
    currentCartons = allCartons.slice(0, 3)
    lastAddedItemIndex = 2
    reRender(currentCartons)
}


function reRender(newCartons) {
    cartonsSection.innerHTML = ""
    newCartons.map((item, index) => {

        let title = document.createElement("a")
        title.innerText = item.title.slice(0, 20) + ".."
        title.href = item.video
        title.style.color = "red"

        let video = document.createElement("iframe")
        video.src = item.video
        video.width = "100%"
        video.height = item.height
        video.setAttribute("class","btn btn-hover")

        let col = document.createElement("div")
        col.classList.add("col-4")


        let buttonDelete = document.createElement("button")
        buttonDelete.setAttribute("class", "btn btn-primary")
        buttonDelete.setAttribute("onclick", `buttonDelete(${index})`)
        buttonDelete.innerText = "Delete"


        let buttonEdit = document.createElement("button")
        buttonEdit.setAttribute("class", "btn btn-warning")
        buttonEdit.setAttribute("onclick", `buttonEdit(${index})`)
        buttonEdit.innerText = "Edit"


        let card = document.createElement("div")
        card.classList.add("card", "m-3", "p-3")

        let h5 = document.createElement("h5")
        let b = document.createElement("b")
        let i = document.createElement("i")
        b.appendChild(title)
        i.appendChild(b)
        h5.appendChild(i)

        card.appendChild(video)
        card.appendChild(h5)
        card.appendChild(buttonEdit)
        card.appendChild(buttonDelete)



        col.appendChild(card)

        cartonsSection.appendChild(col)

    })
}

function loadMore() {
    for (let i = lastAddedItemIndex + 1; i < lastAddedItemIndex + 4; i++) {
        if (allCartons[i] != undefined) currentCartons.push(allCartons[i])
    }

    if (allCartons.length === currentCartons.length) {
        document.querySelector(".load-more").classList.add("d-none")
    }
    lastAddedItemIndex = lastAddedItemIndex + 3
    reRender(currentCartons)

}


function buttonDelete(index) {
    allCartons.splice(index, 1)
    reRender(allCartons)
    render(allCartons)

    document.querySelector(".title").value = ""
    document.querySelector(".video").value = ""
}

function tahrirla() {

    let title = document.querySelector(".title").value
    let video = document.querySelector(".video").value

    allCartons[currentIndex].title = title
    allCartons[currentIndex].video = video

    reRender(currentCartons)

    document.querySelector(".title").value = ""
    document.querySelector(".video").value = ""

}

function buttonEdit(index) {
    currentIndex = index
    document.querySelector(".title").value = allCartons[index].title
    document.querySelector(".video").value = allCartons[index].video

}

function clear(){
    document.querySelector(".title").value = ""
    document.querySelector(".video").value = ""

}
