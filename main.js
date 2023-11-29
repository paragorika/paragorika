const main = document.querySelector('.dynamic')
const starSource = document.querySelector('.four-pointed-star')

main.onclick = (event) => {
    console.log(event.clientY)

    const clone = starSource.cloneNode(true)
    const y = Math.random
    clone.style.left = `${event.clientY}px`
    main.append(clone)
}