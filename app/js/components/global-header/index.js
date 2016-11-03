import $ from 'jquery';
import GlobalHeader from './globalHeader';

export default {

    init: () => {

        let $globalHeader = $('[data-global-header]');
        let globalHeader;

        if ( $globalHeader && $globalHeader.length ) {

            $globalHeader.each((index, element) => {
                globalHeader = new GlobalHeader();
    			      globalHeader.init( $globalHeader );
            });
        }
    }
};
