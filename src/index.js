import grapesjs from 'grapesjs';
import pluginBlocks from 'grapesjs-blocks-basic';
import pluginNavbar from 'grapesjs-navbar';
import pluginCountdown from 'grapesjs-component-countdown';
import pluginForms from 'grapesjs-plugin-forms';
import pluginExport from 'grapesjs-plugin-export';
import pluginAviary from 'grapesjs-aviary';
import pluginFilestack from 'grapesjs-plugin-filestack';
import pluginCustomCode from 'grapesjs-custom-code';
import pluginBootstrap4 from 'grapesjs-blocks-bootstrap4';
import pluginFlexbox from 'grapesjs-blocks-flexbox';
import pluginSocial from 'grapesjs-plugin-social';
import pluginIFrame from 'grapesjs-plugin-iframe';

import commands from './commands';
import blocks from './blocks';
import components from './components';
import panels from './panels';
import styles from './styles';

export default grapesjs.plugins.add('gjs-preset-webpage', (editor, opts = {}) => {
  
  let config = opts;

  let defaults = {
    // Which blocks to add
    blocks: ['link-block', 'quote', 'text-basic','grapesjs-custom-code','grapesjs-blocks-bootstrap4','gjs-social','gjs-iframe'],

    // Modal import title
    modalImportTitle: 'Import',

    // Modal import button text
    modalImportButton: 'Import',

    // Import description inside import modal
    modalImportLabel: '',

    // Default content to setup on import model open.
    // Could also be a function with a dynamic content return (must be a string)
    // eg. modalImportContent: editor => editor.getHtml(),
    modalImportContent: '',

    // Code viewer (eg. CodeMirror) options
    importViewerOptions: {},

    // Confirm text before cleaning the canvas
    textCleanCanvas: 'Are you sure to clean the canvas?',

    // Show the Style Manager on component change
    showStylesOnChange: 1,

    // Text for General sector in Style Manager
    textGeneral: 'General',

    // Text for Layout sector in Style Manager
    textLayout: 'Layout',

    // Text for Typography sector in Style Manager
    textTypography: 'Typography',

    // Text for Decorations sector in Style Manager
    textDecorations: 'Decorations',

    // Text for Extra sector in Style Manager
    textExtra: 'Extra',

    // Use custom set of sectors for the Style Manager
    customStyleManager: [],

    // `grapesjs-blocks-basic` plugin options
    // By setting this option to `false` will avoid loading the plugin
    blocksBasicOpts: {},

    // `grapesjs-navbar` plugin options
    // By setting this option to `false` will avoid loading the plugin
    navbarOpts: {},

    // `grapesjs-component-countdown` plugin options
    // By setting this option to `false` will avoid loading the plugin
    countdownOpts: {},

    // `grapesjs-plugin-forms` plugin options
    // By setting this option to `false` will avoid loading the plugin
    formsOpts: {},

    // `grapesjs-plugin-export` plugin options
    // By setting this option to `false` will avoid loading the plugin
    exportOpts: {},

    // `grapesjs-aviary` plugin options, disabled by default
    // Aviary library should be included manually
    // By setting this option to `false` will avoid loading the plugin
    aviaryOpts: 0,

    // `grapesjs-plugin-filestack` plugin options, disabled by default
    // Filestack library should be included manually
    // By setting this option to `false` will avoid loading the plugin
    filestackOpts: 0,

    // grapesjs-custom-code plugin options
    customCodeOpts: {},

    // grapejs-blocks-bootstrap4 opts

    bootStrap4Opts: {
      blocks: {
      },
      blockCategories: {
      },
      labels: {
      }
    },
    // grapesjs-blocks-flexbox ops
    flexBoxOpts: {},

    // grapesjs-plugin-social

    socialOpts: {},

    //grapesjs-plugin-iframe

    iFrameOpts:{}


  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in config))
      config[name] = defaults[name];
  }

  const {
    blocksBasicOpts,
    navbarOpts,
    countdownOpts,
    formsOpts,
    exportOpts,
    aviaryOpts,
    filestackOpts,
    customCodeOpts,
    bootStrap4Opts,
    flexBoxOpts,
    socialOpts,
    iFrameOpts
  } = config;

  // Load plugins
  blocksBasicOpts && pluginBlocks(editor, blocksBasicOpts);
  navbarOpts && pluginNavbar(editor, navbarOpts);
  countdownOpts && pluginCountdown(editor, countdownOpts);
  formsOpts && pluginForms(editor, formsOpts);
  exportOpts && pluginExport(editor, exportOpts);
  aviaryOpts && pluginAviary(editor, aviaryOpts);
  filestackOpts && pluginFilestack(editor, filestackOpts);
  customCodeOpts && pluginCustomCode(editor, customCodeOpts);
  bootStrap4Opts && pluginBootstrap4(editor, bootStrap4Opts);
  flexBoxOpts && pluginFlexbox(editor,flexBoxOpts);
  socialOpts && pluginSocial(editor,socialOpts)
  iFrameOpts && pluginIFrame(editor,iFrameOpts)

  // Load components
  components(editor, config);

  // Load blocks
  blocks(editor, config);

  // Load commands
  commands(editor, config);

  // Load panels
  panels(editor, config);

  // Load styles
  styles(editor, config);

 
});
