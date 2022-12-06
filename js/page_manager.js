class PageManager {
  constructor(json) {
    this.start = json.start;
    this.end = json.end;
    this.defaultPage = json.default;

    this.pages = [];
    this.currentPage = 0;

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
      goToStart: (actionData) => {
        this.changeToStartPage();
      },
      changeLanguage: (actionData) => {
        SETTINGS.language = actionData.action.language;
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
        return new Choice(json, this.defaultPage);
      },
      info: (json) => {
        return new Info(json, this.defaultPage);
      },
    };

    for (let i = 0; i < json.pages.length; i++) {
      this.pages[i] = this.loadPage(json.pages[i]);
    }

    this.changeToStartPage();
  }

  changeToStartPage() {
    if (this.start.length > 0) this.changePageTo(this.start);
  }

  loadPage(json) {
    const pageClass = this.types[json.type];
    if (pageClass === undefined) {
      return new Page(json, this.defaultPage);
    }
    return pageClass(json);
  }

  performActionByInput(input) {
    const page = this.getCurrentPage();

    const actionData = page.getAction(input);

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
    const page = this.getCurrentPage();
    action.current = (action.current + 1) % action.texts.length;
    const changeData = {
      text: action.texts[action.current],
      index: actionIndex,
    };
    page.changeText(changeData);
  }

  // ---

  changePageTo(name) {
    const page = this.getPageByName(name);
    if (page != undefined) {
      this.currentPage = page;
    }
  }

  render() {
    const page = this.getCurrentPage();
    page.render();
  }

  getCurrentPage() {
    return this.pages[this.currentPage];
  }

  getPageByName(name) {
    let chosen = undefined;
    for (let i = 0; i < this.pages.length; i++) {
      let page = this.pages[i];
      if (name == page.name) {
        chosen = i;
      }
    }
    return chosen;
  }
}
