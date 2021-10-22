export function htmlToText(text: string) {
    return text.replaceAll("<p>" , "").replaceAll("</p>", "\n\n").replaceAll("<br />", "\n").replaceAll("&aelig;", "æ").replaceAll("&oslash;", "ø").replaceAll("&aring;", "å");
}

export function htmlToTextWithHighlight(text: string, highlight: string) {
    return text.replaceAll(highlight, `<span class='highlight'>${highlight}</span>`)    
}

export function textToHtml(text: string) {
            return text.split("\n\n").map((paragraph, i) => "<p>" + paragraph + "</p>").join("").replaceAll("\n", "<br />");
}
