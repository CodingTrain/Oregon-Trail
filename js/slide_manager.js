class SlideManager {
    constructor(json) {
        this.start = json.start;
        this.end = json.end;

        this.slides = [];
        this.currentSlide = 0;

        this.actions = {
            changePage: (actionData) => {
                this.changePage(actionData.action);
            },
            toggleSetting: (actionData) => {
                this.toggleSetting(actionData.action);
            },
            changeText: (actionData) => {
                this.changeText(actionData.action, actionData.actionIndex);
            },
            printOut: (actionData) => {
                print(actionData.action.print);
            },
        };

        /*
			printOut use like so:
			"action" : {
				"type": "printOut",
				"print": "Hello World!"
			}
			sometimes usefull for debuging
		*/

        this.types = {
            choice: (json) => {
                return new Choice(json);
            },
            info: (json) => {
                return new Info(json);
            },
        };

        for (let i = 0; i < json.pages.length; i++) {
            this.slides[i] = this.loadSlide(json.pages[i]);
        }

        if (this.start.length > 0) this.changePageTo(this.start);
    }

    loadSlide(json) {
        const slideClass = this.types[json.type];
        if (slideClass === undefined) {
            return new Slide(json);
        }
        return slideClass(json);
    }

    performActionByInput(input) {
        const slide = this.getCurrentSlide();

        const actionData = slide.getAction(input);

        this.performAction(actionData);
    }

    performAction(actionData) {
        if (actionData === undefined) return;

        const action = actionData.action;

        if (action === undefined) return;

        const actionFunction = this.actions[action.type];
        if (actionFunction !== undefined) {
            actionFunction(actionData);
            if (action.secondAction !== undefined) {
                actionData.action = action.secondAction;
                this.performAction(actionData);
            }
        }
    }

    // --- ACTIONS ---

    changePage(action) {
        const newPageName = action.newPageName;
        if (newPageName.length == 0) return;

        this.changePageTo(newPageName);
    }

    toggleSetting(action) {
        toggleSetting(action.setting);
    }

    changeText(action, actionIndex) {
        const slide = this.getCurrentSlide();
        action.current = (action.current + 1) % action.texts.length;
        const changeData = {
            text: action.texts[action.current],
            index: actionIndex,
        };
        slide.changeText(changeData);
    }

    // ---

    changePageTo(name) {
        const page = this.getSlideByName(name);
        if (page != undefined) {
            this.currentSlide = page;
        }
    }

    render() {
        const slide = this.getCurrentSlide();
        slide.render();
    }

    getCurrentSlide() {
        return this.slides[this.currentSlide];
    }

    getSlideByName(name) {
        let chosen = undefined;
        for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides[i];
            if (name == slide.name) {
                chosen = i;
            }
        }
        return chosen;
    }
}