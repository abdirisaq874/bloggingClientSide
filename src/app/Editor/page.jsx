'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {
  GenerateDescriptions,
  GenerateKeywords,
  GenerateTags,
  GenerateMinutesToRead,
} from './Components/generators';
import NewPostForm from './Components/NewPostForm';

const EditorComponent = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <Editor
        apiKey="ekjmrwr30lhk4qlqgurpv6fi6d06wakzn4gq534g0r5f3z8s"
        value={value}
        onEditorChange={(newValue, editor) => {
          setValue(newValue);
        }}
        initialValue=""
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat ',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <div className="flex flex-col gap-3 mt-6 container mx-auto">
        <GenerateDescriptions content={value} />
        <GenerateKeywords content={value} />
        <GenerateTags content={value} />
        <GenerateMinutesToRead content={value} />
      </div>
      <NewPostForm contents={value} />
    </>
  );
};

export default EditorComponent;
