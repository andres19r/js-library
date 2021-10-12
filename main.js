function Book(title, author, pages, readed){
	this.title = title
	this.author = author
	this.pages = pages
	this.readed = readed ? 'read' : 'not reade yet'
	this.info = function(){
		return `${title} by ${author}, ${pages} pages, ${readed}`
	}
}
