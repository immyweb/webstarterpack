import $ from 'jquery';
import GlobalFooter from './globalFooter';

export default {

    init: () => {

        let $globalFooter = $('[data-global-footer]');
        let globalFooter;

        if ( $globalFooter && $globalFooter.length ) {

            $globalFooter.each((index, element) => {
                globalFooter = new GlobalFooter();
    			      globalFooter.init( $globalFooter );
            });
        }
    }
};
