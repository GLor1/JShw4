function houdini() {
    var content= document.getElementById('content');
    
    var heading1 = document.createElement('h1');
    heading1.innerHTML = 'Happiness in your pocket';
    content.appendChild(heading1);

    var image = document.createElement('img');
    image.src = 'HappyCandiesLogo.png';
    content.appendChild(image);

    var p1 = document.createElement('p');
    p1.innerHTML = 'Welcome to the happiest candy shop.  We are proud to present our latest product "Sugar Happiness on Earth" or S.H.O.E for short.  Try a H.O.E today. '
    content.appendChild(p1);

    var image2 = document.createElement('img');
    image2.src = 'will.jpg';
    content.appendChild(image2);

    var H1 = document.createElement('H1');
    H1.innerHTML = 'Review';
    content.appendChild(H1);

    var p2 = document.createElement('p2');
    p2.innerHTML = "I loved the raisins.  I'm looking forward to trying out a S.H.O.E.  I've heard great reviews from my colleague Ben."
    content.appendChild(p2);

if (content.style.display == 'none') {
    content.style.display = 'block';
} else if (content.style.display =='block') {
    content.style.display = 'none';
}
document.getElementById('con').style.visibility = 'hidden';
} 