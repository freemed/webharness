
function run() {
	webClient.setJavaScriptEnabled(false);
	var page1 = webClient.getPage("https://www.facebook.com");
	var form = page1.getForms().get(0);
	var button = form.getInputsByValue("Log In").get(0);
	var textField = form.getInputByName("email");
	textField.setValueAttribute("email@server.com");
	var textField2 = form.getInputByName("pass");
	textField2.setValueAttribute("password");
	var page2 = button.click();
	return page2;
}

