class SlideManager {

	constructor(json) {
		this.start = json.start;
		this.end = json.end;

		this.slides = [];
		this.currentSlide = 0;

		this.actions = {
			"changePage": (choice) => {this.changePage(choice);},
			"toggleSetting": (choice) => {this.toggleSetting(choice);}
		};

		this.types = {
			"choice": (json) => {return new Choice(json);},
		};

		for (let i = 0; i < json.pages.length; i++) {
			this.slides[i] = this.loadSlide(json.pages[i]);
		}
	}

	loadSlide(json){
		const slideClass = this.types[json.type];
		if(slideClass === undefined) {
			return new Slide(json);
		}
		return slideClass(json);
	}

	performAction(actionIndex) {
		const slide = this.getCurrentSlide();
		const choice = slide.choices[actionIndex];
		if(choice === undefined) return;

		const action = choice.action;

		const actionFunction = this.actions[action.type];
		if(actionFunction){
			actionFunction(choice);
		}
	}

	changePage(choice) {
		const action = choice.action;
		const newPageName = action.newPageName;
		if(newPageName.length == 0) return;
		
		const chosen = this.getSlideByName(newPageName);
		if(chosen != undefined){
			this.currentSlide = chosen;
		}
	}

	toggleSetting(choice) {
		const action = choice.action;
		toggleSetting(action.setting);
		[choice.text, choice.action.atlernativeText] = [choice.action.atlernativeText, choice.text];
	}

	render() {
		const slide = this.getCurrentSlide();
		slide.render();
	}

	getCurrentSlide() {
		return this.slides[this.currentSlide];
	}

	getSlideByName(name){
		let chosen = undefined;
		for (let i = 0; i < this.slides.length; i++) {
			let slide = this.slides[i];
			if(name == slide.name){
				chosen = i;
			}
		}
		return chosen;
	}

}