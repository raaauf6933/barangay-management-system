import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const RichTextEditor = (props) => {
  const { onEditorChange } = props;
  //   const editorRef = useRef(null);
  //   const log = () => {
  //     if (editorRef.current) {
  //       console.log(editorRef.current.getContent());
  //     }
  //   };

  return (
    <>
      {" "}
      <Editor
        apiKey="3vv3gewkg1fbzgbgl1bo7re25283ovdcbcqwnkysn1ouhoxs"
        initialValue="<h2>This is the initial content of the editor.</h2>"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "table",
            "preview",
            "link",
            "lists",
          ],
          //   toolbar:
          //     "undo redo | formatselect | " +
          //     "bold italic backcolor | alignleft aligncenter " +
          //     "alignright alignjustify | bullist numlist outdent indent | " +
          //     "removeformat | help |" ,
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={(content) => onEditorChange(content)}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
};

export default RichTextEditor;
