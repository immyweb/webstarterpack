import $ from 'jquery';
import GlobalHeader from './globalHeader';

module.exports = {

    init: function(){

        let $globalHeader = $('[data-global-header]');
        let globalHeader;

        if ( $globalHeader && $globalHeader.length ) {

            $globalHeader.each(function(index, element){
                globalHeader = new GlobalHeader();
    			globalHeader.init( $globalHeader );
            });
        }
    }
};
