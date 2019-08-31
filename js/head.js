const title = "第11回ウディコン全作品レビュー";
const titleWithName = `${title} | narratology`;
const disc = "このレビューは個人の独断と偏見で書かれた、第11回ウディコン全作品に対するレビューです。";
const url = "https://expine.github.io/WodiconReview2019/";
const image = "https://trap.jp/content/images/2018/08/wall.png";
const head = document.getElementsByTagName("head")[0];
// 言語
document.children[0].lang = "ja";
// タイトル修正
head.querySelector("title").innerText = titleWithName;
// メタタグ修正
head.querySelectorAll("meta").forEach(it => {
    switch(it.getAttribute("property")) {
        case "og:title": it.content = titleWithName; break;
        case "og:locale": it.content = "ja_JP"; break;
        case "og:description": it.content = disc; break;
        case "og:site_name": it.content = "ウディコンレビュー"; break;
    }
    switch(it.name) {
        case "description": it.content = disc; break;
    }
});
head.insertAdjacentHTML(`beforeend`, `<link rel="canonical" href="${url}" />`);
// メタタグ挿入
head.insertAdjacentHTML(`beforeend`, `<meta property="og:type" content="article">`);
head.insertAdjacentHTML(`beforeend`, `<meta property="og:url" content="${url}">`);
head.insertAdjacentHTML(`beforeend`, `<meta property="og:image" content="${image}">`);
head.insertAdjacentHTML(`beforeend`, `<meta property="og:image:width" content="1280">`);
head.insertAdjacentHTML(`beforeend`, `<meta property="og:image:height" content="400">`);
head.insertAdjacentHTML(`beforeend`, `<meta property="article:tag" content="ウディタ">`);
head.insertAdjacentHTML(`beforeend`, `<meta property="article:tag" content="ウディコン">`);
head.insertAdjacentHTML(`beforeend`, `<meta property="article:tag" content="レビュー">`);
// Twitter対応
head.insertAdjacentHTML(`beforeend`, `<meta name="twitter:card" content="summary_large_image">`);
head.insertAdjacentHTML(`beforeend`, `<meta name="twitter:title" content="${title}">`);
head.insertAdjacentHTML(`beforeend`, `<meta name="twitter:description" content="${disc}">`);
head.insertAdjacentHTML(`beforeend`, `<meta name="twitter:url" content="${url}">`);
head.insertAdjacentHTML(`beforeend`, `<meta name="twitter:image" content="${image}">`);
head.insertAdjacentHTML(`beforeend`, `<meta name="twitter:label1" content="Written by">`);
head.insertAdjacentHTML(`beforeend`, `<meta name="twitter:data1" content="narratology">`);
head.insertAdjacentHTML(`beforeend`, `<meta name="twitter:label2" content="Filed under">`);
head.insertAdjacentHTML(`beforeend`, `<meta name="twitter:data2" content="ウディタ, ウディコン, レビュー">`);
head.insertAdjacentHTML(`beforeend`, `<meta name="twitter:creator" content="@_narratology">`);