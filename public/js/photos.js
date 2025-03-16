var imgs = document.getElementsByTagName("img");
for (var i = 0; i < imgs.length; i++) {
    // imgs[i].num = i;
    imgs[i].style.animationDelay = i  + "s";

}
