// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// set a constant MAX_LENGTH to 80
const MAX_LENGTH = 60

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "header-python" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('header-python.header-python', function () {
		// The code you place here will be executed every time your command is executed
		//initialize
		const editor = vscode.window.activeTextEditor
		let cursorPosition = editor.selection.start

		//getting function block
		let wordRange = editor.document.getWordRangeAtPosition(cursorPosition)
		let functionName = editor.document.getText(wordRange)

		var wordLine = editor.document.lineAt(cursorPosition)
		var textRange = new vscode.Range(wordLine.range.start, wordLine.range.end)
		var wholeText = editor.document.getText(textRange)

		// make wholeText all uppercase
		let upperText = wholeText.toUpperCase()

		// get the length of upperText
		let length = upperText.length

		// initialize a string
		let commentString = ""
		for (let i = 0; i < MAX_LENGTH; i++) {
			commentString += "#"
		}
		let header = "\n" + commentString + "\n#"

		// get the number of spaces needed
		let spaces = (MAX_LENGTH - length - 2) / 2
		for (let i = 0; i < spaces; i++) {
			header += " "
		}
		header += upperText
		for (let i = 0; i < spaces-1; i++) {
			header += " "
		}
		header += "#\n"

		header += commentString + "\n"

		// replace the selected text with the header string
		editor.edit(editBuilder => {
			editBuilder.replace(textRange, header)
		})

		// Display a message box to the user
		vscode.window.showInformationMessage('Changed this value');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
