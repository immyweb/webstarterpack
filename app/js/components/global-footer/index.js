import $ from 'jquery';
import GlobalFooter from './globalFooter';

module.exports = {

    init: function(){

        let $globalFooter = $('[data-global-footer]');
        let globalFooter;

        if ( $globalFooter && $globalFooter.length ) {

            $globalFooter.each(function(index, element){
                globalFooter = new GlobalFooter();
    			globalFooter.init( $globalFooter );
            });
        }
    }
};
