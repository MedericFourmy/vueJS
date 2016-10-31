
let folder = 'cat_pictures';
let imgs = ['kitty1.jpg',
		'kitty2.jpg',
		'kitty3.jpg',
		'kitty4.jpg',
		'kitty5.jpg'];


var model = {
	cats: [],

	init: function(){
		for (let img of imgs){
			this.cats.push({
				name: img.split('.')[0],
				path: folder + "/" + img,
				count: 0 
			});
		}
	},

	addCount: function(name){
		let cat = octopus.getCatByName(name);
		cat.count += 1;
	}
}

var octopus = {
	init: function(){
		model.init();
		viewSelect.init();
		viewCat.init()
	},

	getCatByName: function(name){
		function filterName(name){
			return function(elt){
				return elt.name ? elt.name === name : false; 
			}
		};
		return model.cats.filter(filterName(name))[0];
	},


	getCatNames: function(){
		let cNames = [];
		for (let cat of model.cats){
			cNames.push(cat.name);
		}
		return cNames;
	},

	addCount: function(name){
		model.addCount(name);
		viewCat.render(name);
	}

}

var viewSelect = {
	init: function(){
		this.select = $("#cats-select");
		let catNames = octopus.getCatNames();
		let htmlStr = '';
		for (let name of catNames){
			htmlStr += '<option value="' + name + '">' + name + '</option>';
		};
		this.select[0].innerHTML = htmlStr;
		for (let opt of this.select[0].options){
			opt.addEventListener("click", function(){
				viewCat.chooseCat(this.value);
			})
		};
	}
}

var viewCat = {
	init: function(){
		this.catView = $('#cat-view');
		this.catName = $('#cat-name');
		this.catImg = $('#cat-img');
		this.clickNb = $('#click-nb');

		this.chooseCat('kitty3');
	},

	chooseCat: function(name){
		this.catImg[0].addEventListener('click', function(){
			octopus.addCount(name)
		});
		this.render(name);
	},

	render: function(name){
		let cat = octopus.getCatByName(name);
		this.catName[0].textContent = cat.name;
		this.catImg[0].src = cat.path;
		this.clickNb[0].textContent = cat.count;
	}

}
octopus.init()