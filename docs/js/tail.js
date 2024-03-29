function sort(tbody, compareFunction) {
	var rows = tbody.children;
	if(!rows || !rows[0] || rows.length == 1) return;
	var size = rows.length;
	var arr = [];
	for(var i = 0; i < size; i++) arr.push(rows[i]);
	arr.sort(compareFunction);
	for(var i = size - 1; i > 0; i--) tbody.insertBefore(arr[i-1], arr[i]);
}
function numConvert(s) {
	return s == Number(s) ? Number(s) : s;
}
function asc(idx) {
	return function(a, b) {
		var a_ = numConvert(a.children[idx].innerText);
		var b_ = numConvert(b.children[idx].innerText);
		return a_ > b_ ? 1 : -1;
	};
}
function desc(idx) {
	return function(a, b) {
		var a_ = numConvert(a.children[idx].innerText);
		var b_ = numConvert(b.children[idx].innerText);
		return a_ < b_ ? 1 : -1;
	};
}
function sortEvent(tbody, idx) {
	var mode = true;
	return function(e) {
		if(mode) sort(tbody,  asc(idx));
		else     sort(tbody, desc(idx));
		mode = !mode;
	};
}

const ts = document.getElementsByTagName('table');
for(let i = ts.length; i--; ) {
	const ths = ts[i].tHead.getElementsByTagName('th');
	for(let j = ths.length; j--; )
		ths[j].addEventListener("click", sortEvent(ts[i].tBodies[0], j));
}

const bad = "気になった点";
for (var idx = 1; idx < 70; ++idx) {
	const main = document.getElementById(`${bad}-${idx}`);
	if (main == null) {
		continue;
	}
	const list = main.nextElementSibling;
	if (list != null && list.tagName.toLowerCase() == "ul") {
		const insert = document.createElement("div");
		insert.className = "bad";
		main.parentNode.insertBefore(insert, list);
		list.parentNode.removeChild(list);
		insert.appendChild(list);
	}
}

const index = document.getElementById("お品書き");
const indexList = index.nextElementSibling;
const insertDetail = document.createElement("details");
const insertSummary = document.createElement("summary");
indexList.parentElement.insertBefore(insertDetail, indexList);
insertSummary.innerText = "お品書き(クリックして展開)";
insertDetail.appendChild(insertSummary);
indexList.parentElement.removeChild(indexList);
insertDetail.appendChild(indexList);

function toggle_bad() {
	Array.prototype.slice.call(document.querySelectorAll(".bad")).forEach(it => it.style.display == "none" ? it.style.display = "block" : it.style.display = "none")
	Array.prototype.slice.call(document.querySelectorAll(".bad_button")).forEach(it => {
		let isBad = document.querySelector('.bad').style.display == 'block';
		it.value = isBad ? "ネガティブな点を見る状態です" : "ネガティブな点を見ない状態です";
		if(isBad) 	{ it.classList.add(`btn-primary`); it.classList.remove(`btn-default`); }
		else		{ it.classList.remove(`btn-primary`); it.classList.add(`btn-default`); }
	});
}

Array.prototype.slice.call(document.querySelectorAll(".bad_button")).forEach(it => {
	it.onclick = toggle_bad;
	it.classList.add(`btn`);
	it.style = `font-size:15px;`;
});
toggle_bad();
toggle_bad();