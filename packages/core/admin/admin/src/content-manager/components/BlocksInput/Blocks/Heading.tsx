import * as React from 'react';

import { Typography } from '@strapi/design-system';
import {
  HeadingFive,
  HeadingFour,
  HeadingOne,
  HeadingSix,
  HeadingThree,
  HeadingTwo,
} from '@strapi/icons';
import { Editor } from 'slate';
import styled from 'styled-components';

import { type BlocksStore } from '../BlocksEditor';
import { baseHandleConvert } from '../utils/conversions';
import { type Block } from '../utils/types';

const H1 = styled(Typography).attrs({ as: 'h1' })`
  font-size: ${42 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

const H2 = styled(Typography).attrs({ as: 'h2' })`
  font-size: ${35 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

const H3 = styled(Typography).attrs({ as: 'h3' })`
  font-size: ${29 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

const H4 = styled(Typography).attrs({ as: 'h4' })`
  font-size: ${24 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

const H5 = styled(Typography).attrs({ as: 'h5' })`
  font-size: ${20 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

const H6 = styled(Typography).attrs({ as: 'h6' })`
  font-size: 1rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

/**
 * Common handler for converting a node to a heading
 */
const handleConvertToHeading = (editor: Editor, level: Block<'heading'>['level']) => {
  baseHandleConvert<Block<'heading'>>(editor, { type: 'heading', level });
};

const headingBlocks: Pick<
  BlocksStore,
  'heading-one' | 'heading-two' | 'heading-three' | 'heading-four' | 'heading-five' | 'heading-six'
> = {
  'heading-one': {
    renderElement: (props) => <H1 {...props.attributes}>{props.children}</H1>,
    icon: HeadingOne,
    label: {
      id: 'components.Blocks.blocks.heading1',
      defaultMessage: 'Heading 1',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 1),
    matchNode: (node) => node.type === 'heading' && node.level === 1,
    isInBlocksSelector: true,
    snippets: ['#'],
  },
  'heading-two': {
    renderElement: (props) => <H2 {...props.attributes}>{props.children}</H2>,
    icon: HeadingTwo,
    label: {
      id: 'components.Blocks.blocks.heading2',
      defaultMessage: 'Heading 2',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 2),
    matchNode: (node) => node.type === 'heading' && node.level === 2,
    isInBlocksSelector: true,
    snippets: ['##'],
  },
  'heading-three': {
    renderElement: (props) => <H3 {...props.attributes}>{props.children}</H3>,
    icon: HeadingThree,
    label: {
      id: 'components.Blocks.blocks.heading3',
      defaultMessage: 'Heading 3',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 3),
    matchNode: (node) => node.type === 'heading' && node.level === 3,
    isInBlocksSelector: true,
    snippets: ['###'],
  },
  'heading-four': {
    renderElement: (props) => <H4 {...props.attributes}>{props.children}</H4>,
    icon: HeadingFour,
    label: {
      id: 'components.Blocks.blocks.heading4',
      defaultMessage: 'Heading 4',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 4),
    matchNode: (node) => node.type === 'heading' && node.level === 4,
    isInBlocksSelector: true,
    snippets: ['####'],
  },
  'heading-five': {
    renderElement: (props) => <H5 {...props.attributes}>{props.children}</H5>,
    icon: HeadingFive,
    label: {
      id: 'components.Blocks.blocks.heading5',
      defaultMessage: 'Heading 5',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 5),
    matchNode: (node) => node.type === 'heading' && node.level === 5,
    isInBlocksSelector: true,
    snippets: ['#####'],
  },
  'heading-six': {
    renderElement: (props) => <H6 {...props.attributes}>{props.children}</H6>,
    icon: HeadingSix,
    label: {
      id: 'components.Blocks.blocks.heading6',
      defaultMessage: 'Heading 6',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 6),
    matchNode: (node) => node.type === 'heading' && node.level === 6,
    isInBlocksSelector: true,
    snippets: ['######'],
  },
};

export { headingBlocks };
