const buttons = document.querySelectorAll('.btn');
const httpLink = 'https://www.youtube.com/watch?v=7voSN82FGF0';
const linkWithoutHttp = 'developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions';

function redirectToLink(link) {
    const protocol = /^http[s]?:\/\//i;

    if (!protocol.test(link)) {
        link = 'https://' + link;
    }

    window.location.href = link;
}

buttons[0].addEventListener('click', function() {
    redirectToLink(httpLink)
})

buttons[1].addEventListener('click', function() {
    redirectToLink(linkWithoutHttp)
})



