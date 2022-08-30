/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { DataFilter, DataSchema, GeneralHtmlSupport, HtmlComment } from '@ckeditor/ckeditor5-html-support';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
import { Image, AutoImage, ImageCaption, ImageInsert, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { AutoLink, Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { MediaEmbed, MediaEmbedToolbar } from '@ckeditor/ckeditor5-media-embed';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { StandardEditingMode } from '@ckeditor/ckeditor5-restricted-editing';
import { Table, TableCaption, TableCellProperties, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { EditorWatchdog } from '@ckeditor/ckeditor5-watchdog';

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Bold,
	BlockQuote,
	DataFilter,
	DataSchema,
	Essentials,
	FindAndReplace,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	HorizontalLine,
	HtmlComment,
	HtmlEmbed,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	MediaEmbedToolbar,
	Mention,
	PageBreak,
	Paragraph,
	RemoveFormat,
	SourceEditing,
	StandardEditingMode,
	Strikethrough,
	Table,
	TableCaption,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextPartLanguage,
	TextTransformation,
	TodoList,
	Underline,
	EditorWatchdog
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'strikethrough',
			'link',
			'bulletedList',
			'numberedList',
			'fontFamily',
			'fontColor',
			'fontSize',
			'underline',
			'blockQuote',
			'removeFormat',
			'|',
			'alignment',
			'outdent',
			'indent',
			'|',
			'imageInsert',
			'mediaEmbed',
			'insertTable',
			'|',
			'htmlEmbed',
			'sourceEditing',
			'pageBreak',
			'horizontalLine',
			'|',
			'findAndReplace',
			'undo',
			'redo'
		]
	},
	language: 'en',
	image: {
		toolbar: [
			'imageTextAlternative',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'linkImage'
		]
	},
	mediaEmbed: {
		toolbar: [
			'mediaEmbed',
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	}
};
