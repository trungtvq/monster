import React from 'react';
import katex from 'katex/dist/katex.mjs'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import 'katex/dist/katex.min.css'
class SunEditorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        content :""
    }
    handleChange=content=>{
        this.setState({ content});
        console.log(content)
    }
    render() {
      
        return (
            <div>
                <SunEditor 
                onChange={this.handleChange}
                width="100%"
                placeholder="Please type here..."

                setOptions={{
                    height: 200,
                    katex: katex,

                    buttonList:  [
                        ['undo', 'redo',
                        'font', 'fontSize', 'formatBlock',
                        'paragraphStyle', /*'blockquote',*/
                        'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript',
                        'fontColor', 'hiliteColor', 'textStyle',
                        'removeFormat',
                        'outdent', 'indent',
                        'align', 'horizontalRule', 'list', 'lineHeight',
                        'table', 'link', 'image','video','math',
                        'fullScreen','showBlocks','codeView','preview','print','save',/*'template'*/]
                    ] // You must add the 'katex' library at options to use the 'math' plugin.
                    
                    // Other option
                }} />
            </div>
        );
    }

};
export default SunEditorComponent;