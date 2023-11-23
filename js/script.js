function processTextWithoutNumbers() {
  processText("textInput", "formattedText", "messageErr");
}

function processTextWithNumbers() {
  processTextnu("numberInput", "formattedNumberText");
}

function removeProcessedText(outputId, inputID) {
  document.getElementById(outputId).innerHTML = "";
  document.getElementById(inputID).value = "";
}

function copyText(outputId, buttonId, messageId) {
  const formattedText = document.getElementById(outputId);
  const textArea = document.createElement("textarea");
  textArea.value = formattedText.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  // Change button text briefly to indicate copying

  const messageErr = document.getElementById(messageId);
  // console.log(messageErr);
  if (formattedText.innerText == "") {
    messageErr.innerHTML = "Press Process Text please !";
  } else {
    document.getElementById(buttonId).innerHTML = "Copied!";
    setTimeout(() => {
      document.getElementById(buttonId).innerHTML = "Copy Text";
    }, 1500);
  }
  // document.getElementById("processtext").addEventListener("click", function () {
  //   document.getElementById(messageId).innerHTML = "";
  // });
}

function processText(inputId, outputId, messageId) {
  const messageErr = document.getElementById(messageId);
  const inputText = document.getElementById(inputId).value;

  if (inputText.trim() === "") {
    messageErr.innerHTML = "Fill Text Area Please !";
  } else {
    let formattedText = inputText;

    // Add line breaks after numbers at the beginning of a sentence
    formattedText = formattedText.replace(/(\d+)\.\s+/g, "$1.<br>");

    // Replace HTML line breaks with new lines
    formattedText = formattedText.replace(/<br>/g, "\n");

    // Add line breaks after periods, excluding those followed by a colon
    formattedText = formattedText.replace(/([^:،؛؟])(\.)(\s|$)/g, "$1$2\n\n");

    // If there are no numbers, add a new line above the existing text
    if (!formattedText.match(/\d+\./)) {
      formattedText = "" + formattedText;
    }

    document.getElementById(outputId).innerHTML = formattedText;
  }
  document.getElementById("textInput").addEventListener("input", function () {
    document.getElementById(messageId).innerHTML = "";
  });
}

function processTextnu(inputId, outputId) {
  const inputText = document.getElementById(inputId).value;
  let formattedText = inputText;

  // Add line breaks after numbers at the beginning of a sentence
  formattedText = formattedText.replace(/(\d+)\.\s+/g, "$1.");

  // Replace HTML line breaks with new lines
  formattedText = formattedText.replace(/<br>/g, "\n");

  // Add line breaks after periods, excluding those followed by a colon
  formattedText = formattedText.replace(/([^:،؛؟])(\.)(\s|$)/g, "$1$2\n");

  // If there are no numbers, add a new line above the existing text
  if (!formattedText.match(/\d+\./)) {
    formattedText = "" + formattedText;
  }
  formattedText = formattedText.replace(/(\d+)\.(.*?):/g, "$1.<b>$2</b>:");

  document.getElementById(outputId).innerHTML = formattedText;
}
