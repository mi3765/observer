// spread構文でを使い配列で取り出す
// spread構文を使わないとNodeListで取り出せる
const imagesItems = [...document.querySelectorAll('.img-wrap')];
// console.log(imagesItems);
const titles = [...document.querySelectorAll('h2')];
const titleMessage = document.querySelector('.title');

// 監視対象になった瞬間、activeを付加する関数
const setItemActive = (entries) => {
    // console.log(entries);
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}

let options = {
    rootMargin: '0px',
    
    // 閾値 このラインを超えた瞬間 observe
    threshold: 0.5,
};

// どこにいるのか監視する。そして特定の位置に来たら関数を呼ぶ
const observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);

// img-wrapは偶数と奇数で出現する場所を変える
imagesItems.map((item, index) => {
    // console.log(item, index);
    item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
    index % 2 === 0 ? (item.style.left = '55%') : (item.style.left = '5%');
    observer.observe(item);
});

titles.map((title, index) => {
    index % 2 === 0 ? (title.style.left = '45%') : (title.style.left = '35%');
    observer.observe(title);
});