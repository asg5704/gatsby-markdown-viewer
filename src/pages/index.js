import React from "react";
import myMarked from 'marked';

const IndexPage = () => {

  myMarked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: true,
    tables: true,
    renderer: new myMarked.Renderer()
  })

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

  const enterMD = () => {
    //Grabs textarea#editor and assigns it to editorVal variable
    let editorVal = document.getElementById('editor');
    //Grabs div#preview and assigns it to md variable
    let md = document.getElementById('preview')
    //Sets div#preview innerHTML to the returned value of myMarked function
    if(editorVal.defaultValue) {
      return md.innerHTML = myMarked(editorVal.defaultValue);
    }
    return md.innerHTML = myMarked(editorVal.value);
  };

  return (
    <div id="md-container" className="container flex">
      <textarea
        id="editor"
        name="editor"
        className="bg-purple-lightest min-h-screen w-1/2 p-8"
        onChange={enterMD}
        defaultValue={defVal}
      >
      </textarea>
      <div id="preview" className="h-full w-5/8 p-8"></div>
  </div>
  )
};

export default IndexPage;
