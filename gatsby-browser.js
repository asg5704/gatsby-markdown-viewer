/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
*/
import myMarked from 'marked';


 // You can delete this file if you're not using it
exports.onInitialClientRender = () => {
  runMDParse();
}

function runMDParse() {
  //Set myMarked options
  myMarked.setOptions({

    breaks: true,
    sanitize: true,

    smartypants: true,
    renderer: new myMarked.Renderer()
  })
  //Set default value to render on initial load
  const defVal = `
    # Welcome to my React Markdown Previewer!

    ## This is a sub-heading...
    ### And here's some other cool stuff:

    Heres some code, \`<div></div>\`, between 2 backticks.

    \`\`\`
    // this is multi-line code:

    function anotherExample(firstLine, lastLine) {
      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
      }
    }
    \`\`\`

    You can also make text **bold**... whoa!
    Or _italic_.
    Or... wait for it... **_both!_**
    And feel free to go crazy ~~crossing stuff out~~.

    There's also [links](https://www.freecodecamp.com), and
    > Block Quotes!

    And if you want to get really crazy, even tables:

    Wild Header | Crazy Header | Another Header?
    ------------ | ------------- | -------------
    Your content can | be here, and it | can be here....
    And here. | Okay. | I think we get it.

    - And of course there are lists.
      - Some are bulleted.
        - With different indentation levels.
            - That look like this.


    1. And there are numbererd lists too.
    1. Use just 1s if you want!
    1. But the list goes on...
    - Even if you use dashes or asterisks.
    * And last but not least, let's not forget embedded images:

    ![React Logo w/ Text](https://goo.gl/Umyytc)`;

  //
  // let preview = document.getElementById('preview');
  // console.log(myMarked(defVal));

  // preview.innerHTML = myMarked(defVal);
  //Grab textarea#editor
  let editor = document.getElementById('editor')
  //Set textarea#editor value to the defaultValue
  editor.textContent = defVal;

  // let preview = document.getElementById('preview');
  // preview.textContent = myMarked(editor.textContent);
  console.log(myMarked(defVal));

}


function runUpdate() {

}

