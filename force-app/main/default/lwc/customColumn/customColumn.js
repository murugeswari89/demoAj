import { LightningElement } from 'lwc';
 import lightningDataTable from 'lightning/datatable'
 import progressRing from './progressRing.html'
 import custompicklist from './custompicklist.html'
export default class CustomColumn extends lightningDataTable {

    // static customTypes={
    //     progRing:{
    //         template: progressRing
    //     }
    // }

    static customTypes={
        Ratingpicklist:{
            template: custompicklist,
            standardCellLayout:true,
            typeAttributes:['label','value','placeholder','options']
            
        }
    }

    

}