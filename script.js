const bodyPointer = document.querySelector('body');
const sites = [
    {
        "address": "https://apple.com",
        "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"
    },
    {
        "address": "https://google.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
    },
    {
        "address": "https://microsoft.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
    },

];

for (let sitesIndex = 0; sitesIndex < sites.length; sitesIndex++){
    const newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', sites[sitesIndex].address);
    newAnchor.setAttribute('target', '_blank');

    const newImage = document.createElement('img');
    newImage.setAttribute('src', sites[sitesIndex].logo);
    newImage.setAttribute('style', "width: 100px; height: auto; margin: 50px;");

    newAnchor.appendChild(newImage);

    document.querySelector('body').appendChild(newAnchor);
}