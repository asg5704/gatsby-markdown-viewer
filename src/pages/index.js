import React from "react";
import myMarked from 'marked';

const IndexPage = () => {

  myMarked.setOptions({
    gfm: true,
    breaks: false,
    sanitize: true,
    tables: true,
    renderer: new myMarked.Renderer()
  })

  const defVal = `
  # Welcome to my GatsbyJS Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:
  function Person(name, exp, skills) {
    this.name = name;
    this.exp = exp;
    this.skills = skills;

    this.getName = function() {
      return \`My name is \${name}\`;
    }
    this.getExp = function() {
      return \`I have \${exp} years of experience\`
    }
    this.getSkills = function() {
      this.skills.forEach(skill => console.log(skill));
    }
  }

  Person.prototype.hasJob = function() {
    if(this.exp <= 2) {
      return "You don't have enough experience"
    }
    return "You are over-qualified"
  }

  var alex = new Person("Alexander", 2, ['html', 'css', 'javascript', 'nodejs', 'vuejs', 'react'])
  \`\`\`

  You can also make text **bold**, _italic_, **_both!_**

  You can even start ~~crossing stuff out~~.

  There's also [links](https://alexandergarcia.me), and
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

  ![GatsbyJS Logo w/ Text](https://goo.gl/kjwtji)`;

  const enterMD = () => {
    //Grabs textarea#editor and assigns it to editorVal variable
    let editorVal = document.getElementById('editor');
    //Grabs div#preview and assigns it to md variable
    let md = document.getElementById('preview')
    //Sets div#preview innerHTML to the returned value of myMarked function

    return md.innerHTML = myMarked(editorVal.value);
  };

  const createUpdateOnce = () => {
    return {
      __html: myMarked(defVal)
    }
  }

  return (
    <div id="md-container" className="container-full flex">
      <label className="hidden">Editor</label>
      <textarea
        id="editor"
        name="editor"
        className="bg-purple-lightest min-h-screen w-1/3 p-8"
        onChange={enterMD}
        defaultValue={defVal}
      >
      </textarea>
      <main
        id="preview"
        className="h-full w-2/3 p-8"
        dangerouslySetInnerHTML={createUpdateOnce()}
      ></main>
  </div>
  )
};

export default IndexPage;
