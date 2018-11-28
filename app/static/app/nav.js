function main() {
    // $('#nav-view-submit').click(() => {
    //     location = '/link/' + encodeURI($('#nav-view-short-code-input').val());
    // });

    var button = document.getElementById("nav-view-submit")
    button.addEventListener("click", function () {
        var input = document.getElementById("nav-view-short-code-input").value

        location = '/link/' + encodeURI(input)
    })
}

// $(main);
main()
