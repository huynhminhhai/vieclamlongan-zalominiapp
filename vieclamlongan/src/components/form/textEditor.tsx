import { Icon } from '@iconify/react'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect, useState } from 'react'
import { Box, Text } from 'zmp-ui'

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className="control-group">
      <div className="button-group">

        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <Icon icon='octicon:bold-16' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <Icon icon='bx:italic' />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <Icon icon='fluent:text-bullet-list-16-filled' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <Icon icon='ant-design:ordered-list-outlined' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          <Icon icon='jam:paragraph' />
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          <Icon icon='material-symbols:undo' />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          <Icon icon='material-symbols:redo' />
        </button>
      </div>
    </div>
  )
}

const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]

interface TextEditorProps {
  label: string;
  type?: "text" | "number" | "password";
  value: string;
  required?: boolean;
  error?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
`

const TextEditor: React.FC<TextEditorProps> = ({
  label,
  type = "text",
  value = '',
  required = false,
  error,
  onChange,
  placeholder,
  disabled = false
}) => {

  const handleEditorUpdate = ({ editor }: { editor: any }) => {
    onChange(editor.getHTML())
  }

  console.log(value)

  return (
    <Box mb={5} className='relative'>
      <Text size="small" className="mb-1">
        {label}: {required && <span className="text-red-600">(*)</span>}
      </Text>
      <Box mb={5} className="relative tiptap-wrap">
        <EditorProvider key={value} onUpdate={handleEditorUpdate} slotBefore={<MenuBar />} extensions={extensions} content={value} >
        </EditorProvider>
      </Box>
      {error && (
        <Text size="xSmall" className="text-red-600 absolute left-0 top-[100%]">
          {error}
        </Text>
      )}
    </Box>
  )
}

export default TextEditor;