
// Displays User input to page -----//
$(document).on("click", "button", () => {
    const userInput = $("input").val();
   
})

// Links to the Webpage your calling from --- //
$.get(`https://www.reddit.com/r/aww/.json`).then((data) => {

//A loop to display text, images, and post from the webpage ---- // 
    for(let post of data.data.children) {
        $("body").append(`
        <section class="post">
        <p class="title">${post.data.title}</p>
        <img src="${post.data.thumbnail}" >
        <a href="${post.data.url}"></a>
      </section>
        `)
    }})


