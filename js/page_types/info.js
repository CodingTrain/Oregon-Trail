class Info extends Page {
    loadData(data) {
        super.loadData(data);

        this.loadVariable(data, "prompt");
        this.loadVariable(data, "action");
        this.loadVariable(data, "text");
    }

    getAction(input) {
        if (input !== " ") return;
        return {
            action: this.action,
        };
    }

    render() {
        this.renderStart();

        if (this.img) {
            this.renderImg(this.img);
            this.renderBar();
            this.newLine();
        } else {
            this.renderBar();
            this.newLine();
            this.renderText(0, this.title);
            this.newLine();
        }

        this.newLine();
        this.renderText(0, this.text);
        this.newLine();
        this.renderBar();
        this.newLine();
        this.renderText(3, this.prompt);

        this.updateCursor();
    }
}