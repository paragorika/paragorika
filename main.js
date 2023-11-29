const main = document.querySelector('.dynamic')
const starSource = document.querySelector('.four-pointed-star')

main.onclick = (event) => {
    console.log(event.clientY)

    const clone = starSource.cloneNode(true)
    clone.style.left = `${event.clientY}px`
    main.append(clone)
}