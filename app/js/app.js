import $ from 'jquery';
import globalHeader from './components/global-header/index';

// run scripts on DOM ready
$(document).ready(() => {
    globalHeader.init();
});
