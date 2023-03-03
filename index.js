import { createPatch } from "diff";
import { parse } from "diff2html";
import { Diff2HtmlUI } from "diff2html/lib/ui/js/diff2html-ui";
import "diff2html/bundles/css/diff2html.min.css";

export function drawDiff({fileName='',oldObj,newObj,domId,options={},context=99999}){

    const oldString = JSON.stringify(oldObj, null, 2);
    const newString = JSON.stringify(newObj, null, 2);
    const diffStr = createPatch(fileName,oldString, newString,'','', { context })
    const diffJson = parse(diffStr);

    var targetElement = document.getElementById(domId);
    var configuration = {
      drawFileList: false,
      fileListToggle: false,
      fileListStartVisible: true,
      fileContentToggle: true,
      matching: 'lines',
      outputFormat: 'side-by-side',
      highlight: true,
      renderNothingWhenEmpty: false,
      ...options
    };
    var diff2htmlUi = new Diff2HtmlUI(targetElement, [diffJson[0]], configuration);
    diff2htmlUi.draw();
    diff2htmlUi.highlightCode();
}