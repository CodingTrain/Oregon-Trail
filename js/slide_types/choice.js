class Choice extends Slide{

	render(){
		this.renderStart();

		if (this.img) {
			this.renderImg(this.img);
			this.renderBar();
		} else {
			this.renderBar();
			this.newLine();
			this.renderText(0, this.title);
			this.newLine();
		}
		this.renderText(0, 'You may:');
		this.newLine();
		this.renderListText(1, this.choices);
		this.newLine();
		this.renderText(0, this.prompt);

		this.updateCursor();

		this.newLine();
		this.renderBar();
	}

}